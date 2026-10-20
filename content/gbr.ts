/**
 * GBR page content — service descriptions, offering lists and process steps.
 *
 * The copy here is the approved brand copy for the GBR pages. It lives in
 * data (not in JSX) so the team can update service descriptions and imagery
 * without editing presentation components.
 */

export type BusinessArea = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

export const homeBusinessAreas: readonly BusinessArea[] = [
  {
    title: "Corporate Meals",
    description:
      "Professional meal solutions for companies, teams and recurring workplace requirements.",
    href: "/corporate-meals",
    image: "/images/gbr/corporate-buffet.jpg",
    alt: "A catering counter set with trays of freshly prepared food for a corporate meal service",
  },
  {
    title: "Cloud Kitchen",
    description:
      "Freshly prepared food for delivery and pre-order, including regional delicacies, Indo-Chinese offerings and selected specials.",
    href: "/cloud-kitchen",
    image: "/images/gbr/biryani.jpg",
    alt: "A copper pot of biryani garnished with fried onions and herbs",
  },
  {
    title: "SOL Café",
    description:
      "A contemporary café venture by Gundu Babu Ruchulu, focused on coffee, wholesome food, fresh drinks and community experiences.",
    href: "/sol-cafe",
    image: "/images/sol/interior-band.jpg",
    alt: "The warm, plant-filled interior of a neighbourhood café",
  },
];

export type Offering = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const aboutOfferings: readonly Offering[] = [
  {
    title: "Corporate Meals",
    description:
      "Recurring workplace meals, employee meals, meal boxes and bulk requirements.",
    image: "/images/gbr/corporate-buffet.jpg",
    alt: "Trays of prepared dishes lined up for a corporate meal service",
  },
  {
    title: "Cloud Kitchens",
    description:
      "Freshly prepared food for delivery, pre-orders, regional specials and selected cuisines.",
    image: "/images/gbr/delivery.jpg",
    alt: "A delivery rider cycling through the city with a food delivery bag",
  },
  {
    title: "Café Experiences",
    description:
      "Contemporary café concepts designed around everyday food, coffee, beverages and community.",
    image: "/images/sol/interior-window.jpg",
    alt: "A sunlit café interior with wooden tables and tall windows",
  },
  {
    title: "Food Experiences",
    description: "Events, celebrations and tailored food requirements.",
    image: "/images/gbr/dining-hospitality.jpg",
    alt: "Guests sharing plates around a candlelit dining table",
  },
];

export const corporateServices: readonly string[] = [
  "Employee meal programs",
  "Corporate lunches",
  "Meal boxes",
  "Recurring meal plans",
  "Meetings and events",
  "Bulk food requirements",
  "Custom menu solutions",
];

export type ProcessStep = {
  title: string;
};

export const corporateProcess: readonly ProcessStep[] = [
  { title: "Understand your requirement" },
  { title: "Plan the menu and service format" },
  { title: "Coordinate preparation and delivery" },
  { title: "Maintain consistency and service quality" },
  { title: "Review and adapt based on requirements" },
];

export const cloudKitchenExpectations: readonly Offering[] = [
  {
    title: "Freshly prepared food",
    description: "Cooked to order with the same kitchen discipline behind every GBR format.",
    image: "/images/gbr/kitchen.jpg",
    alt: "A cook working at the pass in a professional kitchen",
  },
  {
    title: "Delivery and pre-order options",
    description: "Convenient ordering for planned meals and everyday requirements.",
    image: "/images/gbr/delivery.jpg",
    alt: "A rider setting off with an insulated food delivery bag",
  },
  {
    title: "Regional and speciality delicacies",
    description: "Regional recipes and speciality dishes, prepared fresh.",
    image: "/images/gbr/regional-curries.jpg",
    alt: "Curries and rice served in traditional copper bowls",
  },
  {
    title: "Indo-Chinese selections",
    description: "Popular Indo-Chinese favourites among the offerings.",
    image: "/images/gbr/regional-platter.jpg",
    alt: "A plated rice dish served with raita and a side of curry",
  },
  {
    title: "Weekend and festival specials",
    description: "Limited specials for weekends and festival seasons.",
    image: "/images/gbr/thali.jpg",
    alt: "A full South Indian thali served on a banana leaf",
  },
];
