import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

const buttonInputVariants = tv({
  base: [
    "peer flex w-fit items-center gap-2 rounded-md whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50 disabled:**:[svg]:text-muted-foreground",
    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:grow-0",
    "aria-invalid:text-destructive-accent-foreground aria-invalid:**:[svg]:not-[[class*='text-']]:text-destructive-muted-foreground",
  ],
  variants: {
    size: {
      sm: "h-(--size-sm) px-2.5 py-1.5 text-sm **:[svg]:not-[[class*='size-']]:size-4",
      md: "h-(--size-md) px-3 py-2 text-base sm:text-sm **:[svg]:not-[[class*='size-']]:size-4",
      lg: "h-(--size-lg) px-3.5 py-2.5 text-base **:[svg]:not-[[class*='size-']]:size-5",
    },
    variant: {
      // -- base --
      outline: [
        "bg-background text-accent-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-focus-visible:not-aria-invalid:outline-hover-border dark:bg-faded",

        "**:[svg]:not-[[class*='text-']]:text-muted-foreground",

        "has-data-[placeholder=true]:text-placeholder",

        "disabled:bg-faded disabled:shadow-none",

        "focus-visible:outline-2 focus-visible:outline-primary",

        "aria-invalid:outline-destructive aria-invalid:disabled:bg-destructive-faded aria-invalid:has-data-[placeholder=true]:text-destructive-placeholder dark:aria-invalid:bg-destructive-faded",
      ],

      muted: [
        "bg-muted text-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-muted",

        "**:[svg]:not-[[class*='text-']]:text-muted-foreground",

        "has-data-[placeholder=true]:text-placeholder",

        "focus-visible:outline-2 focus-visible:outline-primary",

        "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-focus-visible:bg-hover-destructive-muted aria-invalid:has-data-[placeholder=true]:text-destructive-placeholder",
      ],

      underlined: [
        "rounded-none bg-transparent shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-focus-visible:not-aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",

        "**:[svg]:not-[[class*='text-']]:text-muted-foreground",

        "has-data-[placeholder=true]:text-placeholder",

        "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

        "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)] aria-invalid:has-data-[placeholder=true]:text-destructive-placeholder",
      ],

      // -- primary --
      "primary-muted": [
        "bg-primary-muted text-primary-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-primary-muted",

        "**:[svg]:not-[[class*='text-']]:text-primary-muted-foreground",

        "has-data-[placeholder=true]:text-primary-placeholder",

        "disabled:bg-muted disabled:text-accent-foreground disabled:has-data-[placeholder=true]:text-placeholder",

        "focus-visible:outline-2 focus-visible:outline-primary",

        "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-focus-visible:bg-hover-destructive-muted aria-invalid:has-data-[placeholder=true]:text-destructive-placeholder",
      ],

      // -- secondary --
      "secondary-muted": [
        "bg-secondary-muted text-secondary-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-secondary-muted",

        "**:[svg]:not-[[class*='text-']]:text-secondary-muted-foreground",

        "has-data-[placeholder=true]:text-secondary-placeholder",

        "disabled:bg-muted disabled:text-accent-foreground disabled:has-data-[placeholder=true]:text-placeholder",

        "focus-visible:outline-2 focus-visible:outline-secondary",

        "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-focus-visible:bg-hover-destructive-muted aria-invalid:has-data-[placeholder=true]:text-destructive-placeholder",
      ],
    },
  },
  compoundVariants: [
    {
      variant: "underlined",
      size: ["sm", "md"],
      className: "px-0.5",
    },
    {
      variant: "underlined",
      size: "lg",
      className: "px-1",
    },
  ],
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
});

function ButtonInput({
  className,
  variant = "outline",
  size = "md",
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonInputVariants>) {
  return (
    <button
      data-slot="button-input"
      type="button"
      className={buttonInputVariants({
        variant,
        size,
        className: ["group/button-input", className],
      })}
      {...props}
    />
  );
}

function ButtonInputValue({
  className,
  placeholder,
  children,
  ...props
}: React.ComponentProps<"span"> & { placeholder?: React.ReactNode }) {
  return (
    <span
      data-slot="button-input-value"
      data-placeholder={children ? undefined : placeholder ? true : undefined}
      className={cn(
        "line-clamp-1 flex flex-1 items-center justify-start gap-2 truncate",
        className
      )}
      {...props}
    >
      {children ? children : placeholder ? placeholder : null}
    </span>
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
      className={cn("shrink-0 grow-0", className)}
      {...props}
    >
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="first:-ml-1 last:-mr-1"
        >
          <path
            fillRule="evenodd"
            d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </Slot>
  );
}

export { ButtonInput, ButtonInputValue, ButtonInputIcon, buttonInputVariants };
