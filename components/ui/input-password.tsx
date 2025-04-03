"use client";

import * as React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

type InputPasswordProps = Omit<React.ComponentProps<typeof Input>, "type"> & {
  containerClassName?: string;
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
  buttonClassName?: string;
};

function InputPassword({
  className,
  containerClassName,
  variant: inputVariant,
  buttonClassName,
  buttonVariant,
  ...props
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className={cn("relative", containerClassName)}>
      <Input
        type={showPassword ? "text" : "password"}
        variant={inputVariant}
        className={cn(
          "pr-9",
          "[&::-ms-reveal]:pointer-events-none [&::-ms-reveal]:invisible [&::-ms-reveal]:hidden",
          "[&::-ms-clear]:pointer-events-none [&::-ms-clear]:invisible [&::-ms-clear]:hidden",
          className,
        )}
        {...props}
      />

      <Button
        type="button"
        variant={buttonVariant || "ghost"}
        size="icon-sm"
        className={cn(
          "absolute top-1/2 right-1 size-7 -translate-y-1/2",
          buttonClassName,
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
