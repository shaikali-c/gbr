import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PromoSlot } from "@/components/ui";
import { corporateProcess, corporateServices } from "@/content/gbr";
import { activePromo } from "@/content/promos";

export const metadata: Metadata = {
  title: {
    absolute: "Corporate Meals | Gundu Babu Ruchulu",
  },
  description:
    "Reliable and thoughtfully planned corporate meal solutions for workplaces, teams and organisations in Hyderabad — employee meals, lunches, meal boxes and bulk requirements.",
  alternates: { canonical: "/corporate-meals" },
  openGraph: {
    title: "Corporate Meals | Gundu Babu Ruchulu",
    description:
      "Reliable and thoughtfully planned meal solutions for workplaces, teams and organisations.",
    url: "/corporate-meals",
    images: [{ url: "/images/gbr/corporate-buffet.jpg" }],
  },
};

const contactHref = "/contact?type=corporate-meals";

export default function CorporateMealsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <SiteHeader />
      <PromoSlot banner={activePromo("corporate")} />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
            <div className="flex flex-col justify-center px-4 py-14 sm:px-6 md:py-20 lg:col-span-7 lg:py-24 lg:pl-8 lg:pr-12">
              <p className="eyebrow rise">For businesses &amp; teams</p>
              <h1
                className="rise mt-5 font-display text-[2.5rem] leading-[1.05] tracking-tight sm:text-6xl"
                style={{ animationDelay: "60ms" }}
              >
                Corporate Meals,
                <br />
                Thoughtfully Done.
              </h1>
              <p
                className="rise mt-7 max-w-[50ch] text-lg leading-relaxed text-muted md:text-xl"
                style={{ animationDelay: "140ms" }}
              >
                Reliable and thoughtfully planned meal solutions for
                workplaces, teams and organisations.
              </p>
              <div
                className="rise mt-9 flex flex-wrap gap-3"
                style={{ animationDelay: "220ms" }}
              >
                <Link href={contactHref} className="btn btn-primary">
                  Discuss Your Requirements
                </Link>
              </div>
            </div>

            <div className="relative min-h-[300px] lg:col-span-5 lg:min-h-[560px]">
              <Image
                src="/images/gbr/corporate-buffet.jpg"
                alt="A catering counter set with trays of freshly prepared food"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="zoomin object-cover"
              />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <h2 className="max-w-[14ch] font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Everyday meals, run professionally
              </h2>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/gbr/meal-bowl.jpg"
                  alt="A wholesome meal bowl with grains, vegetables and egg on a wooden table"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <Reveal className="md:col-span-7">
              <p className="max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
                Corporate food is not only about feeding a team. It is about
                making an everyday requirement feel organised, dependable and
                well cared for.
              </p>
              <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
                We provide practical food solutions for organisations that need
                consistent meal service, from recurring employee meals and
                office lunches to meetings, events and bulk requirements.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <p className="eyebrow">What we provide</p>
            <h2 className="mt-4 max-w-[18ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              Services built around how teams eat
            </h2>

            <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {corporateServices.map((service, index) => (
                <Reveal key={service} delay={index * 55}>
                  <li className="flex h-full items-baseline gap-4 bg-surface p-6 md:p-7">
                    <span
                      aria-hidden="true"
                      className="font-display text-sm text-gold"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg tracking-tight md:text-xl">
                      {service}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* How we work */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 max-w-[20ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
            A clear process, from first conversation to daily service
          </h2>

          <ol className="mt-14 grid gap-8 md:grid-cols-5 md:gap-6">
            {corporateProcess.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <li className="relative h-full border-t-2 border-accent pt-5">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-semibold text-gold"
                  >
                    Step {index + 1}
                  </span>
                  <p className="mt-2 font-display text-lg leading-snug tracking-tight">
                    {step.title}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="bg-brand text-on-brand">
          <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
            <Reveal>
              <h2 className="mx-auto max-w-[22ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Have a meal requirement in mind?
              </h2>
              <p className="mx-auto mt-6 max-w-[56ch] text-base leading-relaxed text-on-brand/85 md:text-lg">
                Tell us what you need and we will work with you to build a
                practical food solution.
              </p>
              <div className="mt-9">
                <Link href={contactHref} className="btn btn-accent">
                  Request a Corporate Meal Plan
                  <ArrowRight aria-hidden="true" size={15} />
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
