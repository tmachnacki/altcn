import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronsUpDown } from "lucide-react";

import { cn } from "~/lib/utils";

const buttonInputVariants = cva(
  [
    "flex w-fit items-center gap-2 rounded-md text-sm whitespace-nowrap",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0",
    "aria-invalid:text-destructive-accent-foreground aria-invalid:[--button-input-icon-text:var(--color-destructive-muted-foreground)] aria-invalid:**:[svg]:not-[[class*='text-']]:text-destructive-muted-foreground",
  ],
  {
    variants: {
      size: {
        default: "h-9 px-3 py-2 **:[svg]:not-[[class*='size-']]:size-4",
        sm: "h-8 px-2.5 py-1.5 **:[svg]:not-[[class*='size-']]:size-4",
        lg: "h-10 px-3.5 py-2.5 text-base **:[svg]:not-[[class*='size-']]:size-5",
      },
      variant: {
        // -- base --
        outline: [
          "bg-background text-accent-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-disabled:not-aria-invalid:not-focus-visible:outline-hover-border dark:bg-faded",
          "**:[svg]:not-[[class*='text-']]:text-muted-foreground",
          "[--button-input-icon-text:var(--color-muted-foreground)]",
          "data-[empty=true]:text-placeholder",
          "disabled:bg-faded disabled:shadow-none",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:outline-destructive aria-invalid:data-[empty=true]:text-destructive-placeholder dark:aria-invalid:bg-destructive-faded",
        ],

        muted: [
          "bg-muted text-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-muted",
          "**:[svg]:not-[[class*='text-']]:text-muted-foreground",
          "[--button-input-icon-text:var(--color-muted-foreground)]",
          "data-[empty=true]:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted aria-invalid:data-[empty=true]:text-destructive-muted-foreground",
        ],

        underlined: [
          "rounded-none bg-transparent shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-disabled:not-aria-invalid:not-focus-visible:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",
          "**:[svg]:not-[[class*='text-']]:text-muted-foreground",
          "[--button-input-icon-text:var(--color-muted-foreground)]",
          "data-[empty=true]:text-placeholder",
          "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",
          "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)] aria-invalid:data-[empty=true]:text-destructive-placeholder",
        ],

        // -- primary --
        "primary-muted": [
          "bg-primary-muted text-primary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-primary-muted",
          "**:[svg]:not-[[class*='text-']]:text-primary-muted-foreground",
          "[--button-input-icon-text:var(--color-primary-muted-foreground)]",
          "data-[empty=true]:text-primary-muted-foreground",
          "disabled:bg-muted disabled:text-accent-foreground disabled:[--button-input-icon-text:var(--color-muted-foreground)] disabled:data-[empty=true]:text-muted-foreground disabled:[&_svg:not([class*='text-'])]:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-primary",
          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted aria-invalid:data-[empty=true]:text-destructive-muted-foreground",
        ],

        // -- secondary --
        "secondary-muted": [
          "bg-secondary-muted text-secondary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-secondary-muted",
          "**:[svg]:not-[[class*='text-']]:text-secondary-muted-foreground",
          "[--button-input-icon-text:var(--color-secondary-muted-foreground)]",
          "data-[empty=true]:text-secondary-muted-foreground",
          "disabled:bg-muted disabled:text-accent-foreground disabled:[--button-input-icon-text:var(--color-muted-foreground)] disabled:data-[empty=true]:text-muted-foreground disabled:[&_svg:not([class*='text-'])]:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-secondary",
          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted aria-invalid:data-[empty=true]:text-destructive-muted-foreground",
        ],
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

// use role="combobox" when using as a combobox trigger
function ButtonInput({
  className,
  variant = "outline",
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
      aria-hidden="true"
      className={cn("ml-auto text-(--button-input-icon-text)/60", className)}
      {...props}
    >
      {children || <ChevronsUpDown />}
    </Slot>
  );
}

export { ButtonInput, ButtonInputIcon };
