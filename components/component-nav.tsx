"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";

const COMPONENTS = [
  {
    label: "Accordion",
    href: "/components/accordion",
  },
  {
    label: "Alert",
    href: "/components/alert",
  },
  {
    label: "Alert Dialog",
    href: "/components/alert-dialog",
  },
  {
    label: "Avatar",
    href: "/components/avatar",
  },
  {
    label: "Badge",
    href: "/components/badge",
  },
  {
    label: "Button",
    href: "/components/button",
  },
  {
    label: "Card",
    href: "/components/card",
  },
  {
    label: "Checkbox",
    href: "/components/checkbox",
  },
  {
    label: "Context Menu",
    href: "/components/context-menu",
  },
  {
    label: "Dialog",
    href: "/components/dialog",
  },
  {
    label: "Dropdown Menu",
    href: "/components/dropdown-menu",
  },
  {
    label: "Input",
    href: "/components/input",
  },
  {
    label: "Input OTP",
    href: "/components/input-otp",
  },
  {
    label: "Input Password",
    href: "/components/input-password",
  },
  {
    label: "Menubar",
    href: "/components/menubar",
  },
  {
    label: "Notification",
    href: "/components/notification",
  },
  {
    label: "Pagination",
    href: "/components/pagination",
  },
  {
    label: "Popover",
    href: "/components/popover",
  },
  {
    label: "Progress",
    href: "/components/progress",
  },
  {
    label: "Radio Group",
    href: "/components/radio-group",
  },
  {
    label: "Select",
    href: "/components/select",
  },
  {
    label: "Sheet",
    href: "/components/sheet",
  },
  {
    label: "Skeleton",
    href: "/components/skeleton",
  },
  {
    label: "Slider",
    href: "/components/slider",
  },
  {
    label: "Sonner",
    href: "/components/sonner",
  },
  {
    label: "Speed Dial",
    href: "/components/speed-dial",
  },
  {
    label: "Switch",
    href: "/components/switch",
  },
  {
    label: "Tabs",
    href: "/components/tabs",
  },
  {
    label: "Toggle",
    href: "/components/toggle",
  },
  {
    label: "Tooltip",
    href: "/components/tooltip",
  },
] as const satisfies {
  label: string;
  href: string;
}[];

export function ComponentNav() {
  const pathname = usePathname();
  return (
    <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto">
      <ul className="flex min-h-0 flex-1 flex-col gap-2">
        {COMPONENTS.map((component) => {
          const isActive = pathname === component.href;
          return (
            <li key={component.href} className="w-full">
              <Link
                href={component.href}
                className={cn(
                  "relative isolate flex shrink-0 items-center gap-2 overflow-visible rounded-md px-3 py-1.5 text-sm font-medium outline-outline hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2",
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
