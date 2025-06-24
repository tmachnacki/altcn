"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { componentLinks } from "~/lib/component-links";
import { cn } from "~/lib/utils";

export function ComponentNav() {
  const pathname = usePathname();
  return (
    <nav className="no-scrollbar h-full overflow-auto py-content">
      <ul className="flex min-h-0 flex-1 flex-col gap-1">
        {componentLinks.map((component) => {
          const isActive = pathname === component.href;
          return (
            <li key={component.href} className="w-full">
              <Link
                href={component.href}
                className={cn(
                  "text-[0.8rem] flex h-8 shrink-0 items-center justify-between gap-2 rounded-md px-2 font-medium outline-outline hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2",
                  isActive
                    ? "pointer-events-none bg-primary-muted text-primary-muted-foreground"
                    : "text-muted-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {component.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
