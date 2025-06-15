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
        "grid max-h-[60svh] min-h-48 flex-1 flex-col place-items-center overflow-y-auto px-8 py-12",
        className
      )}
    >
      {children}
    </div>
  );
}
