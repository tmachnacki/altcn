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
  classNames?: {
    container?: string;
    input?: string;
    toggle?: string;
  };
};

function InputPassword({
  className,
  size = "default",
  variant = "outline",
  classNames,
  autoComplete,
  disabled,
  ...props
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div
      data-slot="input-password-container"
      className={cn("relative", classNames?.container)}
    >
      <Input
        data-slot="input-password-input"
        type={showPassword ? "text" : "password"}
        variant={variant}
        size={size}
        autoComplete={autoComplete}
        disabled={disabled}
        className={cn(
          { default: "pr-9", sm: "pr-8", lg: "pr-10" }[size || "default"],
          "[&::-ms-reveal]:pointer-events-none [&::-ms-reveal]:invisible [&::-ms-reveal]:hidden",
          "[&::-ms-clear]:pointer-events-none [&::-ms-clear]:invisible [&::-ms-clear]:hidden",
          "peer/input-password-input",
          classNames?.input,
          className
        )}
        {...props}
      />

      <Button
        data-slot="input-password-toggle"
        type="button"
        variant={"ghost"}
        className={cn(
          "absolute top-1/2 right-1 -translate-y-1/2 rounded-sm bg-transparent outline-offset-0",
          "peer-aria-invalid/input-password-input:text-destructive-muted-foreground peer-aria-invalid/input-password-input:outline-destructive peer-aria-invalid/input-password-input:hover:bg-destructive-500/20",
          "disabled:text-muted-foreground disabled:pointer-events-none",
          {
            default: "size-7",
            sm: "size-6",
            lg: "size-8",
          }[size || "default"],
          {
            outline: "text-subtle-foreground hover:bg-base-500/20 outline-outline",
            muted: "text-subtle-foreground hover:bg-base-500/20 outline-outline ",
            underlined: "text-subtle-foreground hover:bg-base-500/20 outline-outline ",
            "primary-muted":
              "text-primary-muted-foreground hover:bg-primary-500/20 outline-primary ",
            "secondary-muted":
              "text-secondary-muted-foreground hover:bg-secondary-500/20 outline-secondary",
          }[variant || "outline"],
          classNames?.toggle
        )}
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={disabled}
      >
        {showPassword ? (
          <EyeOffIcon
            aria-hidden="true"
            className={cn(
              {
                default: "size-4",
                sm: "size-4",
                lg: "size-5",
              }[size || "default"]
            )}
          />
        ) : (
          <EyeIcon
            aria-hidden="true"
            className={cn(
              {
                default: "size-4",
                sm: "size-4",
                lg: "size-5",
              }[size || "default"]
            )}
          />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>
    </div>
  );
}

export { InputPassword };
