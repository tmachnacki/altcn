"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { toggleVariants } from "~/components/ui/toggle";
import { Tron } from "~/components/ui/tron";

const compactToggleGroupItemVariants = tv({
  base: [
    "[--inset-border:transparent]",
    "hover:z-10 focus:z-20 focus-visible:-outline-offset-0",
    "not-first:-ml-px not-first:rounded-l-none not-last:rounded-r-none",
    "data-[state=on]:shadow-[inset_1px_0_0_0_var(--inset-border),inset_-1px_0_0_0_var(--inset-border)]",
    "data-[state=on]:first:shadow-[inset_-1px_0_0_0_var(--inset-border)]",
    "data-[state=on]:last:shadow-[inset_1px_0_0_0_var(--inset-border)]",
  ],
  variants: {
    size: {
      "2xs":
        "not-first:min-w-calc[(var(--size-xs)+1px)] sm:not-first:min-w-calc[(var(--size-2xs)+1px)]",
      xs: "not-first:min-w-calc[(var(--size-sm)+1px)] sm:not-first:min-w-calc[(var(--size-xs)+1px)]",
      sm: "not-first:min-w-calc[(var(--size-md)+1px)] sm:not-first:min-w-calc[(var(--size-sm)+1px)]",
      md: "not-first:min-w-calc[(var(--size-lg)+1px)] sm:not-first:min-w-calc[(var(--size-md)+1px)]",
      lg: "not-first:min-w-calc[(var(--size-xl)+1px)] sm:not-first:min-w-calc[(var(--size-lg)+1px)]",
    },
    variant: {
      outline: "",
      contrast:
        "outline-muted-foreground [--inset-border:--alpha(var(--color-contrast-foreground)/20%)]",

      base: "[--inset-border:--alpha(var(--color-base-foreground)/20%)]",

      accent: "[--inset-border:var(--color-faded-border)]",

      muted: "[--inset-border:var(--color-faded-border)]",

      surface: "[--inset-border:var(--color-faded-border)]",

      faded: "[--inset-border:var(--color-faded-border)]",

      "base-gradient":
        "[--inset-border:--alpha(var(--color-base-foreground)/20%)]",

      primary:
        "outline-primary-accent-foreground [--inset-border:--alpha(var(--color-primary-200)/20%)]",

      "primary-accent": "[--inset-border:var(--color-primary-faded-border)]",

      "primary-muted":
        "[--inset-border:--alpha(var(--color-primary-foreground)/20%)]",

      "primary-surface": "[--inset-border:var(--color-primary-faded-border)]",

      "primary-faded":
        "[--inset-border:--alpha(var(--color-primary-foreground)/20%)]",

      "primary-tron": "[--inset-border:var(--color-primary-tron-border)]",

      "primary-gradient":
        "outline-primary-accent-foreground [--inset-border:--alpha(var(--color-primary-foreground)/20%)]",

      secondary:
        "outline-secondary-accent-foreground [--inset-border:--alpha(var(--color-secondary-foreground)/20%)]",

      "secondary-accent":
        "[--inset-border:var(--color-secondary-faded-border)]",

      "secondary-muted":
        "[--inset-border:--alpha(var(--color-secondary-foreground)/20%)]",

      "secondary-surface":
        "[--inset-border:var(--color-secondary-faded-border)]",

      "secondary-faded":
        "[--inset-border:--alpha(var(--color-secondary-foreground)/20%)]",

      "secondary-tron": "[--inset-border:var(--color-secondary-tron-border)]",

      "secondary-gradient":
        "outline-secondary-accent-foreground [--inset-border:--alpha(var(--color-secondary-foreground)/20%)]",
    },
  },
  defaultVariants: {
    variant: "accent",
    size: "md",
  },
});

type ToggleGroupContextProps = VariantProps<typeof toggleVariants> & {
  spacing?: "compact" | "split";
};

const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({});

function ToggleGroup({
  className,
  variant = "accent",
  size = "md",
  spacing = "split",
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  ToggleGroupContextProps) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      className={cn(
        "group/toggle-group relative isolate flex items-center",
        spacing === "split" &&
          {
            "2xs": "gap-0.5",
            xs: "gap-0.5",
            sm: "gap-[calc(var(--spacing)*0.75)]",
            md: "gap-1 sm:gap-[calc(var(--spacing)*0.75)]",
            lg: "gap-1",
          }[size || "md"],
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);
  const _variant = variant || context.variant;

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({
          variant: _variant,
          size: size || context.size,
        }),
        context.spacing === "compact" &&
          compactToggleGroupItemVariants({
            variant: _variant,
            size: size || context.size,
          }),
        "group/toggle-group-item",
        className
      )}
      {...props}
    >
      {_variant?.includes("tron") && (
        <>
          <Tron
            type="beam"
            side="bottom"
            className="via-(--tron-beam) opacity-0 group-data-[state=on]/toggle-group-item:opacity-100"
          />
          <Tron
            type="blur"
            side="bottom"
            className="via-(--tron-blur) opacity-0 group-data-[state=on]/toggle-group-item:opacity-100"
          />
        </>
      )}
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
