import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "flex w-full min-w-0 appearance-none rounded-md",
    "selection:bg-primary selection:text-primary-foreground",
    "file:inline-flex file:font-medium",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:text-destructive-accent-foreground aria-invalid:selection:bg-destructive aria-invalid:selection:text-destructive-foreground",
  ],
  {
    variants: {
      size: {
        default:
          "h-9 px-3 py-1 text-base file:-my-1 file:-ms-3 file:me-3 file:h-9 file:px-3 sm:text-sm",

        sm: "h-8 px-2.5 py-1 text-sm file:-my-1 file:-ms-2.5 file:me-2.5 file:h-8 file:px-2.5",

        lg: "h-10 px-3.5 py-1.5 text-base file:-my-1.5 file:-ms-3.5 file:me-3.5 file:h-10 file:px-3.5",
      },
      variant: {
        // -- base --
        default: [
          "bg-background text-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-focus-visible:not-aria-invalid:outline-hover-border dark:bg-faded",

          "file:border-r file:border-border file:bg-accent file:text-accent-foreground hover:file:border-hover-border",

          "placeholder:text-placeholder",

          "disabled:bg-muted disabled:shadow-none",

          "focus-visible:outline-2 focus-visible:outline-primary",

          "aria-invalid:outline-destructive aria-invalid:file:border-destructive aria-invalid:file:bg-destructive-muted aria-invalid:file:text-destructive-accent-foreground aria-invalid:placeholder:text-destructive-placeholder dark:aria-invalid:bg-destructive-faded",
        ],

        muted: [
          "bg-muted text-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-accent",

          "file:bg-base-bg file:text-base-foreground",

          "placeholder:text-muted-foreground",

          "focus-visible:outline-2 focus-visible:outline-primary",

          "aria-invalid:bg-destructive-muted/80 aria-invalid:file:bg-destructive aria-invalid:file:text-destructive-foreground aria-invalid:placeholder:text-destructive-muted-foreground aria-invalid:hover:not-focus-visible:bg-destructive-muted aria-invalid:focus-visible:outline-destructive",
        ],

        underlined: [
          "rounded-none bg-transparent px-0.5 shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-focus-visible:not-aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",

          "file:-ms-0.5 file:bg-transparent file:px-0.5 file:text-subtle-foreground",

          "placeholder:text-placeholder",

          "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

          "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:file:text-destructive-muted-foreground aria-invalid:placeholder:text-destructive-placeholder aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)]",
        ],

        // -- primary --
        primary: [
          "bg-primary-muted/80 text-primary-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-primary-muted",

          "file:bg-primary file:text-primary-foreground",

          "placeholder:text-primary-muted-foreground",

          "disabled:bg-muted disabled:text-accent-foreground disabled:file:bg-base-bg disabled:file:text-base-foreground disabled:placeholder:text-muted-foreground",

          "focus-visible:outline-2 focus-visible:outline-primary",

          "aria-invalid:bg-destructive-muted/80 aria-invalid:file:bg-destructive aria-invalid:file:text-destructive-foreground aria-invalid:placeholder:text-destructive-muted-foreground aria-invalid:hover:not-focus-visible:bg-destructive-muted aria-invalid:focus-visible:outline-destructive",
        ],

        // -- secondary --
        secondary: [
          "bg-secondary-muted/80 text-secondary-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-secondary-muted",

          "selection:bg-secondary selection:text-secondary-foreground",

          "file:bg-secondary file:text-secondary-foreground",

          "placeholder:text-secondary-muted-foreground",

          "disabled:bg-muted disabled:text-accent-foreground disabled:file:bg-base-bg disabled:file:text-base-foreground disabled:placeholder:text-muted-foreground",

          "focus-visible:outline-2 focus-visible:outline-secondary",

          "aria-invalid:bg-destructive-muted/80 aria-invalid:file:bg-destructive aria-invalid:file:text-destructive-foreground aria-invalid:placeholder:text-destructive-muted-foreground aria-invalid:hover:not-focus-visible:bg-destructive-muted aria-invalid:focus-visible:outline-destructive",
        ],
      },
    },
    compoundVariants: [
      {
        variant: "underlined",
        size: "default",
        className: "file:me-3",
      },
      {
        variant: "underlined",
        size: "sm",
        className: "file:me-2.5",
      },
      {
        variant: "underlined",
        size: "lg",
        className: "file:me-3.5",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Input({
  className,
  type,
  variant = "default",
  inputSize = "default",
  ...props
}: React.ComponentProps<"input"> & {
  variant?: VariantProps<typeof inputVariants>["variant"];
  inputSize?: VariantProps<typeof inputVariants>["size"];
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, size: inputSize }), className)}
      {...props}
    />
  );
}

export { Input };
