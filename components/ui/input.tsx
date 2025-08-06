import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

const inputVariants = tv({
  slots: {
    root: [
      "peer",
      "flex w-full min-w-0 appearance-none rounded-md",
      "selection:bg-primary selection:text-primary-foreground",
      "disabled:pointer-events-none disabled:opacity-50",
      "aria-invalid:text-destructive-accent-foreground aria-invalid:selection:bg-destructive aria-invalid:selection:text-destructive-foreground",
    ],
    file: [
      "file:inline-flex file:items-center file:rounded-l-md file:font-medium",
    ],
  },
  variants: {
    size: {
      sm: {
        root: "h-(--size-md) px-(--input-px) py-(--input-py) text-sm [--input-px:--spacing(2.5)] [--input-py:--spacing(1)] sm:h-(--size-sm)",
        file: "file:-my-(--input-py) file:-ms-(--input-px) file:me-(--input-px) file:h-(--size-md) file:px-(--input-px) sm:file:h-(--size-sm)",
      },
      md: {
        root: "h-(--size-lg) px-(--input-px) py-(--input-py) text-base [--input-px:--spacing(3)] [--input-py:--spacing(1)] sm:h-(--size-md) sm:text-sm",
        file: "file:-my-(--input-py) file:-ms-(--input-px) file:me-(--input-px) file:h-(--size-lg) file:px-(--input-px) sm:file:h-(--size-md)",
      },
      lg: {
        root: "h-(--size-xl) px-(--input-px) py-(--input-py) text-lg [--input-px:--spacing(3.5)] [--input-py:--spacing(1.5)] sm:h-(--size-lg) sm:text-base",
        file: "file:-my-(--input-py) file:-ms-(--input-px) file:me-(--input-px) file:h-(--size-xl) file:px-(--input-px) sm:file:h-(--size-lg)",
      },
    },
    variant: {
      // -- base --
      outline: {
        root: [
          "bg-background text-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-focus-visible:not-aria-invalid:outline-hover-border dark:bg-faded",

          "placeholder:text-placeholder",

          "disabled:bg-faded disabled:shadow-none",

          "focus-visible:outline-2 focus-visible:outline-primary",

          "aria-invalid:outline-destructive aria-invalid:placeholder:text-destructive-placeholder aria-invalid:disabled:bg-destructive-faded dark:aria-invalid:bg-destructive-faded",
        ],
        file: [
          "file:border-r file:border-border file:bg-muted file:text-accent-foreground hover:not-focus-visible:not-aria-invalid:file:border-hover-border",
          "aria-invalid:file:border-destructive aria-invalid:file:bg-destructive-muted aria-invalid:file:text-destructive-accent-foreground",
        ],
      },

      muted: {
        root: [
          "bg-muted text-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-muted",

          "placeholder:text-placeholder",

          "focus-visible:outline-2 focus-visible:outline-primary",

          "aria-invalid:bg-destructive-muted aria-invalid:placeholder:text-destructive-placeholder aria-invalid:hover:not-focus-visible:bg-hover-destructive-muted aria-invalid:focus-visible:outline-destructive",
        ],
        file: [
          "file:bg-base-bg file:text-base-foreground hover:not-focus-visible:not-aria-invalid:file:bg-hover-base",
          "aria-invalid:file:bg-destructive aria-invalid:file:text-destructive-foreground hover:aria-invalid:file:not-focus-visible:bg-hover-destructive",
        ],
      },

      underlined: {
        root: [
          "rounded-none bg-transparent px-0.5 shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-focus-visible:not-aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",

          "placeholder:text-placeholder",

          "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

          "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:placeholder:text-destructive-placeholder aria-invalid:focus-visible:shadow-[inset_0_-2px_0_0_var(--color-destructive)]",
        ],
        file: [
          "file:-ms-0.5 file:bg-transparent file:px-0.5 file:text-subtle-foreground",
          "aria-invalid:file:text-destructive-muted-foreground",
        ],
      },

      // -- primary --
      "primary-muted": {
        root: [
          "bg-primary-muted text-primary-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-primary-muted",

          "placeholder:text-primary-placeholder",

          "disabled:bg-muted disabled:text-accent-foreground disabled:placeholder:text-placeholder",

          "focus-visible:outline-2 focus-visible:outline-primary",

          "aria-invalid:bg-destructive-muted aria-invalid:placeholder:text-destructive-placeholder hover:aria-invalid:not-focus-visible:bg-hover-destructive-muted aria-invalid:focus-visible:outline-destructive",
        ],
        file: [
          "file:bg-primary file:text-primary-foreground hover:not-focus-visible:not-aria-invalid:file:bg-hover-primary",
          "disabled:file:bg-base-bg disabled:file:text-base-foreground",
          "aria-invalid:file:bg-destructive aria-invalid:file:text-destructive-foreground hover:aria-invalid:file:not-focus-visible:bg-hover-destructive",
        ],
      },

      // -- secondary --
      "secondary-muted": {
        root: [
          "bg-secondary-muted text-secondary-accent-foreground -outline-offset-1 hover:not-focus-visible:not-aria-invalid:bg-hover-secondary-muted",

          "selection:bg-secondary selection:text-secondary-foreground",

          "placeholder:text-secondary-placeholder",

          "disabled:bg-muted disabled:text-accent-foreground disabled:placeholder:text-muted-foreground",

          "focus-visible:outline-2 focus-visible:outline-secondary",

          "aria-invalid:bg-destructive-muted aria-invalid:placeholder:text-destructive-placeholder hover:aria-invalid:not-focus-visible:bg-hover-destructive-muted aria-invalid:focus-visible:outline-destructive",
        ],
        file: [
          "file:bg-secondary file:text-secondary-foreground hover:not-focus-visible:not-aria-invalid:file:bg-hover-secondary",
          "disabled:file:bg-base-bg disabled:file:text-base-foreground",
          "aria-invalid:file:bg-destructive aria-invalid:file:text-destructive-foreground hover:aria-invalid:file:not-focus-visible:bg-hover-destructive",
        ],
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
});

type InputProps = Omit<React.ComponentProps<"input">, "size" | "type"> &
  VariantProps<typeof inputVariants> & {
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
    htmlSize?: number;
  };

function Input({
  className,
  type = "text",
  variant = "outline",
  size = "md",
  htmlSize,
  ...props
}: InputProps) {
  const { root, file } = inputVariants({ variant, size });
  return (
    <input
      type={type}
      data-slot="input"
      size={htmlSize}
      className={cn(root(), type === "file" && file(), className)}
      {...props}
    />
  );
}

export { Input, inputVariants };
