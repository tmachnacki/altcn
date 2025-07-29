"use client";

import * as React from "react";

import { cn } from "~/lib/utils";

type TableContextProps = {
  bleed?: boolean;
};

const TableContext = React.createContext<TableContextProps>({});

type TableProps = React.ComponentProps<"table"> & {
  bleed?: boolean;
  gutter?: number;
  classNames?: {
    container?: string;
    root?: string;
  };
};

function Table({
  className,
  bleed,
  gutter = 2,
  classNames,
  ...props
}: TableProps) {
  return (
    <TableContext.Provider value={{ bleed }}>
      <div
        data-slot="table-container"
        className={cn(
          "relative -mx-(--table-gutter) w-full overflow-x-auto whitespace-nowrap",
          classNames?.container
        )}
        style={
          !classNames?.container?.includes("--table-gutter")
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
            className={cn(
              "min-w-full caption-bottom text-left text-sm/5 text-foreground",
              classNames?.root,
              className
            )}
            {...props}
          />
        </div>
      </div>
    </TableContext.Provider>
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
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
  const { bleed } = React.useContext(TableContext);
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-4 text-left align-middle font-medium whitespace-nowrap text-subtle-foreground",
        "has-[[role='checkbox']]:w-0 has-[[role='checkbox']]:pr-0 *:[[role='checkbox']]:translate-y-0.5",
        bleed
          ? "first:pl-(--table-gutter) last:pr-(--table-gutter)"
          : "first:pl-2 last:pr-2",
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  const { bleed } = React.useContext(TableContext);
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-4 py-4 align-middle whitespace-nowrap",
        "has-[[role='checkbox']]:w-0 has-[[role='checkbox']]:pr-0 *:[[role='checkbox']]:translate-y-0.5",
        bleed
          ? "first:pl-(--table-gutter) last:pr-(--table-gutter)"
          : "first:pl-2 last:pr-2",
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
