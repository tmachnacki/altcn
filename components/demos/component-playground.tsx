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
        "flex w-64 shrink-0 grow-0 flex-col gap-6 border-l border-border p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
