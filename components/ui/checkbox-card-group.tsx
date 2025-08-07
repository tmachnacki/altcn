"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { Checkbox, checkBoxVariants } from "~/components/ui/checkbox";
import { Tron } from "~/components/ui/tron";

const checkboxCardVariants = tv({
  base: [
    "[--checkbox-card-accent-text:var(--color-accent-foreground)] [--checkbox-card-gap-x:--spacing(3)] [--checkbox-card-muted-text:var(--color-muted-foreground)]",
    "group/checkbox-card",

    "relative isolate grid grid-cols-[auto_1fr_auto] gap-y-1 rounded-lg p-4 shadow-xs outline -outline-offset-1 outline-border-solid",

    "hover:z-[1] hover:not-has-data-[state=checked]:bg-faded",

    "has-data-[state=checked]:not-has-focus-visible:z-[3] has-data-[state=indeterminate]:z-[2]",

    "has-disabled:pointer-events-none has-disabled:opacity-50 has-disabled:shadow-none has-disabled:has-data-[state=checked]:bg-faded has-disabled:has-data-[state=checked]:outline-[color-mix(in_oklab,var(--color-outline)_40%,var(--color-background))] has-disabled:has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-accent-foreground)] has-disabled:has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-muted-foreground)]",

    "has-focus-visible:z-[4] has-focus-visible:outline-2",

    "has-aria-invalid:outline-destructive-200 has-aria-invalid:has-focus-visible:outline-destructive has-aria-invalid:has-data-[state=checked]:bg-destructive-faded has-aria-invalid:has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-destructive-accent-foreground)] has-aria-invalid:has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-destructive-muted-foreground)] has-aria-invalid:has-data-[state=checked]:not-has-focus-visible:outline-[color-mix(in_oklab,var(--color-destructive-500)_50%,var(--color-background))] hover:has-aria-invalid:has-data-[state=checked]:bg-hover-destructive-faded dark:has-aria-invalid:outline-destructive-950",
  ],
  variants: {
    variant: {
      base: [
        "has-focus-visible:outline-outline has-data-[state=checked]:bg-faded has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-accent-foreground)] has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-[color-mix(in_oklab,var(--color-outline)_40%,var(--color-background))] hover:has-data-[state=checked]:bg-hover-faded",
      ],
      primary: [
        "has-focus-visible:outline-primary has-data-[state=checked]:bg-primary-faded has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-primary-accent-foreground)] has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-primary-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-[color-mix(in_oklab,var(--color-primary-500)_50%,var(--color-background))] hover:has-data-[state=checked]:bg-hover-primary-faded",
      ],
      "primary-tron": [
        "[--tron-beam:var(--color-primary)] [--tron-blur:var(--color-primary-tron-blur)]",
        "has-focus-visible:outline-primary has-data-[state=checked]:bg-background has-data-[state=checked]:bg-linear-(--primary-tron-gradient) has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-primary-accent-foreground)] has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-primary-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-[color-mix(in_oklab,var(--color-primary-500)_50%,var(--color-background))] hover:has-data-[state=checked]:bg-primary-faded",
      ],
      secondary: [
        "has-focus-visible:outline-secondary has-data-[state=checked]:bg-secondary-faded has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-secondary-accent-foreground)] has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-secondary-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-[color-mix(in_oklab,var(--color-secondary-500)_50%,var(--color-background))] hover:has-data-[state=checked]:bg-hover-secondary-faded",
      ],
      "secondary-tron": [
        "[--tron-beam:var(--color-secondary)] [--tron-blur:var(--color-secondary-tron-blur)]",
        "has-focus-visible:outline-secondary has-data-[state=checked]:bg-background has-data-[state=checked]:bg-linear-(--secondary-tron-gradient) has-data-[state=checked]:[--checkbox-card-accent-text:var(--color-secondary-accent-foreground)] has-data-[state=checked]:[--checkbox-card-muted-text:var(--color-secondary-muted-foreground)] has-data-[state=checked]:not-has-focus-visible:outline-[color-mix(in_oklab,var(--color-secondary-500)_50%,var(--color-background))] hover:has-data-[state=checked]:bg-secondary-faded",
      ],
    },
  },
  compoundVariants: [
    {
      variant: ["primary-tron", "secondary-tron"],
      className: [
        "has-disabled:has-data-[state=checked]:bg-faded has-disabled:has-data-[state=checked]:bg-none",
        "has-aria-invalid:[--tron-beam:var(--color-destructive)] has-aria-invalid:[--tron-blur:var(--color-destructive-tron-blur)] has-aria-invalid:has-data-[state=checked]:bg-background has-aria-invalid:has-data-[state=checked]:bg-linear-(--destructive-tron-gradient) hover:has-aria-invalid:has-data-[state=checked]:bg-destructive-faded",
      ],
    },
  ],
  defaultVariants: {
    variant: "primary",
  },
});

type CheckboxCardGroupContextProps = {
  variants?: {
    card?: VariantProps<typeof checkboxCardVariants>["variant"];
    checkbox?: VariantProps<typeof checkBoxVariants>["variant"];
  };
};

const CheckboxCardGroupContext =
  React.createContext<CheckboxCardGroupContextProps>({
    variants: {
      card: "primary",
      checkbox: "primary",
    },
  });

function CheckboxCardGroup({
  variants = {
    card: "primary",
    checkbox: "primary",
  },
  className,
  ...props
}: React.ComponentProps<"div"> & CheckboxCardGroupContextProps) {
  return (
    <CheckboxCardGroupContext.Provider
      value={{
        variants,
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
  children,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof checkboxCardVariants>) {
  const context = React.useContext(CheckboxCardGroupContext);
  const _variant = variant || context.variants?.card;
  return (
    <LabelPrimitive.Root
      data-slot="checkbox-card"
      className={checkboxCardVariants({
        variant: _variant,
        className,
      })}
      {...props}
    >
      {children}
      {_variant?.includes("tron") && (
        <>
          <Tron
            side="bottom"
            type="beam"
            border="inset"
            className="via-(--tron-beam) opacity-0 group-has-data-[state=checked]/checkbox-card:group-not-has-disabled/checkbox-card:opacity-100"
          />
          <Tron
            side="bottom"
            type="blur"
            border="inset"
            className="via-(--tron-blur) opacity-0 group-has-data-[state=checked]/checkbox-card:group-not-has-disabled/checkbox-card:opacity-100"
          />
        </>
      )}
    </LabelPrimitive.Root>
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
        "col-start-2 row-start-1 block text-base/4.5 font-medium text-(--checkbox-card-accent-text) sm:text-sm/4",
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
        "col-start-2 row-start-2 block text-base text-(--checkbox-card-muted-text) sm:text-sm",
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
      variant={variant || context.variants?.checkbox}
      className={cn(
        "row-start-1 first:col-start-1 first:mr-(--checkbox-card-gap-x) last:col-start-3 last:ml-(--checkbox-card-gap-x) focus-visible:outline-none disabled:opacity-100",
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
