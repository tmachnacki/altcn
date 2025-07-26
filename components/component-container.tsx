import * as React from "react";

import { cn } from "~/lib/utils";

import { BackgroundPattern } from "~/components/background-pattern";

export function ComponentContainer({
  withBackground = false,
  children,
  className,
  classNames,
}: {
  withBackground?: boolean;
  children: React.ReactNode;
  className?: string;
  classNames?: {
    root?: string;
    background?: string;
  };
}) {
  return (
    <div
      className={cn(
        "relative grid min-h-80 flex-1 place-items-center p-(--demo-gutter) [--demo-gutter:--spacing(6)]",
        withBackground &&
          "overflow-hidden rounded-t-lg bg-center md:rounded-l-lg md:rounded-r-none",
        classNames?.root,
        className
      )}
    >
      {withBackground && (
        <BackgroundPattern className={classNames?.background} />
      )}
      {children}
    </div>
  );
}
