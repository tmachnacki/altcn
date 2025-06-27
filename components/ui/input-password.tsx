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
  size = "md",
  variant = "outline",
  classNames,
  autoComplete,
  disabled,
  id,
  ...props
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const _id = React.useId();
  return (
    <div
      data-slot="input-password-container"
      className={cn("relative", classNames?.container)}
    >
      <Input
        data-slot="input-password-input"
        id={id ?? _id}
        type={showPassword ? "text" : "password"}
        variant={variant}
        size={size}
        autoComplete={autoComplete}
        disabled={disabled}
        className={cn(
          { md: "pr-9", sm: "pr-8", lg: "pr-10" }[size || "md"],
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
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={disabled}
        aria-controls={id ?? _id}
        variant={"ghost"}
        className={cn(
          "absolute top-1/2 right-1 -translate-y-1/2 rounded-sm bg-transparent outline-offset-0",
          "peer-aria-invalid/input-password-input:text-destructive-muted-foreground peer-aria-invalid/input-password-input:outline-destructive peer-aria-invalid/input-password-input:hover:bg-destructive-500/20",
          "disabled:pointer-events-none disabled:text-muted-foreground",
          {
            md: "size-7",
            sm: "size-6",
            lg: "size-8",
          }[size || "md"],
          {
            outline:
              "text-subtle-foreground outline-outline hover:bg-base-500/20",
            muted:
              "text-subtle-foreground outline-outline hover:bg-base-500/20",
            underlined:
              "text-subtle-foreground outline-outline hover:bg-base-500/20",
            "primary-muted":
              "text-primary-muted-foreground outline-primary hover:bg-primary-500/20",
            "secondary-muted":
              "text-secondary-muted-foreground outline-secondary hover:bg-secondary-500/20",
          }[variant || "outline"],
          classNames?.toggle
        )}
      >
        {showPassword ? (
          <EyeOffIcon
            aria-hidden="true"
            className={cn(
              {
                md: "size-4",
                sm: "size-4",
                lg: "size-5",
              }[size || "md"]
            )}
          />
        ) : (
          <EyeIcon
            aria-hidden="true"
            className={cn(
              {
                md: "size-4",
                sm: "size-4",
                lg: "size-5",
              }[size || "md"]
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
