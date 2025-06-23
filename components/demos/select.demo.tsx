"use client";

import * as React from "react";
import {
  BanIcon,
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CheckIcon,
  CircleDashed,
} from "lucide-react";

import { cn } from "~/lib/utils";

import { menuItemIndicatorVariants } from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const triggerVariants = [
  "outline",
  "muted",
  "underlined",
  "primary-muted",
  "secondary-muted",
] as const;

type TriggerSize = "default" | "sm" | "lg";
const triggerSizesMap: Record<number, TriggerSize> = {
  1: "sm",
  2: "default",
  3: "lg",
};

const itemVariants = [
  "accent",
  "surface",
  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "destructive",
  "destructive-accent",
  "destructive-muted",
  "destructive-surface",
  "destructive-faded",
] as const;

const indicatorVariants = [
  "default",
  "primary",
  "secondary",
  "destructive",
  "success",
  "warning",
] as const;

const widths = ["default", "full"] as const;

export function SelectDemo() {
  const [triggerVariant, setTriggerVariant] = React.useState("outline");
  const [triggerSize, setTriggerSize] = React.useState(2);
  const [itemVariant, setItemVariant] = React.useState("accent");
  const [indicatorVariant, setIndicatorVariant] = React.useState("default");
  const [width, setWidth] = React.useState("default");

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full max-w-xs grid-cols-1 gap-4 sm:max-w-sm sm:grid-cols-2">
          <Select>
            <SelectTrigger
              className="w-full"
              variant={triggerVariant as (typeof triggerVariants)[number]}
              size={triggerSizesMap[triggerSize]}
            >
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent
              variant={itemVariant as (typeof itemVariants)[number]}
              width={width as (typeof widths)[number]}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
            >
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes" disabled>
                  Grapes
                </SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="broccoli">Broccoli</SelectItem>
                <SelectItem value="onion">Onion</SelectItem>
                <SelectItem value="spinach" disabled>
                  Spinach
                </SelectItem>
                <SelectItem value="peas">Peas</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger
              className="w-full"
              variant={triggerVariant as (typeof triggerVariants)[number]}
              size={triggerSizesMap[triggerSize]}
            >
              <SelectValue placeholder="Large List" />
            </SelectTrigger>
            <SelectContent
              variant={itemVariant as (typeof itemVariants)[number]}
              width={width as (typeof widths)[number]}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
              className="max-h-96"
            >
              {Array.from({ length: 100 }).map((_, i) => (
                <SelectItem key={i} value={`item-${i}`}>
                  Item {i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger
              className="w-full"
              variant={triggerVariant as (typeof triggerVariants)[number]}
              size={triggerSizesMap[triggerSize]}
            >
              <SelectValue
                placeholder={
                  <>
                    <CircleDashed />
                    With Icon
                  </>
                }
              />
            </SelectTrigger>
            <SelectContent
              variant={itemVariant as (typeof itemVariants)[number]}
              width={width as (typeof widths)[number]}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
            >
              <SelectItem value="line">
                <ChartLineIcon />
                Line
              </SelectItem>
              <SelectItem value="bar">
                <ChartBarIcon />
                Bar
              </SelectItem>
              <SelectItem value="pie">
                <ChartPieIcon />
                Pie
              </SelectItem>
              <SelectItem value="disabled" disabled>
                <BanIcon />
                Disabled
              </SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger
              className="w-full"
              variant={triggerVariant as (typeof triggerVariants)[number]}
              size={triggerSizesMap[triggerSize]}
              aria-invalid="true"
            >
              <SelectValue
                placeholder={
                  <>
                    <CircleDashed />
                    Invalid
                  </>
                }
              />
            </SelectTrigger>
            <SelectContent
              variant={itemVariant as (typeof itemVariants)[number]}
              width={width as (typeof widths)[number]}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
            >
              <SelectItem value="line">
                <ChartLineIcon />
                Line
              </SelectItem>
              <SelectItem value="bar">
                <ChartBarIcon />
                Bar
              </SelectItem>
              <SelectItem value="pie">
                <ChartPieIcon />
                Pie
              </SelectItem>
              <SelectItem value="disabled" disabled>
                <BanIcon />
                Disabled
              </SelectItem>
            </SelectContent>
          </Select>
          <Select disabled>
            <SelectTrigger
              className="w-full"
              variant={triggerVariant as (typeof triggerVariants)[number]}
              size={triggerSizesMap[triggerSize]}
              disabled
            >
              <SelectValue
                placeholder={
                  <>
                    <BanIcon />
                    Disabled
                  </>
                }
              />
            </SelectTrigger>
            <SelectContent
              variant={itemVariant as (typeof itemVariants)[number]}
              width={width as (typeof widths)[number]}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
            >
              <SelectItem value="line">
                <ChartLineIcon />
                Line
              </SelectItem>
              <SelectItem value="bar">
                <ChartBarIcon />
                Bar
              </SelectItem>
              <SelectItem value="pie">
                <ChartPieIcon />
                Pie
              </SelectItem>
              <SelectItem value="disabled" disabled>
                <BanIcon />
                Disabled
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="trigger-variant">Trigger Variant</Label>
          <Select value={triggerVariant} onValueChange={setTriggerVariant}>
            <SelectTrigger id="trigger-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {triggerVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="trigger-size">
            Trigger Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {triggerSizesMap[triggerSize]}
            </span>
          </Label>
          <Slider
            id="trigger-size"
            className="w-full"
            min={1}
            max={3}
            step={1}
            value={[triggerSize]}
            onValueChange={(value) => setTriggerSize(value[0])}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="item-variant">Item Variant</Label>
          <Select value={itemVariant} onValueChange={setItemVariant}>
            <SelectTrigger id="item-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {itemVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="indicator-variant">Indicator Variant</Label>
          <Select value={indicatorVariant} onValueChange={setIndicatorVariant}>
            <SelectTrigger id="indicator-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {indicatorVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <span
                    className={cn(
                      menuItemIndicatorVariants({ variant }),
                      "relative inline-flex size-3.5 items-center justify-center"
                    )}
                  >
                    <CheckIcon className="size-3.5 text-current" />
                  </span>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="item-width">Item Width</Label>
          <Select value={width} onValueChange={setWidth}>
            <SelectTrigger id="item-width" className="w-full">
              <SelectValue placeholder="Select width" />
            </SelectTrigger>
            <SelectContent>
              {widths.map((width) => (
                <SelectItem key={width} value={width}>
                  {width}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
