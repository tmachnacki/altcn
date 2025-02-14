import { cn } from "@/lib/utils";
import { Loader2Icon, type LucideProps } from "lucide-react";

export function Spinner({ className, ...props }: LucideProps) {
  return (
    <Loader2Icon className={cn("size-4 animate-spin", className)} {...props} />
  );
}
