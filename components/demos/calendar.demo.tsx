"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { type DateRange } from "react-day-picker";

import { Calendar } from "~/components/ui/calendar";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

const navVariants = [
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

// const selectTriggerVariants = [
//   "outline",
//   "muted",
//   "underlined",
//   "primary-muted",
//   "secondary-muted",
// ] as const;

// const selectItemVariants = [

// ] as const;

// const selectItemWidths = [
//   "default",
//   "full",
// ] as const;

const selectedVariants = [
  "contrast",
  "base",
  "base-shadow",
  "base-gradient",
  "primary",
  "primary-shadow",
  "primary-gradient",
  "primary-tron",
  "secondary",
  "secondary-shadow",
  "secondary-gradient",
  "secondary-tron",
] as const;

const unselectedVariants = [
  "ghost",
  "primary-ghost",
  "secondary-ghost",
] as const;

const rangeVariants = [
  "outline",
  "accent",
  "muted",
  "surface",
  "faded",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
] as const;

export function CalendarDemo() {
  const [navVariant, setNavVariant] = React.useState("ghost");
  const [selectedVariant, setSelectedVariant] = React.useState("primary");
  const [unselectedVariant, setUnselectedVariant] = React.useState("ghost");
  const [rangeVariant, setRangeVariant] = React.useState("primary-muted");

  const [dateSingle, setDateSingle] = React.useState<Date | undefined>(
    new Date()
  );
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: addDays(new Date(2025, 5, 12), 20),
  });

  return (
    <>
      <ComponentContainer className="gap-8">
        <Calendar
          mode="single"
          selected={dateSingle}
          onSelect={setDateSingle}
          className="rounded-md border border-border shadow-md"
          captionLayout="dropdown"
          disabled={{ dayOfWeek: [0, 6] }}
          showOutsideDays={false}
          variants={{
            nav: navVariant as (typeof navVariants)[number],
            selected: selectedVariant as (typeof selectedVariants)[number],
            unselected:
              unselectedVariant as (typeof unselectedVariants)[number],
            range: rangeVariant as (typeof rangeVariants)[number],
          }}
        />
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          numberOfMonths={2}
          selected={dateRange}
          onSelect={setDateRange}
          className="rounded-lg border shadow-sm"
          variants={{
            nav: navVariant as (typeof navVariants)[number],
            selected: selectedVariant as (typeof selectedVariants)[number],
            unselected:
              unselectedVariant as (typeof unselectedVariants)[number],
            range: rangeVariant as (typeof rangeVariants)[number],
          }}
        />
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="calendar-nav-variant">Nav Variant</Label>
          <Select value={navVariant} onValueChange={setNavVariant}>
            <SelectTrigger id="calendar-nav-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {navVariants.map((variant) => (
                <SelectItem key={`calendar-nav-${variant}`} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="calendar-selected-variant">Selected Variant</Label>
          <Select value={selectedVariant} onValueChange={setSelectedVariant}>
            <SelectTrigger id="calendar-selected-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {selectedVariants.map((variant) => (
                <SelectItem
                  key={`calendar-selected-${variant}`}
                  value={variant}
                >
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="calendar-unselected-variant">
            Unselected Variant
          </Label>
          <Select
            value={unselectedVariant}
            onValueChange={setUnselectedVariant}
          >
            <SelectTrigger id="calendar-unselected-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {unselectedVariants.map((variant) => (
                <SelectItem
                  key={`calendar-unselected-${variant}`}
                  value={variant}
                >
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="calendar-range-variant">Range Variant</Label>
          <Select value={rangeVariant} onValueChange={setRangeVariant}>
            <SelectTrigger id="calendar-range-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {rangeVariants.map((variant) => (
                <SelectItem key={`calendar-range-${variant}`} value={variant}>
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
