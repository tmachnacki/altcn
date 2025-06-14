import * as React from "react";

import { cn } from "~/lib/utils";

export function ComponentPlayground({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-border flex h-full min-h-48 w-64 shrink-0 grow-0 flex-col gap-6 overflow-y-auto border-l p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
