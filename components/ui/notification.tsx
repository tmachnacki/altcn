import * as React from "react";

import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

type NotificationProps = Omit<React.ComponentProps<typeof Badge>, "variant"> & {
  variant?: Exclude<
    React.ComponentProps<typeof Badge>["variant"],
    `${string}-tron`
  >;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
};

function Notification({
  className,
  variant = "primary",
  position,
  children,
  ...props
}: NotificationProps) {
  return (
    <Badge
      className={cn(
        "pointer-events-none gap-1 rounded-full p-1 font-normal tabular-nums outline-none",
        children ? "h-5 min-w-5" : "h-2.5 w-2.5",
        position && "absolute isolate z-10",
        position === "top-right" &&
          "top-0 right-0 translate-x-[43%] -translate-y-[43%]",
        position === "bottom-right" &&
          "right-0 bottom-0 translate-x-[43%] translate-y-[43%]",
        position === "bottom-left" &&
          "bottom-0 left-0 -translate-x-[43%] translate-y-[43%]",
        position === "top-left" &&
          "top-0 left-0 -translate-x-[43%] -translate-y-[43%]",
        className,
      )}
      variant={variant}
      {...props}
    >
      {children}
    </Badge>
  );
}

export { Notification };
