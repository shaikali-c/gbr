import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { isEnquiryType, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Gundu Babu Ruchulu about corporate meals, cloud kitchen orders, partnerships or SOL Café. Reach us at info@gundubaburuchulu.com, Hyderabad.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Gundu Babu Ruchulu",
    description:
      "Corporate meal requirement, food-service enquiry, partnership opportunity or a question about SOL - get in touch.",
    url: "/contact",
  },
};

const contactRows = [
  {
    label: "General enquiries",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  ...site.phones.map((phone) => ({
    label: `Phone — ${phone.label.toLowerCase()}`,
    value: phone.display,
    href: phone.href,
    icon: Phone,
  })),
  {
    label: "Instagram — GBR",
    value: site.socials.instagram.handle,
    href: site.socials.instagram.url,
    icon: InstagramIcon,
  },
  {
    label: "Instagram — SOL Café",
    value: site.sol.socials.instagram.handle,
    href: site.sol.socials.instagram.url,
    icon: InstagramIcon,
  },
  {
    label: "Location",
    value: site.location,
    icon: MapPin,
  },
];

export default async function ContactPage({
  searchParams,
}: PageProps<"/contact">) {
  const params = await searchParams;
  const requestedType = typeof params?.type === "string" ? params.type : null;
  const initialType = isEnquiryType(requestedType) ? requestedType : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <p className="eyebrow rise">Contact</p>
            <h1
              className="rise mt-5 font-display text-[2.6rem] leading-[1.04] tracking-tight sm:text-6xl"
              style={{ animationDelay: "60ms" }}
            >
              Let us talk food.
            </h1>
            <p
              className="rise mt-6 max-w-[54ch] text-lg leading-relaxed text-muted md:text-xl"
              style={{ animationDelay: "140ms" }}
            >
              Have a corporate meal requirement, food-service enquiry,
              partnership opportunity or a question about SOL? Get in touch.
            </p>
          </div>
        </section>

        {/* Details + form */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-5">
              <h2 className="max-w-[12ch] font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Reach us directly
              </h2>

              <dl className="mt-10 grid gap-6">
                {contactRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.label} className="border-t border-line pt-5">
                      <dt className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                        <Icon aria-hidden="true" size={14} />
                        {row.label}
                      </dt>
                      <dd className="mt-2">
                        {row.href ? (
                          <a
                            href={row.href}
                            target={
                              row.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              row.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="font-display text-lg tracking-tight underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                          >
                            {row.value}
                          </a>
                        ) : (
                          <p className="font-display text-lg tracking-tight">
                            {row.value}
                          </p>
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>

              <p className="mt-10 max-w-[46ch] text-sm leading-relaxed text-muted">
                We typically respond to enquiries about corporate meals, cloud
                kitchen orders, partnerships and SOL Café through email.
              </p>
            </Reveal>

            <Reveal delay={100} className="md:col-span-6 md:col-start-7">
              <h2 className="max-w-[16ch] font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Send us a message
              </h2>
              <div className="mt-10">
                <Suspense fallback={null}>
                  <ContactForm initialType={initialType} />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
