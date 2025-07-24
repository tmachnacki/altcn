import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "~/lib/utils";

function Card({
  className,
  asChild,
  variant = "solid",
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
  variant?: "solid" | "translucent";
}) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="card"
      className={cn(
        "[--card-gap:--spacing(6)] [--card-p:--spacing(6)]",
        "group/card",
        "flex flex-col gap-(--card-gap) rounded-lg border border-border p-(--card-p) text-card-foreground shadow-md",
        variant === "solid"
          ? "bg-card"
          : "bg-card-translucent backdrop-blur-card-translucent",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-lg leading-none font-semibold text-balance sm:text-base",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-base text-pretty text-muted-foreground sm:text-sm",
        className
      )}
      {...props}
    />
  );
}

function CardBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-body"
      className={cn("text-base text-card-foreground sm:text-sm", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter };
