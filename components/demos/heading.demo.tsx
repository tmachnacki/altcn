"use client";

import * as React from "react";

import { Heading } from "~/components/ui/heading";
import { Label } from "~/components/ui/label";
import { Slider } from "~/components/ui/slider";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type HeadingSize = "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

const sizesMap: Record<number, HeadingSize> = {
  1: "sm",
  2: "base",
  3: "lg",
  4: "xl",
  5: "2xl",
  6: "3xl",
  7: "4xl",
};

export function HeadingDemo() {
  const [sizeIdx, setSizeIdx] = React.useState(4);
  const size = sizesMap[sizeIdx];
  return (
    <>
      <ComponentContainer>
        <Heading size={size}>Heading</Heading>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-3">
          <Label id="heading-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {size}
            </span>
          </Label>
          <Slider
            aria-labelledby="heading-size"
            min={1}
            max={Object.keys(sizesMap).length}
            step={1}
            value={[sizeIdx]}
            onValueChange={(value) => setSizeIdx(value[0])}
          />
        </div>
      </ComponentPlayground>
    </>
  );
}
