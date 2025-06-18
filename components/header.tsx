"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "~/components/ui/button";
import { ModeToggle } from "~/components/mode-toggle";
import { GithubIcon } from "lucide-react";

const navItems = [
  {
    label: "Components",
    href: "/components",
  },
  {
    label: "Colors",
    href: "/colors",
  },
];

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
          <ul className="flex items-center justify-center gap-2">
            {navItems.map((navItem) => {
              const isActive = pathname.startsWith(navItem.href);
              return (
                <li key={navItem.href}>
                  <Button asChild variant={isActive ? "accent" : "ghost"} size="sm" className={isActive ? "" : "text-subtle-foreground"}>
                    <Link
                      href={navItem.href}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {navItem.label}
                    </Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>

        <ul className="ml-auto flex items-center gap-2">
          <li>
            <Button variant="ghost" size="icon-sm" asChild>
              <a href="https://github.com/tmachnacki/altcn" target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            </Button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
}
