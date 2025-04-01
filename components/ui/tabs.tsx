"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tabsListVariants = cva(
  "inline-flex h-fit w-fit flex-nowrap items-center justify-center p-[var(--tabs-list-padding)] text-muted-foreground [--tabs-list-padding:--spacing(1)]",
  {
    variants: {
      variant: {
        default: "rounded-lg bg-muted dark:bg-accent",
        underlined: "rounded-none border-b border-border bg-transparent px-0",
        ghost: "rounded-lg bg-transparent",
        bordered: "rounded-lg border border-border bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const tabsTriggerVariants = cva(
  [
    "relative isolate inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-md px-2.5 py-1 text-sm font-medium whitespace-nowrap text-muted-foreground select-none not-disabled:data-[state=inactive]:hover:text-subtle-foreground",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "outline-0 outline-offset-2 focus-visible:z-10 focus-visible:outline-2",
  ],
  {
    variants: {
      variant: {
        default:
          "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm dark:data-[state=active]:bg-base-700",

        base: "data-[state=active]:bg-base-600 data-[state=active]:text-white data-[state=active]:shadow-sm",

        accent:
          "data-[state=active]:bg-accent data-[state=active]:text-accent-foreground",

        underlined:
          "rounded-none before:absolute before:inset-x-0 before:-bottom-[var(--tabs-list-padding)] before:h-[2px] before:w-full before:bg-transparent before:content-[''] data-[state=active]:text-foreground data-[state=active]:before:bg-foreground not-disabled:data-[state=inactive]:hover:before:bg-base-200 dark:not-disabled:data-[state=inactive]:hover:before:bg-base-800",

        ghost: "data-[state=active]:text-foreground",

        primary:
          "focus-visible:outline-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",

        "primary-muted":
          "focus-visible:outline-primary data-[state=active]:bg-primary-muted data-[state=active]:text-primary-muted-foreground",

        "primary-underlined":
          "rounded-none before:absolute before:inset-x-0 before:-bottom-[var(--tabs-list-padding)] before:h-[2px] before:w-full before:bg-transparent before:content-[''] focus-visible:outline-primary data-[state=active]:text-primary data-[state=active]:before:bg-primary not-disabled:data-[state=inactive]:hover:before:bg-base-200 dark:not-disabled:data-[state=inactive]:hover:before:bg-base-800",

        "primary-ghost":
          "focus-visible:outline-primary data-[state=active]:text-primary",

        secondary:
          "data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-sm",

        "secondary-muted": "",
        "secondary-underlined": "",
        "secondary-ghost": "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
