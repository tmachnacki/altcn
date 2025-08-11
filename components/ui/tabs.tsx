"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { Tron } from "~/components/ui/tron";

const tabsListVariants = tv({
  base: [
    "[--tabs-list-p:--spacing(1)]",
    "flex h-fit w-full flex-nowrap items-center gap-1 rounded-lg p-(--tabs-list-p) text-muted-foreground",
    "data-[orientation=horizontal]:flex-row data-[orientation=vertical]:w-fit data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
  ],
  variants: {
    variant: {
      outline: "border border-border bg-transparent shadow-xs",
      muted: "bg-muted",
      faded: "border border-faded-border bg-faded",
      underlined: [
        "border-border bg-transparent",
        "data-[orientation=horizontal]:rounded-b-none data-[orientation=horizontal]:border-b data-[orientation=horizontal]:px-0",
        "data-[orientation=vertical]:rounded-l-none data-[orientation=vertical]:border-l data-[orientation=vertical]:py-0",
      ],
      ghost:
        "bg-transparent data-[orientation=horizontal]:px-0 data-[orientation=vertical]:py-0",
      translucent:
        "border border-border bg-card-translucent shadow-xs backdrop-blur-card-translucent",
    },
  },
  defaultVariants: {
    variant: "muted",
  },
});

