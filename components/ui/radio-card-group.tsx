"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { radioVariants } from "~/components/ui/radio-group";

const radioCardVariants = tv({
  base: [
    "[--description-text:var(--color-muted-foreground)] [--label-text:var(--color-accent-foreground)]",

    "relative flex items-start gap-3 rounded-lg p-4 shadow-xs outline -outline-offset-1 outline-border",

    "hover:z-10 hover:not-has-data-[state=checked]:bg-faded",

    "has-data-[state=checked]:not-has-focus-visible:z-20",

    "has-disabled:pointer-events-none has-disabled:opacity-50 has-disabled:shadow-none has-disabled:has-data-[state=checked]:bg-faded has-disabled:has-data-[state=checked]:outline-outline/50 has-disabled:has-data-[state=checked]:[--description-text:var(--color-muted-foreground)] has-disabled:has-data-[state=checked]:[--label-text:var(--color-accent-foreground)]",

    "has-focus-visible:z-30 has-focus-visible:outline-2",

    "has-aria-invalid:outline-destructive/35 has-aria-invalid:has-focus-visible:outline-destructive has-aria-invalid:has-data-[state=checked]:bg-destructive-faded has-aria-invalid:has-data-[state=checked]:[--description-text:var(--color-destructive-muted-foreground)] has-aria-invalid:has-data-[state=checked]:[--label-text:var(--color-destructive-accent-foreground)] has-aria-invalid:has-data-[state=checked]:not-has-focus-visible:outline-destructive/50 hover:has-aria-invalid:has-data-[state=checked]:bg-hover-destructive-faded",
  ],
  variants: {
    variant: {
      base: [
        "has-focus-visible:outline-outline has-data-[state=checked]:bg-faded has-data-[state=checked]:[--description-text:var(--color-muted-foreground)] has-data-[state=checked]:[--label-text:var(--color-accent-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-outline/50 hover:has-data-[state=checked]:bg-hover-faded",
      ],
      primary: [
        "has-focus-visible:outline-primary has-data-[state=checked]:bg-primary-faded has-data-[state=checked]:[--description-text:var(--color-primary-muted-foreground)] has-data-[state=checked]:[--label-text:var(--color-primary-accent-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-primary/50 hover:has-data-[state=checked]:bg-hover-primary-faded",
      ],
      secondary: [
        "has-focus-visible:outline-secondary has-data-[state=checked]:bg-secondary-faded has-data-[state=checked]:[--description-text:var(--color-secondary-muted-foreground)] has-data-[state=checked]:[--label-text:var(--color-secondary-accent-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-secondary/50 hover:has-data-[state=checked]:bg-hover-secondary-faded",
      ],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const RadioCardGroupContext = React.createContext<
  VariantProps<typeof radioCardVariants>
>({});

function RadioCardGroup({
  variant = "primary",
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> &
  VariantProps<typeof radioCardVariants>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-cards"
      className={cn("relative isolate", className)}
      {...props}
    >
      <RadioCardGroupContext.Provider value={{ variant }}>
        {children}
      </RadioCardGroupContext.Provider>
    </RadioGroupPrimitive.Root>
  );
}

function RadioCard({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof radioCardVariants>) {
  const context = React.useContext(RadioCardGroupContext);
  return (
    <LabelPrimitive.Root
      data-slot="radio-card"
      className={radioCardVariants({
        variant: variant || context.variant,
        className: ["group/radio-card", className],
      })}
      {...props}
    />
  );
}

function RadioCardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="radio-card-content"
      className={cn("grid flex-1 gap-1.5", className)}
      {...props}
    />
  );
}

function RadioCardLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="radio-card-label"
      className={cn(
        "block text-sm/4 font-medium text-(--label-text)",
        className
      )}
      {...props}
    />
  );
}

function RadioCardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="radio-card-description"
      className={cn("block font-normal text-(--description-text)", className)}
      {...props}
    />
  );
}

function RadioCardRadio({
  variant,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioVariants>) {
  const context = React.useContext(RadioCardGroupContext);

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-card-radio"
      className={radioVariants({
        variant: variant || context.variant,
        className: [
          "focus-visible:outline-none disabled:opacity-100",
          className,
        ],
      })}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-indicator"
        className="size-full scale-40 rounded-full bg-current"
      />
    </RadioGroupPrimitive.Item>
  );
}

export {
  RadioCardGroup,
  RadioCard,
  RadioCardContent,
  RadioCardLabel,
  RadioCardDescription,
  RadioCardRadio,
  radioCardVariants,
};
