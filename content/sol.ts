/**
 * SOL Café content — the editable data layer behind the /sol-cafe page.
 *
 * The SOL menu is still evolving, so this file ships with the approved
 * category structure and EMPTY item lists. Nothing here invents products,
 * prices or claims: the page renders approved category names and a quiet
 * empty state until real data is added.
 *
 * To publish menu items, add them under the right category:
 *
 *   {
 *     name: "Filter Coffee",
 *     description: "Optional line of approved copy.",
 *     price: "40",          // only when approved; hidden when omitted
 *     image: "/images/sol/filter-coffee.jpg",
 *     alt: "A stainless steel tumbler of filter coffee.",
 *     available: true,      // set false to hide without deleting
 *   }
 *
 * Subscriptions, weekend specials and events work the same way — add
 * entries to the arrays below and the page picks them up. This module is
 * intentionally the only place SOL page data lives, so it can later be
 * replaced by a CMS adapter (Sanity, Contentful, markdown, …) exporting the
 * same types without touching the UI components.
 */

export type SolMenuItem = {
  name: string;
  description?: string;
  /** Approved price as display text (e.g. "120"). Omit until approved. */
  price?: string;
  image?: string;
  alt?: string;
  /** Defaults to true. Set false to unpublish without deleting. */
  available?: boolean;
};

export type SolMenuCategory = {
  id: string;
  title: string;
  /** Optional approved intro line for the category. */
  intro?: string;
  image?: string;
  alt?: string;
  items: readonly SolMenuItem[];
};

export type SolOffer = {
  title: string;
  description: string;
  image?: string;
  alt?: string;
};

export type SolSubscription = {
  title: string;
  description: string;
};

export type SolSpecial = {
  title: string;
  description: string;
  image?: string;
  alt?: string;
};

export type SolEvent = {
  title: string;
  description: string;
  /** Display text such as "Monthly" — only add approved scheduling detail. */
  cadence?: string;
};

export type SolContent = {
  location: string;
  offers: readonly SolOffer[];
  subscriptionsNote: string;
  subscriptions: readonly SolSubscription[];
  specialsNote: string;
  specials: readonly SolSpecial[];
  eventsNote: string;
  events: readonly SolEvent[];
  menuCategories: readonly SolMenuCategory[];
};

export const solContent: SolContent = {
  location: "Prestige Tranquil, Kokapet, Hyderabad",

  /**
   * The approved "what SOL offers" categories. Descriptions are category-level
   * only; no individual products, ingredients, nutrition or prices.
   */
  offers: [
    {
      title: "Coffee & iced coffee",
      description: "Freshly brewed coffee and iced coffee for any hour of the day.",
      image: "/images/sol/iced-latte.jpg",
      alt: "An iced latte in a tall glass with layered milk and espresso",
    },
    {
      title: "Breakfast & light bites",
      description: "Easy morning plates and light bites to start the day.",
      image: "/images/sol/breakfast-egg-toast.jpg",
      alt: "A breakfast plate with a fried egg, toast and grilled tomato",
    },
    {
      title: "Sandwiches & wraps",
      description: "Freshly assembled sandwiches and wraps for a quick meal.",
      image: "/images/sol/toasted-sandwich.jpg",
      alt: "A toasted sandwich cut in half on a plate with chutneys",
    },
    {
      title: "Bowls & salads",
      description: "Wholesome bowls and salads built around fresh ingredients.",
      image: "/images/sol/salad-bowl.jpg",
      alt: "A colourful salad bowl with avocado, chickpeas and greens",
    },
    {
      title: "Pasta & savoury options",
      description: "Warm savoury plates including pasta, served through the day.",
    },
    {
      title: "Fresh juices & shakes",
      description: "Fresh juices and shakes, made to order.",
      image: "/images/sol/juices-fresh.jpg",
      alt: "Two glasses of fresh orange juice beside cut oranges",
    },
    {
      title: "Protein-focused options",
      description: "Protein-forward plates and drinks for everyday routines.",
      image: "/images/sol/protein-bowl.jpg",
      alt: "A protein bowl with grilled salmon, vegetables and greens",
    },
    {
      title: "Weekend specials & regional delicacies",
      description: "Selected regional delicacies and specials on weekends.",
      image: "/images/gbr/regional-platter.jpg",
      alt: "A regional rice dish plated with raita and curry",
    },
    {
      title: "Subscriptions",
      description: "Selected drink and meal subscriptions for regular ordering.",
    },
    {
      title: "Community events & celebrations",
      description: "Gatherings and celebrations hosted at the café.",
      image: "/images/sol/community-evening.jpg",
      alt: "People gathered under warm string lights at an evening event",
    },
  ],

  subscriptionsNote:
    "Selected juice, shake and meal subscriptions designed for convenient, regular ordering. Subscription plans and offerings may change over time.",
  subscriptions: [],

  specialsNote:
    "Specially curated weekend and festival offerings, available for a limited time and subject to pre-order where applicable.",
  specials: [],

  eventsNote:
    "From morning coffee and quick meals to evening conversations, weekend specials and community celebrations, SOL is designed around the people who use it.",
  events: [],

  menuCategories: [
    {
      id: "coffee",
      title: "Coffee",
      intro: "Freshly brewed coffee, served hot or over ice.",
      image: "/images/sol/latte.jpg",
      alt: "A latte with fresh latte art in a ceramic cup",
      items: [],
    },
    {
      id: "iced-coffee",
      title: "Iced Coffee",
      items: [],
    },
    {
      id: "breakfast",
      title: "Breakfast & Light Bites",
      items: [],
    },
    {
      id: "sandwiches",
      title: "Sandwiches & Wraps",
      items: [],
    },
    {
      id: "bowls",
      title: "Bowls & Salads",
      items: [],
    },
    {
      id: "pasta",
      title: "Pasta & Savoury",
      items: [],
    },
    {
      id: "juices",
      title: "Fresh Juices & Shakes",
      items: [],
    },
    {
      id: "protein",
      title: "Protein-Focused Options",
      items: [],
    },
    {
      id: "specials",
      title: "Weekend Specials & Regional Delicacies",
      items: [],
    },
  ],
};

/** Items marked unavailable are filtered out at render time. */
export function publishedItems(category: SolMenuCategory): readonly SolMenuItem[] {
  return category.items.filter((item) => item.available !== false);
}
