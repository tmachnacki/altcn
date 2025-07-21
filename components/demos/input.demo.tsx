"use client";

import * as React from "react";

import { Input, inputVariants } from "~/components/ui/input";
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

type Variant = keyof typeof inputVariants.variants.variant;
const variants = Object.keys(inputVariants.variants.variant) as Variant[];

type Size = keyof typeof inputVariants.variants.size;
const sizesMap: Record<number, Size> = {
  1: "sm",
  2: "md",
  3: "lg",
};

export function InputDemo() {
  const [variant, setVariant] = React.useState<Variant>("outline");
  const [sizeIdx, setSizeIdx] = React.useState(2);
  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const size = sizesMap[sizeIdx];

  return (
    <>
      <ComponentContainer>
        <div className="grid w-full max-w-sm gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="someone@example.com"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Number</Label>
            <Input
              id="number"
              name="number"
              type="number"
              placeholder="0"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="file">File</Label>
            <Input
              id="file"
              name="file"
              type="file"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tel">Tel</Label>
            <Input
              id="tel"
              name="tel"
              type="tel"
              placeholder="123-456-7890"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="text">Text</Label>
            <Input
              id="text"
              name="text"
              type="text"
              placeholder="Text"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              name="url"
              type="url"
              placeholder="https://example.com"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="search">Search</Label>
            <Input
              id="search"
              name="search"
              type="search"
              placeholder="Search..."
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="datetime-local">Datetime Local</Label>
            <Input
              id="datetime-local"
              name="datetime-local"
              type="datetime-local"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="month">Month</Label>
            <Input
              id="month"
              name="month"
              type="month"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              name="time"
              type="time"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="week">Week</Label>
            <Input
              id="week"
              name="week"
              type="week"
              variant={variant}
              size={size}
              aria-invalid={invalid}
              disabled={disabled}
            />
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="input-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="input-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
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
        <div className="grid gap-3">
          <Label id="input-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {size}
            </span>
          </Label>
          <Slider
            aria-labelledby="input-size"
            min={1}
            max={3}
            step={1}
            value={[sizeIdx]}
            onValueChange={(value) => setSizeIdx(value[0])}
          />
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="input-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="input-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="input-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="input-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
