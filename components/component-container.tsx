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
        "flex max-h-[70vh] min-h-48 flex-1 flex-col items-center justify-center overflow-y-auto px-8 py-16",
        className
      )}
    >
      {children}
    </div>
  );
}
