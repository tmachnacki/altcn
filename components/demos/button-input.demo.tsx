"use client";

import * as React from "react";
import { CalendarIcon, UserIcon } from "lucide-react";

import {
  ButtonInput,
  ButtonInputIcon,
  ButtonInputValue,
  buttonInputVariants,
} from "~/components/ui/button-input";
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

type Variant = keyof typeof buttonInputVariants.variants.variant;
const variants = Object.keys(buttonInputVariants.variants.variant) as Variant[];

type Size = keyof typeof buttonInputVariants.variants.size;
const sizesMap: Record<number, Size> = {
  1: "sm",
  2: "md",
  3: "lg",
} as const;

export function ButtonInputDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [size, setSize] = React.useState(2);

  return (
    <>
      <ComponentContainer>
        <div className="flex w-full max-w-xs flex-col gap-8 sm:max-w-sm">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <ButtonInput
              variant={variant as Variant}
              size={sizesMap[size]}
              className="w-full capitalize"
            >
              <ButtonInputValue>{variant}</ButtonInputValue>
              <ButtonInputIcon />
            </ButtonInput>

            <ButtonInput
              variant={variant as Variant}
              size={sizesMap[size]}
              className="w-full"
            >
              <ButtonInputValue>
                <UserIcon />
                tmachnacki
              </ButtonInputValue>
              <ButtonInputIcon />
            </ButtonInput>

            <ButtonInput
              variant={variant as Variant}
              size={sizesMap[size]}
              className="w-full"
            >
              <ButtonInputValue>Custom Icon</ButtonInputValue>
              <ButtonInputIcon>
                <CalendarIcon />
              </ButtonInputIcon>
            </ButtonInput>

            <ButtonInput
              variant={variant as Variant}
              size={sizesMap[size]}
              className="w-full"
            >
              <ButtonInputIcon>
                <CalendarIcon />
              </ButtonInputIcon>
              <ButtonInputValue>Leading Icon</ButtonInputValue>
            </ButtonInput>

            <ButtonInput
              variant={variant as Variant}
              size={sizesMap[size]}
              className="w-full"
            >
              <ButtonInputValue placeholder="Placeholder"></ButtonInputValue>
              <ButtonInputIcon />
            </ButtonInput>

            <ButtonInput
              variant={variant as Variant}
              size={sizesMap[size]}
              className="w-full"
            >
              <ButtonInputValue
                placeholder={
                  <>
                    <UserIcon /> Select user
                  </>
                }
              ></ButtonInputValue>
              <ButtonInputIcon />
            </ButtonInput>

            <ButtonInput
              variant={variant as Variant}
              size={sizesMap[size]}
              className="w-full"
              disabled={true}
            >
              <ButtonInputValue>Disabled</ButtonInputValue>
              <ButtonInputIcon />
            </ButtonInput>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <ButtonInput
              variant={variant as Variant}
              size={sizesMap[size]}
              className="w-full"
              aria-invalid="true"
            >
              <ButtonInputValue>Invalid</ButtonInputValue>
              <ButtonInputIcon />
            </ButtonInput>

            <ButtonInput
              variant={variant as Variant}
              size={sizesMap[size]}
              className="w-full"
              aria-invalid="true"
            >
              <ButtonInputValue>
                <UserIcon /> Invalid
              </ButtonInputValue>
              <ButtonInputIcon />
            </ButtonInput>

            <ButtonInput
              variant={variant as Variant}
              size={sizesMap[size]}
              className="w-full"
              aria-invalid="true"
            >
              <ButtonInputValue placeholder="Placeholder"></ButtonInputValue>
              <ButtonInputIcon />
            </ButtonInput>

            <ButtonInput
              variant={variant as Variant}
              size={sizesMap[size]}
              className="w-full"
              aria-invalid="true"
              disabled={true}
            >
              <ButtonInputValue>Disabled</ButtonInputValue>
              <ButtonInputIcon />
            </ButtonInput>
          </div>
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
              {variants.map((variant) => (
                <SelectItem key={`button-input-${variant}`} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-3">
          <Label id="button-input-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {sizesMap[size]}
            </span>
          </Label>
          <Slider
            aria-labelledby="button-input-size"
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
