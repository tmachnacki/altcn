import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const selectNativeRootVariants = cva(
  [
    "relative block rounded-md has-data-multiple:h-auto",
    "data-disabled:opacity-50",
    "has-aria-invalid:text-destructive-accent-foreground",
  ],
  {
    variants: {
      size: {
        sm: "h-(--size-sm) text-sm",
        md: "h-(--size-md) text-base sm:text-sm",
        lg: "h-(--size-lg) text-base",
      },
      variant: {
        // -- base --
        outline: [
          "bg-background text-accent-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-data-disabled:not-data-invalid:not-focus-within:outline-hover-border dark:bg-faded",

          "focus-within:outline-2 focus-within:outline-primary",

          "data-disabled:bg-faded data-disabled:shadow-none",

          "data-invalid:outline-destructive/50 data-invalid:focus-within:outline-destructive data-invalid:hover:not-data-disabled:outline-destructive data-invalid:data-disabled:bg-destructive-faded dark:data-invalid:bg-destructive-faded",
        ],
        muted: [
          "bg-muted text-accent-foreground -outline-offset-1 hover:not-data-disabled:not-data-invalid:not-focus-within:bg-hover-muted",

          "focus-within:outline-2 focus-within:outline-primary",

          "data-invalid:bg-destructive-muted data-invalid:outline-destructive data-invalid:hover:not-data-disabled:not-focus-within:bg-hover-destructive-muted",
        ],
        underlined: [
          "rounded-none bg-transparent text-foreground shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-data-disabled:not-data-invalid:not-focus-within:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",

          "focus-within:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

          "data-invalid:shadow-[inset_0_-1px_0_0_--alpha(var(--color-destructive)/50%)] data-invalid:focus-within:shadow-[inset_0_-2px_0_0_var(--color-destructive)] data-invalid:hover:not-data-disabled:not-focus-within:shadow-[inset_0_-1px_0_0_var(--color-destructive)]",
        ],
        // -- primary --
        "primary-muted": [
          "bg-primary-muted text-primary-accent-foreground -outline-offset-1 hover:not-data-disabled:not-data-invalid:not-focus-within:bg-hover-primary-muted",

          "data-disabled:bg-muted data-disabled:text-accent-foreground",

          "focus-within:outline-2 focus-within:outline-primary",

          "data-invalid:bg-destructive-muted data-invalid:outline-destructive data-invalid:hover:not-data-disabled:not-focus-within:bg-hover-destructive-muted",
        ],

        "secondary-muted": [
          "bg-secondary-muted text-secondary-accent-foreground -outline-offset-1 hover:not-data-disabled:not-data-invalid:not-focus-within:bg-hover-secondary-muted",

          "data-disabled:bg-muted data-disabled:text-accent-foreground",

          "focus-within:outline-2 focus-within:outline-secondary",

          "data-invalid:bg-destructive-muted data-invalid:outline-destructive data-invalid:hover:not-data-disabled:not-focus-within:bg-hover-destructive-muted",
        ],
      },
    },
    defaultVariants: {
      size: "md",
      variant: "outline",
    },
  }
);

