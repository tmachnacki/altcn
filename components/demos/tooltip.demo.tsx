"use client";

import * as React from "react";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  tooltipVariants,
} from "~/components/ui/tooltip";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type Variant = keyof typeof tooltipVariants.variants.variant;
const variants = Object.keys(tooltipVariants.variants.variant) as Variant[];

const sides = ["top", "right", "bottom", "left"] as const;

const tooltipButtonVariants = (variant: Variant) => {
  switch (variant) {
    case "solid":
      return "outline";
    case "contrast":
      return "contrast";
    case "base":
      return "base";
    case "primary":
      return "primary";
    case "secondary":
      return "secondary";
    case "destructive":
      return "destructive";
    case "translucent":
      return "outline";
  }
};

export function TooltipDemo() {
  const [variant, setVariant] = React.useState<Variant>("contrast");
  const [side, setSide] = React.useState("top");

  return (
    <>
      <ComponentContainer withBackground={variant === "translucent"}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={tooltipButtonVariants(variant)}
              className="capitalize"
            >
              {variant}
            </Button>
          </TooltipTrigger>
          <TooltipContent
            variant={variant}
            side={side as (typeof sides)[number]}
          >
            <p>This is a {variant} tooltip</p>
          </TooltipContent>
        </Tooltip>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="tooltip-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="tooltip-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {variants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tooltip-side">Side</Label>
          <Select value={side} onValueChange={setSide}>
            <SelectTrigger id="tooltip-side" className="w-full">
              <SelectValue placeholder="Select a side" />
            </SelectTrigger>
            <SelectContent>
              {sides.map((side) => (
                <SelectItem key={side} value={side}>
                  {side}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
