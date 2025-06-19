"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { ButtonInput, ButtonInputIcon } from "~/components/ui/button-input";
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

const buttonInputVariants = [
  "outline",
  "muted",
  "underlined",
  "primary-muted",
  "secondary-muted",
] as const;

type ButtonInputSize = "sm" | "default" | "lg";
const buttonInputSizesMap: Record<number, ButtonInputSize> = {
  1: "sm",
  2: "default",
  3: "lg",
} as const;

export function ButtonInputDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [size, setSize] = React.useState(2);

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full max-w-sm grid-cols-2 gap-4">
          <ButtonInput
            variant={variant as (typeof buttonInputVariants)[number]}
            size={buttonInputSizesMap[size]}
            className="w-full capitalize"
          >
            {variant}
            <ButtonInputIcon />
          </ButtonInput>

          <ButtonInput
            variant={variant as (typeof buttonInputVariants)[number]}
            size={buttonInputSizesMap[size]}
            className="w-full"
          >
            Custom Icon
            <ButtonInputIcon>
              <CalendarIcon />
            </ButtonInputIcon>
          </ButtonInput>

          <ButtonInput
            variant={variant as (typeof buttonInputVariants)[number]}
            size={buttonInputSizesMap[size]}
            className="w-full"
            empty={true}
          >
            Placeholder
            <ButtonInputIcon />
          </ButtonInput>

          <ButtonInput
            variant={variant as (typeof buttonInputVariants)[number]}
            size={buttonInputSizesMap[size]}
            className="w-full"
            aria-invalid="true"
          >
            Invalid
            <ButtonInputIcon />
          </ButtonInput>

          <ButtonInput
            variant={variant as (typeof buttonInputVariants)[number]}
            size={buttonInputSizesMap[size]}
            className="w-full"
            disabled={true}
          >
            Disabled
            <ButtonInputIcon />
          </ButtonInput>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {buttonInputVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {buttonInputSizesMap[size]}
            </span>
          </Label>
          <Slider
            id="size"
            min={1}
            max={3}
            step={1}
            value={[size]}
            onValueChange={(value: number[]) => setSize(value[0])}
          />
        </div>
      </ComponentPlayground>
    </>
  );
}
