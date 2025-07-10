"use client";

import * as React from "react";
import {
  BoldIcon,
  BookmarkIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";
import { Toggle } from "~/components/ui/toggle";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const variants = [
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
  "base-gradient",

  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "primary-tron",
  "primary-gradient",

  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "secondary-tron",
  "secondary-gradient",
] as const;

type Size = "xs" | "sm" | "md" | "lg";

const sizesMap: Record<number, Size> = {
  1: "xs",
  2: "sm",
  3: "md",
  4: "lg",
};

export function ToggleDemo() {
  const [variant, setVariant] = React.useState("primary");
  const [size, setSize] = React.useState(3);

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle
            aria-label="Toggle bold"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
            defaultPressed
          >
            <BoldIcon />
          </Toggle>
          <Toggle
            aria-label="Toggle underline"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          >
            <UnderlineIcon />
          </Toggle>
          <Toggle
            aria-label="Toggle italic"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
            disabled
          >
            Disabled
          </Toggle>
          <Toggle
            aria-label="Toggle italic"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          >
            <ItalicIcon />
            Italic
          </Toggle>
          <Toggle
            aria-label="Toggle book"
            className="data-[state=on]:**:[svg]:fill-current"
            variant={variant as (typeof variants)[number]}
            size={sizesMap[size]}
          >
            <BookmarkIcon />
          </Toggle>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="toggle-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="toggle-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {variants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="toggle-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {sizesMap[size]}
            </span>
          </Label>
          <Slider
            id="toggle-size"
            min={1}
            max={4}
            step={1}
            value={[size]}
            onValueChange={(value) => setSize(value[0])}
          />
        </div>
      </ComponentPlayground>
    </>
  );
}
