import * as React from "react";
import { cn } from "@/lib/utils";

export function ComponentContainer({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-1 flex-col items-center justify-center p-8 min-h-40",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
