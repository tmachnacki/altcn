import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonInputVariants = cva(
  [
    "flex w-fit items-center gap-2 rounded-md whitespace-nowrap",

    "disabled:cursor-not-allowed disabled:opacity-50",

    "**:[svg]:pointer-events-none **:[svg]:shrink-0 **:[svg]:grow-0",

    "aria-invalid:text-destructive-accent-foreground aria-invalid:[--button-input-icon-text:var(--color-destructive-muted-foreground)] aria-invalid:**:[svg]:not-[[class*='text-']]:text-destructive-muted-foreground",
  ],
  {
    variants: {
      size: {
        sm: "h-(--size-sm) px-2.5 py-1.5 text-sm **:[svg]:not-[[class*='size-']]:size-4",
        md: "h-(--size-md) px-3 py-2 text-base sm:text-sm **:[svg]:not-[[class*='size-']]:size-4",
        lg: "h-(--size-lg) px-3.5 py-2.5 text-base **:[svg]:not-[[class*='size-']]:size-5",
      },
      variant: {
        // -- base --
        outline: [
          "bg-background text-accent-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-disabled:not-focus-visible:not-aria-invalid:outline-hover-border dark:bg-faded",

          "**:[svg]:not-[[class*='text-']]:text-muted-foreground",

          "[--button-input-icon-text:var(--color-muted-foreground)]",

          "has-data-[placeholder=true]:text-placeholder",

          "disabled:bg-faded disabled:shadow-none",

          "focus-visible:outline-2 focus-visible:outline-primary",

          "aria-invalid:outline-destructive/80 aria-invalid:hover:not-disabled:outline-destructive aria-invalid:focus-visible:outline-destructive aria-invalid:disabled:bg-destructive-faded aria-invalid:has-data-[placeholder=true]:text-destructive-placeholder dark:aria-invalid:bg-destructive-faded",
        ],

        muted: [
          "bg-muted text-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-muted",

          "**:[svg]:not-[[class*='text-']]:text-muted-foreground",

          "[--button-input-icon-text:var(--color-muted-foreground)]",

          "has-data-[placeholder=true]:text-placeholder",

          "focus-visible:outline-2 focus-visible:outline-primary",

          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted aria-invalid:has-data-[placeholder=true]:text-destructive-placeholder",
        ],

        underlined: [
          "rounded-none bg-transparent shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-disabled:not-aria-invalid:not-focus-visible:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",

          "**:[svg]:not-[[class*='text-']]:text-muted-foreground",

          "[--button-input-icon-text:var(--color-muted-foreground)]",

          "has-data-[placeholder=true]:text-placeholder",

          "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

          "aria-invalid:shadow-[inset_0_-1px_0_0_--alpha(var(--color-destructive),80%)] aria-invalid:hover:not-disabled:not-focus-visible:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)] aria-invalid:has-data-[placeholder=true]:text-destructive-placeholder",
        ],

        // -- primary --
        "primary-muted": [
          "bg-primary-muted text-primary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-primary-muted",

          "**:[svg]:not-[[class*='text-']]:text-primary-muted-foreground",

          "[--button-input-icon-text:var(--color-primary-muted-foreground)]",

          "has-data-[placeholder=true]:text-primary-placeholder",

          "disabled:**[svg]:not-[[class*='text-']]:text-muted-foreground disabled:bg-muted disabled:text-accent-foreground disabled:[--button-input-icon-text:var(--color-muted-foreground)] disabled:has-data-[placeholder=true]:text-muted-foreground",

          "focus-visible:outline-2 focus-visible:outline-primary",

          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted aria-invalid:has-data-[placeholder=true]:text-destructive-placeholder",
        ],

        // -- secondary --
        "secondary-muted": [
          "bg-secondary-muted text-secondary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-secondary-muted",

          "**:[svg]:not-[[class*='text-']]:text-secondary-muted-foreground",

          "[--button-input-icon-text:var(--color-secondary-muted-foreground)]",

          "has-data-[placeholder=true]:text-secondary-placeholder",

          "disabled:**[svg]:not-[[class*='text-']]:text-muted-foreground disabled:bg-muted disabled:text-accent-foreground disabled:[--button-input-icon-text:var(--color-muted-foreground)] disabled:has-data-[placeholder=true]:text-muted-foreground",

          "focus-visible:outline-2 focus-visible:outline-secondary",

          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted aria-invalid:has-data-[placeholder=true]:text-destructive-placeholder",
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
  }
);

// use role="combobox" when using as a combobox trigger
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
      className={cn(buttonInputVariants({ variant, size }), className)}
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
      className={cn(
        "shrink-0 grow-0 text-(--button-input-icon-text)/60",
        !children && "first:-ml-1 last:-mr-1",
        className
      )}
      {...props}
    >
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
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

export { ButtonInput, ButtonInputValue, ButtonInputIcon };
