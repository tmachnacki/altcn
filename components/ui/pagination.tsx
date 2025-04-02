import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label={props["aria-label"] || "pagination"}
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  disabled?: boolean;
  isActive?: boolean;
  activeVariant?: VariantProps<typeof buttonVariants>["variant"];
  inactiveVariant?: VariantProps<typeof buttonVariants>["variant"];
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  disabled,
  isActive,
  size = "icon",
  activeVariant = "outline",
  inactiveVariant = "ghost",
  ...props
}: PaginationLinkProps) {
  return (
    <Button
      asChild
      disabled={disabled}
      size={size}
      variant={isActive ? activeVariant : inactiveVariant}
      className={className}
    >
      <a
        aria-current={isActive ? "page" : undefined}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        data-slot="pagination-link"
        data-active={isActive}
        {...props}
      />
    </Button>
  );
}

type PaginationControlProps = {
  disabled?: boolean;
} & VariantProps<typeof buttonVariants> &
  React.ComponentProps<"a">;

function PaginationControl({
  className,
  disabled,
  size = "default",
  variant = "ghost",
  ...props
}: PaginationControlProps) {
  return (
    <Button
      asChild
      disabled={disabled}
      size={size}
      variant={variant}
      className={className}
    >
      <a aria-disabled={disabled} tabIndex={disabled ? -1 : 0} {...props} />
    </Button>
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationControl>) {
  return (
    <PaginationControl
      aria-label="Go to previous page"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationControl>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationControl>) {
  return (
    <PaginationControl
      aria-label="Go to next page"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationControl>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
