import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// import { cn } from "~/lib/utils";

const inputVariants = tv({
  base: [
    "peer flex w-full min-w-0 appearance-none rounded-md",
    "selection:bg-primary selection:text-primary-foreground",
    "file:inline-flex file:items-center file:font-medium",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:text-destructive-accent-foreground aria-invalid:selection:bg-destructive aria-invalid:selection:text-destructive-foreground",
  ],
  variants: {
    size: {
      sm: [
        "h-(--size-sm) px-2.5 py-1 text-sm",
        "file:-my-1 file:-ms-2.5 file:me-2.5 file:h-8 file:px-2.5",
      ],
      md: [
        "h-(--size-md) px-3 py-1 text-base",
        "file:-my-1 file:-ms-3 file:me-3 file:h-9 file:px-3 sm:text-sm",
      ],
      lg: [
        "h-(--size-lg) px-3.5 py-1.5 text-base",
        "file:-my-1.5 file:-ms-3.5 file:me-3.5 file:h-10 file:px-3.5",
      ],
    },
    variant: {
      // -- base --
      outline: [
        "bg-background text-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-focus-visible:not-aria-invalid:outline-hover-border dark:bg-faded",

        "file:border-r file:border-border file:bg-muted file:text-accent-foreground hover:not-focus-visible:not-aria-invalid:file:border-hover-border",

        "placeholder:text-placeholder",

        "disabled:bg-faded disabled:shadow-none",

        "focus-visible:outline-2 focus-visible:outline-primary",

        "aria-invalid:outline-destructive aria-invalid:file:border-destructive aria-invalid:file:bg-destructive-muted aria-invalid:file:text-destructive-accent-foreground aria-invalid:placeholder:text-destructive-placeholder aria-invalid:disabled:bg-destructive-faded dark:aria-invalid:bg-destructive-faded",
      ],

      muted: [
        "bg-muted text-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-muted",

        "file:bg-base-bg file:text-base-foreground",

        "placeholder:text-placeholder",

        "focus-visible:outline-2 focus-visible:outline-primary",

        "aria-invalid:bg-destructive-muted aria-invalid:file:bg-destructive aria-invalid:file:text-destructive-foreground aria-invalid:placeholder:text-destructive-placeholder aria-invalid:hover:not-focus-visible:bg-hover-destructive-muted aria-invalid:focus-visible:outline-destructive",
      ],

      underlined: [
        "rounded-none bg-transparent px-0.5 shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-focus-visible:not-aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",

        "file:-ms-0.5 file:bg-transparent file:px-0.5 file:text-subtle-foreground",

        "placeholder:text-placeholder",

        "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

        "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:file:text-destructive-muted-foreground aria-invalid:placeholder:text-destructive-placeholder aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)]",
      ],

      // -- primary --
      "primary-muted": [
        "bg-primary-muted text-primary-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-primary-muted",

        "file:bg-primary file:text-primary-foreground",

        "placeholder:text-primary-placeholder",

        "disabled:bg-muted disabled:text-accent-foreground disabled:file:bg-base-bg disabled:file:text-base-foreground disabled:placeholder:text-placeholder",

        "focus-visible:outline-2 focus-visible:outline-primary",

        "aria-invalid:bg-destructive-muted aria-invalid:file:bg-destructive aria-invalid:file:text-destructive-foreground aria-invalid:placeholder:text-destructive-placeholder aria-invalid:hover:not-focus-visible:bg-hover-destructive-muted aria-invalid:focus-visible:outline-destructive",
      ],

      // -- secondary --
      "secondary-muted": [
        "bg-secondary-muted text-secondary-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-secondary-muted",

        "selection:bg-secondary selection:text-secondary-foreground",

        "file:bg-secondary file:text-secondary-foreground",

        "placeholder:text-secondary-placeholder",

        "disabled:bg-muted disabled:text-accent-foreground disabled:file:bg-base-bg disabled:file:text-base-foreground disabled:placeholder:text-muted-foreground",

        "focus-visible:outline-2 focus-visible:outline-secondary",

        "aria-invalid:bg-destructive-muted aria-invalid:file:bg-destructive aria-invalid:file:text-destructive-foreground aria-invalid:placeholder:text-destructive-placeholder aria-invalid:hover:not-focus-visible:bg-hover-destructive-muted aria-invalid:focus-visible:outline-destructive",
      ],
    },
  },
  compoundVariants: [
    {
      variant: "underlined",
      size: "md",
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
    variant: "outline",
    size: "md",
  },
});

function Input({
  className,
  type = "text",
  variant = "outline",
  size = "md",
  htmlSize,
  ...props
}: Omit<React.ComponentProps<"input">, "size" | "type"> & {
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "file"
    | "hidden";
  variant?: VariantProps<typeof inputVariants>["variant"];
  size?: VariantProps<typeof inputVariants>["size"];
  htmlSize?: number;
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={inputVariants({
        variant,
        size,
        className,
      })}
      size={htmlSize}
      {...props}
    />
  );
}

export { Input, inputVariants };
