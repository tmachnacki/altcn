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
        "flex max-h-96 md:h-full md:max-h-[60svh] md:min-h-48 w-full  md:w-fit md:min-w-52 shrink-0 grow-0 flex-col gap-8 overflow-y-auto border-t md:border-t-0 md:border-l border-border p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
