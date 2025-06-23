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
        "absolute block bg-linear-to-r from-transparent to-transparent transition-opacity duration-300 motion-reduce:transition-none",
        type === "beam" ? "left-[5%] w-[90%]" : "left-[20%] w-[60%] blur-sm",
        side === "top" && "-top-0 h-[2px]",
        side === "bottom" && "-bottom-0 h-[2px]",
        className
      )}
      {...props}
    />
  );
}
