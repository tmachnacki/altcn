import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      aria-label={props["aria-label"] || "Loading"}
      className={cn(
        "animate-skeleton-shimmer rounded-md bg-skeleton",
        className,
      )}
      style={{
        willChange: "background-position",
        backgroundImage:
          "linear-gradient(105deg, transparent 0%, transparent 35%, var(--skeleton-shimmer) 50%, transparent 65%, transparent 100%)",
        backgroundSize: "200% auto",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "-50%",
      }}
      {...props}
    />
  );
}
