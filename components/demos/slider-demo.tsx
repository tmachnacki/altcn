"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  const variants = [
    "primary",
    "primary-muted",
    "primary-faded",
    "secondary",
    "secondary-muted",
    "secondary-faded",
  ] as const;

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-12">
      {variants.map((variant) => (
        <div
          className="flex w-full max-w-sm flex-col flex-wrap gap-6 md:flex-row"
          key={variant}
        >
          <Slider defaultValue={[50]} max={100} step={1} variant={variant} />
          <Slider
            defaultValue={[25, 50]}
            max={100}
            step={1}
            variant={variant}
          />
          <Slider
            defaultValue={[10, 20]}
            max={100}
            step={10}
            variant={variant}
          />
          <div className="flex w-full items-center gap-6">
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              orientation="vertical"
              variant={variant}
            />
            <Slider
              defaultValue={[25]}
              max={100}
              step={1}
              orientation="vertical"
              variant={variant}
            />
          </div>
          <SliderControlled variant={variant} />
        </div>
      ))}
    </div>
  );
}

function SliderControlled({
  variant,
}: {
  variant:
    | "primary"
    | "primary-muted"
    | "primary-faded"
    | "secondary"
    | "secondary-muted"
    | "secondary-faded";
}) {
  const [value, setValue] = React.useState([0.3, 0.7]);

  const textVariants = {
    primary: "text-primary-muted-foreground",
    "primary-muted": "text-primary-muted-foreground",
    "primary-faded": "text-primary-muted-foreground",
    secondary: "text-secondary-muted-foreground",
    "secondary-muted": "text-secondary-muted-foreground",
    "secondary-faded": "text-secondary-muted-foreground",
  };

  return (
    <div className="grid w-full gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Temperature</Label>
        <span className={`text-sm ${textVariants[variant]}`}>
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
      />
    </div>
  );
}
