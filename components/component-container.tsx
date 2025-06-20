import * as React from "react";

import { cn } from "~/lib/utils";

export function ComponentContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid max-h-[60svh] min-h-64 flex-1 flex-col place-items-center overflow-y-auto p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
