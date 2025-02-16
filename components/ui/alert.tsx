import * as React from "react";
import { buttonVariants } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-accent text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive dark:bg-destructive/50 dark:text-destructive-foreground/80 [&>svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertIcon({ className, filled, ...props }: React.ComponentProps<"div"> & { filled?: boolean }) {
  return (
    <div
      data-slot="alert-icon"
      data-filled={filled}
      className={cn("size-8 rounded-full shadow-sm inline-flex items-center justify-center [&>svg]:size-4", className)}
      {...props}
    />
  )
}

function AlertClose({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="alert-close"
      role="button"
      className={cn("size-7 rounded-full text-current inline-flex items-center justify-center ", className)}
      {...props}
    >
      <XIcon className="size-4"/>
      <span className="sr-only">Close</span>
    </button>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
