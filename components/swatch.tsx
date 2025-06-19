import * as React from "react";

import { type SwatchVariant } from "~/lib/swatches";
import { cn } from "~/lib/utils";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

const baseSwatchClassNames =
  "size-4 shrink-0 gap-1 rounded-sm !p-0 text-xs font-medium **:[svg]:not-[[class*='text-']]:!text-current **:[svg]:not-[[class*='size-']]:!size-3";

export function Swatch({
  variant,
  className,
  children,
}: {
  variant: SwatchVariant;
  className?: string;
  children?: React.ReactNode;
}) {
  if (variant === "underlined") {
    return (
      <span
        tabIndex={-1}
        role="presentation"
        className={cn(
          baseSwatchClassNames,
          "relative isolate inline-flex items-center justify-center rounded-none border-b border-border bg-transparent hover:border-hover-border",
          className
        )}
      >
        {children ?? <span className="-translate-y-px">a</span>}
      </span>
    );
  }

  const shouldUseBadge =
    variant.includes("success") ||
    variant.includes("warning") ||
    variant.includes("dotted");

  if (shouldUseBadge) {
    const _variant = variant as React.ComponentProps<typeof Badge>["variant"];
    return (
      <Badge
        tabIndex={-1}
        role="presentation"
        variant={_variant}
        className={cn(baseSwatchClassNames, className)}
        asChild
      >
        <span>
          {(children ?? variant.includes("dotted")) ? null : (
            <span className="-translate-y-px">a</span>
          )}
        </span>
      </Badge>
    );
  }

  const _variant = variant as React.ComponentProps<typeof Button>["variant"];
  const showShadow = variant.includes("shadow") || variant.includes("outline");
  return (
    <Button
      tabIndex={-1}
      role="presentation"
      variant={_variant}
      className={cn(
        baseSwatchClassNames,
        !showShadow && "shadow-none",
        className
      )}
      asChild
    >
      <span>{children ?? <span className="-translate-y-px">a</span>}</span>
    </Button>
  );
}
