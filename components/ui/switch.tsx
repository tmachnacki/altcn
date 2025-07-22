"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

const switchVariants = tv({
  slots: {
    root: [
      "peer group/switch",
      "relative isolate inline-flex h-6 w-10 shrink-0 items-center rounded-full p-[3px] transition-colors duration-200 ease-in-out data-[state=unchecked]:inset-shadow-sm sm:h-5 sm:w-9 dark:data-[state=unchecked]:shadow-none",

      "hover:not-aria-invalid:data-[state=unchecked]:bg-hover-muted dark:hover:not-aria-invalid:data-[state=unchecked]:bg-hover-faded dark:hover:not-aria-invalid:data-[state=unchecked]:inset-ring-hover-border",

      "data-[state=unchecked]:bg-muted dark:data-[state=unchecked]:bg-faded dark:data-[state=unchecked]:inset-ring dark:data-[state=unchecked]:inset-ring-border",

      "focus-visible:outline-2 focus-visible:outline-offset-2",

      "disabled:pointer-events-none disabled:opacity-50 disabled:data-[state=checked]:bg-base-bg disabled:data-[state=unchecked]:bg-muted dark:disabled:data-[state=unchecked]:bg-faded dark:disabled:data-[state=unchecked]:inset-ring dark:disabled:data-[state=unchecked]:inset-ring-border",

      "aria-invalid:outline-destructive aria-invalid:data-[state=checked]:bg-destructive hover:aria-invalid:data-[state=checked]:bg-hover-destructive aria-invalid:data-[state=unchecked]:bg-destructive-muted aria-invalid:data-[state=unchecked]:inset-ring aria-invalid:data-[state=unchecked]:inset-ring-destructive hover:aria-invalid:data-[state=unchecked]:bg-hover-destructive-muted dark:aria-invalid:data-[state=unchecked]:bg-destructive-faded dark:aria-invalid:data-[state=unchecked]:inset-ring dark:hover:aria-invalid:data-[state=unchecked]:bg-hover-destructive-faded dark:aria-invalid:disabled:data-[state=unchecked]:bg-destructive-faded dark:aria-invalid:disabled:data-[state=unchecked]:inset-ring-destructive",
    ],
    thumb: [
      "pointer-events-none block rounded-full bg-background shadow-sm transition-all duration-200 ease-in-out outline-none",
      "dark:data-[state=unchecked]:bg-base-400",
      "group-aria-invalid/switch:data-[state=checked]:bg-destructive-foreground",
    ],
  },
  variants: {
    variant: {
      contrast: {
        root: [
          "outline-outline",
          "data-[state=checked]:bg-contrast",
          "hover:data-[state=checked]:bg-hover-contrast",
        ],
        thumb: ["data-[state=checked]:bg-contrast-foreground"],
      },
      base: {
        root: [
          "outline-outline",
          "data-[state=checked]:bg-base-bg",
          "hover:data-[state=checked]:bg-hover-base",
        ],
        thumb: ["data-[state=checked]:bg-base-foreground"],
      },
      primary: {
        root: [
          "outline-primary",
          "data-[state=checked]:bg-primary",
          "hover:data-[state=checked]:bg-hover-primary",
        ],
        thumb: ["data-[state=checked]:bg-primary-foreground"],
      },
      secondary: {
        root: [
          "outline-secondary",
          "data-[state=checked]:bg-secondary",
          "hover:data-[state=checked]:bg-hover-secondary",
        ],
        thumb: ["data-[state=checked]:bg-secondary-foreground"],
      },
    },
    height: {
      default: {
        root: "",
        thumb: [
          "size-4.5 sm:size-3.5",
          "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
          "data-[state=checked]:data-[disabled]:bg-background dark:data-[state=checked]:data-[disabled]:bg-foreground",
        ],
      },
      thin: {
        root: [
          "h-3 p-0 focus-visible:outline-offset-4 sm:h-2.5",
          "data-[state=unchecked]:shadow-none",
        ],
        thumb: [
          "size-5 inset-ring inset-ring-border sm:size-4",
          "data-[state=checked]:bg-background dark:data-[state=checked]:bg-foreground",
          "data-[state=checked]:translate-x-[calc(--spacing(5)+1px)] data-[state=unchecked]:-translate-x-px",
        ],
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    height: "default",
  },
});

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
  const { root, thumb } = switchVariants({ variant, height });
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(root(), classNames?.root, className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(thumb(), classNames?.thumb)}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch, switchVariants };
