/**
 * Promotional banners.
 *
 * Slots are reserved in the page layouts; a banner renders only when it is
 * enabled AND has approved copy. Shipping disabled-by-default means no
 * unapproved promotion can appear by accident, and the team can switch a
 * banner on (or update its copy and image) without touching page code.
 *
 * Example:
 *   {
 *     id: "sol-weekend-special",
 *     slot: "sol",
 *     enabled: true,
 *     title: "Weekend specials are back",
 *     body: "A limited weekend menu, available for pre-order.",
 *     ctaLabel: "See the menu",
 *     ctaHref: "/sol-cafe#menu",
 *     image: "/images/sol/special.jpg",
 *     alt: "…",
 *   }
 */

export type PromoBanner = {
  id: string;
  slot: "home" | "sol" | "corporate" | "cloud";
  enabled: boolean;
  title: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  alt?: string;
};

export const promoBanners: readonly PromoBanner[] = [
  { id: "home-main", slot: "home", enabled: false, title: "" },
  { id: "sol-main", slot: "sol", enabled: false, title: "" },
  { id: "corporate-main", slot: "corporate", enabled: false, title: "" },
  { id: "cloud-main", slot: "cloud", enabled: false, title: "" },
];

export function activePromo(
  slot: PromoBanner["slot"],
): PromoBanner | undefined {
  return promoBanners.find((b) => b.slot === slot && b.enabled && b.title);
}
