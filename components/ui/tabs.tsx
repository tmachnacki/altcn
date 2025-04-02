"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tabsListVariants = cva(
  "inline-flex h-10 w-fit flex-nowrap items-center justify-center rounded-lg p-[var(--tabs-list-padding)] text-muted-foreground [--tabs-list-padding:--spacing(1)]",
  {
    variants: {
      variant: {
        muted: "bg-muted",
        outline: "border border-border bg-transparent",
        faded: "border border-border-faded bg-faded",
        underlined: "rounded-b-none border-b border-border bg-transparent px-0",
        ghost: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "muted",
    },
  },
);

const tabsTriggerVariants = cva(
  [
    "relative isolate inline-flex h-full flex-1 items-center justify-center gap-1.5 rounded-md px-2.5 py-1 text-sm font-medium whitespace-nowrap text-muted-foreground select-none not-disabled:data-[state=inactive]:hover:text-subtle-foreground",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "outline-0 outline-offset-1 focus-visible:z-10 focus-visible:outline-2",
  ],
  {
    variants: {
      variant: {
        default: [
          "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:bg-base-700",
          "data-[state=active]:shadow-[0_0_4px_0_rgba(0,0,0,0.04),0_2px_8px_0_rgba(0,0,0,0.06),0_0_2px_-1px_rgba(0,0,0,0.25)]",
        ],

        base: "data-[state=active]:bg-base-600 data-[state=active]:text-white data-[state=active]:shadow-sm",

        outline:
          "data-[state=active]:border data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs",

        accent:
          "data-[state=active]:bg-accent data-[state=active]:text-accent-foreground",

        surface:
          "data-[state=active]:border data-[state=active]:border-border-faded data-[state=active]:bg-faded data-[state=active]:text-accent-foreground",

        underlined: [
          "-outline-offset-2 data-[state=active]:text-foreground",
          "data-[state=active]:*:data-[slot=tabs-trigger-underline]:border-foreground",
        ],

        ghost: "data-[state=active]:text-foreground",

        primary:
          "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",

        "primary-accent":
          "data-[state=active]:bg-primary-muted data-[state=active]:text-primary-accent-foreground",

        "primary-muted":
          "data-[state=active]:bg-primary-muted data-[state=active]:text-primary-muted-foreground",

        "primary-surface":
          "data-[state=active]:border data-[state=active]:border-border-primary-faded data-[state=active]:bg-primary-faded data-[state=active]:text-primary-accent-foreground",

        "primary-faded":
          "data-[state=active]:border data-[state=active]:border-border-primary-faded data-[state=active]:bg-primary-faded data-[state=active]:text-primary-muted-foreground",

        "primary-underlined":
          "-outline-offset-2 data-[state=active]:text-primary data-[state=active]:*:data-[slot=tabs-trigger-underline]:border-primary",

        "primary-ghost": "data-[state=active]:text-primary",

        "primary-tron": [
          "data-[state=active]:border data-[state=active]:border-primary/30 data-[state=active]:bg-background data-[state=active]:bg-gradient-to-t data-[state=active]:from-primary/15 data-[state=active]:to-transparent data-[state=active]:text-primary-muted-foreground",
          "data-[state=active]:*:data-[slot=tron-blur]:via-primary-tron-blur data-[state=active]:*:data-[slot=tron-wide]:via-primary",
        ],

        secondary:
          "data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-sm",

        "secondary-accent":
          "data-[state=active]:bg-secondary-muted data-[state=active]:text-secondary-accent-foreground",

        "secondary-muted":
          "data-[state=active]:bg-secondary-muted data-[state=active]:text-secondary-muted-foreground",

        "secondary-surface":
          "data-[state=active]:border data-[state=active]:border-border-secondary-faded data-[state=active]:bg-secondary-faded data-[state=active]:text-secondary-accent-foreground",

        "secondary-faded":
          "data-[state=active]:border data-[state=active]:border-border-secondary-faded data-[state=active]:bg-secondary-faded data-[state=active]:text-secondary-muted-foreground",

        "secondary-underlined":
          "-outline-offset-2 data-[state=active]:text-secondary-500 data-[state=active]:*:data-[slot=tabs-trigger-underline]:border-secondary",

        "secondary-ghost": "data-[state=active]:text-secondary-500",

        "secondary-tron": [
          "data-[state=active]:border data-[state=active]:border-secondary/30 data-[state=active]:bg-background data-[state=active]:bg-gradient-to-t data-[state=active]:from-secondary/15 data-[state=active]:to-transparent data-[state=active]:text-secondary-muted-foreground",
          "data-[state=active]:*:data-[slot=tron-blur]:via-secondary-tron-blur data-[state=active]:*:data-[slot=tron-wide]:via-secondary",
        ],
      },
    },
    compoundVariants: [
      {
        variant: [
          "default",
          "base",
          "outline",
          "accent",
          "surface",
          "underlined",
          "ghost",
        ],
        className: "focus-visible:outline-outline",
      },
      {
        variant: [
          "primary",
          "primary-accent",
          "primary-muted",
          "primary-surface",
          "primary-faded",
          "primary-underlined",
          "primary-ghost",
          "primary-tron",
        ],
        className: "focus-visible:outline-primary",
      },
      {
        variant: [
          "secondary",
          "secondary-accent",
          "secondary-muted",
          "secondary-surface",
          "secondary-faded",
          "secondary-underlined",
          "secondary-ghost",
          "secondary-tron",
        ],
        className: "focus-visible:outline-secondary",
      },
    ],
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

type TabsListVariantsContextType = {
  variant?: VariantProps<typeof tabsListVariants>["variant"];
  triggersVariant?: VariantProps<typeof tabsTriggerVariants>["variant"];
};

const TabsListVariantsContext =
  React.createContext<TabsListVariantsContextType>({
    variant: "muted",
    triggersVariant: "default",
  });

function TabsList({
  className,
  variant = "muted",
  triggersVariant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  TabsListVariantsContextType) {
  return (
    <TabsListVariantsContext.Provider value={{ variant, triggersVariant }}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(tabsListVariants({ variant }), className)}
        {...props}
      />
    </TabsListVariantsContext.Provider>
  );
}

function TabsTrigger({
  className,
  variant: variantOverride,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants>) {
  const { triggersVariant } = React.useContext(TabsListVariantsContext);
  const variant = variantOverride ?? triggersVariant;
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
          )}
        />
      )}
      {variant?.includes("tron") && (
        <>
          <span
            aria-hidden="true"
            data-slot="tron-wide"
            className="absolute -bottom-px left-[5%] block h-[2px] w-[90%] bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-data-[state=active]/tabs-trigger:opacity-100 motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            data-slot="tron-blur"
            className="absolute -bottom-px left-[20%] block h-[2px] w-[60%] bg-gradient-to-r from-transparent to-transparent opacity-0 blur-sm transition-opacity duration-300 group-data-[state=active]/tabs-trigger:opacity-100 motion-reduce:transition-none"
          />
        </>
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
