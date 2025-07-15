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
        "flex items-center gap-2 text-sm/4 font-medium text-foreground select-none",
        "next-disabled:cursor-not-allowed next-disabled:opacity-50",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
        "group/label",
        className
      )}
      {...props}
    />
  );
}

export { Label };
