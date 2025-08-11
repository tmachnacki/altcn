"use client";

import * as React from "react";
import Link from "next/link";
import { tv, type VariantProps } from "tailwind-variants";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "~/lib/utils";

import { Button, buttonVariants } from "~/components/ui/button";

const paginationSizeVariants = tv({
  variants: {
    size: {
      // "2xs": "h-size-xs min-w-size-xs px-1.5 sm:h-size-2xs sm:min-w-size-2xs",
      xs: "h-size-sm min-w-size-sm gap-1 px-2 sm:h-size-xs sm:min-w-size-xs",
      sm: "h-size-md min-w-size-md gap-1.5 px-2 sm:h-size-sm sm:min-w-size-sm",
      md: "h-size-lg min-w-size-lg gap-1.5 px-2.5 sm:h-size-md sm:min-w-size-md",
      lg: "h-size-xl min-w-size-xl gap-2 px-3 sm:h-size-lg sm:min-w-size-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

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

type PaginationContextProps = VariantProps<typeof paginationSizeVariants> & {
  variants?: {
    active?: ActiveVariant;
    inactive?: InactiveVariant;
    control?: InactiveVariant;
  };
};

const PaginationContext = React.createContext<PaginationContextProps>({
  variants: {
    active: "outline",
    inactive: "ghost",
    control: "ghost",
  },
  size: "md",
});

function Pagination({
  variants = {
    active: "outline",
    inactive: "ghost",
    control: "ghost",
  },
  size = "md",
  className,
  ...props
}: React.ComponentProps<"nav"> & PaginationContextProps) {
  return (
    <PaginationContext.Provider value={{ variants, size }}>
      <nav
        data-slot="pagination"
        role="navigation"
        aria-label={"Pagination"}
        className={cn(
          {
            // "2xs": "[--pagination-gap:--spacing(0.5)]",
            xs: "[--pagination-gap:--spacing(0.75)]",
            sm: "[--pagination-gap:--spacing(1)]",
            md: "[--pagination-gap:--spacing(1)]",
            lg: "[--pagination-gap:--spacing(1.5)]",
          }[size || "md"],
          "mx-auto flex w-full justify-center gap-(--pagination-gap)",
          className
        )}
        {...props}
      />
    </PaginationContext.Provider>
  );
}

function PaginationList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-list"
      className={cn(
        "flex flex-row items-center gap-(--pagination-gap)",
        className
      )}
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
};

function PaginationLink({
  className,
  disabled,
  active,
  variants,
  ...props
}: PaginationLinkProps) {
  const context = React.useContext(PaginationContext);
  const _activeVariant = variants?.active || context.variants?.active;
  const _inactiveVariant = variants?.inactive || context.variants?.inactive;
  return (
    <Button
      asChild
      disabled={disabled}
      size={context.size}
      variant={active ? _activeVariant : _inactiveVariant}
      className={cn(paginationSizeVariants({ size: context.size }), className)}
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
};

function PaginationControl({
  className,
  disabled,
  variant,
  ...props
}: PaginationControlProps) {
  const context = React.useContext(PaginationContext);
  return (
    <Button
      asChild
      disabled={disabled}
      size={context.size}
      variant={variant || context.variants?.control}
      className={cn(paginationSizeVariants({ size: context.size }), className)}
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
      <ChevronLeftIcon />
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
    <Button asChild variant="ghost">
      <span
        role="presentation"
        data-slot="pagination-ellipsis"
        className={cn(
          paginationSizeVariants({ size: context.size }),
          "pointer-events-none",
          className
        )}
        {...props}
      >
        <MoreHorizontalIcon aria-hidden="true" />
        <span className="sr-only">More pages</span>
      </span>
    </Button>
  );
}

export {
  Pagination,
  PaginationList,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  paginationSizeVariants,
};
