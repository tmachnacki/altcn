"use client";

import * as React from "react";
import {
  OTPInput as InputOTPPrimitive,
  OTPInputContext as InputOTPPrimitiveContext,
} from "input-otp";
import { MinusIcon } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputOTPSlotVariants = cva(
  [
    "relative flex items-center justify-center data-[active=true]:z-10",
    "aria-invalid:text-destructive-accent-foreground",
    "data-[split]:last:mr-0",
  ],
  {
    variants: {
      size: {
        default: "h-9 w-9 text-sm data-[split]:mr-2",
        sm: "text-smF h-8 w-8 data-[split]:mr-1.5",
        lg: "h-10 w-10 text-base data-[split]:mr-2.5",
      },
      variant: {
        default: [
          "-ml-px bg-background text-foreground shadow-xs inset-ring inset-ring-border not-aria-invalid:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:group-hover/input-otp:inset-ring-hover-border first:-ml-0 first:rounded-l-md last:rounded-r-md dark:bg-faded",

          "data-[placeholder]:text-placeholder",

          "group-has-disabled/input-otp:bg-muted group-has-disabled/input-otp:shadow-none",

          "aria-invalid:inset-ring-destructive aria-invalid:outline-destructive aria-invalid:data-[placeholder]:text-destructive-placeholder dark:aria-invalid:bg-destructive-faded",

          "data-[active=true]:outline-2 data-[active=true]:-outline-offset-2 data-[active=true]:outline-primary",

          "data-[split]:-ml-0 data-[split]:rounded-md",
        ],

        muted: [
          "-ml-px bg-muted text-accent-foreground not-aria-invalid:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:group-hover/input-otp:bg-accent first:ml-0 first:rounded-l-md last:rounded-r-md",
          "[--shadow-border:var(--color-border)] aria-invalid:[--shadow-border:var(--color-border-destructive-faded)]",

          "shadow-[inset_1px_0_0_0_var(--shadow-border),inset_-1px_0_0_0_var(--shadow-border)] first:shadow-[inset_-1px_0_0_0_var(--shadow-border)] last:shadow-[inset_1px_0_0_0_var(--shadow-border)]",

          "data-[placeholder]:text-muted-foreground",

          "data-[active=true]:outline-2 data-[active=true]:-outline-offset-2 data-[active=true]:outline-primary",

          "aria-invalid:bg-destructive-muted/80 aria-invalid:text-destructive-accent-foreground aria-invalid:group-not-focus-within/input-otp:group-hover/input-otp:bg-destructive-muted aria-invalid:data-[active=true]:outline-destructive aria-invalid:data-[placeholder]:text-destructive-muted-foreground",

          "data-[split]:ml-0 data-[split]:rounded-md data-[split]:shadow-none",
        ],

        underlined: [
          "mr-0.5 rounded-none bg-transparent text-foreground shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none not-aria-invalid:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:group-hover/input-otp:shadow-[inset_0_-1px_0_0_var(--color-hover-border)] last:mr-0",

          "data-[placeholder]:text-placeholder",

          "data-[active=true]:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

          "aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] aria-invalid:data-[active=true]:shadow-[inset_0_-2px_0_0_var(--color-destructive)] aria-invalid:data-[placeholder]:text-destructive-placeholder",
        ],

        primary: [
          "-ml-px bg-primary-muted/80 text-primary-accent-foreground not-aria-invalid:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:group-hover/input-otp:bg-primary-muted first:ml-0 first:rounded-l-md last:rounded-r-md",

          "[--shadow-border:var(--color-border-primary-faded)] aria-invalid:[--shadow-border:var(--color-border-destructive-faded)]",

          "shadow-[inset_1px_0_0_0_var(--shadow-border),inset_-1px_0_0_0_var(--shadow-border)] first:shadow-[inset_-1px_0_0_0_var(--shadow-border)] last:shadow-[inset_1px_0_0_0_var(--shadow-border)]",

          "data-[placeholder]:text-primary-muted-foreground",

          "group-has-disabled/input-otp:bg-muted group-has-disabled/input-otp:text-accent-foreground group-has-disabled/input-otp:[--shadow-border:var(--color-border)] group-has-disabled/input-otp:data-[placeholder]:text-muted-foreground",

          "data-[active=true]:outline-2 data-[active=true]:-outline-offset-2 data-[active=true]:outline-primary",

          "aria-invalid:bg-destructive-muted/80 aria-invalid:text-destructive-accent-foreground aria-invalid:group-not-focus-within/input-otp:group-hover/input-otp:bg-destructive-muted aria-invalid:data-[active=true]:outline-destructive aria-invalid:data-[placeholder]:text-destructive-muted-foreground",
          "data-[split]:-ml-0 data-[split]:rounded-md data-[split]:shadow-none",
        ],

        secondary: [
          "-ml-px bg-secondary-muted/80 text-secondary-accent-foreground not-aria-invalid:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:group-hover/input-otp:bg-secondary-muted first:ml-0 first:rounded-l-md last:rounded-r-md",

          "[--shadow-border:var(--color-border-secondary-faded)] aria-invalid:[--shadow-border:var(--color-border-destructive-faded)]",
          "shadow-[inset_1px_0_0_0_var(--shadow-border),inset_-1px_0_0_0_var(--shadow-border)] first:shadow-[inset_-1px_0_0_0_var(--shadow-border)] last:shadow-[inset_1px_0_0_0_var(--shadow-border)]",

          "data-[placeholder]:text-secondary-muted-foreground",

          "group-has-disabled/input-otp:bg-muted group-has-disabled/input-otp:text-accent-foreground group-has-disabled/input-otp:[--shadow-border:var(--color-border)] group-has-disabled/input-otp:data-[placeholder]:text-muted-foreground",

          "data-[active=true]:outline-2 data-[active=true]:-outline-offset-2 data-[active=true]:outline-secondary",

          "aria-invalid:bg-destructive-muted/80 aria-invalid:text-destructive-accent-foreground aria-invalid:group-not-focus-within/input-otp:group-hover/input-otp:bg-destructive-muted aria-invalid:data-[active=true]:outline-destructive aria-invalid:data-[placeholder]:text-destructive-muted-foreground",
          "data-[split]:-ml-0 data-[split]:rounded-md data-[split]:shadow-none",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type InputOTPContextType = {
  variant?: VariantProps<typeof inputOTPSlotVariants>["variant"];
  size?: VariantProps<typeof inputOTPSlotVariants>["size"];
  split?: boolean;
};

const InputOTPContext = React.createContext<InputOTPContextType>({});

type InputOTPProps = React.ComponentProps<typeof InputOTPPrimitive> & {
  variant?: VariantProps<typeof inputOTPSlotVariants>["variant"];
  inputSize?: VariantProps<typeof inputOTPSlotVariants>["size"];
  split?: boolean;
  containerClassName?: string;
};

function InputOTP({
  className,
  containerClassName,
  variant = "default",
  inputSize = "default",
  split = undefined,
  ...props
}: InputOTPProps) {
  return (
    <InputOTPContext.Provider value={{ variant, split, size: inputSize }}>
      <InputOTPPrimitive
        data-slot="input-otp"
        data-variant={variant}
        data-split={split}
        data-size={inputSize}
        containerClassName={cn(
          "flex items-center gap-2 has-disabled:opacity-50",
          "group/input-otp",
          containerClassName,
        )}
        className={cn("disabled:cursor-not-allowed", className)}
        {...props}
      />
    </InputOTPContext.Provider>
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
  const inputOTPPrimitiveContext = React.useContext(InputOTPPrimitiveContext);
  const { char, hasFakeCaret, isActive, placeholderChar } =
    inputOTPPrimitiveContext?.slots[index] ?? {};
  const { variant, split, size } = React.useContext(InputOTPContext);

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      data-variant={variant}
      data-split={split}
      data-size={size}
      data-placeholder={placeholderChar ? true : undefined}
      className={cn(inputOTPSlotVariants({ variant, size }), className)}
      {...props}
    >
      {(!isActive && placeholderChar) || char}
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

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
