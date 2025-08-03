"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "~/lib/utils";

import { Button, buttonVariants } from "~/components/ui/button";

type ActiveVariant = keyof Omit<
  typeof buttonVariants.variants.variant,
  "ghost" | "primary-ghost" | "secondary-ghost"
>;

type InactiveVariant = keyof Pick<
  typeof buttonVariants.variants.variant,
  | "outline"
  | "accent"
  | "muted"
  | "surface"
  | "faded"
  | "ghost"
  | "primary-accent"
  | "primary-muted"
  | "primary-surface"
  | "primary-faded"
  | "primary-ghost"
  | "secondary-accent"
  | "secondary-muted"
  | "secondary-surface"
  | "secondary-faded"
  | "secondary-ghost"
>;

type PaginationContextProps = {
  variants?: {
    active?: ActiveVariant;
    inactive?: InactiveVariant;
    control?: InactiveVariant;
  };
  size?: keyof typeof buttonVariants.variants.size;
};

const PaginationContext = React.createContext<PaginationContextProps>({
  variants: {
    active: "outline",
    inactive: "ghost",
    control: "ghost",
  },
  size: "icon-md",
});

function Pagination({
  variants = {
    active: "outline",
    inactive: "ghost",
    control: "ghost",
  },
  size = "icon-md",
  className,
  ...props
}: React.ComponentProps<"nav"> & PaginationContextProps) {
  return (
    <PaginationContext.Provider value={{ variants, size }}>
      <nav
        data-slot="pagination"
        role="navigation"
        aria-label={"Pagination"}
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
      />
    </PaginationContext.Provider>
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

type PaginationLinkProps = React.ComponentProps<typeof Link> & {
  disabled?: boolean;
  active?: boolean;
  variants?: {
    active?: ActiveVariant;
    inactive?: InactiveVariant;
  };
  size?: keyof typeof buttonVariants.variants.size;
};

function PaginationLink({
  className,
  disabled,
  active,
  variants,
  size,
  ...props
}: PaginationLinkProps) {
  const context = React.useContext(PaginationContext);
  const _activeVariant = variants?.active || context.variants?.active;
  const _inactiveVariant = variants?.inactive || context.variants?.inactive;
  return (
    <Button
      asChild
      disabled={disabled}
      size={size || context.size}
      variant={active ? _activeVariant : _inactiveVariant}
      className={className}
    >
      <Link
        data-slot="pagination-link"
        data-state={active ? "active" : "inactive"}
        aria-current={active ? "page" : undefined}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...props}
      />
    </Button>
  );
}

type PaginationControlProps = React.ComponentProps<typeof Link> & {
  disabled?: boolean;
  variant?: InactiveVariant;
  size?: keyof typeof buttonVariants.variants.size;
};

function PaginationControl({
  className,
  disabled,
  variant,
  size,
  ...props
}: PaginationControlProps) {
  const context = React.useContext(PaginationContext);
  return (
    <Button
      asChild
      disabled={disabled}
      size={size || context.size}
      variant={variant || context.variants?.control}
      className={className}
    >
      <Link aria-disabled={disabled} tabIndex={disabled ? -1 : 0} {...props} />
    </Button>
  );
}

function PaginationPrevious({
  ...props
}: React.ComponentProps<typeof PaginationControl>) {
  return (
    <PaginationControl aria-label="Go to previous page" {...props}>
      <ChevronLeftIcon aria-hidden="true" />
      <span className="hidden sm:block">Previous</span>
    </PaginationControl>
  );
}

function PaginationNext({
  ...props
}: React.ComponentProps<typeof PaginationControl>) {
  return (
    <PaginationControl aria-label="Go to next page" {...props}>
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationControl>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  const context = React.useContext(PaginationContext);
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        buttonVariants.variants.size[context.size || "icon-md"],
        "flex items-center justify-center",
        className
      )}
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
