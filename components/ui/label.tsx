"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "~/lib/utils";

function Label({
  disabled,
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> & {
  disabled?: boolean;
}) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      data-disabled={disabled ? true : undefined}
      className={cn(
        "inline-block w-fit text-sm/4 font-medium text-foreground select-none",
        "next-disabled:pointer-events-none next-disabled:opacity-50",
        "peer-disabled:pointer-events-none peer-disabled:opacity-50",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "group/label",
        className
      )}
      {...props}
    />
  );
}

export { Label };
