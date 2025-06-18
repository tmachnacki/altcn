"use client";

import * as React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

type InputPasswordProps = Omit<
  React.ComponentProps<typeof Input>,
  "type" | "autoComplete"
> & {
  autoComplete?: "current-password" | "new-password" | "off";
  toggleVariant?: React.ComponentProps<typeof Button>["variant"];
  classNames?: {
    root?: string;
    input?: string;
    toggle?: string;
  };
};

function InputPassword({
  className,
  size = "default",
  variant = "outline",
  toggleVariant = "ghost",
  classNames,
  autoComplete,
  ...props
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div data-slot className={cn("relative", classNames?.root)}>
      <Input
        data-slot="input-password-input"
        type={showPassword ? "text" : "password"}
        variant={variant}
        size={size}
        autoComplete={autoComplete}
        className={cn(
          { default: "pr-9", sm: "pr-8", lg: "pr-10" }[size || "default"],
          "[&::-ms-reveal]:pointer-events-none [&::-ms-reveal]:invisible [&::-ms-reveal]:hidden",
          "[&::-ms-clear]:pointer-events-none [&::-ms-clear]:invisible [&::-ms-clear]:hidden",
          classNames?.input,
          className
        )}
        {...props}
      />

      <Button
        data-slot="input-password-toggle"
        type="button"
        variant={toggleVariant}
        className={cn(
          "absolute top-1/2 right-1 -translate-y-1/2 rounded-sm",
          {
            default: "size-7",
            sm: "size-6",
            lg: "size-8",
          }[size || "default"],
          classNames?.toggle
        )}
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <EyeOffIcon aria-hidden="true" className="size-4" />
        ) : (
          <EyeIcon aria-hidden="true" className="size-4" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>
    </div>
  );
}

export { InputPassword };
