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
    "relative isolate flex items-center justify-center outline-none hover:data-[active=false]:z-10 data-[active=true]:z-20",
    "data-[invalid]:text-destructive-accent-foreground",
    "data-[spacing=split]:last:mr-0",
  ],
  variants: {
    size: {
      sm: [
        "text-sm",
        "h-(--size-md) w-(--size-md) sm:h-(--size-sm) sm:w-(--size-sm)",
        "data-[spacing=compact]:not-first:w-[calc(var(--size-md)+1px) sm:data-[spacing=compact]:not-first:w-[calc(var(--size-sm)+1px)]]",
      ],
      md: [
        "text-base sm:text-sm",
        "h-(--size-lg) w-(--size-lg) sm:h-(--size-md) sm:w-(--size-md)",
        "data-[spacing=compact]:not-first:w-[calc(var(--size-lg)+1px)] sm:data-[spacing=compact]:not-first:w-[calc(var(--size-md)+1px)]",
      ],
      lg: [
        "text-lg sm:text-base",
        "h-(--size-xl) w-(--size-xl) sm:h-(--size-lg) sm:w-(--size-lg)",
        "data-[spacing=compact]:not-first:w-[calc(var(--size-xl)+1px)] sm:data-[spacing=compact]:not-first:w-[calc(var(--size-lg)+1px)]",
      ],
    },
    variant: {
      outline: [
        "bg-background text-foreground shadow-xs inset-ring-1 inset-ring-border not-first:-ml-px group-hover/input-otp:not-data-[disabled]:group-not-focus-within/input-otp:not-data-[invalid]:inset-ring-hover-border first:rounded-l-md last:rounded-r-md dark:bg-faded",

        "data-[spacing=split]:-ml-0 data-[spacing=split]:rounded-md",

        "data-[placeholder]:text-placeholder",

        "data-[disabled]:bg-faded data-[disabled]:shadow-none",

        "data-[invalid]:inset-ring-destructive data-[invalid]:data-[disabled]:bg-destructive-faded data-[invalid]:data-[placeholder]:text-destructive-placeholder dark:data-[invalid]:bg-destructive-faded",

        "data-[active=true]:inset-ring-2 data-[active=true]:inset-ring-primary",
      ],

      muted: [
        "bg-muted text-accent-foreground not-first:-ml-px group-hover/input-otp:not-data-[disabled]:group-not-focus-within/input-otp:not-data-[invalid]:bg-hover-muted first:rounded-l-md last:rounded-r-md",

        "shadow-[inset_1px_0_0_0_var(--inset-border),inset_-1px_0_0_0_var(--inset-border)] [--inset-border:var(--color-border)] first:shadow-[inset_-1px_0_0_0_var(--inset-border)] last:shadow-[inset_1px_0_0_0_var(--inset-border)]",

        "data-[placeholder]:text-placeholder",

        "data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-primary)]",

        "data-[invalid]:bg-destructive-muted data-[invalid]:text-destructive-accent-foreground data-[invalid]:[--inset-border:var(--color-destructive-faded-border)] group-hover/input-otp:not-data-[disabled]:data-[invalid]:group-not-focus-within/input-otp:bg-hover-destructive-muted data-[invalid]:data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-destructive)] data-[invalid]:data-[placeholder]:text-destructive-placeholder",

        "data-[spacing=split]:ml-0 data-[spacing=split]:rounded-md data-[spacing=split]:not-data-[active=true]:shadow-none",
      ],

      underlined: [
        "mr-0.5 rounded-none bg-transparent text-foreground shadow-[inset_0_-1px_0_0_var(--color-border)] group-hover/input-otp:not-data-[disabled]:group-not-focus-within/input-otp:not-data-[invalid]:shadow-[inset_0_-1px_0_0_var(--color-hover-border)] last:mr-0 data-[spacing=split]:mr-0",

        "data-[placeholder]:text-placeholder",

        "data-[active=true]:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

        "data-[invalid]:shadow-[inset_0_-1px_0_0_var(--color-destructive)] data-[invalid]:data-[active=true]:shadow-[inset_0_-2px_0_0_var(--color-destructive)] data-[invalid]:data-[placeholder]:text-destructive-placeholder",
      ],

      "primary-muted": [
        "bg-primary-muted text-primary-accent-foreground not-first:-ml-px group-hover/input-otp:not-data-[disabled]:group-not-focus-within/input-otp:not-data-[invalid]:bg-hover-primary-muted first:rounded-l-md last:rounded-r-md",

        "shadow-[inset_1px_0_0_0_var(--inset-border),inset_-1px_0_0_0_var(--inset-border)] [--inset-border:var(--color-primary-faded-border)] first:shadow-[inset_-1px_0_0_0_var(--inset-border)] last:shadow-[inset_1px_0_0_0_var(--inset-border)]",

        "data-[placeholder]:text-primary-placeholder",

        "data-[disabled]:bg-muted data-[disabled]:text-accent-foreground data-[disabled]:[--inset-border:var(--color-border)] data-[disabled]:data-[placeholder]:text-placeholder",

        "data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-primary)]",

        "data-[invalid]:bg-destructive-muted data-[invalid]:text-destructive-accent-foreground data-[invalid]:[--inset-border:var(--color-destructive-faded-border)] group-hover/input-otp:not-data-[disabled]:data-[invalid]:group-not-focus-within/input-otp:bg-hover-destructive-muted data-[invalid]:data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-destructive)] data-[invalid]:data-[placeholder]:text-destructive-placeholder",

        "data-[spacing=split]:-ml-0 data-[spacing=split]:rounded-md data-[spacing=split]:not-data-[active=true]:shadow-none",
      ],

      "secondary-muted": [
        "bg-secondary-muted text-secondary-accent-foreground not-first:-ml-px group-hover/input-otp:not-data-[disabled]:group-not-focus-within/input-otp:not-data-[invalid]:bg-hover-secondary-muted first:rounded-l-md last:rounded-r-md",

        "shadow-[inset_1px_0_0_0_var(--inset-border),inset_-1px_0_0_0_var(--inset-border)] [--inset-border:var(--color-secondary-faded-border)] first:shadow-[inset_-1px_0_0_0_var(--inset-border)] last:shadow-[inset_1px_0_0_0_var(--inset-border)]",

        "data-[placeholder]:text-secondary-placeholder",

        "data-[disabled]:bg-muted data-[disabled]:text-accent-foreground data-[disabled]:[--inset-border:var(--color-border)] data-[disabled]:data-[placeholder]:text-placeholder",

        "data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-secondary)]",

        "data-[invalid]:bg-destructive-muted data-[invalid]:text-destructive-accent-foreground data-[invalid]:[--inset-border:var(--color-destructive-faded-border)] group-hover/input-otp:not-data-[disabled]:data-[invalid]:group-not-focus-within/input-otp:bg-hover-destructive-muted data-[invalid]:data-[active=true]:shadow-[inset_0_0_0_2px_var(--color-destructive)] data-[invalid]:data-[placeholder]:text-destructive-placeholder",

        "data-[spacing=split]:-ml-0 data-[spacing=split]:rounded-md data-[spacing=split]:not-data-[active=true]:shadow-none",
      ],
    },
  },
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
      data-spacing={spacing}
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
        "flex w-fit items-center",
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
      data-spacing={spacing}
      data-placeholder={placeholderChar ? true : undefined}
      data-disabled={disabled ? true : undefined}
      data-invalid={ariaInvalid ? true : undefined}
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

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  inputOTPSlotVariants,
};
