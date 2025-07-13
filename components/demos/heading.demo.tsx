"use client";

import * as React from "react";

import { Heading } from "~/components/ui/heading";
import { Label } from "~/components/ui/label";
import { Slider } from "~/components/ui/slider";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type HeadingSize =
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";
const sizesMap: Record<number, HeadingSize> = {
  1: "sm",
  2: "base",
  3: "lg",
  4: "xl",
  5: "2xl",
  6: "3xl",
  7: "4xl",
  8: "5xl",
  9: "6xl",
  10: "7xl",
  11: "8xl",
  12: "9xl",
};

export function HeadingDemo() {
  const [size, setSize] = React.useState(4);
  return (
    <>
      <ComponentContainer>
        <Heading size={sizesMap[size]}>Heading</Heading>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-3">
          <Label id="heading-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {sizesMap[size]}
            </span>
          </Label>
          <Slider
            aria-labelledby="heading-size"
            min={1}
            max={12}
            step={1}
            value={[size]}
            onValueChange={(value) => setSize(value[0])}
          />
        </div>
      </ComponentPlayground>
    </>
  );
}
