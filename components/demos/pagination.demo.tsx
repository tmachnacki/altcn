"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";

import { Label } from "~/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const activeVariants = [
  "base",
  "primary",
  "primary-gradient",
  "primary-shadow",
  "primary-tron",
  "secondary",
  "secondary-gradient",
  "secondary-shadow",
  "secondary-tron",
] as const;

const inactiveVariants = [
  "outline",
  "accent",
  "muted",
  "surface",
  "faded",
  "ghost",
  "link",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "primary-ghost",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "secondary-ghost",
] as const;

// const paginationLinkVariants = [
//   "base",
//   "outline",
//   "accent",
//   "muted",
//   "surface",
//   "faded",
//   "ghost",
//   "link",
//   "primary",
//   "primary-accent",
//   "primary-muted",
//   "primary-surface",
//   "primary-faded",
//   "primary-tron",
//   "primary-shadow",
//   "primary-gradient",
//   "primary-ghost",
//   "secondary",
//   "secondary-accent",
//   "secondary-muted",
//   "secondary-surface",
//   "secondary-faded",
//   "secondary-tron",
//   "secondary-shadow",
//   "secondary-gradient",
//   "secondary-ghost",
// ] as const;

export function PaginationDemo() {
  return (
    <React.Suspense fallback={null}>
      <PaginationWithParams />
    </React.Suspense>
  );
}

export function PaginationWithParams() {
  const [activeVariant, setActiveVariant] = React.useState("primary");
  const [inactiveVariant, setInactiveVariant] = React.useState("outline");
  const [controlVariant, setControlVariant] = React.useState("outline");

  const page = useSearchParams().get("page") ?? "1";

  return (
    <>
      <ComponentContainer>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/components/pagination?page=${Number(page) - 1}`}
                disabled={page === "1"}
                variant={controlVariant as (typeof inactiveVariants)[number]}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`/components/pagination?page=1`}
                isActive={page === "1"}
                activeVariant={activeVariant as (typeof activeVariants)[number]}
                inactiveVariant={
                  inactiveVariant as (typeof inactiveVariants)[number]
                }
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`/components/pagination?page=2`}
                isActive={page === "2"}
                activeVariant={activeVariant as (typeof activeVariants)[number]}
                inactiveVariant={
                  inactiveVariant as (typeof inactiveVariants)[number]
                }
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`/components/pagination?page=3`}
                isActive={page === "3"}
                activeVariant={activeVariant as (typeof activeVariants)[number]}
                inactiveVariant={
                  inactiveVariant as (typeof inactiveVariants)[number]
                }
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`/components/pagination?page=4`}
                isActive={page === "4"}
                activeVariant={activeVariant as (typeof activeVariants)[number]}
                inactiveVariant={
                  inactiveVariant as (typeof inactiveVariants)[number]
                }
              >
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`/components/pagination?page=10`}
                isActive={page === "10"}
                activeVariant={activeVariant as (typeof activeVariants)[number]}
                inactiveVariant={
                  inactiveVariant as (typeof inactiveVariants)[number]
                }
              >
                10
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href={`/components/pagination?page=${Number(page) + 1}`}
                disabled={page === "10"}
                variant={controlVariant as (typeof inactiveVariants)[number]}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="active-variant">Active Variant</Label>
          <Select value={activeVariant} onValueChange={setActiveVariant}>
            <SelectTrigger id="active-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {activeVariants.map((variant) => (
                <SelectItem key={`active-${variant}`} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="inactive-variant">Inactive Variant</Label>
          <Select value={inactiveVariant} onValueChange={setInactiveVariant}>
            <SelectTrigger id="inactive-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {inactiveVariants.map((variant) => (
                <SelectItem key={`inactive-${variant}`} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="control-variant">Control Variant</Label>
          <Select value={controlVariant} onValueChange={setControlVariant}>
            <SelectTrigger id="control-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {inactiveVariants.map((variant) => (
                <SelectItem key={`control-${variant}`} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
