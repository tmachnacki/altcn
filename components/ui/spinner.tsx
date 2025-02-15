import { cn } from "@/lib/utils";
import { Loader2Icon, type LucideProps } from "lucide-react";

export function Spinner({ className, ...props }: LucideProps) {
  return <Loader2Icon className={cn("animate-spin", className)} {...props} />;
}

// export function Spinner({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="spinner"
//       className={cn(
//         "relative mr-0.5 inline-flex size-4 items-center justify-center",
//         className,
//       )}
//       aria-label={props["aria-label"] || "Loading"}
//       {...props}
//     >
//       <i className="absolute size-full animate-spinner-ease rounded-full border-2 border-solid border-t-transparent border-r-transparent border-b-current border-l-transparent"></i>
//       <i className="absolute size-full animate-spinner-linear rounded-full border-2 border-dotted border-t-transparent border-r-transparent border-b-current border-l-transparent opacity-60"></i>
//     </div>
//   );
// }
