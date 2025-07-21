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
import { Switch } from "~/components/ui/switch";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type Variant = keyof typeof buttonInputVariants.variants.variant;
const variants = Object.keys(buttonInputVariants.variants.variant) as Variant[];

type Size = keyof typeof buttonInputVariants.variants.size;
const sizesMap: Record<number, Size> = {
  1: "sm",
  2: "md",
  3: "lg",
} as const;

export function ButtonInputDemo() {
  const [variant, setVariant] = React.useState<Variant>("outline");
  const [sizeIdx, setSizeIdx] = React.useState(2);
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const size = sizesMap[sizeIdx];

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full grid-cols-1 gap-4 sm:max-w-sm sm:grid-cols-2">
          <ButtonInput
            variant={variant}
            size={size}
            className="w-full capitalize"
            disabled={disabled}
            aria-invalid={invalid}
          >
            <ButtonInputValue>{variant}</ButtonInputValue>
            <ButtonInputIcon />
          </ButtonInput>
          <ButtonInput
            variant={variant}
            size={size}
            className="w-full"
            disabled={disabled}
            aria-invalid={invalid}
          >
            <ButtonInputValue>
              <UserIcon />
              tmachnacki
            </ButtonInputValue>
            <ButtonInputIcon />
          </ButtonInput>
          <ButtonInput
            variant={variant}
            size={size}
            className="w-full"
            disabled={disabled}
            aria-invalid={invalid}
          >
            <ButtonInputValue>Custom Icon</ButtonInputValue>
            <ButtonInputIcon>
              <CalendarIcon />
            </ButtonInputIcon>
          </ButtonInput>
          <ButtonInput
            variant={variant}
            size={size}
            className="w-full"
            disabled={disabled}
            aria-invalid={invalid}
          >
            <ButtonInputIcon>
              <CalendarIcon />
            </ButtonInputIcon>
            <ButtonInputValue>Leading Icon</ButtonInputValue>
          </ButtonInput>
          <ButtonInput
            variant={variant}
            size={size}
            className="w-full"
            disabled={disabled}
            aria-invalid={invalid}
          >
            <ButtonInputValue placeholder="Placeholder"></ButtonInputValue>
            <ButtonInputIcon />
          </ButtonInput>
          <ButtonInput
            variant={variant}
            size={size}
            className="w-full"
            disabled={disabled}
            aria-invalid={invalid}
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
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {variants.map((variant) => (
                <SelectItem key={`button-input-${variant}`} value={variant}>
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
              {size}
            </span>
          </Label>
          <Slider
            aria-labelledby="button-input-size"
            min={1}
            max={3}
            step={1}
            value={[sizeIdx]}
            onValueChange={(value) => setSizeIdx(value[0])}
          />
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="button-input-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="button-input-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="button-input-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="button-input-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
