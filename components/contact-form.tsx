"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { enquiryTypes } from "@/content/site";
import {
  limits,
  validateContactForm,
  type ContactErrors,
  type ContactFormValues,
} from "@/lib/validation";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  /** Delivered through a configured email provider. */
  | { kind: "sent" }
  /**
   * Development fallback: no email provider is configured, so the message
   * was logged server-side only. The UI says exactly that — it never
   * pretends the message was delivered.
   */
  | { kind: "logged-dev" }
  | { kind: "error"; message: string; fieldErrors?: ContactErrors };

const fieldClass =
  "w-full border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none";

const labelClass = "block text-sm font-semibold text-ink";

const errorClass = "mt-1.5 text-sm text-terracotta";

/** Module scope on purpose: keeps the call outside React's purity rules. */
function nowMs(): number {
  return Date.now();
}

export function ContactForm({ initialType }: { initialType?: string }) {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    company: "",
    phone: "",
    email: "",
    enquiryType: initialType ?? "",
    message: "",
    website: "",
    startedAt: "",
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const startedRef = useRef<number>(0);

  // Stamp when the form was actually rendered (timing-based spam check).
  // Mutating a ref in an effect is the sanctioned way to track external time.
  useEffect(() => {
    startedRef.current = nowMs();
  }, []);

  // The enquiry type arrives via the `?type=` URL parameter resolved on the
  // server, so it is available at first render — no effect needed.
  function update<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "submitting") return;

    // Timing-based spam check: stamp when the form was first rendered.
    if (!startedRef.current) startedRef.current = nowMs();

    const payload: ContactFormValues = {
      ...values,
      startedAt: String(startedRef.current),
    };

    // Fast local feedback; the server validates again regardless.
    const localErrors = validateContactForm(payload, enquiryTypes.map((t) => t.value));
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      setStatus({ kind: "idle" });
      focusFirstError(localErrors);
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; devLog?: boolean; errors?: ContactErrors; error?: string }
        | null;

      if (!response.ok || !data?.ok) {
        setStatus({
          kind: "error",
          message:
            data?.error ??
            "Something went wrong while sending your message. Please try again or email us directly.",
          fieldErrors: data?.errors,
        });
        if (data?.errors) focusFirstError(data.errors);
        return;
      }

      setStatus({ kind: data.devLog ? "logged-dev" : "sent" });
      setValues((v) => ({
        ...v,
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
        website: "",
      }));
      setErrors({});
    } catch {
      setStatus({
        kind: "error",
        message:
          "We could not reach the server. Please check your connection and try again, or email us directly.",
      });
    }
  }

  function focusFirstError(fieldErrors: ContactErrors) {
    const order = ["name", "company", "phone", "email", "enquiryType", "message"] as const;
    for (const key of order) {
      if (fieldErrors[key]) {
        document.getElementById(`contact-${key}`)?.focus();
        break;
      }
    }
  }

  const busy = status.kind === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-describedby="contact-form-status"
      className="space-y-6"
    >
      {/* Honeypot: hidden from people, tempting for bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name <span aria-hidden="true" className="text-terracotta">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={limits.name}
            className={`mt-2 ${fieldClass} ${errors.name ? "border-terracotta" : ""}`}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name ? (
            <p id="contact-name-error" className={errorClass}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Company / Organisation
            <span className="ml-1.5 font-normal text-muted">(where applicable)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={limits.company}
            className={`mt-2 ${fieldClass} ${errors.company ? "border-terracotta" : ""}`}
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
          />
          {errors.company ? (
            <p id="contact-company-error" className={errorClass}>
              {errors.company}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone <span aria-hidden="true" className="text-terracotta">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            maxLength={limits.phone}
            className={`mt-2 ${fieldClass} ${errors.phone ? "border-terracotta" : ""}`}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="contact-phone-error" className={errorClass}>
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email <span aria-hidden="true" className="text-terracotta">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={limits.email}
            className={`mt-2 ${fieldClass} ${errors.email ? "border-terracotta" : ""}`}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email ? (
            <p id="contact-email-error" className={errorClass}>
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact-enquiryType" className={labelClass}>
          Enquiry type{" "}
          <span aria-hidden="true" className="text-terracotta">*</span>
        </label>
        <select
          id="contact-enquiryType"
          name="enquiryType"
          required
          className={`mt-2 ${fieldClass} ${
            errors.enquiryType ? "border-terracotta" : ""
          } ${values.enquiryType ? "" : "text-muted/80"}`}
          value={values.enquiryType}
          onChange={(e) => update("enquiryType", e.target.value)}
          aria-invalid={Boolean(errors.enquiryType)}
          aria-describedby={
            errors.enquiryType ? "contact-enquiryType-error" : undefined
          }
        >
          <option value="">Choose an enquiry type…</option>
          {enquiryTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.enquiryType ? (
          <p id="contact-enquiryType-error" className={errorClass}>
            {errors.enquiryType}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message <span aria-hidden="true" className="text-terracotta">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          maxLength={limits.message}
          className={`mt-2 ${fieldClass} ${errors.message ? "border-terracotta" : ""}`}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message ? (
          <p id="contact-message-error" className={errorClass}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button type="submit" disabled={busy} className="btn btn-primary">
          {busy ? (
            <>
              <Loader2 aria-hidden="true" size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </button>
        <p className="text-xs text-muted">
          <span aria-hidden="true" className="text-terracotta">*</span> Required
          fields
        </p>
      </div>

      {/* Status region: announced politely to screen readers. */}
      <div id="contact-form-status" role="status" aria-live="polite">
        {status.kind === "sent" ? (
          <p className="border-l-2 border-brand bg-surface px-5 py-4 text-sm leading-relaxed text-ink">
            Thank you - your message has been sent to our team. We will get
            back to you soon.
          </p>
        ) : null}

        {status.kind === "logged-dev" ? (
          <p className="border-l-2 border-accent bg-surface px-5 py-4 text-sm leading-relaxed text-ink">
            This environment does not have email delivery configured, so your
            message was <strong>saved to the development log only</strong> - it
            was not emailed. For anything important, please also write to{" "}
            <a
              href="mailto:info@gundubaburuchulu.com"
              className="font-semibold underline underline-offset-4"
            >
              info@gundubaburuchulu.com
            </a>
            .
          </p>
        ) : null}

        {status.kind === "error" ? (
          <p className="border-l-2 border-terracotta bg-surface px-5 py-4 text-sm leading-relaxed text-ink">
            {status.message} You can also reach us directly at{" "}
            <a
              href="mailto:info@gundubaburuchulu.com"
              className="font-semibold underline underline-offset-4"
            >
              info@gundubaburuchulu.com
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
