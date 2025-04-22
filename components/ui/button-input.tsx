import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronsUpDown } from "lucide-react";

import { cn } from "~/lib/utils";

const buttonInputVariants = cva(
  [
    "flex w-fit items-center gap-2 rounded-md text-sm whitespace-nowrap",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "aria-invalid:text-destructive-accent-foreground aria-invalid:[--button-input-icon-text:var(--color-destructive-muted-foreground)] aria-invalid:[&_svg:not([class*='text-'])]:text-destructive-muted-foreground",
  ],
  {
    variants: {
      size: {
        default: "h-9 px-3 py-2 [&_svg:not([class*='size-'])]:size-4",
        sm: "h-8 px-2.5 py-1.5 [&_svg:not([class*='size-'])]:size-4",
        lg: "h-10 px-4 py-2.5 text-base [&_svg:not([class*='size-'])]:size-5",
      },
      variant: {
        // -- base --
        default: [
          "bg-background text-accent-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-disabled:not-aria-invalid:not-focus-visible:outline-hover-border dark:bg-faded",
          "[&_svg:not([class*='text-'])]:text-muted-foreground",
          "[--button-input-icon-text:var(--color-muted-foreground)]",
          "data-[empty]:text-placeholder",
          "disabled:bg-muted disabled:shadow-none",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:outline-destructive aria-invalid:data-[empty]:text-destructive-placeholder dark:aria-invalid:bg-destructive-faded",
        ],

        muted: [
          "bg-muted text-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-accent",
          "[&_svg:not([class*='text-'])]:text-muted-foreground",
          "[--button-input-icon-text:var(--color-muted-foreground)]",
          "data-[empty]:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:bg-destructive-muted/80 aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-destructive-muted aria-invalid:data-[empty]:text-destructive-muted-foreground",
        ],

        underlined: [
          "rounded-none bg-transparent shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-disabled:not-aria-invalid:not-focus-visible:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",
          "[&_svg:not([class*='text-'])]:text-muted-foreground",
          "[--button-input-icon-text:var(--color-muted-foreground)]",
          "data-[empty]:text-placeholder",
          "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",
          "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)] aria-invalid:data-[empty]:text-destructive-placeholder",
        ],

        // -- primary --
        primary: [
          "bg-primary-muted/80 text-primary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-primary-muted",
          "[&_svg:not([class*='text-'])]:text-primary-muted-foreground",
          "[--button-input-icon-text:var(--color-primary-muted-foreground)]",
          "data-[empty]:text-primary-muted-foreground",
          "disabled:bg-muted disabled:text-accent-foreground disabled:[--button-input-icon-text:var(--color-muted-foreground)] disabled:data-[empty]:text-muted-foreground disabled:[&_svg:not([class*='text-'])]:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:bg-destructive-muted/80 aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-destructive-muted aria-invalid:data-[empty]:text-destructive-muted-foreground",
        ],

        // -- secondary --
        secondary: [
          "bg-secondary-muted/80 text-secondary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-secondary-muted",
          "[&_svg:not([class*='text-'])]:text-secondary-muted-foreground",
          "[--button-input-icon-text:var(--color-secondary-muted-foreground)]",
          "data-[empty]:text-secondary-muted-foreground",
          "disabled:bg-muted disabled:text-accent-foreground disabled:[--button-input-icon-text:var(--color-muted-foreground)] disabled:data-[empty]:text-muted-foreground disabled:[&_svg:not([class*='text-'])]:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-secondary",
          "aria-invalid:bg-destructive-muted/80 aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-destructive-muted aria-invalid:data-[empty]:text-destructive-muted-foreground",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// use role="combobox" when using as a combobox trigger
function ButtonInput({
  className,
  variant = "default",
  size = "default",
  empty,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonInputVariants> & {
    empty?: boolean;
  }) {
  return (
    <button
      data-slot="button-input"
      type="button"
      data-empty={empty}
      className={cn(buttonInputVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function ButtonInputIcon({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Slot>) {
  return (
    <Slot
      data-slot="button-input-icon"
      className={cn("ml-auto text-(--button-input-icon-text)/50", className)}
      {...props}
    >
      {children || <ChevronsUpDown />}
    </Slot>
  );
}

export { ButtonInput, ButtonInputIcon };
