"use client";

import * as React from "react";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { toggleVariants } from "~/components/ui/toggle";
import { Tron } from "~/components/ui/tron";

const compactToggleGroupItemVariants = tv({
  base: [
    "[--inset-border:transparent]",

    "focus-visible:-outline-offset-1",

    "not-first:rounded-l-none not-last:rounded-r-none",

    // apply pseudo border-l when on and prev is on
    "data-[state=on]:[&:is(:where([data-state='on'])_+_*)]:shadow-[inset_1px_0_0_0_var(--inset-border)]",
  ],
  variants: {
    variant: {
      outline: [
        "border-none",
        "inset-ring inset-ring-border-solid data-[state=on]:inset-ring-hover-border-solid",
        "shadow-none",
      ],
      contrast:
        "outline-muted-foreground [--inset-border:--alpha(var(--color-contrast-foreground)/30%)]",

      base: "outline-accent-foreground [--inset-border:--alpha(var(--color-base-foreground)/20%)]",

      accent: "[--inset-border:var(--color-faded-border)]",

      muted: "[--inset-border:var(--color-faded-border)]",

      surface: "[--inset-border:transparent]",

      faded: "[--inset-border:transparent]",

      "base-gradient":
        "[--inset-border:--alpha(var(--color-base-foreground)/30%)]",

      primary:
        "outline-primary-accent-foreground [--inset-border:--alpha(var(--color-primary-200)/30%)]",

      "primary-accent": "[--inset-border:var(--color-primary-faded-border)]",

      "primary-muted": "[--inset-border:var(--color-primary-faded-border)]",

      "primary-surface": "[--inset-border:transparent]",

      "primary-faded": "[--inset-border:transparent]",

      "primary-tron": "[--inset-border:transparent]",

      "primary-gradient":
        "outline-primary-accent-foreground [--inset-border:--alpha(var(--color-primary-foreground)/30%)]",

      secondary:
        "outline-secondary-accent-foreground [--inset-border:--alpha(var(--color-secondary-foreground)/30%)]",

      "secondary-accent":
        "[--inset-border:var(--color-secondary-faded-border)]",

      "secondary-muted": "[--inset-border:var(--color-secondary-faded-border)]",

      "secondary-surface": "[--inset-border:transparent]",

      "secondary-faded": "[--inset-border:transparent]",

      "secondary-tron": "[--inset-border:transparent]",

      "secondary-gradient":
        "outline-secondary-accent-foreground [--inset-border:--alpha(var(--color-secondary-foreground)/30%)]",
    },
  },
  defaultVariants: {
    variant: "accent",
    size: "md",
  },
});

const toggleGroupVariants = ({
  variant,
  spacing,
  size,
}: ToggleGroupContextProps) =>
  cn(
    "group/toggle-group relative isolate flex items-center",
    variant === "outline" && spacing === "compact" && "rounded-md shadow-xs",
    spacing === "compact" && "-space-x-px",
    spacing === "split" &&
      {
        // "2xs": "gap-0.5",
        xs: "gap-0.5",
        sm: "gap-[calc(var(--spacing)*0.75)]",
        md: "gap-1 sm:gap-[calc(var(--spacing)*0.75)]",
        lg: "gap-1",
      }[size || "md"]
  );

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
      className={cn(toggleGroupVariants({ variant, size, spacing }), className)}
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
            border="inset"
            className="via-(--tron-beam) opacity-0 group-data-[state=on]/toggle-group-item:opacity-100"
          />
          <Tron
            type="blur"
            side="bottom"
            border="inset"
            className="via-(--tron-blur) opacity-0 group-data-[state=on]/toggle-group-item:opacity-100"
          />
        </>
      )}
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export {
  type ToggleGroupContextProps,
  ToggleGroup,
  ToggleGroupItem,
  compactToggleGroupItemVariants,
  toggleGroupVariants,
};
