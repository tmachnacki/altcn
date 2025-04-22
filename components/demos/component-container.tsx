import * as React from "react";

import { cn } from "~/lib/utils";

export function ComponentContainer({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex min-h-48 flex-1 flex-col items-center justify-center px-8 py-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
