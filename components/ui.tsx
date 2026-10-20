import type { ReactNode } from "react";
import type { PromoBanner } from "@/content/promos";

/**
 * Quiet empty state for data-driven sections that have no approved
 * content yet (menu items, subscriptions, specials, events).
 */
export function EmptyState({
  note,
  children,
}: {
  note: string;
  children?: ReactNode;
}) {
  return (
    <div className="border border-dashed border-line px-6 py-10 text-center">
      <p className="mx-auto max-w-[46ch] text-sm leading-relaxed text-muted">
        {note}
      </p>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}

/**
 * Renders a promo banner only when it is enabled with approved copy.
 * Returns null otherwise, so an unapproved banner can never appear.
 */
export function PromoSlot({ banner }: { banner?: PromoBanner }) {
  if (!banner) return null;

  return (
    <section aria-label="Announcement" className="border-b border-line bg-brand text-on-brand">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg tracking-tight">{banner.title}</p>
          {banner.body ? (
            <p className="mt-1 text-sm text-on-brand/80">{banner.body}</p>
          ) : null}
        </div>
        {banner.ctaLabel && banner.ctaHref ? (
          <a href={banner.ctaHref} className="btn btn-accent shrink-0">
            {banner.ctaLabel}
          </a>
        ) : null}
      </div>
    </section>
  );
}
