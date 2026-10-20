import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PromoSlot } from "@/components/ui";
import { cloudKitchenExpectations } from "@/content/gbr";
import { activePromo } from "@/content/promos";

export const metadata: Metadata = {
  title: {
    absolute: "Cloud Kitchen | Gundu Babu Ruchulu",
  },
  description:
    "Freshly prepared food for delivery and pre-order from Gundu Babu Ruchulu's cloud kitchen in Hyderabad — regional delicacies, Indo-Chinese selections and limited specials.",
  alternates: { canonical: "/cloud-kitchen" },
  openGraph: {
    title: "Cloud Kitchen | Gundu Babu Ruchulu",
    description:
      "Freshly prepared food for delivery and pre-order, with selected regional and speciality offerings.",
    url: "/cloud-kitchen",
    images: [{ url: "/images/gbr/biryani.jpg" }],
  },
};

// No live ordering platform has been supplied or verified, so the CTA
// leads to the contact/enquiry flow rather than a fabricated ordering page.
const contactHref = "/contact?type=cloud-kitchen";

export default function CloudKitchenPage() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <SiteHeader />
      <PromoSlot banner={activePromo("cloud")} />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
            <div className="flex flex-col justify-center px-4 py-14 sm:px-6 md:py-20 lg:col-span-6 lg:py-24 lg:pl-8 lg:pr-12">
              <p className="eyebrow rise">Delivery &amp; pre-order</p>
              <h1
                className="rise mt-5 font-display text-[2.5rem] leading-[1.05] tracking-tight sm:text-6xl"
                style={{ animationDelay: "60ms" }}
              >
                Fresh Food,
                <br />
                Made for Delivery.
              </h1>
              <p
                className="rise mt-7 max-w-[48ch] text-lg leading-relaxed text-muted md:text-xl"
                style={{ animationDelay: "140ms" }}
              >
                Freshly prepared food for delivery and pre-order, with selected
                regional and speciality offerings.
              </p>
              <div
                className="rise mt-9 flex flex-wrap gap-3"
                style={{ animationDelay: "220ms" }}
              >
                <Link href={contactHref} className="btn btn-primary">
                  Explore the Cloud Kitchen
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px] lg:col-span-6 lg:min-h-[580px]">
              <Image
                src="/images/gbr/biryani.jpg"
                alt="A copper pot of biryani garnished with fried onions and herbs"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="zoomin object-cover"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <h2 className="max-w-[14ch] font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                The kitchen behind the counter
              </h2>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/gbr/kitchen.jpg"
                  alt="A cook preparing food at the pass in a professional kitchen"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <Reveal className="md:col-span-7">
              <p className="max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
                Our cloud kitchen brings freshly prepared food to customers
                beyond the café, with a focus on convenient ordering, pre-orders
                and curated menus.
              </p>
              <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
                Offerings can include regional delicacies, Indo-Chinese
                favourites, everyday meals and limited weekend or festival
                specials.
              </p>
            </Reveal>
          </div>
        </section>

        {/* What to expect */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <p className="eyebrow">What to expect</p>
            <h2 className="mt-4 max-w-[20ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              Prepared fresh, packed for the journey
            </h2>

            <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {cloudKitchenExpectations.map((item, index) => (
                <Reveal key={item.title} delay={index * 60}>
                  <article className="flex h-full flex-col bg-surface">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <h3 className="font-display text-xl tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}

              {/* Enquiry card keeps the grid balanced and gives the section
                  a clear action without inventing an ordering platform. */}
              <Reveal delay={cloudKitchenExpectations.length * 60}>
                <div className="flex h-full flex-col justify-between bg-brand p-6 text-on-brand md:p-7">
                  <div>
                    <h3 className="font-display text-xl tracking-tight">
                      Looking to order?
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-on-brand/85">
                      Delivery availability, pre-orders and current offerings
                      are shared on request.
                    </p>
                  </div>
                  <Link
                    href={contactHref}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
                  >
                    Send an enquiry
                    <ArrowRight aria-hidden="true" size={15} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
