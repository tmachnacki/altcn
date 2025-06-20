"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { componentLinks } from "~/lib/component-links";
import { cn } from "~/lib/utils";

import { buttonVariants } from "~/components/ui/button";

export function ComponentPager({ className }: { className?: string }) {
  const pathname = usePathname();

  const currentIndex = componentLinks.findIndex(
    (componentLink) => componentLink.href === pathname
  );

  return (
    <nav
      className={cn(
        "flex min-h-0 items-center justify-between gap-2",
        className
      )}
    >
      {currentIndex > 0 ? (
        <Link
          href={componentLinks[currentIndex - 1].href}
          className={buttonVariants({
            variant: "muted",
            className: "mr-auto",
          })}
        >
          <ChevronLeftIcon className="size-4" />
          {componentLinks[currentIndex - 1].label}
        </Link>
      ) : null}
      {currentIndex < componentLinks.length - 1 ? (
        <Link
          href={componentLinks[currentIndex + 1].href}
          className={buttonVariants({
            variant: "muted",
            className: "ml-auto",
          })}
        >
          {componentLinks[currentIndex + 1].label}
          <ChevronRightIcon className="size-4" />
        </Link>
      ) : null}
    </nav>
  );
}
