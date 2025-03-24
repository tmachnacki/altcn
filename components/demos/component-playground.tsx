import * as React from "react";
import { cn } from "@/lib/utils";

export function ComponentPlayground({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 shrink-0 grow-0 border-l border-border w-64 p-4", className)} {...props}>
      {children}
    </div>
  )
}
