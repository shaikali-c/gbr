import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";

const businessAreas = [
  {
    title: "Corporate Meals",
    desc: "Daily meal programmes for offices, campuses and shift teams.",
  },
  {
    title: "Corporate Food Services",
    desc: "Catering, canteens and managed food operations, run end to end.",
  },
  {
    title: "Cloud Kitchen",
    desc: "Delivery-only kitchens built for volume, speed and repeat orders.",
  },
  {
    title: "Food Delivery",
    desc: "Ordered, cooked, packed and delivered across the city.",
  },
  {
    title: "Regional and Speciality Food",
    desc: "Recipes and formats rooted in Telugu cuisine, made at scale.",
  },
  {
    title: "SOL Café",
    desc: "Our consumer café brand, on the same table as everything else.",
    href: "/sol-cafe",
  },
];

const contactRows = [
  { label: "Email", value: "hello@gundubaburuchulu.com", href: "mailto:hello@gundubaburuchulu.com" },
  { label: "Phone", value: "+91 40 0000 0000", href: "tel:+914000000000" },
  { label: "Based in", value: "Hyderabad, Telangana" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-ink"
          >
            GBR
            <span className="ml-2 hidden font-normal text-muted sm:inline">
              Gundu Babu Ruchulu
            </span>
          </Link>

          <nav className="flex items-center gap-5 text-sm sm:gap-7">
            <a
              href="#business"
              className="hidden text-muted transition-colors hover:text-ink sm:block"
            >
              Business areas
            </a>
            <a
              href="#contact"
              className="hidden text-muted transition-colors hover:text-ink sm:block"
            >
              Talk to our team
            </a>
            <Link
              href="/sol-cafe"
              className="rounded-full border border-line px-3 py-1.5 font-semibold text-ink transition-colors hover:border-ink"
            >
              SOL Café
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero: statement on paper, photography full-bleed to the right edge */}
        <section className="@container flex min-h-[calc(100dvh_-_65px)] flex-col lg:grid lg:grid-cols-12">
          <div className="relative h-[40vh] min-h-[240px] w-full overflow-hidden lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:h-auto">
            <Image
              src="/gbr-thali.jpg"
              alt="A South Indian thali of rice, sambar and side dishes served on a banana leaf"
              fill
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="zoomin object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center px-4 py-14 sm:px-6 md:py-16 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:py-20 lg:pl-[max(2rem,calc((100cqw_-_80rem)/2_+_2rem))] lg:pr-10">
            <div>
              <span
                aria-hidden="true"
                className="mb-7 block h-1 w-14 rounded-full bg-accent"
              />
              <h1 className="rise font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                We build food
                <br />
                businesses.
              </h1>

              <p
                className="rise mt-6 max-w-[46ch] text-base leading-relaxed text-muted md:text-lg"
                style={{ animationDelay: "90ms" }}
              >
                Gundu Babu Ruchulu is the parent company behind corporate meals,
                cloud kitchens, food delivery and SOL Café.
              </p>

              <div
                className="rise mt-8 flex flex-wrap gap-3"
                style={{ animationDelay: "180ms" }}
              >
                <a href="#contact" className="btn btn-primary">
                  Talk to our team
                </a>
                <Link href="/sol-cafe" className="btn btn-secondary">
                  Visit SOL Café
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Business areas: sticky title beside an editorial index */}
        <section
          id="business"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
        >
          <div className="grid gap-8 md:grid-cols-12 md:gap-x-14">
            <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
              <h2 className="max-w-[12ch] font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                What GBR runs
              </h2>
            </div>

            <ul className="md:col-span-8">
              {businessAreas.map((area, index) => {
                const row = (
                  <>
                    <div className="flex items-baseline gap-2.5">
                      {area.href ? (
                        <span
                          className="shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      ) : null}
                      <h3 className="font-display text-lg tracking-tight group-hover:underline group-hover:underline-offset-4 md:text-xl">
                        {area.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 max-w-[52ch] text-sm leading-relaxed text-muted sm:mt-0 md:text-base">
                      {area.desc}
                    </p>
                  </>
                );

                const rowLayout =
                  "grid gap-x-12 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-baseline";

                return (
                  <li
                    key={area.title}
                    className="border-t border-line py-6 transition-colors hover:border-ink"
                  >
                    <Reveal delay={index * 55}>
                      {area.href ? (
                        <Link
                          href={area.href}
                          className={`group outline-offset-4 ${rowLayout}`}
                          aria-label={`${area.title}: visit the SOL Café page`}
                        >
                          {row}
                        </Link>
                      ) : (
                        <div className={rowLayout}>{row}</div>
                      )}
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Full-width statement band */}
        <section className="bg-brand text-on-brand">
          <Reveal className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
            <p className="max-w-[22ch] font-display text-3xl leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
              One company, many kitchens.
            </p>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed opacity-90 md:text-lg">
              GBR runs the operations. Each brand keeps its own menu, its own
              voice and its own table.
            </p>
          </Reveal>
        </section>

        {/* Split: operations */}
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16 md:py-28 lg:px-8">
          <Reveal>
            <h2 className="max-w-[14ch] font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Kitchens built for consistency
            </h2>
            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted md:text-lg">
              Central preparation, standardised recipes and trained teams let
              us run several formats at once without losing the taste people
              come back for.
            </p>
            <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-muted md:text-lg">
              From a hundred office lunches to a single café order, the same
              supply chain and the same kitchen discipline sit behind it.
            </p>
          </Reveal>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/gbr-kitchen.jpg"
              alt="A cook working at the pass in a commercial kitchen"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Full-bleed band teasing SOL */}
        <section className="relative">
          <div className="relative h-[70vh] max-h-[640px] min-h-[420px] w-full">
            <Image
              src="/sol-band.jpg"
              alt="The interior of SOL Café with hanging plants, wooden tables and daylight"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/15" />
            <Reveal className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                SOL Café
              </p>
              <h2 className="mt-4 max-w-[16ch] font-display text-3xl leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
                Our café, on this website.
              </h2>
              <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-white/85 md:text-lg">
                SOL is the consumer-facing café brand under GBR, with its own
                look, its own menu and its own page.
              </p>
              <div className="mt-7">
                <Link href="/sol-cafe" className="btn btn-accent">
                  Visit SOL Café
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-12 md:py-28 lg:px-8">
            <Reveal className="md:col-span-6">
              <h2 className="max-w-[12ch] font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                Talk to our team
              </h2>
              <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-muted md:text-lg">
                Corporate catering, managed food services, cloud kitchen
                partnerships and everything else GBR runs.
              </p>
            </Reveal>

            <Reveal delay={90} className="md:col-span-5 md:col-start-8">
              <dl className="grid gap-5">
                {contactRows.map((row) => (
                  <div key={row.label} className="border-t border-line pt-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {row.label}
                    </dt>
                    <dd className="mt-1.5 font-display text-lg tracking-tight">
                      {row.href ? (
                        <a
                          href={row.href}
                          className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href="mailto:hello@gundubaburuchulu.com"
                className="btn btn-primary mt-7"
              >
                Talk to our team
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-display text-base tracking-tight">
            GBR
            <span className="ml-2 font-normal text-muted">
              Gundu Babu Ruchulu
            </span>
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#business" className="text-muted hover:text-ink">
              Business areas
            </a>
            <a href="#contact" className="text-muted hover:text-ink">
              Talk to our team
            </a>
            <Link href="/sol-cafe" className="text-muted hover:text-ink">
              SOL Café
            </Link>
          </nav>
          <p className="text-sm text-muted">
            © 2026 Gundu Babu Ruchulu, Hyderabad
          </p>
        </div>
      </footer>
    </div>
  );
}