const tabsTriggerVariants = tv({
  base: [
    "relative isolate inline-flex h-(--size-md) flex-1 items-center justify-center gap-2 rounded-md px-3 py-1 text-base font-medium whitespace-nowrap text-muted-foreground select-none data-[state=inactive]:hover:text-subtle-foreground sm:h-(--size-sm) sm:gap-1.5 sm:px-2.5 sm:text-sm",
    "data-[orientation=vertical]:w-full data-[orientation=vertical]:flex-none data-[orientation=vertical]:justify-start",
    "outline-0 outline-offset-1 focus-visible:z-10 focus-visible:outline-2",

    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:grow-0 **:[svg]:not-[[class*='size-']]:size-(--icon-lg) sm:**:[svg]:not-[[class*='size-']]:size-(--icon-md)",

    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  ],
  variants: {
    variant: {
      // -- base --
      default: [
        "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:bg-base-700",
        "data-[state=active]:shadow-[0_0_4px_0_rgba(0,0,0,0.04),0_2px_8px_0_rgba(0,0,0,0.06),0_0_2px_-1px_rgba(0,0,0,0.25)]",
      ],

      contrast: [
        "data-[state=active]:bg-contrast data-[state=active]:text-contrast-foreground",
      ],

      base: "data-[state=active]:bg-base-bg data-[state=active]:text-base-foreground data-[state=active]:shadow-sm",

      outline:
        "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs data-[state=active]:inset-ring data-[state=active]:inset-ring-border",

      accent:
        "data-[state=active]:bg-muted data-[state=active]:text-accent-foreground",

      surface:
        "data-[state=active]:bg-faded data-[state=active]:text-accent-foreground data-[state=active]:inset-ring data-[state=active]:inset-ring-faded-border",

      underlined: [
        "-outline-offset-2 data-[state=active]:text-foreground",
        "data-[state=active]:before:border-foreground",
      ],

      "base-gradient": [
        "data-[state=active]:bg-linear-(--base-gradient) data-[state=active]:text-base-foreground",
      ],

      ghost: "data-[state=active]:text-foreground",

      // -- primary --
      primary:
        "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",

      "primary-accent":
        "data-[state=active]:bg-primary-muted data-[state=active]:text-primary-accent-foreground",

      "primary-muted":
        "data-[state=active]:bg-primary-muted data-[state=active]:text-primary-muted-foreground",

      "primary-surface":
        "data-[state=active]:bg-primary-faded data-[state=active]:text-primary-accent-foreground data-[state=active]:inset-ring data-[state=active]:inset-ring-primary-faded-border",

      "primary-faded":
        "data-[state=active]:bg-primary-faded data-[state=active]:text-primary-muted-foreground data-[state=active]:inset-ring data-[state=active]:inset-ring-primary-faded-border",

      "primary-underlined":
        "-outline-offset-2 data-[state=active]:text-primary-muted-foreground data-[state=active]:before:border-primary",

      "primary-tron": [
        "data-[state=active]:bg-background data-[state=active]:bg-linear-(--primary-tron-gradient) data-[state=active]:text-primary-accent-foreground data-[state=active]:inset-ring data-[state=active]:inset-ring-primary-tron-border",
        "data-[state=active]:[--tron-beam:var(--color-primary)] data-[state=active]:[--tron-blur:var(--color-primary-tron-blur)]",
      ],

      "primary-gradient": [
        "data-[state=active]:bg-linear-(--primary-gradient) data-[state=active]:text-primary-foreground",
      ],

      "primary-ghost": "data-[state=active]:text-primary-muted-foreground",
      // -- secondary --
      secondary:
        "data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-sm",

      "secondary-accent":
        "data-[state=active]:bg-secondary-muted data-[state=active]:text-secondary-accent-foreground",

      "secondary-muted":
        "data-[state=active]:bg-secondary-muted data-[state=active]:text-secondary-muted-foreground",

      "secondary-surface":
        "data-[state=active]:bg-secondary-faded data-[state=active]:text-secondary-accent-foreground data-[state=active]:inset-ring data-[state=active]:inset-ring-secondary-faded-border",

      "secondary-faded":
        "data-[state=active]:bg-secondary-faded data-[state=active]:text-secondary-muted-foreground data-[state=active]:inset-ring data-[state=active]:inset-ring-secondary-faded-border",

      "secondary-underlined":
        "-outline-offset-2 data-[state=active]:text-secondary-muted-foreground data-[state=active]:before:border-secondary",

      "secondary-tron": [
        "data-[state=active]:bg-background data-[state=active]:bg-linear-(--secondary-tron-gradient) data-[state=active]:text-secondary-accent-foreground data-[state=active]:inset-ring data-[state=active]:inset-ring-secondary-tron-border",
        "data-[state=active]:[--tron-beam:var(--color-secondary)] data-[state=active]:[--tron-blur:var(--color-secondary-tron-blur)]",
      ],

      "secondary-gradient": [
        "data-[state=active]:bg-linear-(--secondary-gradient) data-[state=active]:text-secondary-foreground",
      ],

      "secondary-ghost": "data-[state=active]:text-secondary-muted-foreground",
    },
  },
  compoundVariants: [
    {
      variant: ["underlined", "primary-underlined", "secondary-underlined"],
      className: [
        "before:absolute before:border-transparent hover:data-[state=inactive]:before:border-border",
        "data-[orientation=horizontal]:before:inset-x-0 data-[orientation=horizontal]:before:-bottom-(--tabs-list-p) data-[orientation=horizontal]:before:h-(--tabs-list-p) data-[orientation=horizontal]:before:w-full data-[orientation=horizontal]:before:border-b-2",
        "data-[orientation=vertical]:before:inset-y-0 data-[orientation=vertical]:before:-left-(--tabs-list-p) data-[orientation=vertical]:before:h-full data-[orientation=vertical]:before:w-(--tabs-list-p) data-[orientation=vertical]:before:border-l-2",
      ],
    },
    {
      variant: [
        "default",
        "base",
        "outline",
        "accent",
        "surface",
        "underlined",
        "base-gradient",
        "ghost",
      ],
      className: "outline-outline",
    },
    {
      variant: [
        "primary",
        "primary-accent",
        "primary-muted",
        "primary-surface",
        "primary-faded",
        "primary-underlined",
        "primary-tron",
        "primary-gradient",
        "primary-ghost",
      ],
      className: "outline-primary",
    },
    {
      variant: [
        "secondary",
        "secondary-accent",
        "secondary-muted",
        "secondary-surface",
        "secondary-faded",
        "secondary-underlined",
        "secondary-tron",
        "secondary-gradient",
        "secondary-ghost",
      ],
      className: "outline-secondary",
    },
  ],
  defaultVariants: {
    variant: "default",
  },
});

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        "flex gap-4 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row",
        className
      )}
      {...props}
    />
  );
}

type TabsListContextProps = {
  variants?: {
    list?: VariantProps<typeof tabsListVariants>["variant"];
    trigger?: VariantProps<typeof tabsTriggerVariants>["variant"];
  };
};

const TabsListContext = React.createContext<TabsListContextProps>({});

function TabsList({
  className,
  variants,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & TabsListContextProps) {
  return (
    <TabsListContext.Provider value={{ variants }}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(tabsListVariants({ variant: variants?.list }), className)}
        {...props}
      />
    </TabsListContext.Provider>
  );
}

function TabsTrigger({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants>) {
  const { variants } = React.useContext(TabsListContext);
  const _variant = variant || variants?.trigger;

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        tabsTriggerVariants({
          variant: _variant,
        }),
        "group/tabs-trigger",
        className
      )}
      {...props}
    >
      {_variant?.includes("tron") && (
        <>
          <Tron
            side="bottom"
            type="beam"
            border="inset"
            className="via-(--tron-beam) opacity-0 group-data-[state=active]/tabs-trigger:opacity-100"
          />
          <Tron
            side="bottom"
            type="blur"
            border="inset"
            className="via-(--tron-blur) opacity-0 group-data-[state=active]/tabs-trigger:opacity-100"
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

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
  tabsTriggerVariants,
};
