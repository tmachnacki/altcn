"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tabsListVariants = cva(
  "inline-flex h-10 w-fit flex-nowrap items-center justify-center p-[var(--tabs-list-padding)] text-muted-foreground [--tabs-list-padding:--spacing(1)]",
  {
    variants: {
      variant: {
        default: "rounded-lg bg-muted",
        underlined: "rounded-none border-b border-border bg-transparent px-0",
        ghost: "rounded-none bg-transparent",
        outline: "rounded-lg border border-border bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// TODO: better focus outlines
const tabsTriggerVariants = cva(
  [
    "relative isolate inline-flex h-full flex-1 items-center justify-center gap-1.5 rounded-md px-2.5 py-1 text-sm font-medium whitespace-nowrap text-muted-foreground select-none not-disabled:data-[state=inactive]:hover:text-subtle-foreground",
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

        outline:
          "data-[state=active]:border data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs",

        accent:
          "data-[state=active]:bg-accent data-[state=active]:text-accent-foreground",

        underlined: "rounded-none data-[state=active]:text-foreground",

        ghost: "data-[state=active]:text-foreground",

        primary:
          "focus-visible:outline-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",

        "primary-accent":
          "focus-visible:outline-primary data-[state=active]:bg-primary-muted data-[state=active]:text-primary-accent-foreground",

        "primary-muted":
          "focus-visible:outline-primary data-[state=active]:bg-primary-muted data-[state=active]:text-primary-muted-foreground",

        "primary-surface":
          "focus-visible:outline-primary data-[state=active]:border data-[state=active]:border-border-primary-faded data-[state=active]:bg-primary-faded data-[state=active]:text-primary-accent-foreground",

        "primary-faded":
          "focus-visible:outline-primary data-[state=active]:border data-[state=active]:border-border-primary-faded data-[state=active]:bg-primary-faded data-[state=active]:text-primary-muted-foreground",

        "primary-underlined":
          "rounded-none first:rounded-l-md last:rounded-r-md focus-visible:outline-primary data-[state=active]:text-primary",

        "primary-ghost":
          "focus-visible:outline-primary data-[state=active]:text-primary",

        secondary:
          "focus-visible:outline-secondary data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-sm",

        "secondary-accent":
          "focus-visible:outline-secondary data-[state=active]:bg-secondary-muted data-[state=active]:text-secondary-accent-foreground",

        "secondary-muted":
          "focus-visible:outline-secondary data-[state=active]:bg-secondary-muted data-[state=active]:text-secondary-muted-foreground",

        "secondary-surface":
          "focus-visible:outline-secondary data-[state=active]:border data-[state=active]:border-border-secondary-faded data-[state=active]:bg-secondary-faded data-[state=active]:text-secondary-accent-foreground",

        "secondary-faded":
          "focus-visible:outline-secondary data-[state=active]:border data-[state=active]:border-border-secondary-faded data-[state=active]:bg-secondary-faded data-[state=active]:text-secondary-muted-foreground",

        "secondary-underlined":
          "rounded-none first:rounded-l-md last:rounded-r-md focus-visible:outline-secondary data-[state=active]:text-secondary-500",

        "secondary-ghost":
          "focus-visible:outline-secondary data-[state=active]:text-secondary-500",
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
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        tabsTriggerVariants({ variant }),
        "group/tabs-trigger",
        className,
      )}
      {...props}
    >
      {variant?.includes("underlined") && (
        <div
          data-slot="tabs-trigger-underline"
          aria-hidden="true"
          role="presentation"
          className={cn(
            // use padding var as height to avoid flickering when hovering between trigger and underline indicator
            "absolute inset-x-0 -bottom-[var(--tabs-list-padding)] h-[var(--tabs-list-padding)] w-full border-b-2 border-transparent group-not-data-disabled/tabs-trigger:group-data-[state=inactive]/tabs-trigger:group-hover/tabs-trigger:border-border",
            variant === "underlined" &&
              "group-data-[state=active]/tabs-trigger:border-foreground",
            variant === "primary-underlined" &&
              "group-data-[state=active]/tabs-trigger:border-primary",
            variant === "secondary-underlined" &&
              "group-data-[state=active]/tabs-trigger:border-secondary",
          )}
        />
      )}
      {children}
    </TabsPrimitive.Trigger>
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
