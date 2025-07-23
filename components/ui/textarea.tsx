import * as React from "react";
import { VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

import { inputVariants } from "~/components/ui/input";

type TextareaProps = Omit<React.ComponentProps<"textarea">, "size"> &
  VariantProps<typeof inputVariants>;

function Textarea({
  className,
  variant = "outline",
  size = "md",
  ...props
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        inputVariants({ variant, size }).root(),
        {
          sm: "min-h-14 py-1.5",
          md: "min-h-16 py-2",
          lg: "min-h-20 py-2.5",
        }[size],
        "relative flex field-sizing-content h-full w-full resize-y sm:h-full",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
