import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { aboutOfferings } from "@/content/gbr";

export const metadata: Metadata = {
  title: "About GBR",
  description:
    "Gundu Babu Ruchulu is a Food & Beverage company building thoughtful food experiences across corporate meals, food services, cloud kitchens and cafés.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Gundu Babu Ruchulu",
    description:
      "A Hyderabad food & beverage company creating dependable, welcoming food experiences across formats.",
    url: "/about",
    images: [{ url: "/images/gbr/kitchen.jpg" }],
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
            <div className="flex flex-col justify-center px-4 py-14 sm:px-6 md:py-20 lg:col-span-7 lg:py-24 lg:pl-8 lg:pr-12">
              <p className="eyebrow rise">About GBR</p>
              <h1
                className="rise mt-5 font-display text-[2.6rem] leading-[1.04] tracking-tight sm:text-6xl"
                style={{ animationDelay: "60ms" }}
              >
                Beyond the Plate.
              </h1>
              <p
                className="rise mt-7 max-w-[52ch] text-lg leading-relaxed text-muted md:text-xl"
                style={{ animationDelay: "140ms" }}
              >
                At Gundu Babu Ruchulu, we believe food is about more than a
                meal. It is about thought, care, hospitality and the moments
                created around it.
              </p>
            </div>

            <div className="relative min-h-[300px] lg:col-span-5 lg:min-h-[560px]">
              <Image
                src="/images/gbr/kitchen.jpg"
                alt="A cook working at the pass in a professional kitchen"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="zoomin object-cover"
              />
            </div>
          </div>
        </section>

        {/* About copy */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="max-w-[12ch] font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Who we are
              </h2>
            </div>
            <Reveal className="md:col-span-8">
              <p className="max-w-[62ch] text-base leading-relaxed text-muted md:text-lg">
                Gundu Babu Ruchulu is a Food &amp; Beverage company focused on
                building thoughtful food experiences across different formats -
                from corporate meals and food services to cloud kitchens and
                cafés.
              </p>
              <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted md:text-lg">
                Our approach is simple: understand the people we serve, create
                food with purpose, and deliver experiences that feel
                dependable, welcoming and worth remembering.
              </p>
              <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted md:text-lg">
                From everyday meals to larger food requirements, we bring
                together food, hospitality and practical execution to create
                experiences that work for the people on the other side of the
                table.
              </p>
            </Reveal>
          </div>
        </section>

        {/* What we do */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 max-w-[18ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              Four ways we bring food to people
            </h2>

            <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {aboutOfferings.map((offering, index) => (
                <Reveal key={offering.title} delay={index * 70}>
                  <article className="flex h-full flex-col bg-surface">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={offering.image}
                        alt={offering.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl tracking-tight">
                        {offering.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {offering.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Brand philosophy */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <Reveal>
            <p className="italic-accent mx-auto max-w-[24ch] text-center text-4xl leading-[1.15] tracking-tight text-brand sm:text-5xl md:text-6xl">
              Thought in every detail. Heart in every experience.
            </p>
          </Reveal>
        </section>

        {/* Closing */}
        <section className="bg-brand text-on-brand">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16 md:py-28 lg:px-8">
            <Reveal>
              <h2 className="max-w-[14ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Food is only the beginning.
              </h2>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-on-brand/85 md:text-lg">
                We are building food businesses that people can rely on - and
                experiences they want to come back to.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn btn-accent">
                  Talk to our team
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/gbr/dining-hospitality.jpg"
                  alt="Guests sharing plates around a candlelit dining table"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
