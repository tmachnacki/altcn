import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

type ContainerProps = {
  asChild?: boolean;
} & React.ComponentProps<"div">;

export function Container({ asChild, className, ...props }: ContainerProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn("mx-auto w-full max-w-7xl px-6 md:px-12", className)}
      {...props}
    />
  );
}
