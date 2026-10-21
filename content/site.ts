/**
 * Site-wide facts: identity, navigation and contact details.
 *
 * These values are the single source of truth used by the header, footer,
 * contact page and structured data. Anything here can be swapped for a CMS
 * or environment-driven value later without touching a component.
 */

export const site = {
  name: "Gundu Babu Ruchulu",
  shortName: "GBR",
  tagline: "Food. Hospitality. Experiences.",
  domain: "https://gundubaburuchulu.com",
  location: "Hyderabad, Telangana, India",
  emails: {
    general: "info@gundubaburuchulu.com",
    director: "director@gundubaburuchulu.com",
    office: "office@gundubaburuchulu.com",
  },
  phones: [
    { label: "Primary", display: "+91 72076 78950", href: "tel:+917207678950" },
    {
      label: "Alternate",
      display: "+91 72076 78951",
      href: "tel:+917207678951",
    },
  ],
  socials: {
    instagram: {
      handle: "@gundubaburuchulu",
      url: "https://instagram.com/gundubaburuchulu",
    },
  },
  sol: {
    name: "SOL Café",
    relation: "SOL Café is a venture of Gundu Babu Ruchulu.",
    location: "Prestige Tranquil, Kokapet, Hyderabad",
    socials: {
      instagram: {
        handle: "@solcafe.in",
        url: "https://instagram.com/solcafe.in",
      },
    },
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const nav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About GBR", href: "/about" },
  { label: "Corporate Meals", href: "/corporate-meals" },
  { label: "Cloud Kitchen", href: "/cloud-kitchen" },
  { label: "SOL Café", href: "/sol-cafe" },
  { label: "Contact", href: "/contact" },
];

export type EnquiryType = {
  /** Value used in the `?type=` URL parameter and the form payload. */
  value: string;
  label: string;
};

export const enquiryTypes: readonly EnquiryType[] = [
  { value: "corporate-meals", label: "Corporate Meals" },
  { value: "cloud-kitchen", label: "Cloud Kitchen" },
  { value: "sol-cafe", label: "SOL Café" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

export function isEnquiryType(value: string | null | undefined): value is string {
  return Boolean(value) && enquiryTypes.some((t) => t.value === value);
}
