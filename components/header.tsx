"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";

import { Button, buttonVariants } from "~/components/ui/button";
import { ModeToggle } from "~/components/mode-toggle";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 flex h-(--header-h) items-center border-b border-border/50 bg-background/90 py-2 backdrop-blur">
      <div className="container flex items-center gap-12">
        <Link href="/" className="inline-block leading-none">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-lg font-bold text-transparent">
            altcn
          </span>
        </Link>

        <nav className="block flex-1">
          <ul className="flex items-center gap-2">
            <li>
              <Link
                href="/components"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  pathname.startsWith("/components") && "bg-muted"
                )}
                aria-current={
                  pathname.startsWith("/components") ? "page" : undefined
                }
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                href="/colors"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  pathname.startsWith("/colors") && "bg-muted"
                )}
                aria-current={
                  pathname.startsWith("/colors") ? "page" : undefined
                }
              >
                Colors
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="ml-auto block">
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
}
