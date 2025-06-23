import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronsUpDownIcon } from "lucide-react";

import { cn } from "~/lib/utils";

const selectNativeRootVariants = cva(["relative"], {
  variants: {
    size: {
      default: "h-9",
      sm: "h-8",
      lg: "h-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const selectNativeTriggerVariants = cva(
  [
    "line-clamp-1 block h-full appearance-none truncate rounded-md leading-none whitespace-nowrap",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:text-destructive-accent-foreground",
  ],
  {
    variants: {
      size: {
        default: "pr-10 pl-3 text-base data-[multiple]:pr-3 sm:text-sm",
        sm: "pr-9 pl-2.5 text-sm data-[multiple]:pr-2.5",
        lg: "pr-[calc(var(--spacing)*13)] pl-4 text-base data-[multiple]:pr-4",
      },
      variant: {
        // -- base --
        outline: [
          "bg-background text-accent-foreground shadow-xs outline-1 -outline-offset-1 outline-border hover:not-disabled:not-aria-invalid:not-focus-visible:outline-hover-border dark:bg-faded",
          "disabled:bg-faded disabled:shadow-none",
          "focus:outline-2 focus:outline-primary",
          "aria-invalid:outline-destructive dark:aria-invalid:bg-destructive-faded",
        ],

        muted: [
          "bg-muted text-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-muted",
          "focus:outline-2 focus:outline-primary",
          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted",
        ],

        underlined: [
          "rounded-none bg-transparent shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-disabled:not-aria-invalid:not-focus-visible:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",
          "focus:shadow-[inset_0_-2px_0_0_var(--color-primary)]",
          "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:focus:shadow-[inset_0_-2px_0_0_var(--color-destructive)]",
        ],

        // -- primary --
        "primary-muted": [
          "bg-primary-muted text-primary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-primary-muted",
          "disabled:bg-muted disabled:text-accent-foreground",
          "focus:outline-2 focus:outline-primary",
          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted",
        ],

        // -- secondary --
        "secondary-muted": [
          "bg-secondary-muted text-secondary-accent-foreground -outline-offset-1 hover:not-disabled:not-aria-invalid:not-focus-visible:bg-hover-secondary-muted",
          "disabled:bg-muted disabled:text-accent-foreground",
          "focus:outline-2 focus:outline-secondary",
          "aria-invalid:bg-destructive-muted aria-invalid:outline-destructive aria-invalid:hover:not-disabled:not-focus-visible:bg-hover-destructive-muted",
        ],
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

const selectNativeIconVariants = cva(
  [
    "pointer-events-none absolute top-1/2 -translate-y-1/2",
    "peer-disabled/select-native-trigger:opacity-50",
    "peer-aria-invalid/select-native-trigger:text-destructive-muted-foreground/60",
  ],
  {
    variants: {
      size: {
        default: "right-3 size-4",
        sm: "right-2.5 size-4",
        lg: "right-4 size-5",
      },
      variant: {
        // -- base --
        outline: ["text-muted-foreground/60"],

        muted: ["text-muted-foreground/60"],

        underlined: ["text-muted-foreground/60"],

        // -- primary --
        "primary-muted": [
          "text-primary-muted-foreground/60 peer-disabled:text-muted-foreground/60",
        ],

        // -- secondary --
        "secondary-muted": [
          "text-secondary-muted-foreground/60 peer-disabled:text-muted-foreground/60",
        ],
      },
    },
    defaultVariants: {
      size: "default",
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
  size = "default",
  classNames,
  className,
  htmlSize,
  multiple,
  children,
  ...props
}: SelectNativeProps) {
  return (
    <div
      data-slot="select-native"
      className={cn(
        selectNativeRootVariants({ size }),
        multiple && "h-auto",
        classNames?.root
      )}
    >
      <select
        data-slot="select-native-trigger"
        className={cn(
          selectNativeTriggerVariants({ variant, size }),
          "peer/select-native-trigger",
          multiple && "h-auto py-2",
          classNames?.trigger,
          className
        )}
        size={htmlSize}
        multiple={multiple}
        data-multiple={multiple}
        {...props}
      >
        {children}
      </select>
      {!multiple && (
        <ChevronsUpDownIcon
          data-slot="select-native-icon"
          aria-hidden="true"
          className={cn(
            selectNativeIconVariants({ variant, size }),
            classNames?.icon
          )}
        />
      )}
    </div>
  );
}

export { SelectNative };
