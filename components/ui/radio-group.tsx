"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";

// import { CircleIcon } from "lucide-react";

import { cn } from "~/lib/utils";

const radioGroupItemVariants = cva(
  [
    "peer inline-flex size-4 shrink-0 items-center justify-center rounded-full",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:outline-destructive",
  ],
  {
    variants: {
      variant: {
        base: [
          "outline-outline not-disabled:data-[state=checked]:bg-base not-disabled:data-[state=checked]:text-base-foreground not-disabled:data-[state=checked]:inset-ring-0",
        ],
        // accent: [
        //   "bg-muted outline-outline not-disabled:data-[state=checked]:text-accent-foreground",
        // ],
        // muted: [],
        primary:
          "outline-primary not-disabled:data-[state=checked]:bg-primary not-disabled:data-[state=checked]:text-primary-foreground not-disabled:data-[state=checked]:inset-ring-0",
        // "primary-accent": [],
        // "primary-muted": [],
        secondary:
          "outline-secondary not-disabled:data-[state=checked]:bg-secondary not-disabled:data-[state=checked]:text-secondary-foreground not-disabled:data-[state=checked]:inset-ring-0",
        // "secondary-accent": [],
        // "secondary-muted": [],
      },
    },
    compoundVariants: [
      {
        variant: ["base", "primary", "secondary"],
        className: [
          "bg-background shadow-xs inset-ring inset-ring-border dark:data-[state=unchecked]:bg-faded",

          "hover:not-aria-invalid:not-disabled:data-[state=unchecked]:inset-ring-hover-border",

          "disabled:bg-faded disabled:text-muted-foreground disabled:shadow-none disabled:inset-ring-border",

          "aria-invalid:inset-ring-destructive aria-invalid:disabled:bg-destructive-faded aria-invalid:disabled:text-destructive-muted-foreground aria-invalid:data-[state=checked]:inset-ring-destructive aria-invalid:not-disabled:data-[state=checked]:bg-destructive aria-invalid:not-disabled:data-[state=checked]:text-destructive-foreground dark:aria-invalid:bg-destructive-faded",
        ],
      },
      // {
      //   variant: ["accent", "muted"],
      //   className: [
      //     "hover:not-disabled:data-[state=unchecked]:bg-hover-muted",
      //     "aria-invalid:bg-destructive-muted aria-invalid:not-disabled:data-[state=checked]:text-destructive-accent-foreground aria-invalid:hover:not-disabled:data-[state=unchecked]:bg-hover-destructive-muted",
      //   ],
      // },
    ],
    defaultVariants: {
      variant: "primary",
    },
  }
);

const RadioGroupContext = React.createContext<
  VariantProps<typeof radioGroupItemVariants>
>({});

function RadioGroup({
  className,
  variant = "primary",
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> &
  VariantProps<typeof radioGroupItemVariants>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    >
      <RadioGroupContext.Provider value={{ variant }}>
        {children}
      </RadioGroupContext.Provider>
    </RadioGroupPrimitive.Root>
  );
}

function RadioGroupItem({
  variant,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioGroupItemVariants>) {
  const context = React.useContext(RadioGroupContext);

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        radioGroupItemVariants({ variant: variant || context.variant }),
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="size-full scale-40 rounded-full bg-current"
      >
        {/* <CircleIcon className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current stroke-none" /> */}
        {/* <span className="size-full scale-50 rounded-full bg-current" /> */}
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem, RadioGroupContext };
