import { NextResponse } from "next/server";
import { enquiryTypes, site } from "@/content/site";
import {
  looksSpammy,
  validateContactForm,
  type ContactErrors,
  type ContactFormValues,
} from "@/lib/validation";

/**
 * Contact form endpoint.
 *
 * Delivery behaviour (documented in README.md):
 * - If RESEND_API_KEY and CONTACT_TO_EMAIL are set, the message is sent via
 *   the Resend HTTP API (no SDK dependency, key stays server-side).
 * - In development without configuration, the message is logged to the
 *   server console and the response says `devLog: true` so the UI can tell
 *   the user honestly that nothing was emailed.
 * - In production without configuration, the request fails with a clear
 *   503 - the UI shows a failure state and a direct email link. There is
 *   never a false "sent" message.
 *
 * Spam protection: honeypot field, minimum fill-time check, and a small
 * per-IP rate limit kept in memory (per-instance; swap for a shared store
 * such as Upstash when running multiple instances).
 */

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    requestLog.set(key, recent);
    return true;
  }
  recent.push(now);
  requestLog.set(key, recent);
  return false;
}

function clean(raw: unknown): string {
  if (typeof raw !== "string") return "";
  return raw.trim().slice(0, 5000);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Too many messages from this connection. Please wait a few minutes and try again.",
      },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const raw = (body ?? {}) as Record<string, unknown>;
  const values: ContactFormValues = {
    name: clean(raw.name),
    company: clean(raw.company),
    phone: clean(raw.phone),
    email: clean(raw.email),
    enquiryType: clean(raw.enquiryType),
    message: clean(raw.message),
    website: clean(raw.website),
    startedAt: clean(raw.startedAt),
  };

  // Bots that fill the honeypot or submit instantly get a plausible success
  // and are discarded — no email is sent and no error tips them off.
  if (looksSpammy(values)) {
    return NextResponse.json({ ok: true });
  }

  const errors: ContactErrors = validateContactForm(
    values,
    enquiryTypes.map((t) => t.value),
  );
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, errors, error: "Please correct the highlighted fields." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? site.emails.general;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (apiKey) {
    const typeLabel =
      enquiryTypes.find((t) => t.value === values.enquiryType)?.label ??
      values.enquiryType;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: values.email,
        subject: `[${site.shortName} website] ${typeLabel} enquiry from ${values.name}`,
        text: [
          `Name: ${values.name}`,
          `Company / Organisation: ${values.company || "-"}`,
          `Phone: ${values.phone}`,
          `Email: ${values.email}`,
          `Enquiry type: ${typeLabel}`,
          "",
          values.message,
        ].join("\n"),
      }),
    }).catch(() => null);

    if (!emailResponse?.ok) {
      console.error("[contact] Resend delivery failed", emailResponse?.status);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not deliver your message right now. Please try again shortly or email us directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  // Development fallback: log honestly, never fake delivery.
  console.info(
    [
      "─────────────────────────────────────────────",
      " CONTACT FORM MESSAGE (development log only)",
      " Email delivery is NOT configured — set",
      " RESEND_API_KEY and CONTACT_TO_EMAIL to send.",
      "─────────────────────────────────────────────",
      ` Name:    ${values.name}`,
      ` Company: ${values.company || "-"}`,
      ` Phone:   ${values.phone}`,
      ` Email:   ${values.email}`,
      ` Type:    ${values.enquiryType}`,
      "",
      values.message,
      "─────────────────────────────────────────────",
    ].join("\n"),
  );

  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      {
        ok: false,
        error:
          "The contact form is not connected to email delivery on this deployment.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, devLog: true });
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
