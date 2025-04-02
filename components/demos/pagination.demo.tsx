"use client";

import { useState } from "react";
import { ComponentContainer } from "@/components/demos/component-container";
import { ComponentPlayground } from "@/components/demos/component-playground";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo() {
  const [activeVariant, setActiveVariant] = useState("outline");
  const [inactiveVariant, setInactiveVariant] = useState("ghost");
  const [controlVariant, setControlVariant] = useState("ghost");
  const [activePage, setActivePage] = useState<number>(2);

  const isActive = (page: number) => activePage === page;

  const paginationLinkVariants = [
    "base",
    "outline",
    "accent",
    "muted",
    "surface",
    "faded",
    "ghost",
    "link",
    "primary",
    "primary-accent",
    "primary-muted",
    "primary-surface",
    "primary-faded",
    "primary-tron",
    "primary-shadow",
    "primary-gradient",
    "primary-ghost",
    "secondary",
    "secondary-accent",
    "secondary-muted",
    "secondary-surface",
    "secondary-faded",
    "secondary-tron",
    "secondary-shadow",
    "secondary-gradient",
    "secondary-ghost",
  ] as const;

  return (
    <>
      <ComponentContainer>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#pagination"
                disabled={activePage === 1}
                onClick={() =>
                  setActivePage((prevActivePage) => prevActivePage - 1)
                }
                variant={
                  controlVariant as (typeof paginationLinkVariants)[number]
                }
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pagination"
                isActive={isActive(1)}
                onClick={() => setActivePage(1)}
                activeVariant={
                  activeVariant as (typeof paginationLinkVariants)[number]
                }
                inactiveVariant={
                  inactiveVariant as (typeof paginationLinkVariants)[number]
                }
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pagination"
                isActive={isActive(2)}
                onClick={() => setActivePage(2)}
                activeVariant={
                  activeVariant as (typeof paginationLinkVariants)[number]
                }
                inactiveVariant={
                  inactiveVariant as (typeof paginationLinkVariants)[number]
                }
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pagination"
                isActive={isActive(3)}
                onClick={() => setActivePage(3)}
                activeVariant={
                  activeVariant as (typeof paginationLinkVariants)[number]
                }
                inactiveVariant={
                  inactiveVariant as (typeof paginationLinkVariants)[number]
                }
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pagination"
                disabled
                isActive={isActive(4)}
                onClick={() => setActivePage(4)}
                activeVariant={
                  activeVariant as (typeof paginationLinkVariants)[number]
                }
                inactiveVariant={
                  inactiveVariant as (typeof paginationLinkVariants)[number]
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
                href="#pagination"
                isActive={isActive(10)}
                onClick={() => setActivePage(10)}
                activeVariant={
                  activeVariant as (typeof paginationLinkVariants)[number]
                }
                inactiveVariant={
                  inactiveVariant as (typeof paginationLinkVariants)[number]
                }
              >
                10
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#pagination"
                disabled={activePage === 10}
                onClick={() =>
                  setActivePage((prevActivePage) => prevActivePage + 1)
                }
                variant={
                  controlVariant as (typeof paginationLinkVariants)[number]
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="pagination-active-variant">Active Variant</Label>
          <Select value={activeVariant} onValueChange={setActiveVariant}>
            <SelectTrigger id="pagination-active-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {paginationLinkVariants.map((variant) => (
                <SelectItem
                  key={`pagination-active-${variant}`}
                  value={variant}
                >
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pagination-inactive-variant">Inactive Variant</Label>
          <Select value={inactiveVariant} onValueChange={setInactiveVariant}>
            <SelectTrigger id="pagination-inactive-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {paginationLinkVariants.map((variant) => (
                <SelectItem
                  key={`pagination-inactive-${variant}`}
                  value={variant}
                >
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pagination-control-variant">Control Variant</Label>
          <Select value={controlVariant} onValueChange={setControlVariant}>
            <SelectTrigger id="pagination-control-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {paginationLinkVariants.map((variant) => (
                <SelectItem
                  key={`pagination-control-${variant}`}
                  value={variant}
                >
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
