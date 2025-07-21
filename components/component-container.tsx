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
        "grid min-h-64 flex-1 place-items-center p-(--demo-gutter) [--demo-gutter:--spacing(6)]",
        className
      )}
    >
      {children}
    </div>
  );
}
