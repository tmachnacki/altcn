"use client";

import * as React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

type InputPasswordProps = Omit<React.ComponentProps<typeof Input>, "type"> & {
  containerClassName?: string;
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
  buttonClassName?: string;
};

function InputPassword({
  className,
  inputSize = "default",
  containerClassName,
  variant: inputVariant,
  buttonClassName,
  buttonVariant = "ghost",
  ...props
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className={cn("relative", containerClassName)}>
      <Input
        type={showPassword ? "text" : "password"}
        variant={inputVariant}
        inputSize={inputSize}
        className={cn(
          { default: "pr-9", sm: "pr-8", lg: "pr-10" }[inputSize || "default"],
          "[&::-ms-reveal]:pointer-events-none [&::-ms-reveal]:invisible [&::-ms-reveal]:hidden",
          "[&::-ms-clear]:pointer-events-none [&::-ms-clear]:invisible [&::-ms-clear]:hidden",
          className
        )}
        {...props}
      />

      <Button
        type="button"
        variant={buttonVariant}
        className={cn(
          "absolute top-1/2 right-1 -translate-y-1/2 rounded-sm",
          {
            default: "size-7",
            sm: "size-6",
            lg: "size-8",
          }[inputSize || "default"],
          buttonClassName
        )}
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <EyeOffIcon className="size-4" />
        ) : (
          <EyeIcon className="size-4" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>
    </div>
  );
}

export { InputPassword };
