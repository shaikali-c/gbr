/**
 * Contact form validation — shared by the client form (instant feedback)
 * and the API route (authoritative server-side check). One rules module,
 * applied twice, so the two sides can never drift.
 */

export type ContactFormValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  enquiryType: string;
  message: string;
  /** Honeypot — must stay empty. Hidden from real users via CSS. */
  website: string;
  /** Timestamp (ms) the form was rendered; used for timing-based spam checks. */
  startedAt: string;
};

export type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const limits = {
  name: 120,
  company: 200,
  phone: 40,
  email: 254,
  message: 4000,
} as const;

/** Minimum plausible time a human needs to reach the submit button. */
export const MIN_FILL_MS = 3000;

export function validateContactForm(
  values: ContactFormValues,
  validTypes: readonly string[],
): ContactErrors {
  const errors: ContactErrors = {};

  const name = values.name.trim();
  if (!name) errors.name = "Please enter your name.";
  else if (name.length > limits.name)
    errors.name = `Please keep your name under ${limits.name} characters.`;

  if (values.company.trim().length > limits.company)
    errors.company = `Please keep this under ${limits.company} characters.`;

  const phone = values.phone.trim();
  if (!phone) {
    errors.phone = "Please enter a phone number so we can reach you.";
  } else if (phone.replace(/\D/g, "").length < 7 || phone.length > limits.phone) {
    errors.phone = "Please enter a valid phone number.";
  }

  const email = values.email.trim();
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email) || email.length > limits.email)
    errors.email = "Please enter a valid email address.";

  if (!values.enquiryType) {
    errors.enquiryType = "Please choose what your enquiry is about.";
  } else if (!validTypes.includes(values.enquiryType)) {
    errors.enquiryType = "Please choose one of the listed enquiry types.";
  }

  const message = values.message.trim();
  if (!message) errors.message = "Please tell us how we can help.";
  else if (message.length < 10)
    errors.message = "Please add a little more detail so we can help properly.";
  else if (message.length > limits.message)
    errors.message = `Please keep your message under ${limits.message} characters.`;

  return errors;
}

/** Honeypot filled or submitted implausibly fast → treat as spam. */
export function looksSpammy(values: ContactFormValues): boolean {
  if (values.website.trim() !== "") return true;

  const started = Number(values.startedAt);
  if (!Number.isFinite(started) || started <= 0) return true;
  return Date.now() - started < MIN_FILL_MS;
}
