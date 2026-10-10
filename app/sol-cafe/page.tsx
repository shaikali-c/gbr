import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SOL Café",
  description:
    "SOL Café is the consumer café brand under Gundu Babu Ruchulu: filter coffee, breakfast, small plates and bakery in Hyderabad.",
};

type MenuItem = {
  title: string;
  desc: string;
  span: string;
  image?: string;
  alt?: string;
  ratio?: string;
  tone?: "brand" | "accent" | "surface";
};

const menu: MenuItem[] = [
  {
    title: "Coffee",
    desc: "Filter, espresso and cold brew, pulled to order.",
    image: "/sol-coffee.jpg",
    alt: "A latte in a ceramic cup on a wooden café table",
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    title: "Breakfast",
    desc: "Idli, dosa, upma and eggs, served in the morning.",
    span: "md:col-span-5",
    tone: "brand",
  },
  {
    title: "Small plates",
    desc: "Salted snacks and quick bites for any hour.",
    span: "md:col-span-5",
    tone: "accent",
  },
  {
    title: "Bakery",
    desc: "Cakes, cookies and savouries, baked through the day.",
    image: "/sol-bakery.jpg",
    alt: "Pastries and breads arranged behind a bakery display case",
    span: "md:col-span-7",
    ratio: "aspect-[16/9]",
  },
];

const details = [
  { label: "Location", value: "Hyderabad, Telangana" },
  { label: "Address", value: "To be announced" },
  { label: "Opening hours", value: "To be announced" },
];

export default function SolCafePage() {
  return (
    <div className="sol flex min-h-screen flex-col bg-canvas text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link
            href="/sol-cafe"
            className="font-display text-lg font-bold tracking-tight text-ink"
          >
            SOL
            <span className="ml-2 hidden font-normal text-muted sm:inline">
              Café
            </span>
          </Link>

          <nav className="flex items-center gap-5 text-sm sm:gap-7">
            <a
              href="#menu"
              className="hidden text-muted transition-colors hover:text-ink sm:block"
            >
              Menu
            </a>
            <a
              href="#visit"
              className="hidden text-muted transition-colors hover:text-ink sm:block"
            >
              Visit
            </a>
            <Link
              href="/"
              className="rounded-full border border-line px-3 py-1.5 font-semibold text-ink transition-colors hover:border-ink"
            >
              GBR
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero: oversized type on paper, full-bleed photograph below */}
        <section className="flex min-h-[calc(100dvh_-_65px)] flex-col">
          <div className="flex flex-1 flex-col justify-center px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
              <h1 className="rise font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
                Sunlight, coffee,
                <br />
                something to eat.
              </h1>

              <div className="mt-9 flex flex-col gap-7 md:mt-14 md:flex-row md:items-end md:justify-between md:gap-12">
                <p
                  className="rise max-w-[46ch] text-base leading-relaxed text-muted md:text-lg"
                  style={{ animationDelay: "90ms" }}
                >
                  Filter coffee, breakfast, small plates and bakery, from the
                  kitchens behind GBR in Hyderabad.
                </p>
                <div
                  className="rise shrink-0"
                  style={{ animationDelay: "180ms" }}
                >
                  <a href="#menu" className="btn btn-primary">
                    See the menu
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[46vh] min-h-[260px] w-full shrink-0 overflow-hidden">
            <Image
              src="/sol-cafe.jpg"
              alt="The interior of SOL Café with terracotta walls, a long counter and hanging lamps"
              fill
              preload
              sizes="100vw"
              className="zoomin object-cover"
            />
          </div>
        </section>

        {/* Editorial statement */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="max-w-[24ch] font-display text-3xl leading-[1.18] tracking-tight sm:text-4xl md:text-5xl">
            A café built by a food company that already runs kitchens for a
            living.
          </p>
          <p className="mt-7 max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
            SOL is where GBR cooks for walk-in guests instead of canteens. The
            supply chain, the prep discipline and the recipes come from the same
            place; the room, the light and the pace are entirely its own.
          </p>
        </section>

        {/* Menu bento: four cells for four categories */}
        <section id="menu" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
          <h2 className="max-w-[16ch] font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            What we serve
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-12">
            {menu.map((item) =>
              item.image ? (
                <div
                  key={item.title}
                  className={`relative overflow-hidden rounded-2xl ${item.span} ${item.ratio ?? ""}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt ?? item.title}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <h3 className="font-display text-2xl tracking-tight text-white md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-white/85 md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={item.title}
                  className={`flex min-h-[240px] flex-col justify-end rounded-2xl p-6 md:p-8 ${item.span} ${
                    item.tone === "brand"
                      ? "bg-brand text-on-brand"
                      : item.tone === "accent"
                        ? "bg-accent text-ink"
                        : "border border-line bg-surface"
                  }`}
                >
                  <h3 className="font-display text-2xl tracking-tight md:text-3xl">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-[40ch] text-sm leading-relaxed md:text-base ${
                      item.tone === "brand" ? "opacity-90" : ""
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ),
            )}
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="border-t border-line">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-24 lg:px-8">
            <div className="md:col-span-6">
              <h2 className="max-w-[12ch] font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                Come sit down
              </h2>
              <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-muted md:text-lg">
                Full address and opening hours will be listed here once the
                first SOL Café doors are open. Until then, SOL is part of the
                GBR group you can reach through the main site.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@gundubaburuchulu.com"
                  className="btn btn-primary"
                >
                  Ask about SOL
                </a>
                <Link href="/" className="btn btn-secondary">
                  Back to GBR
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <dl className="grid gap-5">
                {details.map((row) => (
                  <div key={row.label} className="border-t border-line pt-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {row.label}
                    </dt>
                    <dd className="mt-1.5 font-display text-lg tracking-tight">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-display text-base tracking-tight">
            SOL Café
            <span className="ml-2 font-normal text-muted">
              A company under Gundu Babu Ruchulu
            </span>
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#menu" className="text-muted hover:text-ink">
              Menu
            </a>
            <a href="#visit" className="text-muted hover:text-ink">
              Visit
            </a>
            <Link href="/" className="text-muted hover:text-ink">
              gundubaburuchulu.com
            </Link>
          </nav>
          <p className="text-sm text-muted">© 2026 SOL Café, Hyderabad</p>
        </div>
      </footer>
    </div>
  );
}
