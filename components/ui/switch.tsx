"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const switchVariants = cva(
  [
    "peer relative isolate inline-flex h-5 w-9 shrink-0 items-center rounded-full p-[3px] transition duration-200 ease-in-out data-[state=unchecked]:inset-shadow-sm dark:data-[state=unchecked]:shadow-none",

    "hover:not-disabled:not-aria-invalid:data-[state=unchecked]:bg-hover-muted dark:hover:not-disabled:not-aria-invalid:data-[state=unchecked]:bg-hover-faded dark:hover:not-disabled:not-aria-invalid:data-[state=unchecked]:inset-ring-hover-border",

    "data-[state=unchecked]:bg-muted dark:data-[state=unchecked]:bg-faded dark:data-[state=unchecked]:inset-ring dark:data-[state=unchecked]:inset-ring-border",

    "focus-visible:outline-2 focus-visible:outline-offset-2",

    "disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:disabled:bg-muted dark:data-[state=unchecked]:disabled:bg-faded dark:data-[state=unchecked]:disabled:inset-ring dark:data-[state=unchecked]:disabled:inset-ring-border",

    "aria-invalid:outline-destructive aria-invalid:data-[state=checked]:bg-destructive aria-invalid:data-[state=unchecked]:bg-destructive-muted aria-invalid:data-[state=unchecked]:inset-ring aria-invalid:data-[state=unchecked]:inset-ring-destructive dark:aria-invalid:data-[state=unchecked]:bg-destructive-faded dark:aria-invalid:data-[state=unchecked]:inset-ring",
  ],
  {
    variants: {
      variant: {
        base: ["outline-outline", "data-[state=checked]:bg-base"],
        primary: ["outline-primary", "data-[state=checked]:bg-primary"],
        secondary: ["outline-secondary", "data-[state=checked]:bg-secondary"],
      },
      height: {
        default: "",
        thin: [
          "h-2.5 p-0 focus-visible:outline-offset-4",
          "data-[state=unchecked]:shadow-none",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
      height: "default",
    },
  }
);

const switchThumbVariants = cva(
  [
    "pointer-events-none block aspect-square h-full w-auto rounded-full bg-background shadow-sm transition-all duration-200 ease-in-out outline-none",
    "dark:data-[state=unchecked]:bg-foreground/50 dark:data-[state=unchecked]:backdrop-blur-lg",
    "group-aria-invalid/switch:data-[state=checked]:bg-destructive-foreground",
  ],
  {
    variants: {
      variant: {
        base: ["data-[state=checked]:bg-base-foreground"],
        primary: ["data-[state=checked]:bg-primary-foreground"],
        secondary: ["data-[state=checked]:bg-secondary-foreground"],
      },
      height: {
        default:
          "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        thin: [
          "size-4 inset-ring inset-ring-border",
          "dark:data-[state=unchecked]:data-[disabled]:bg-muted-foreground",
          "data-[state=checked]:bg-background dark:data-[state=checked]:bg-foreground",
          "data-[state=checked]:translate-x-[calc(--spacing(5)+1px)] data-[state=unchecked]:-translate-x-px",
        ],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "primary",
      height: "default",
    },
  }
);

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants> & {
    classNames?: {
      root?: string;
      thumb?: string;
    };
  };

function Switch({
  className,
  variant = "primary",
  height,
  classNames,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        switchVariants({ variant, height }),
        "group/switch",
        classNames?.root,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          switchThumbVariants({ variant, height }),
          classNames?.thumb
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
