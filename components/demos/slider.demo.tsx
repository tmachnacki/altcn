"use client";

import * as React from "react";

import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const variants = [
  "primary",
  "primary-muted",
  "primary-faded",
  "secondary",
  "secondary-muted",
  "secondary-faded",
] as const;

const orientations = ["horizontal", "vertical"] as const;

export function SliderDemo() {
  const [variant, setVariant] = React.useState("primary");
  const [orientation, setOrientation] = React.useState("horizontal");

  return (
    <>
      <ComponentContainer>
        <div className="flex w-full max-w-sm flex-col gap-8">
          <div
            className={`flex ${orientation === "vertical" ? "flex-row gap-12" : "flex-col gap-8"}`}
          >
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              variant={variant as (typeof variants)[number]}
              orientation={orientation as (typeof orientations)[number]}
            />
            <Slider
              defaultValue={[25, 50]}
              max={100}
              step={1}
              variant={variant as (typeof variants)[number]}
              orientation={orientation as (typeof orientations)[number]}
            />
            <Slider
              defaultValue={[10, 20]}
              max={100}
              step={10}
              variant={variant as (typeof variants)[number]}
              orientation={orientation as (typeof orientations)[number]}
            />
          </div>

          <SliderControlled variant={variant as (typeof variants)[number]} />
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="slider-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="slider-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
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
        <div className="grid gap-2">
          <Label htmlFor="slider-orientation">Orientation</Label>
          <Select value={orientation} onValueChange={setOrientation}>
            <SelectTrigger id="slider-orientation" className="w-full">
              <SelectValue placeholder="Select orientation" />
            </SelectTrigger>
            <SelectContent>
              {orientations.map((orientation) => (
                <SelectItem key={orientation} value={orientation}>
                  {orientation}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}

function SliderControlled({ variant }: { variant: (typeof variants)[number] }) {
  const [value, setValue] = React.useState([0.3, 0.7]);

  const hasError = Math.abs(value[1] - value[0]) < 0.5;
  const errorMessage = "Range must be at least 0.5";

  const textVariants = {
    primary: "text-primary-muted-foreground",
    "primary-muted": "text-primary-muted-foreground",
    "primary-faded": "text-primary-muted-foreground",
    secondary: "text-secondary-muted-foreground",
    "secondary-muted": "text-secondary-muted-foreground",
    "secondary-faded": "text-secondary-muted-foreground",
  }[variant];

  return (
    <div className="grid w-full gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Temperature</Label>
        <span
          className={`text-sm ${hasError ? "text-destructive-muted-foreground" : textVariants}`}
        >
          {value.join(", ")}
        </span>
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={setValue}
        min={0}
        max={1}
        step={0.1}
        variant={variant}
        aria-invalid={hasError}
        aria-errormessage={hasError ? errorMessage : undefined}
      />
      {hasError && (
        <span className="text-sm text-destructive-muted-foreground">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
