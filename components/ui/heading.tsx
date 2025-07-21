import { cn } from "~/lib/utils";

type HeadingProps = React.ComponentProps<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
};

const Heading = ({
  className,
  level = 1,
  size = "xl",
  ...props
}: HeadingProps) => {
  const Comp: `h${typeof level}` = `h${level}`;
  return (
    <Comp
      className={cn(
        {
          sm: "text-base sm:text-sm",
          base: "text-lg sm:text-base",
          lg: "text-xl sm:text-lg",
          xl: "text-2xl sm:text-xl",
          "2xl": "text-3xl sm:text-2xl",
          "3xl": "text-4xl sm:text-3xl",
          "4xl": "text-5xl sm:text-4xl",
        }[size],
        "font-semibold text-foreground",
        className
      )}
      {...props}
    />
  );
};

export type { HeadingProps };
export { Heading };
