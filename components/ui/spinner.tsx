import { cn } from "@/lib/utils";
// import { Loader2Icon, type LucideProps } from "lucide-react";

// export function Spinner({ className, ...props }: LucideProps) {
//   return (
//     <Loader2Icon
//       className={cn("animate-spin", className)}
//       aria-label={props["aria-label"] || "Loading"}
//       {...props}
//     />
//   );
// }

// TODO: maybe use custom spinner? Will have to adjust spacing on a lot of components to match svg
// credit: https://www.heroui.com/docs/components/spinner
export function Spinner({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <span
      data-slot="spinner"
      className={cn(
        "relative inline-flex flex-none items-center justify-center",
        className,
      )}
      aria-label={props["aria-label"] || "Loading"}
      {...props}
    >
      <i data-slot="spinner-solid" className="absolute size-full animate-spinner-ease rounded-full border-2 border-solid border-t-transparent border-r-transparent border-b-current border-l-transparent"></i>
      <i data-slot="spinner-dotted" className="absolute size-full animate-spinner-linear rounded-full border-2 border-dotted border-t-transparent border-r-transparent border-b-current border-l-transparent opacity-70"></i>
    </span>
  );
}
