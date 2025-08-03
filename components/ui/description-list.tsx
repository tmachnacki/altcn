import * as React from "react";

import { cn } from "~/lib/utils";

const DescriptionList = ({
  className,
  ...props
}: React.ComponentProps<"dl">) => {
  return (
    <dl
      data-slot="description-list"
      className={cn(
        "grid grid-cols-1 text-base sm:grid-cols-[min(50%,calc(var(--spacing)*80))_auto] sm:text-sm",
        className
      )}
      {...props}
    />
  );
};

const DescriptionTerm = ({
  className,
  ...props
}: React.ComponentProps<"dt">) => {
  return (
    <dt
      data-slot="description-term"
      className={cn(
        "col-start-1 border-t border-border/50 pt-3 text-muted-foreground first:border-none sm:py-3",
        className
      )}
      {...props}
    />
  );
};

const DescriptionDetails = ({
  className,
  ...props
}: React.ComponentProps<"dd">) => {
  return (
    <dd
      data-slot="description-details"
      className={cn(
        "border-border/50 pt-1 pb-3 text-foreground sm:border-t sm:py-3 sm:nth-2:border-none",
        className
      )}
      {...props}
    />
  );
};

export { DescriptionList, DescriptionTerm, DescriptionDetails };
