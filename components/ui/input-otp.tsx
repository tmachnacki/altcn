"use client";

import * as React from "react";
import {
  OTPInput as InputOTPPrimitive,
  OTPInputContext as InputOTPPrimitiveContext,
} from "input-otp";
import { cva, type VariantProps } from "class-variance-authority";
import { MinusIcon } from "lucide-react";

import { cn } from "~/lib/utils";

const inputOTPSlotVariants = cva(
  [
    "relative isolate flex items-center justify-center outline-none data-[active=true]:z-20",
    "data-[invalid=true]:text-destructive-accent-foreground",
    "data-[layout=split]:last:mr-0",
  ],
  {
    variants: {
      size: {
        sm: "h-(--size-sm) w-(--size-sm) text-sm data-[layout=split]:mr-1.5",
        md: "h-(--size-md) w-(--size-md) text-sm data-[layout=split]:mr-2",
        lg: "h-(--size-lg) w-(--size-lg) text-base data-[layout=split]:mr-2.5",
      },
      variant: {
        outline: [
          "-ml-px bg-background text-foreground shadow-xs inset-ring-1 inset-ring-border group-hover/input-otp:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:not-data-[invalid=true]:inset-ring-hover-border first:-ml-0 first:rounded-l-md last:rounded-r-md dark:bg-faded",

          "data-[placeholder]:text-placeholder",

          "group-has-disabled/input-otp:bg-faded group-has-disabled/input-otp:shadow-none",

          "data-[invalid=true]:inset-ring-destructive/50 data-[invalid=true]:group-hover/input-otp:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:inset-ring-destructive data-[invalid=true]:data-[active=true]:inset-ring-destructive data-[invalid=true]:data-[placeholder]:text-destructive-placeholder dark:data-[invalid=true]:bg-destructive-faded",

          "data-[active=true]:inset-ring-2 data-[active=true]:inset-ring-primary",

          "data-[layout=split]:-ml-0 data-[layout=split]:rounded-md",
        ],

        muted: [
          "-ml-px bg-muted text-accent-foreground group-hover/input-otp:not-data-[invalid=true]:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:bg-hover-muted first:ml-0 first:rounded-l-md last:rounded-r-md",

          "shadow-[inset_1px_0_0_0_var(--inset-border),inset_-1px_0_0_0_var(--inset-border)] [--inset-border:var(--color-border)] first:shadow-[inset_-1px_0_0_0_var(--inset-border)] last:shadow-[inset_1px_0_0_0_var(--inset-border)]",

          "data-[placeholder]:text-placeholder",

          "data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-primary)]",

          "data-[invalid=true]:bg-destructive-muted data-[invalid=true]:text-destructive-accent-foreground data-[invalid=true]:[--inset-border:var(--color-border-destructive-faded)] data-[invalid=true]:group-not-focus-within/input-otp:group-hover/input-otp:bg-hover-destructive-muted data-[invalid=true]:data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-destructive)] data-[invalid=true]:data-[placeholder]:text-destructive-placeholder",

          "data-[layout=split]:ml-0 data-[layout=split]:rounded-md data-[layout=split]:shadow-none",
        ],

        underlined: [
          "mr-0.5 rounded-none bg-transparent text-foreground shadow-[inset_0_-1px_0_0_var(--color-border)] group-hover/input-otp:not-data-[invalid=true]:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:shadow-[inset_0_-1px_0_0_var(--color-hover-border)] last:mr-0",

          "data-[placeholder]:text-placeholder",

          "data-[active=true]:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

          "data-[invalid=true]:shadow-[inset_0_-1px_0_0_--alpha(var(--color-destructive)/50%)] data-[invalid=true]:group-hover/input-otp:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:shadow-[inset_0_-1px_0_0_var(--color-destructive)] data-[invalid=true]:data-[active=true]:shadow-[inset_0_-2px_0_0_var(--color-destructive)] data-[invalid=true]:data-[placeholder]:text-destructive-placeholder",
        ],

        "primary-muted": [
          "-ml-px bg-primary-muted text-primary-accent-foreground group-hover/input-otp:not-data-[invalid=true]:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:bg-hover-primary-muted first:ml-0 first:rounded-l-md last:rounded-r-md",

          "shadow-[inset_1px_0_0_0_var(--inset-border),inset_-1px_0_0_0_var(--inset-border)] [--inset-border:var(--color-border-primary-faded)] first:shadow-[inset_-1px_0_0_0_var(--inset-border)] last:shadow-[inset_1px_0_0_0_var(--inset-border)]",

          "data-[placeholder]:text-primary-placeholder",

          "group-has-disabled/input-otp:bg-muted group-has-disabled/input-otp:text-accent-foreground group-has-disabled/input-otp:[--inset-border:var(--color-border)] group-has-disabled/input-otp:data-[placeholder]:text-placeholder",

          "data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-primary)]",

          "data-[invalid=true]:bg-destructive-muted data-[invalid=true]:text-destructive-accent-foreground data-[invalid=true]:[--inset-border:var(--color-border-destructive-faded)] data-[invalid=true]:group-not-focus-within/input-otp:group-hover/input-otp:bg-hover-destructive-muted data-[invalid=true]:data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-destructive)] data-[invalid=true]:data-[placeholder]:text-destructive-placeholder",

          "data-[layout=split]:-ml-0 data-[layout=split]:rounded-md data-[layout=split]:shadow-none",
        ],

        "secondary-muted": [
          "-ml-px bg-secondary-muted text-secondary-accent-foreground group-hover/input-otp:not-data-[invalid=true]:group-not-has-disabled/input-otp:group-not-focus-within/input-otp:bg-hover-secondary-muted first:ml-0 first:rounded-l-md last:rounded-r-md",

          "shadow-[inset_1px_0_0_0_var(--inset-border),inset_-1px_0_0_0_var(--inset-border)] [--inset-border:var(--color-border-secondary-faded)] first:shadow-[inset_-1px_0_0_0_var(--inset-border)] last:shadow-[inset_1px_0_0_0_var(--inset-border)]",

          "data-[placeholder]:text-secondary-placeholder",

          "group-has-disabled/input-otp:bg-muted group-has-disabled/input-otp:text-accent-foreground group-has-disabled/input-otp:[--shadow-border:var(--color-border)] group-has-disabled/input-otp:data-[placeholder]:text-placeholder",

          "data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-secondary)]",

          "data-[invalid=true]:bg-destructive-muted data-[invalid=true]:text-destructive-accent-foreground data-[invalid=true]:[--inset-border:var(--color-border-destructive-faded)] data-[invalid=true]:group-not-focus-within/input-otp:group-hover/input-otp:bg-hover-destructive-muted data-[invalid=true]:data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-destructive)] data-[invalid=true]:data-[placeholder]:text-destructive-placeholder",

          "data-[layout=split]:-ml-0 data-[layout=split]:rounded-md data-[layout=split]:shadow-none",
        ],
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

type InputOTPContextProps = {
  variant?: VariantProps<typeof inputOTPSlotVariants>["variant"];
  size?: VariantProps<typeof inputOTPSlotVariants>["size"];
  layout?: "compact" | "split";
  ariaInvalid?: React.ComponentProps<typeof InputOTPPrimitive>["aria-invalid"];
};

const InputOTPContext = React.createContext<InputOTPContextProps>({});

type InputOTPProps = Omit<
  React.ComponentProps<typeof InputOTPPrimitive>,
  "size" | "render"
> &
  Pick<InputOTPContextProps, "variant" | "size" | "layout"> & {
    htmlSize?: number;
  };

function InputOTP({
  className,
  containerClassName,
  variant = "outline",
  size = "md",
  htmlSize,
  layout = "compact",
  "aria-invalid": ariaInvalid,
  children,
  ...props
}: InputOTPProps) {
  return (
    <InputOTPPrimitive
      data-slot="input-otp"
      data-layout={layout}
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        "group/input-otp",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      aria-invalid={ariaInvalid}
      size={htmlSize}
      {...props}
    >
      <InputOTPContext.Provider value={{ variant, layout, size, ariaInvalid }}>
        {children}
      </InputOTPContext.Provider>
    </InputOTPPrimitive>
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
  const { variant, layout, size, ariaInvalid } =
    React.useContext(InputOTPContext);

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      data-layout={layout}
      data-placeholder={placeholderChar ? true : undefined}
      data-invalid={ariaInvalid}
      className={cn(inputOTPSlotVariants({ variant, size }), className)}
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

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon className="text-muted-foreground" />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
