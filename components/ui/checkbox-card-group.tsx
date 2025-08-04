"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { Checkbox } from "~/components/ui/checkbox";

const checkboxCardVariants = tv({
  base: [
    "[--checkbox-card-accent-text:var(--color-accent-foreground)] [--checkbox-card-muted-text:var(--color-muted-foreground)]",

    "relative flex items-start gap-3 rounded-lg p-4 shadow-xs outline -outline-offset-1 outline-border-solid",

    "hover:z-[1] hover:not-has-data-[state=checked]:bg-faded",

    "has-data-[state=checked]:not-has-focus-visible:z-[3] has-data-[state=indeterminate]:z-[2]",

    "has-disabled:pointer-events-none has-disabled:opacity-50 has-disabled:shadow-none has-disabled:has-data-[state=checked]:bg-faded has-disabled:has-data-[state=checked]:outline-base-bg has-disabled:has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-accent-foreground)] has-disabled:has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-muted-foreground)]",

    "has-focus-visible:z-[4] has-focus-visible:outline-2",

    "has-aria-invalid:outline-destructive-200 has-aria-invalid:has-focus-visible:outline-destructive has-aria-invalid:has-data-[state=checked]:bg-destructive-faded has-aria-invalid:has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-destructive-accent-foreground)] has-aria-invalid:has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-destructive-muted-foreground)] has-aria-invalid:has-data-[state=checked]:not-has-focus-visible:outline-destructive hover:has-aria-invalid:has-data-[state=checked]:bg-hover-destructive-faded dark:has-aria-invalid:outline-destructive-950",
  ],
  variants: {
    variant: {
      base: [
        "has-focus-visible:outline-outline has-data-[state=checked]:bg-faded has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-accent-foreground)] has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-outline hover:has-data-[state=checked]:bg-hover-faded",
      ],
      primary: [
        "has-focus-visible:outline-primary has-data-[state=checked]:bg-primary-faded has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-primary-accent-foreground)] has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-primary-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-primary-300 hover:has-data-[state=checked]:bg-hover-primary-faded dark:has-data-[state=checked]:not-has-focus-visible:outline-primary-900",
      ],
      secondary: [
        "has-focus-visible:outline-secondary has-data-[state=checked]:bg-secondary-faded has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-secondary-accent-foreground)] has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-secondary-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-secondary-300 hover:has-data-[state=checked]:bg-hover-secondary-faded dark:has-data-[state=checked]:not-has-focus-visible:outline-secondary-900",
      ],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const CheckboxCardGroupContext = React.createContext<
  VariantProps<typeof checkboxCardVariants>
>({});

function CheckboxCardGroup({
  variant = "primary",
  className,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof checkboxCardVariants>) {
  return (
    <CheckboxCardGroupContext.Provider
      value={{
        variant,
      }}
    >
      <div
        data-slot="checkbox-card-group"
        className={cn("relative isolate", className)}
        {...props}
      />
    </CheckboxCardGroupContext.Provider>
  );
}

function CheckboxCard({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof checkboxCardVariants>) {
  const context = React.useContext(CheckboxCardGroupContext);
  return (
    <LabelPrimitive.Root
      data-slot="checkbox-card"
      className={checkboxCardVariants({
        variant: variant || context.variant,
        className,
      })}
      {...props}
    />
  );
}

function CheckboxCardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="checkbox-card-content"
      className={cn("grid flex-1 gap-2", className)}
      {...props}
    />
  );
}

function CheckboxCardLabel({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="checkbox-card-label"
      className={cn(
        "block text-base/4.5 font-medium text-(--checkbox-card-accent-text) sm:text-sm/4",
        className
      )}
      {...props}
    />
  );
}

function CheckboxCardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="checkbox-card-description"
      className={cn(
        "block text-base text-(--checkbox-card-muted-text) sm:text-sm",
        className
      )}
      {...props}
    />
  );
}

function CheckboxCardCheckbox({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof Checkbox>) {
  const context = React.useContext(CheckboxCardGroupContext);
  return (
    <Checkbox
      variant={variant || context.variant}
      className={cn(
        "focus-visible:outline-none disabled:opacity-100",
        className
      )}
      {...props}
    />
  );
}

export {
  CheckboxCardGroup,
  CheckboxCard,
  CheckboxCardContent,
  CheckboxCardLabel,
  CheckboxCardDescription,
  CheckboxCardCheckbox,
  checkboxCardVariants,
};
