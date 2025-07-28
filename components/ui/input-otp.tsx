"use client";

import * as React from "react";
import {
  OTPInput as InputOTPPrimitive,
  OTPInputContext as InputOTPPrimitiveContext,
} from "input-otp";
import { tv, type VariantProps } from "tailwind-variants";
import { MinusIcon } from "lucide-react";

import { cn } from "~/lib/utils";

const inputOTPSlotVariants = tv({
  base: [
    "relative isolate flex items-center justify-center hover:data-[active=false]:z-10 data-[active=true]:z-20",
    "data-[active=true]:outline-2 data-[active=true]:-outline-offset-1",
    "data-[invalid]:text-destructive-accent-foreground data-[invalid]:data-[active=true]:outline-destructive",
  ],
  variants: {
    size: {
      sm: [
        "text-sm",
        "h-(--size-md) w-(--size-md) sm:h-(--size-sm) sm:w-(--size-sm)",
      ],
      md: [
        "text-base sm:text-sm",
        "h-(--size-lg) w-(--size-lg) sm:h-(--size-md) sm:w-(--size-md)",
      ],
      lg: [
        "text-lg sm:text-base",
        "h-(--size-xl) w-(--size-xl) sm:h-(--size-lg) sm:w-(--size-lg)",
      ],
    },
    spacing: {
      compact: "not-first:-ml-px first:rounded-l-md last:rounded-r-md",
      split: "rounded-md",
    },
    variant: {
      outline: [
        "bg-background text-foreground shadow-xs inset-ring inset-ring-border-solid group-hover/input-otp:not-data-[disabled]:group-not-focus-within/input-otp:not-data-[invalid]:inset-ring-hover-border-solid dark:bg-faded",

        "data-[active=true]:outline-primary",

        "data-[placeholder]:text-placeholder",

        "data-[disabled]:bg-faded data-[disabled]:shadow-none",

        "data-[invalid]:inset-ring-destructive data-[invalid]:data-[disabled]:bg-destructive-faded data-[invalid]:data-[placeholder]:text-destructive-placeholder dark:data-[invalid]:bg-destructive-faded",
      ],

      muted: [
        "bg-muted text-accent-foreground group-hover/input-otp:not-data-[disabled]:group-not-focus-within/input-otp:not-data-[invalid]:bg-hover-muted",

        "data-[active=true]:outline-primary",

        "data-[placeholder]:text-placeholder",

        "data-[invalid]:bg-destructive-muted data-[invalid]:text-destructive-accent-foreground group-hover/input-otp:not-data-[disabled]:data-[invalid]:group-not-focus-within/input-otp:bg-hover-destructive-muted data-[invalid]:data-[placeholder]:text-destructive-placeholder",
      ],

      underlined: [
        "rounded-none bg-transparent text-foreground shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none group-hover/input-otp:not-data-[disabled]:group-not-focus-within/input-otp:not-data-[invalid]:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",

        "data-[active=true]:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

        "data-[placeholder]:text-placeholder",

        "data-[invalid]:shadow-[inset_0_-1px_0_0_var(--color-destructive)] data-[invalid]:data-[active=true]:shadow-[inset_0_-2px_0_0_var(--color-destructive)] data-[invalid]:data-[placeholder]:text-destructive-placeholder",
      ],

      "primary-muted": [
        "bg-primary-muted text-primary-accent-foreground group-hover/input-otp:not-data-[disabled]:group-not-focus-within/input-otp:not-data-[invalid]:bg-hover-primary-muted",

        "data-[active=true]:outline-primary",

        "data-[placeholder]:text-primary-placeholder",

        "data-[disabled]:bg-muted data-[disabled]:text-accent-foreground data-[disabled]:data-[placeholder]:text-placeholder",

        "data-[invalid]:bg-destructive-muted data-[invalid]:text-destructive-accent-foreground group-hover/input-otp:not-data-[disabled]:data-[invalid]:group-not-focus-within/input-otp:bg-hover-destructive-muted data-[invalid]:data-[placeholder]:text-destructive-placeholder",
      ],

      "secondary-muted": [
        "bg-secondary-muted text-secondary-accent-foreground group-hover/input-otp:not-data-[disabled]:group-not-focus-within/input-otp:not-data-[invalid]:bg-hover-secondary-muted",

        "data-[active=true]:outline-secondary",

        "data-[placeholder]:text-secondary-placeholder",

        "data-[disabled]:bg-muted data-[disabled]:text-accent-foreground data-[disabled]:data-[placeholder]:text-placeholder",

        "data-[invalid]:bg-destructive-muted data-[invalid]:text-destructive-accent-foreground group-hover/input-otp:not-data-[disabled]:data-[invalid]:group-not-focus-within/input-otp:bg-hover-destructive-muted data-[invalid]:data-[placeholder]:text-destructive-placeholder",
      ],
    },
  },
  compoundVariants: [
    {
      variant: "muted",
      spacing: "compact",
      className: [
        "[--inset-border:--alpha(var(--color-faded-border)/50%)]",
        "shadow-[inset_1px_0_0_0_var(--inset-border),inset_-1px_0_0_0_var(--inset-border)] first:shadow-[inset_-1px_0_0_0_var(--inset-border)] last:shadow-[inset_1px_0_0_0_var(--inset-border)]",
        "data-[invalid]:[--inset-border:var(--color-destructive-faded-border)]",
      ],
    },
    {
      variant: "underlined",
      spacing: "compact",
      className: "not-last:mr-0.5",
    },
    {
      variant: "primary-muted",
      spacing: "compact",
      className: [
        "[--inset-border:--alpha(var(--color-primary-faded-border)/50%)]",
        "shadow-[inset_1px_0_0_0_var(--inset-border),inset_-1px_0_0_0_var(--inset-border)] first:shadow-[inset_-1px_0_0_0_var(--inset-border)] last:shadow-[inset_1px_0_0_0_var(--inset-border)]",
        "data-[disabled]:[--inset-border:var(--color-faded-border)]",
        "data-[invalid]:[--inset-border:var(--color-destructive-faded-border)]",
      ],
    },
    {
      variant: "secondary-muted",
      spacing: "compact",
      className: [
        "[--inset-border:--alpha(var(--color-secondary-faded-border)/50%)]",
        "shadow-[inset_1px_0_0_0_var(--inset-border),inset_-1px_0_0_0_var(--inset-border)] first:shadow-[inset_-1px_0_0_0_var(--inset-border)] last:shadow-[inset_1px_0_0_0_var(--inset-border)]",
        "data-[disabled]:[--inset-border:var(--color-faded-border)]",
        "data-[invalid]:[--inset-border:var(--color-destructive-faded-border)]",
      ],
    },
  ],
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
});

