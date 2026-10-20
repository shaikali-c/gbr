import Image from "next/image";
import {
  publishedItems,
  solContent,
  type SolMenuCategory,
} from "@/content/sol";
import { EmptyState } from "../ui";

/**
 * SOL menu — rendered entirely from content/sol.ts.
 *
 * Nothing about the menu is hard-coded in the layout: categories, items,
 * descriptions, images and prices come from data. Optional fields are simply
 * hidden when absent, and categories with no approved items yet show a quiet
 * empty state instead of invented content.
 *
 * Layout: one stable structure for every category — title (and image, when
 * supplied) in a left column, items in a wider right column. Categories
 * without images keep the same grid, so nothing collapses or stretches.
 */
export function SolMenu() {
  return (
    <div className="mt-14 space-y-16 md:space-y-20">
      {solContent.menuCategories.map((category) => (
        <MenuCategory key={category.id} category={category} />
      ))}
    </div>
  );
}

function MenuCategory({ category }: { category: SolMenuCategory }) {
  const items = publishedItems(category);

  return (
    <section aria-labelledby={`menu-${category.id}`} className="scroll-mt-24">
      <div className="grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <h3
            id={`menu-${category.id}`}
            className="font-display text-2xl tracking-tight sm:text-3xl"
          >
            {category.title}
          </h3>
          {category.intro ? (
            <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-muted">
              {category.intro}
            </p>
          ) : null}
          {category.image ? (
            <div className="relative mt-6 aspect-[4/3] overflow-hidden">
              <Image
                src={category.image}
                alt={category.alt ?? category.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>

        <div className="md:col-span-8">
          {items.length > 0 ? (
            <ul className="divide-y divide-line border-y border-line">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-6 py-5"
                >
                  <div>
                    <p className="font-display text-lg tracking-tight">
                      {item.name}
                    </p>
                    {item.description ? (
                      <p className="mt-1 max-w-[46ch] text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                  {item.price ? (
                    <p className="shrink-0 font-display text-base tabular-nums">
                      {item.price}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState note="Menu details for this category are being finalised and will be published here soon.">
              <a
                href="mailto:info@gundubaburuchulu.com?subject=SOL%20Caf%C3%A9%20menu%20enquiry"
                className="text-sm font-semibold text-terracotta underline underline-offset-4 transition-colors hover:text-ink"
              >
                Ask us what&apos;s on today
              </a>
            </EmptyState>
          )}
        </div>
      </div>
    </section>
  );
}
