"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, MenuIcon } from "lucide-react";

import { componentLinks } from "~/lib/component-links";

import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { ModeToggle } from "~/components/mode-toggle";

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
      <div className="container flex items-center gap-6">
        <div className="flex flex-none items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="lg:hidden">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="overflow-y-auto lg:hidden"
              overlayClassName="lg:hidden"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <nav className="flex flex-1 flex-col px-6 py-12">
                <ul className="flex flex-col gap-8">
                  <li className="flex flex-col gap-3">
                    <div className="text-sm font-medium text-muted-foreground">
                      Menu
                    </div>
                    <ul className="flex flex-col gap-2">
                      {navItems.map((navItem) => {
                        return (
                          <li key={navItem.href}>
                            <Link
                              href={navItem.href}
                              className={"text-base font-medium"}
                            >
                              {navItem.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                  <li className="flex flex-col gap-3">
                    <div className="text-sm font-medium text-muted-foreground">
                      Components
                    </div>
                    <ul className="flex flex-col gap-2">
                      {componentLinks.map((componentLink) => {
                        return (
                          <li key={componentLink.href}>
                            <Link
                              href={componentLink.href}
                              className={"text-base font-medium"}
                            >
                              {componentLink.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="inline-block">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-lg font-bold text-transparent">
              Altcn
            </span>
          </Link>
        </div>

        <nav className="hidden flex-1 sm:block">
          <ul className="flex items-center justify-center gap-2">
            {navItems.map((navItem) => {
              const isActive = pathname.startsWith(navItem.href);
              return (
                <li key={navItem.href}>
                  <Button
                    asChild
                    variant={isActive ? "accent" : "ghost"}
                    size="sm"
                    className={isActive ? "" : "text-subtle-foreground"}
                  >
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

        <ul className="ml-auto flex flex-none items-center gap-2">
          <li>
            <Button variant="ghost" size="icon-sm" asChild>
              <a
                href="https://github.com/tmachnacki/altcn"
                target="_blank"
                rel="noopener noreferrer"
              >
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
