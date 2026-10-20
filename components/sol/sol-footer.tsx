import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

/**
 * SOL footer — distinct treatment (espresso band) that still names the
 * parent brand, keeping the GBR relationship explicit on the café page.
 */
export function SolFooter() {
  return (
    <footer className="bg-ink text-on-brand">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/logo/sol.jpg"
              alt="SOL Café logo"
              width={1600}
              height={1600}
              className="h-16 w-16 rounded object-cover"
            />
            <p className="mt-4 font-display text-2xl font-semibold tracking-[0.14em]">
              SOL
            </p>
            <p className="italic-accent mt-2 text-lg text-on-brand/75">
              A little warmth in your day.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-on-brand/70">
              {site.sol.relation}
            </p>
          </div>

          <nav aria-label="SOL footer" className="flex flex-col gap-2.5">
            {[
              { label: "Menu", href: "/sol-cafe#menu" },
              { label: "Subscriptions", href: "/sol-cafe#subscriptions" },
              { label: "Visit", href: "/sol-cafe#visit" },
              { label: "Enquire", href: "/contact?type=sol-cafe" },
              { label: "Gundu Babu Ruchulu", href: "/" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-on-brand/75 transition-colors hover:text-on-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5 text-sm text-on-brand/70">
            <p>{site.sol.location}</p>
            <a
              href={`mailto:${site.emails.general}`}
              className="transition-colors hover:text-on-brand"
            >
              {site.emails.general}
            </a>
            <a
              href={`mailto:${site.emails.office}`}
              className="transition-colors hover:text-on-brand"
            >
              {site.emails.office}
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-on-brand/15 pt-6 text-sm text-on-brand/60">
          © {new Date().getFullYear()} {site.sol.name} · Kokapet, Hyderabad
        </p>
      </div>
    </footer>
  );
}
