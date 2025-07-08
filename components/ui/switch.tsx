"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const switchVariants = cva(
  [
    "peer relative isolate inline-flex h-5 w-9 shrink-0 items-center rounded-full p-[3px] transition duration-200 ease-in-out data-[state=unchecked]:inset-shadow-sm dark:data-[state=unchecked]:shadow-none",

    "hover:not-disabled:not-aria-invalid:data-[state=unchecked]:bg-hover-muted dark:hover:not-disabled:not-aria-invalid:data-[state=unchecked]:bg-hover-faded dark:hover:not-disabled:not-aria-invalid:data-[state=unchecked]:inset-ring-hover-border",

    "focus-visible:outline-2 focus-visible:outline-offset-2",

    "disabled:cursor-not-allowed disabled:opacity-50 disabled:data-[state=checked]:bg-base-500 data-[state=unchecked]:disabled:bg-muted dark:data-[state=unchecked]:disabled:bg-faded dark:data-[state=unchecked]:disabled:inset-ring dark:data-[state=unchecked]:disabled:inset-ring-border",

    "aria-invalid:outline-destructive aria-invalid:data-[state=checked]:bg-destructive aria-invalid:data-[state=checked]:[--switch-thumb-bg:var(--color-destructive-foreground)] aria-invalid:data-[state=unchecked]:bg-destructive-muted aria-invalid:data-[state=unchecked]:inset-ring aria-invalid:data-[state=unchecked]:inset-ring-destructive dark:aria-invalid:data-[state=unchecked]:bg-destructive-faded dark:aria-invalid:data-[state=unchecked]:inset-ring",
  ],
  {
    variants: {
      variant: {
        // -- primary --
        primary: [
          "outline-primary",
          "data-[state=checked]:bg-primary data-[state=checked]:[--switch-thumb-bg:var(--color-primary-foreground)]",
          "data-[state=unchecked]:bg-muted dark:data-[state=unchecked]:bg-faded dark:data-[state=unchecked]:inset-ring dark:data-[state=unchecked]:inset-ring-border",
        ],
        // "primary-muted": [
        //   "outline-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-muted",
        //   "dark:data-[state=unchecked]:bg-primary-faded dark:data-[state=unchecked]:inset-ring dark:data-[state=unchecked]:inset-ring-primary-border-faded",
        // ],

        // -- secondary --
        secondary: [
          "outline-secondary",
          "data-[state=checked]:bg-secondary data-[state=checked]:[--switch-thumb-bg:var(--color-secondary-foreground)]",
          "data-[state=unchecked]:bg-muted dark:data-[state=unchecked]:bg-faded dark:data-[state=unchecked]:inset-ring dark:data-[state=unchecked]:inset-ring-border",
        ],
        // "secondary-muted": [
        //   "outline-secondary data-[state=checked]:bg-secondary data-[state=unchecked]:bg-secondary-muted",
        //   "dark:data-[state=unchecked]:inset-ring-secondary-border-faded dark:data-[state=unchecked]:bg-secondary-faded dark:data-[state=unchecked]:inset-ring",
        // ],
      },
      thin: {
        true: [
          "h-2.5 p-0 focus-visible:outline-offset-4",
          "data-[state=unchecked]:shadow-none",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

// const switchThumbVariants = cva(
//   [
//     "pointer-events-none block aspect-square h-full w-auto rounded-full bg-background shadow-sm transition-all duration-200 ease-in-out outline-none dark:data-[state=checked]:bg-foreground dark:data-[state=unchecked]:bg-foreground/50 dark:data-[state=unchecked]:backdrop-blur-lg",
//   ],
//   {
//     variants: {
//       variant: {
//         primary: [

//         ],
//         secondary: [

//         ]
//       },
//       thin: {
//         true: [

//         ],
//       }
//     }
//   }
// )

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
  thin,
  classNames,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-thin={thin}
      className={cn(
        switchVariants({ variant, thin }),
        "group/switch",
        classNames?.root,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block aspect-square h-full w-auto rounded-full bg-background shadow-sm transition-all duration-200 ease-in-out outline-none dark:data-[state=checked]:bg-foreground dark:data-[state=unchecked]:bg-foreground/50 dark:data-[state=unchecked]:backdrop-blur-lg",
          thin
            ? "size-4 inset-ring inset-ring-border data-[state=checked]:translate-x-[calc(--spacing(5))] data-[state=unchecked]:-translate-x-0"
            : "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
          classNames?.thumb
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
