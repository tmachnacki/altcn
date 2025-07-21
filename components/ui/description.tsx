import * as React from "react";

import { cn } from "~/lib/utils";

function Description({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="description"
      className={cn(
        "block text-base text-muted-foreground sm:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Description };