const selectNativeTriggerVariants = cva(
  [
    "line-clamp-1 block h-full appearance-none truncate leading-none whitespace-nowrap outline-none data-multiple:h-auto",
    // "text-inherit",
    "disabled:cursor-not-allowed",
    // "aria-invalid:text-destructive-accent-foreground",
    // "**:scheme-light dark:**:scheme-dark",
    // "**:[optgroup]:bg-popover **:[option]:bg-popover ",
    // "**:bg-[initial] **:text-[initial]",
    // "**:appearance-auto",
    // "data-multiple:**:disabled:text-current/50",
    // "placeholder:text-placeholder",
    // "data-multiple:**:bg-transparent",
    "**:appearance-[base-select] **:[optgroup]:font-semibold",
  ],
  {
    variants: {
      size: {
        sm: "pr-[calc(var(--spacing)*7.5)] pl-2.5 text-sm data-multiple:pr-2.5",
        md: "pr-[calc(var(--spacing)*8)] pl-3 text-base data-multiple:pr-3 sm:text-sm",
        lg: "pr-[calc(var(--spacing)*9.5)] pl-3.5 text-base data-multiple:pr-3.5",
      },
      variant: {
        // -- base --
        outline: [
          // "unset-[background-color]",
          // "bg-background text-accent-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-disabled:not-aria-invalid:not-focus:outline-hover-border dark:bg-faded",
          // "placeholder:text-placeholder",
          // "disabled:bg-faded disabled:shadow-none",
          // "focus-visible:outline-2 focus-visible:outline-primary",
          // "aria-invalid:outline-destructive aria-invalid:placeholder:text-destructive-placeholder dark:aria-invalid:bg-destructive-faded",
        ],

        muted: [
          // "bg-muted text-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus:bg-hover-muted",
          // "placeholder:text-muted-foreground",
          // "focus-visible:outline-2 focus-visible:outline-primary",
          // "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:placeholder:text-destructive-muted-foreground aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted",
        ],

        underlined: [
          // "rounded-none bg-transparent text-foreground shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-disabled:not-aria-invalid:not-focus:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",
          // "placeholder:text-placeholder",
          // "focus-visible:shadow-[inset_0_-2px_0_0_var(--color-primary)]",
          // "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:placeholder:text-destructive-placeholder aria-invalid:focus:shadow-[inset_0_-2px_0_0_var(--color-destructive)]",
        ],

        // -- primary --
        "primary-muted": [
          // "data-multiple:**:[optgroup]:bg-primary-muted data-multiple:**:[option]:bg-primary-muted",
          // "data-multiple:**:disabled:text-primary-muted-foreground/50",
          // "bg-primary-muted text-primary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus:bg-hover-primary-muted",
          // "placeholder:text-primary-muted-foreground",
          // "disabled:bg-muted disabled:text-accent-foreground disabled:placeholder:text-muted-foreground",
          // "focus-visible:outline-2 focus-visible:outline-primary",
          // "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:placeholder:text-destructive-muted-foreground aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted",
        ],

        // -- secondary --
        "secondary-muted": [
          // "bg-secondary-muted text-secondary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus:bg-hover-secondary-muted",
          // "placeholder:text-secondary-muted-foreground",
          // "disabled:bg-muted disabled:text-accent-foreground disabled:placeholder:text-muted-foreground",
          // "focus-visible:outline-2 focus-visible:outline-secondary",
          // "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:placeholder:text-destructive-muted-foreground aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted",
        ],
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

const selectNativeIconVariants = cva(
  [
    "pointer-events-none absolute top-1/2 -translate-y-1/2",
    // "peer-disabled/select-native-trigger:opacity-50",
    "peer-aria-invalid/select-native-trigger:text-destructive-muted-foreground/60",
  ],
  {
    variants: {
      size: {
        sm: "right-1.5 size-4",
        md: "right-2 size-4",
        lg: "right-2.5 size-5",
      },
      variant: {
        // -- base --
        outline: ["text-muted-foreground/60"],

        muted: ["text-muted-foreground/60"],

        underlined: ["text-muted-foreground/60"],

        // -- primary --
        "primary-muted": [
          "text-primary-muted-foreground/60 peer-disabled/select-native-trigger:text-muted-foreground/60",
        ],

        // -- secondary --
        "secondary-muted": [
          "text-secondary-muted-foreground/60 peer-disabled/select-native-trigger:text-muted-foreground/60",
        ],
      },
    },
    defaultVariants: {
      size: "md",
      variant: "outline",
    },
  }
);

type SelectNativeProps = Omit<React.ComponentProps<"select">, "size"> & {
  variant?: VariantProps<typeof selectNativeTriggerVariants>["variant"];
  size?: VariantProps<typeof selectNativeTriggerVariants>["size"];
  classNames?: {
    root?: string;
    trigger?: string;
    icon?: string;
  };
  htmlSize?: number;
};

function SelectNative({
  variant = "outline",
  size = "md",
  classNames,
  className,
  htmlSize,
  multiple,
  disabled,
  "aria-invalid": ariaInvalid,
  children,
  ...props
}: SelectNativeProps) {
  return (
    <div
      data-slot="select-native"
      data-disabled={disabled ? true : undefined}
      data-invalid={
        ariaInvalid === true || ariaInvalid === "true" ? true : undefined
      }
      className={cn(
        selectNativeRootVariants({ size, variant }),
        classNames?.root
      )}
    >
      <select
        data-slot="select-native-trigger"
        className={cn(
          selectNativeTriggerVariants({ variant, size }),
          "peer/select-native-trigger",
          classNames?.trigger,
          className
        )}
        size={htmlSize}
        multiple={multiple}
        data-multiple={multiple ? true : undefined}
        disabled={disabled}
        aria-invalid={ariaInvalid}
        {...props}
      >
        {children}
      </select>
      {!multiple && (
        <svg
          data-slot="select-native-icon"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={cn(
            selectNativeIconVariants({ variant, size }),
            classNames?.icon
          )}
        >
          <path
            fillRule="evenodd"
            d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
}

export { SelectNative };
