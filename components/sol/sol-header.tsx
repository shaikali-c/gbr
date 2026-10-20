"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { SolWordmark } from "../wordmark";

const solLinks = [
  { label: "About", href: "/sol-cafe#about" },
  { label: "Menu", href: "/sol-cafe#menu" },
  { label: "Subscriptions", href: "/sol-cafe#subscriptions" },
  { label: "Visit", href: "/sol-cafe#visit" },
];

/**
 * SOL header — the café's own treatment of the shared navigation pattern:
 * serif wordmark, warm palette, section anchors plus a route back to GBR.
 */
export function SolHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const firstLink = panelRef.current?.querySelector("a");
    firstLink?.focus();

    function onKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    function onHashChange() {
      setOpen(false);
    }

    document.addEventListener("keydown", onKeydown);
    window.addEventListener("hashchange", onHashChange);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeydown);
      window.removeEventListener("hashchange", onHashChange);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <SolWordmark />

        <nav aria-label="SOL sections" className="hidden items-center gap-7 lg:flex">
          {solLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-1 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact?type=sol-cafe"
            className="btn btn-primary px-5 py-2.5 text-[0.8rem]"
          >
            Enquire
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink lg:hidden"
          aria-expanded={open}
          aria-controls="sol-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      {open ? (
        <div
          id="sol-mobile-nav"
          ref={panelRef}
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-canvas lg:hidden"
        >
          <nav
            aria-label="SOL sections"
            className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6"
          >
            {solLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="rise border-b border-line py-4 font-display text-2xl tracking-tight text-ink/90 transition-colors hover:text-ink"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/contact?type=sol-cafe" className="btn btn-primary">
                Enquire about SOL
              </Link>
              <Link href="/" className="btn btn-secondary">
                Visit the GBR site
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
