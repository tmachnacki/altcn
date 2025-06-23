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
        "flex w-full shrink-0 grow-0 flex-col gap-6 overflow-y-auto border-t border-border p-4 md:w-fit md:min-w-56 md:border-t-0 md:border-l",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
