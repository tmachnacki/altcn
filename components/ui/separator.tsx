"use client";

import * as React from "react";
import { Separator as SeparatorPrimitive } from "radix-ui";

import { cn } from "~/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "relative isolate shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  );
}

function SeparatorLabel({
  className,
  variant = "ghost",
  ...props
}: React.ComponentProps<"div"> & { variant?: "ghost" | "outline" }) {
  return (
    <div
      data-slot="separator-label"
      className={cn(
        "absolute top-1/2 left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background px-2 py-0.5 text-xs text-muted-foreground",
        variant === "outline" && "rounded-md border border-border",
        className
      )}
      {...props}
    />
  );
}

export { Separator, SeparatorLabel };
