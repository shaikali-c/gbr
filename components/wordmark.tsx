import Image from "next/image";
import Link from "next/link";

/**
 * Brand lockups.
 *
 * Both brands now use the supplied logo files (public/logo/). The GBR
 * emblem has a near-black background and the SOL mark sits on cream, so
 * each renders naturally against its page palette. Swap the files in
 * public/logo/ to update the artwork everywhere at once.
 */

type WordmarkProps = {
  className?: string;
};

/** GBR parent-brand lockup: emblem + name. */
export function GbrWordmark({ className = "" }: WordmarkProps) {
  return (
    <Link
      href="/"
      aria-label="Gundu Babu Ruchulu — home"
      className={`group inline-flex items-center gap-3 outline-offset-4 ${className}`}
    >
      <Image
        src="/logo/gbr.jpg"
        alt=""
        aria-hidden="true"
        width={1600}
        height={1600}
        className="h-10 w-10 rounded object-cover sm:h-11 sm:w-11"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-semibold tracking-[0.02em] text-ink sm:text-lg">
          Gundu Babu Ruchulu
        </span>
        <span
          aria-hidden="true"
          className="mt-1.5 h-px w-full bg-accent transition-all duration-300 group-hover:w-[115%]"
        />
      </span>
    </Link>
  );
}

/** SOL café lockup: emblem + relation line. */
export function SolWordmark({ className = "" }: WordmarkProps) {
  return (
    <Link
      href="/sol-cafe"
      aria-label="SOL Café — home"
      className={`group inline-flex items-center gap-3 outline-offset-4 ${className}`}
    >
      <Image
        src="/logo/sol.jpg"
        alt=""
        aria-hidden="true"
        width={1600}
        height={1600}
        className="h-10 w-10 object-cover sm:h-12 sm:w-12"
      />
      <span className="hidden flex-col leading-none md:flex">
        <span className="font-display text-lg font-semibold tracking-[0.14em] text-ink">
          SOL Café
        </span>
        <span className="mt-1 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-muted">
          by Gundu Babu Ruchulu
        </span>
      </span>
    </Link>
  );
}
