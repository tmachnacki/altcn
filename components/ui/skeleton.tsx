import { cn } from "~/lib/utils";

export function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      aria-label={"Loading"}
      className={cn(
        "[--skeleton-shimmer:var(--color-base-100)] [--skeleton:var(--color-base-300)]",
        "dark:[--skeleton-shimmer:--alpha(var(--color-white)/15%)] dark:[--skeleton:var(--color-base-800)]",
        "animate-skeleton-shimmer rounded-md bg-(--skeleton) motion-reduce:animate-skeleton-shimmer-reduced-motion",
        "bg-linear-[105deg,transparent_0%,transparent_35%,var(--skeleton-shimmer)_50%,transparent_65%,transparent_100%] bg-size-[200%_auto] bg-position-[-50%] bg-no-repeat will-change-[background-position]",
        className
      )}
      {...props}
    />
  );
}
