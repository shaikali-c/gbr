import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PromoSlot } from "@/components/ui";
import { homeBusinessAreas } from "@/content/gbr";
import { activePromo } from "@/content/promos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: "Gundu Babu Ruchulu | Food & Beverage Company in Hyderabad",
    template: "%s | Gundu Babu Ruchulu",
  },
  description:
    "Gundu Babu Ruchulu is a Hyderabad food and beverage company offering corporate meals, cloud kitchens and SOL Café — food experiences designed around people, quality and convenience.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gundu Babu Ruchulu | Food & Beverage Company in Hyderabad",
    description:
      "Corporate meals, cloud kitchens, cafés and food experiences designed around people, quality and convenience.",
    url: "/",
    images: [{ url: "/images/gbr/thali.jpg" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: site.domain,
  email: site.email,
  telephone: site.phones[0].href.replace("tel:", ""),
  sameAs: [site.socials.instagram.url, site.sol.socials.instagram.url],
  slogan: site.tagline,
  areaServed: {
    "@type": "Place",
    name: "Hyderabad, Telangana, India",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <SiteHeader />
      <PromoSlot banner={activePromo("home")} />

      <main className="flex-1">
        {/* Hero: editorial split — statement on cream, photography opposite */}
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
            <div className="flex flex-col justify-center px-4 py-14 sm:px-6 md:py-20 lg:col-span-6 lg:py-24 lg:pl-8 lg:pr-12">
              <p className="eyebrow rise">Food &amp; Beverage · Hyderabad</p>
              <h1
                className="rise mt-5 font-display text-[2.6rem] leading-[1.04] tracking-tight sm:text-6xl xl:text-7xl"
                style={{ animationDelay: "60ms" }}
              >
                One Company.
                <br />
                Many Ways to
                <br />
                Experience Food.
              </h1>
              <p
                className="rise mt-7 max-w-[46ch] text-base leading-relaxed text-muted md:text-lg"
                style={{ animationDelay: "140ms" }}
              >
                Corporate meals, cloud kitchens, cafés and food experiences
                designed around people, quality and convenience.
              </p>
              <div
                className="rise mt-9 flex flex-wrap gap-3"
                style={{ animationDelay: "220ms" }}
              >
                <a href="#businesses" className="btn btn-primary">
                  Explore Our Businesses
                </a>
                <Link href="/contact" className="btn btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px] lg:col-span-6 lg:min-h-[600px]">
              <Image
                src="/images/gbr/thali.jpg"
                alt="A South Indian thali of rice, sambar and side dishes served on a banana leaf"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="zoomin object-cover"
              />
            </div>
          </div>
        </section>

        {/* Business areas */}
        <section
          id="businesses"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Our businesses</p>
              <h2 className="mt-4 max-w-[16ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Food, in more than one form
              </h2>
            </div>
            <p className="italic-accent max-w-[34ch] text-xl text-muted md:text-right md:text-2xl">
              Three ways we serve people — one standard of care.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
            {homeBusinessAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 80}>
                <article className="group flex h-full flex-col bg-canvas">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="font-display text-2xl tracking-tight">
                      {area.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
                      {area.description}
                    </p>
                    <Link
                      href={area.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
                      aria-label={`Learn more about ${area.title}`}
                    >
                      Learn more
                      <ArrowRight aria-hidden="true" size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted">
            SOL Café is a distinct café experience operated by {site.name}.
          </p>
        </section>

        {/* Brand philosophy */}
        <section className="bg-brand text-on-brand">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16 md:py-28 lg:px-8">
            <Reveal>
              <p className="eyebrow text-accent">Our philosophy</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                Beyond the Plate.
              </h2>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-on-brand/85 md:text-lg">
                Because food is never just what is on the plate. It is the
                thought, care, hospitality and experience that surrounds it.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
              >
                About {site.shortName}
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/gbr/cooking-together.jpg"
                  alt="People preparing food together around a kitchen counter"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
            <Reveal>
              <h2 className="mx-auto max-w-[20ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Let us create something worth sharing.
              </h2>
              <p className="mx-auto mt-6 max-w-[58ch] text-base leading-relaxed text-muted md:text-lg">
                Whether you are looking for corporate meals, food services,
                delivery solutions or a new café experience, we would love to
                hear from you.
              </p>
              <div className="mt-9">
                <Link href="/contact" className="btn btn-primary">
                  Start a Conversation
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
