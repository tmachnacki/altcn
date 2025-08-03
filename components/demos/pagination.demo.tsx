"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";

import { buttonVariants } from "~/components/ui/button";
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

type ActiveVariant = keyof Omit<
  typeof buttonVariants.variants.variant,
  "ghost" | "primary-ghost" | "secondary-ghost"
>;
const activeVariants = Object.keys(buttonVariants.variants.variant).filter(
  (variant) => !variant.includes("ghost")
) as ActiveVariant[];

const inactiveVariants = [
  "outline",
  "accent",
  "muted",
  "surface",
  "faded",
  "ghost",
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

export function PaginationDemo() {
  return (
    <React.Suspense fallback={null}>
      <PaginationWithParams />
    </React.Suspense>
  );
}

export function PaginationWithParams() {
  const [activeVariant, setActiveVariant] = React.useState("outline");
  const [inactiveVariant, setInactiveVariant] = React.useState("ghost");
  const [controlVariant, setControlVariant] = React.useState("ghost");

  const page = useSearchParams().get("page") ?? "1";

  return (
    <>
      <ComponentContainer>
        <Pagination
          size="icon-md"
          variants={{
            active: activeVariant as (typeof activeVariants)[number],
            inactive: inactiveVariant as (typeof inactiveVariants)[number],
            control: controlVariant as (typeof inactiveVariants)[number],
          }}
        >
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/components/pagination?page=${Number(page) - 1}`}
                disabled={page === "1"}
                size="md"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`/components/pagination?page=1`}
                active={page === "1"}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`/components/pagination?page=2`}
                active={page === "2"}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`/components/pagination?page=3`}
                active={page === "3"}
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`/components/pagination?page=4`}
                active={page === "4"}
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
                active={page === "10"}
              >
                10
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href={`/components/pagination?page=${Number(page) + 1}`}
                disabled={page === "10"}
                size="md"
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
