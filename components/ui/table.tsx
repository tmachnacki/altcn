import * as React from "react";

import { cn } from "~/lib/utils";

type TableProps = React.ComponentProps<"table"> & {
  bleed?: boolean;
  gutter?: number;
  classNames?: {
    container?: string;
    root?: string;
  };
};

function Table({ className, bleed, gutter, classNames, ...props }: TableProps) {
  return (
    <div
      data-slot="table-container"
      className={cn(
        "relative -mx-(--table-gutter) w-full overflow-x-auto whitespace-nowrap",
        classNames?.container
      )}
      style={
        gutter && !classNames?.container?.includes("--table-gutter")
          ? ({
              "--table-gutter": `calc(var(--spacing)*${gutter})`,
            } as React.CSSProperties)
          : undefined
      }
    >
      <div
        className={cn(
          "inline-block min-w-full align-middle",
          !bleed && "sm:px-(--table-gutter)"
        )}
      >
        <table
          data-slot="table"
          data-bleed={bleed ? "true" : undefined}
          className={cn(
            "group/table",
            "min-w-full caption-bottom text-left text-sm text-foreground",
            classNames?.root,
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-head"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-header"
      className={cn(
        "h-10 px-4 text-left align-middle font-medium whitespace-nowrap text-subtle-foreground first:pl-2 last:pr-2",
        "group-data-[bleed]/table:first:pl-(--table-gutter,--spacing(2)) group-data-[bleed]/table:last:pr-(--table-gutter,--spacing(2))",
        "has-[[role='checkbox']]:w-0 has-[[role='checkbox']]:pr-0 *:[[role='checkbox']]:translate-y-0.5",
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-4 py-4 align-middle whitespace-nowrap first:pl-2 last:pr-2",
        "group-data-[bleed]/table:first:pl-(--table-gutter,--spacing(2)) group-data-[bleed]/table:last:pr-(--table-gutter,--spacing(2))",
        "has-[[role='checkbox']]:w-0 has-[[role='checkbox']]:pr-0 *:[[role='checkbox']]:translate-y-0.5",
        className
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "mt-4 text-center text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