type InputOTPContextProps = VariantProps<typeof inputOTPSlotVariants> & {
  spacing?: "compact" | "split";
  disabled?: boolean;
  ariaInvalid?: React.ComponentProps<typeof InputOTPPrimitive>["aria-invalid"];
};

const InputOTPContext = React.createContext<InputOTPContextProps>({});

type InputOTPProps = Omit<
  React.ComponentProps<typeof InputOTPPrimitive>,
  "size" | "render"
> &
  Pick<InputOTPContextProps, "variant" | "size" | "spacing"> & {
    htmlSize?: number;
  };

function InputOTP({
  className,
  containerClassName,
  variant = "outline",
  size = "md",
  htmlSize,
  spacing = "split",
  disabled,
  "aria-invalid": ariaInvalid,
  children,
  ...props
}: InputOTPProps) {
  return (
    <InputOTPPrimitive
      data-slot="input-otp"
      containerClassName={cn(
        "peer group/input-otp",
        "flex w-fit items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={className}
      disabled={disabled}
      aria-invalid={ariaInvalid}
      size={htmlSize}
      {...props}
    >
      <InputOTPContext.Provider
        value={{ variant, spacing, size, ariaInvalid, disabled }}
      >
        {children}
      </InputOTPContext.Provider>
    </InputOTPPrimitive>
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  const { spacing, size } = React.useContext(InputOTPContext);
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        "relative isolate flex w-fit items-center",
        spacing === "split" &&
          {
            sm: "gap-1.5",
            md: "gap-2",
            lg: "gap-2.5",
          }[size || "md"],
        className
      )}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPPrimitiveContext = React.useContext(InputOTPPrimitiveContext);
  const { char, hasFakeCaret, isActive, placeholderChar } =
    inputOTPPrimitiveContext?.slots[index] ?? {};
  const { variant, spacing, size, ariaInvalid, disabled } =
    React.useContext(InputOTPContext);

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      data-placeholder={placeholderChar ? true : undefined}
      data-disabled={disabled ? true : undefined}
      data-invalid={
        ariaInvalid === "true" || ariaInvalid === true ? true : undefined
      }
      className={cn(
        inputOTPSlotVariants({ variant, size, spacing }),
        className
      )}
      {...props}
    >
      {(!isActive && placeholderChar) || char}
      {hasFakeCaret && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { size } = React.useContext(InputOTPContext);
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      className={cn(
        "text-muted-foreground",
        {
          sm: "size-(--icon-md) sm:size-(--icon-sm)",
          md: "size-(--icon-lg) sm:size-(--icon-md)",
          lg: "size-(--icon-xl) sm:size-(--icon-lg)",
        }[size || "md"],
        className
      )}
      {...props}
    >
      <MinusIcon className="size-full" />
    </div>
  );
}

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  inputOTPSlotVariants,
};
