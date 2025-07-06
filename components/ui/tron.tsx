import * as React from "react";

import { cn } from "~/lib/utils";

export function Tron({
  className,
  side = "bottom",
  type,
  ...props
}: React.ComponentProps<"span"> & {
  side?: "top" | "bottom";
  type: "beam" | "blur";
}) {
  return (
    <span
      aria-hidden="true"
      data-slot={`tron-${type}`}
      data-side={side}
      className={cn(
        "absolute block h-px bg-linear-to-r from-transparent to-transparent transition-opacity duration-300 motion-reduce:transition-none",
        type === "beam"
          ? "left-0.5 w-[calc(100%_-_var(--spacing)*1)]"
          : "left-[25%] w-[50%] blur-sm",
        side === "top" ? "-top-0" : "-bottom-0",
        className
      )}
      {...props}
    />
  );
}
