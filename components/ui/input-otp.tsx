"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputOTPSlotVariants = cva(
  [
    "relative flex h-9 w-9 items-center justify-center text-sm data-[active=true]:z-10",
    "aria-invalid:text-destructive-accent-foreground aria-invalid:data-[placeholder=true]:text-destructive-muted-foreground",
    "data-[split=true]:mr-2 data-[split=true]:last:mr-0",
  ],
  {
    variants: {
      variant: {
        default: [
          "-ml-px bg-background text-foreground shadow-xs inset-ring-1 inset-ring-border not-aria-invalid:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:group-hover/input-otp:inset-ring-border-hover first:-ml-0 first:rounded-l-md last:rounded-r-md dark:bg-faded",
          "data-[placeholder=true]:text-muted-foreground",
          "aria-invalid:inset-ring-destructive aria-invalid:outline-destructive dark:aria-invalid:bg-destructive-faded",
          "data-[active=true]:outline-2 data-[active=true]:-outline-offset-2 data-[active=true]:outline-primary",
          "data-[split=true]:-ml-0 data-[split=true]:rounded-md",
        ],

        muted: [
          "border-r border-border bg-muted text-accent-foreground not-aria-invalid:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:group-hover/input-otp:bg-accent first:rounded-l-md last:rounded-r-md last:border-r-0",
          "data-[placeholder=true]:text-muted-foreground",
          "data-[active=true]:border-transparent data-[active=true]:outline-2 data-[active=true]:-outline-offset-2 data-[active=true]:outline-primary",
          "aria-invalid:border-border-destructive-faded aria-invalid:bg-destructive-muted/70 aria-invalid:text-destructive-accent-foreground aria-invalid:group-not-focus-within/input-otp:group-hover/input-otp:bg-destructive-muted aria-invalid:data-[active=true]:outline-destructive",
          "data-[split=true]:rounded-md data-[split=true]:border-none",
        ],

        underlined: [
          "mr-0.5 rounded-none bg-transparent shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none not-aria-invalid:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:group-hover/input-otp:shadow-[inset_0_-1px_0_0_var(--color-border-hover)] last:mr-0",
          "data-[placeholder=true]:text-muted-foreground",
          "data-[active=true]:shadow-[inset_0_-2px_0_0_var(--color-primary)]",
          "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:data-[active=true]:shadow-[inset_0_-2px_0_0_var(--color-destructive)]",
        ],

        primary: [
          "border-r border-border-primary-faded bg-primary-faded text-accent-foreground not-aria-invalid:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:group-hover/input-otp:bg-primary-muted first:rounded-l-md last:rounded-r-md last:border-r-0",
          "data-[placeholder=true]:text-primary-muted-foreground",
          "data-[active=true]:border-transparent data-[active=true]:outline-2 data-[active=true]:-outline-offset-2 data-[active=true]:outline-primary",
          "aria-invalid:border-border-destructive-faded aria-invalid:bg-destructive-muted/70 aria-invalid:text-destructive-accent-foreground aria-invalid:group-not-focus-within/input-otp:group-hover/input-otp:bg-destructive-muted aria-invalid:data-[active=true]:outline-destructive",
          "data-[split=true]:rounded-md data-[split=true]:border-none",
        ],

        secondary: [
          "border-r border-border-secondary-faded bg-secondary-faded text-accent-foreground not-aria-invalid:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:group-hover/input-otp:bg-secondary-muted first:rounded-l-md last:rounded-r-md last:border-r-0",
          "data-[placeholder=true]:text-secondary-muted-foreground",
          "data-[active=true]:border-transparent data-[active=true]:outline-2 data-[active=true]:-outline-offset-2 data-[active=true]:outline-secondary",
          "aria-invalid:border-border-destructive-faded aria-invalid:bg-destructive-muted/70 aria-invalid:text-destructive-accent-foreground aria-invalid:group-not-focus-within/input-otp:group-hover/input-otp:bg-destructive-muted aria-invalid:data-[active=true]:outline-destructive",
          "data-[split=true]:rounded-md data-[split=true]:border-none",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const InputOTPVariantsContext = React.createContext<
  VariantProps<typeof inputOTPSlotVariants> & { split?: boolean }
>({});

type InputOTPProps = React.ComponentProps<typeof OTPInput> &
  VariantProps<typeof inputOTPSlotVariants> & {
    split?: boolean;
    containerClassName?: string;
  };

function InputOTP({
  className,
  containerClassName,
  variant = "default",
  split = false,
  ...props
}: InputOTPProps) {
  return (
    <InputOTPVariantsContext.Provider value={{ variant, split }}>
      <OTPInput
        data-slot="input-otp"
        data-variant={variant}
        data-split={split}
        containerClassName={cn(
          "flex items-center gap-2 has-disabled:opacity-50",
          "group/input-otp",
          containerClassName,
        )}
        className={cn("disabled:cursor-not-allowed", className)}
        {...props}
      />
    </InputOTPVariantsContext.Provider>
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
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
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive, placeholderChar } =
    inputOTPContext?.slots[index] ?? {};
  const { variant, split } = React.useContext(InputOTPVariantsContext);

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      data-variant={variant}
      data-split={split}
      data-placeholder={!!placeholderChar}
      className={cn(inputOTPSlotVariants({ variant }), className)}
      {...props}
    >
      {placeholderChar || char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon className="text-muted-foreground" />
    </div>
  );
}

export {
  inputOTPSlotVariants,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
};
