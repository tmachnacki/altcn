"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputOTPSlotVariants = cva(
  "relative flex h-9 w-9 items-center justify-center text-sm data-[active=true]:z-10",
  {
    variants: {
      variant: {
        default: [
          "border-y border-r border-border bg-background text-foreground shadow-xs not-aria-invalid:group-not-focus-within/input-otp:group-hover/input-otp:border-border-hover first:rounded-l-md first:border-l last:rounded-r-md dark:bg-faded",
          "aria-invalid:border-destructive aria-invalid:text-destructive-accent-foreground aria-invalid:outline-destructive aria-invalid:data-[active=true]:outline-2 dark:aria-invalid:bg-destructive-faded",
          "ring-primary data-[active=true]:border-primary data-[active=true]:ring-1",
          "data-[split=true]:rounded-md data-[split=true]:border",
        ],
        muted: [
          "border-r border-border bg-muted text-accent-foreground not-aria-invalid:group-not-focus-within/input-otp:group-hover/input-otp:bg-accent first:rounded-l-md last:rounded-r-md last:border-r-0",
          "data-[active=true]:border-transparent data-[active=true]:outline-2 data-[active=true]:outline-primary",
          "aria-invalid:border-destructive-faded aria-invalid:bg-destructive-muted/70 aria-invalid:text-destructive-accent-foreground aria-invalid:group-not-focus-within/input-otp:group-hover/input-otp:bg-destructive-muted aria-invalid:data-[active=true]:ring-destructive",
          "data-[split=true]:rounded-md data-[split=true]:border-none",
        ],
        underlined: "",
        primary: "",
        secondary: "",
      },
      split: {
        false: null,
        true: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const InputOTPVariantsContext = React.createContext<
  VariantProps<typeof inputOTPSlotVariants>
>({
  variant: "default",
  split: false,
});

type InputOTPProps = React.ComponentProps<typeof OTPInput> &
  VariantProps<typeof inputOTPSlotVariants> & {
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
  const { split } = React.useContext(InputOTPVariantsContext);
  return (
    <div
      data-slot="input-otp-group"
      data-split={split}
      className={cn("flex items-center data-[split=true]:gap-2", className)}
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
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  const { variant, split } = React.useContext(InputOTPVariantsContext);

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      data-variant={variant}
      data-split={split}
      className={cn(inputOTPSlotVariants({ variant, split }), className)}
      {...props}
    >
      {char}
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
      <MinusIcon />
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
