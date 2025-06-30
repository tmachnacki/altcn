import * as React from "react";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "~/lib/utils";

import { Button } from "~/components/ui/button";

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

type ActiveVariant =
  | "base"
  | "primary"
  | "primary-gradient"
  | "primary-shadow"
  | "primary-tron"
  | "secondary"
  | "secondary-gradient"
  | "secondary-shadow"
  | "secondary-tron";

type InactiveVariant =
  | "outline"
  | "accent"
  | "muted"
  | "surface"
  | "faded"
  | "ghost"
  | "link"
  | "primary-accent"
  | "primary-muted"
  | "primary-surface"
  | "primary-faded"
  | "primary-ghost"
  | "secondary-accent"
  | "secondary-muted"
  | "secondary-surface"
  | "secondary-faded"
  | "secondary-ghost";

type PaginationLinkProps = {
  disabled?: boolean;
  isActive?: boolean;
  activeVariant?: ActiveVariant;
  inactiveVariant?: InactiveVariant;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<typeof Link>;

function PaginationLink({
  className,
  disabled,
  isActive,
  size = "icon-md",
  activeVariant = "primary",
  inactiveVariant = "outline",
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
      <Link
        data-slot="pagination-link"
        data-state={isActive ? "active" : "inactive"}
        aria-current={isActive ? "page" : undefined}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...props}
      />
    </Button>
  );
}

type PaginationControlProps = {
  disabled?: boolean;
  variant?: InactiveVariant;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<typeof Link>;

function PaginationControl({
  className,
  disabled,
  size = "md",
  variant = "outline",
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
      <Link aria-disabled={disabled} tabIndex={disabled ? -1 : 0} {...props} />
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
