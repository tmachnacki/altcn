"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, MenuIcon } from "lucide-react";

import { componentLinks } from "~/lib/component-links";

import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { ModeToggle } from "~/components/mode-toggle";

const navPages = [
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
              classNames={{
                overlay: "lg:hidden",
                content: "overflow-y-auto lg:hidden",
              }}
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigation Menu
              </SheetDescription>
              <nav className="flex flex-1 flex-col px-6 py-12">
                <ul className="flex flex-col gap-8">
                  <li className="flex flex-col gap-3">
                    <div className="text-sm font-medium text-muted-foreground">
                      Menu
                    </div>
                    <ul className="flex flex-col gap-2">
                      {navPages.map((navPage) => {
                        return (
                          <li key={navPage.href}>
                            <SheetClose asChild>
                              <Link
                                href={navPage.href}
                                className={
                                  "text-base font-medium text-subtle-foreground"
                                }
                              >
                                {navPage.label}
                              </Link>
                            </SheetClose>
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
                            <SheetClose asChild>
                              <Link
                                href={componentLink.href}
                                className={
                                  "text-base font-medium text-subtle-foreground"
                                }
                              >
                                {componentLink.label}
                              </Link>
                            </SheetClose>
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
            {navPages.map((navPage) => {
              const isActive = pathname.startsWith(navPage.href);
              return (
                <li key={navPage.href}>
                  <Button
                    asChild
                    variant={isActive ? "accent" : "ghost"}
                    size="sm"
                    className={`font-medium ${isActive ? "" : "text-subtle-foreground"}`}
                  >
                    <Link
                      href={navPage.href}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {navPage.label}
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
