import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SolHeader } from "@/components/sol/sol-header";
import { SolFooter } from "@/components/sol/sol-footer";
import { SolMenu } from "@/components/sol/sol-menu";
import { EmptyState, PromoSlot } from "@/components/ui";
import { activePromo } from "@/content/promos";
import { site } from "@/content/site";
import { solContent } from "@/content/sol";

export const metadata: Metadata = {
  title: {
    absolute: "SOL Café | Coffee, Food & Fresh Drinks in Hyderabad",
  },
  description:
    "SOL Café is a contemporary neighbourhood café by Gundu Babu Ruchulu at Prestige Tranquil, Kokapet, Hyderabad — good coffee, wholesome food, fresh drinks and community moments.",
  alternates: { canonical: "/sol-cafe" },
  openGraph: {
    title: "SOL Café | Coffee, Food & Fresh Drinks in Hyderabad",
    description:
      "Good coffee, wholesome food, fresh drinks and a place to slow down, connect and enjoy.",
    url: "/sol-cafe",
    images: [{ url: "/images/sol/interior-counter.jpg" }],
  },
};

export default function SolCafePage() {
  return (
    <div className="sol flex min-h-screen flex-col bg-canvas text-ink">
      <SolHeader />
      <PromoSlot banner={activePromo("sol")} />

      <main className="flex-1">
        {/* Hero: warm full-bleed interior with a cream statement panel */}
        <section className="relative">
          <div className="relative h-[72vh] max-h-[720px] min-h-[480px] w-full">
            <Image
              src="/images/sol/interior-counter.jpg"
              alt="The warm interior of SOL Café with a long counter, terracotta walls and hanging lamps"
              fill
              priority
              sizes="100vw"
              className="zoomin object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/40 to-ink/15" />
            <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 md:pb-16 lg:px-8">
              <p className="rise text-xs font-semibold uppercase tracking-[0.24em] text-on-brand/80">
                A café by {site.name}
              </p>
              <h1
                className="rise mt-5 max-w-[16ch] font-display text-[2.6rem] leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-7xl"
                style={{ animationDelay: "60ms" }}
              >
                A Little Warmth in Your Day.
              </h1>
              <p
                className="rise mt-5 max-w-[46ch] text-base leading-relaxed text-on-brand/85 md:text-lg"
                style={{ animationDelay: "140ms" }}
              >
                Good coffee, wholesome food, fresh drinks and a place to slow
                down, connect and enjoy.
              </p>
              <div
                className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
                style={{ animationDelay: "220ms" }}
              >
                <a href="#menu" className="btn btn-accent">
                  Explore SOL Café
                </a>
                <p className="flex items-center gap-2 text-sm text-on-brand/80">
                  <MapPin aria-hidden="true" size={15} />
                  {solContent.location}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About SOL */}
        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="eyebrow">About SOL</p>
              <h2 className="mt-4 max-w-[14ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Your neighbourhood café
              </h2>
              <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted md:text-lg">
                SOL is a contemporary neighbourhood café by Gundu Babu
                Ruchulu, created around good coffee, wholesome food, fresh
                drinks and everyday community moments.
              </p>
              <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted md:text-lg">
                SOL is designed to be an easy part of the day - a morning
                coffee stop, a quick breakfast, a lunch break, a post-workout
                drink, an evening catch-up or a place to simply stay awhile.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] md:aspect-[4/5]">
                <Image
                  src="/images/sol/latte-hands.jpg"
                  alt="Two people holding freshly made lattes across a café table"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* What SOL offers — editorial image grid */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">What SOL offers</p>
                <h2 className="mt-4 max-w-[16ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                  Something for every part of the day
                </h2>
              </div>
              <p className="italic-accent max-w-[30ch] text-xl text-muted md:text-right md:text-2xl">
                Made fresh, served warm.
              </p>
            </div>

            <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {solContent.offers.map((offer, index) => (
                <Reveal key={offer.title} delay={(index % 3) * 70}>
                  <article className="flex h-full flex-col bg-surface">
                    {offer.image ? (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={offer.image}
                          alt={offer.alt ?? offer.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                        />
                      </div>
                    ) : (
                      <div
                        aria-hidden="true"
                        className="aspect-[16/10] bg-gradient-to-br from-accent/25 via-terracotta/15 to-transparent"
                      />
                    )}
                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <h3 className="font-display text-xl tracking-tight">
                        {offer.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {offer.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* The SOL experience */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/sol/interior-window.jpg"
                  alt="A sunlit café seating area with wooden tables and tall windows"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="eyebrow">The SOL experience</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                More than a café.
              </h2>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted md:text-lg">
                SOL brings together everyday food and beverages with a relaxed
                setting, community experiences and convenient options for
                residents.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact?type=sol-cafe"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta transition-all hover:gap-3"
                >
                  Ask about SOL
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Community */}
        <section className="bg-brand text-on-brand">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16 md:py-28 lg:px-8">
            <Reveal>
              <p className="eyebrow text-accent">Community</p>
              <h2 className="mt-4 max-w-[14ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Made for everyday moments.
              </h2>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-on-brand/85 md:text-lg">
                {solContent.eventsNote}
              </p>
            </Reveal>

            <Reveal delay={100}>
              {solContent.events.length > 0 ? (
                <ul className="divide-y divide-on-brand/20 border-y border-on-brand/20">
                  {solContent.events.map((event) => (
                    <li key={event.title} className="py-5">
                      <p className="font-display text-lg tracking-tight">
                        {event.title}
                      </p>
                      <p className="mt-1 max-w-[46ch] text-sm leading-relaxed text-on-brand/80">
                        {event.description}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="border border-dashed border-on-brand/30 px-6 py-10 text-center">
                  <p className="mx-auto max-w-[42ch] text-sm leading-relaxed text-on-brand/80">
                    Community events and celebrations will be announced here as
                    they are scheduled. Write to us if you would like to hear
                    about them.
                  </p>
                  <a
                    href={`mailto:${site.emails.general}?subject=SOL%20Caf%C3%A9%20events`}
                    className="mt-4 inline-block text-sm font-semibold text-accent underline underline-offset-4"
                  >
                    {site.emails.general}
                  </a>
                </div>
              )}
            </Reveal>
          </div>
        </section>

        {/* Subscriptions */}
        <section id="subscriptions" className="border-b border-line">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-12 md:gap-16 md:py-28 lg:px-8">
            <div className="md:col-span-5">
              <p className="eyebrow">Subscriptions</p>
              <h2 className="mt-4 max-w-[14ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Regulars, made effortless
              </h2>
              <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-muted md:text-lg">
                {solContent.subscriptionsNote}
              </p>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              {solContent.subscriptions.length > 0 ? (
                <ul className="divide-y divide-line border-y border-line">
                  {solContent.subscriptions.map((sub) => (
                    <li key={sub.title} className="py-5">
                      <p className="font-display text-lg tracking-tight">
                        {sub.title}
                      </p>
                      <p className="mt-1 max-w-[46ch] text-sm leading-relaxed text-muted">
                        {sub.description}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <EmptyState note="Current subscription plans are being finalised. Ask us about juice, shake and meal subscriptions and we will share the latest options.">
                  <Link href="/contact?type=sol-cafe" className="text-sm font-semibold text-terracotta underline underline-offset-4 transition-colors hover:text-ink">
                    Enquire about subscriptions
                  </Link>
                </EmptyState>
              )}
            </div>
          </div>
        </section>

        {/* Weekend specials */}
        <section className="border-b border-line bg-surface">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-12 md:gap-16 md:py-28 lg:px-8">
            <div className="md:col-span-5">
              <p className="eyebrow">Weekend specials</p>
              <h2 className="mt-4 max-w-[16ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Something special, for a short while
              </h2>
              <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-muted md:text-lg">
                {solContent.specialsNote}
              </p>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              {solContent.specials.length > 0 ? (
                <ul className="divide-y divide-line border-y border-line">
                  {solContent.specials.map((special) => (
                    <li key={special.title} className="py-5">
                      <p className="font-display text-lg tracking-tight">
                        {special.title}
                      </p>
                      <p className="mt-1 max-w-[46ch] text-sm leading-relaxed text-muted">
                        {special.description}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <EmptyState note="There are no specials published right now. Weekend and festival offerings will be listed here when they are announced.">
                  <Link href="/contact?type=sol-cafe" className="text-sm font-semibold text-terracotta underline underline-offset-4 transition-colors hover:text-ink">
                    Ask about upcoming specials
                  </Link>
                </EmptyState>
              )}
            </div>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Menu</p>
              <h2 className="mt-4 max-w-[16ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                What&apos;s cooking
              </h2>
            </div>
            <p className="italic-accent max-w-[30ch] text-xl text-muted md:text-right md:text-2xl">
              The menu changes with the season.
            </p>
          </div>

          <SolMenu />
        </section>

        {/* Visit */}
        <section id="visit" className="border-t border-line bg-brand text-on-brand">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16 md:py-24 lg:px-8">
            <div>
              <h2 className="max-w-[14ch] font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Come sit awhile.
              </h2>
              <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-on-brand/85 md:text-lg">
                Find SOL at {solContent.location}. For anything you would like
                to know before you visit, write to us - we would love to hear
                from you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact?type=sol-cafe" className="btn btn-accent">
                  Enquire about SOL
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 text-on-brand/85">
              <p className="flex items-center gap-3">
                <MapPin aria-hidden="true" size={17} className="shrink-0 text-accent" />
                {solContent.location}
              </p>
              <a
                href={`mailto:${site.emails.general}`}
                className="flex items-center gap-3 transition-colors hover:text-on-brand"
              >
                <span aria-hidden="true" className="w-[17px] shrink-0 text-center text-accent">@</span>
                {site.emails.general}
              </a>
              {site.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="flex items-center gap-3 transition-colors hover:text-on-brand"
                >
                  <Phone aria-hidden="true" size={17} className="shrink-0 text-accent" />
                  {phone.display}
                </a>
              ))}
              <a
                href={site.sol.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-on-brand"
              >
                <InstagramIcon aria-hidden="true" size={17} className="shrink-0 text-accent" />
                {site.sol.socials.instagram.handle}
              </a>
              <p className="italic-accent mt-4 text-xl text-on-brand/70">
                {site.sol.relation}
              </p>
            </div>
          </div>
        </section>
      </main>

      <SolFooter />
    </div>
  );
}
