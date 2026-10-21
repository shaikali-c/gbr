import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { nav, site } from "@/content/site";

/**
 * Shared GBR footer. The parent brand anchors the design; SOL keeps its own
 * footer treatment on /sol-cafe. No legal details, registration numbers or
 * social links are invented — only approved contact facts appear here.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/logo/gbr.jpg"
              alt="Gundu Babu Ruchulu logo"
              width={1600}
              height={1600}
              className="h-16 w-16 rounded object-cover"
            />
            <p className="mt-4 font-display text-lg font-semibold tracking-[0.02em]">
              {site.name.toUpperCase()}
            </p>
            <p className="italic-accent mt-2 text-lg text-muted">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <p className="flex items-center gap-2.5 text-muted">
              <MapPin aria-hidden="true" size={15} className="shrink-0" />
              {site.location}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2.5 text-muted transition-colors hover:text-ink"
            >
              <Mail aria-hidden="true" size={15} className="shrink-0" />
              {site.email}
            </a>
            {site.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="flex items-center gap-2.5 text-muted transition-colors hover:text-ink"
              >
                <Phone aria-hidden="true" size={15} className="shrink-0" />
                {phone.display}
              </a>
            ))}
            <a
              href={site.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-muted transition-colors hover:text-ink"
            >
              <InstagramIcon aria-hidden="true" size={15} className="shrink-0" />
              {site.socials.instagram.handle}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}, Hyderabad
          </p>
          <Link href="/sol-cafe" className="transition-colors hover:text-ink">
            {site.sol.name} — a venture of {site.name}
          </Link>
        </div>
      </div>
    </footer>
  );
}
