import * as React from "react";

import { cn } from "@/lib/utils";

export function Tron({
  className,
  side = "bottom",
  type,
  thin,
  ...props
}: React.ComponentProps<"span"> & {
  side?: "top" | "bottom";
  type?: "beam" | "blur";
  thin?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      data-slot={`tron-${type}`}
      data-side={side}
      data-type={type}
      data-thin={thin}
      className={cn(
        "absolute block bg-linear-to-r from-transparent to-transparent transition-opacity duration-300 motion-reduce:transition-none",
        "data-[type=beam]:left-[5%] data-[type=beam]:w-[90%]",
        "data-[type=blur]:left-[20%] data-[type=blur]:w-[60%] data-[type=blur]:blur-sm",
        "data-[side=top]:-top-px data-[side=top]:h-[2px] data-[side=top]:opacity-0 data-[side=top]:data-[thin]:-top-0 data-[side=top]:data-[thin]:h-px",
        "data-[side=bottom]:-bottom-px data-[side=bottom]:h-[2px] data-[side=bottom]:opacity-0 data-[side=bottom]:data-[thin]:-bottom-0 data-[side=bottom]:data-[thin]:h-px",

        className,
      )}
      {...props}
    />
  );
}
