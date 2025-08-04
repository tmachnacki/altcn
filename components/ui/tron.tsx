import * as React from "react";

import { cn } from "~/lib/utils";

export function Tron({
  className,
  side = "bottom",
  type,
  border = "outer",
  ...props
}: React.ComponentProps<"span"> & {
  side?: "top" | "bottom";
  type: "beam" | "blur";
  border?: "outer" | "inset";
}) {
  return (
    <span
      aria-hidden="true"
      data-slot={`tron-${type}`}
      data-side={side}
      className={cn(
        "absolute block h-px bg-linear-to-r from-transparent to-transparent transition-opacity duration-300 motion-reduce:transition-none",
        type === "beam"
          ? "left-0.5 w-[calc(100%_-_var(--spacing)*1)] data-[shape=pill]:left-1.5 data-[shape=pill]:w-[calc(100%_-_var(--spacing)*3)]"
          : "left-[25%] w-[50%] blur-sm",
        side === "top" && border === "outer" && "-top-px",
        side === "top" && border === "inset" && "-top-0",
        side === "bottom" && border === "outer" && "-bottom-px",
        side === "bottom" && border === "inset" && "-bottom-0",
        className
      )}
      {...props}
    />
  );
}
