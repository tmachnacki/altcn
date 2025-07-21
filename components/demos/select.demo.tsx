"use client";

import * as React from "react";
import {
  BanIcon,
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CheckIcon,
  CircleDashed,
} from "lucide-react";

import { cn } from "~/lib/utils";

import { menuItemIndicatorVariants } from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  selectContentVariants,
  SelectGroup,
  SelectItem,
  selectItemIndicatorVariants,
  selectItemVariants,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  selectTriggerVariants,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";
import { Switch } from "~/components/ui/switch";
import { BackgroundPattern } from "~/components/background-pattern";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type TriggerVariant = keyof typeof selectTriggerVariants.variants.variant;
const triggerVariants = Object.keys(
  selectTriggerVariants.variants.variant
) as TriggerVariant[];

type TriggerSize = keyof typeof selectTriggerVariants.variants.size;
const triggerSizesMap: Record<number, TriggerSize> = {
  1: "sm",
  2: "md",
  3: "lg",
};

type ContentVariant = keyof typeof selectContentVariants.variants.variant;
const contentVariants = Object.keys(
  selectContentVariants.variants.variant
) as ContentVariant[];

type ItemVariant = keyof typeof selectItemVariants.variants.variant;
const itemVariants = Object.keys(
  selectItemVariants.variants.variant
) as ItemVariant[];

type IndicatorVariant =
  keyof typeof selectItemIndicatorVariants.variants.variant;
const indicatorVariants = Object.keys(
  selectItemIndicatorVariants.variants.variant
) as IndicatorVariant[];

const widths = ["default", "full"] as const;

const positions = ["popper", "item-aligned"] as const;

export function SelectDemo() {
  const [triggerVariant, setTriggerVariant] =
    React.useState<TriggerVariant>("outline");
  const [triggerSizeIdx, setTriggerSizeIdx] = React.useState(2);
  const [contentVariant, setContentVariant] =
    React.useState<ContentVariant>("solid");
  const [itemVariant, setItemVariant] = React.useState<ItemVariant>("accent");
  const [indicatorVariant, setIndicatorVariant] =
    React.useState<IndicatorVariant>("base");
  const [width, setWidth] = React.useState("default");
  const [position, setPosition] = React.useState("popper");

  const [invalid, setInvalid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const triggerSize = triggerSizesMap[triggerSizeIdx];

  return (
    <>
      <ComponentContainer className="overflow-hidden rounded-t-lg p-0 md:rounded-l-lg md:rounded-r-none">
        <div
          className={cn(
            "relative flex h-full min-h-96 w-full min-w-0 flex-col items-center justify-center bg-center p-4"
          )}
        >
          <BackgroundPattern />
          <div className="relative grid w-full max-w-xs grid-cols-1 gap-4 rounded-lg border border-border bg-card-translucent p-4 shadow-lg backdrop-blur-card-translucent sm:max-w-lg sm:grid-cols-3">
            <Select>
              <SelectTrigger
                className="w-full"
                variant={triggerVariant}
                size={triggerSize}
                disabled={disabled}
                aria-invalid={invalid}
              >
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent
                variants={{
                  content: contentVariant,
                  item: itemVariant,
                  indicator: indicatorVariant,
                }}
                width={width as (typeof widths)[number]}
                position={position as (typeof positions)[number]}
              >
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes" disabled>
                    Grapes
                  </SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Vegetables</SelectLabel>
                  <SelectItem value="carrot">Carrot</SelectItem>
                  <SelectItem value="broccoli">Broccoli</SelectItem>
                  <SelectItem value="onion">Onion</SelectItem>
                  <SelectItem value="spinach" disabled>
                    Spinach
                  </SelectItem>
                  <SelectItem value="peas">Peas</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger
                className="w-full"
                variant={triggerVariant}
                size={triggerSize}
                disabled={disabled}
                aria-invalid={invalid}
              >
                <SelectValue placeholder="Large List" />
              </SelectTrigger>
              <SelectContent
                variants={{
                  content: contentVariant,
                  item: itemVariant,
                  indicator: indicatorVariant,
                }}
                width={width as (typeof widths)[number]}
                position={position as (typeof positions)[number]}
                className="max-h-96"
              >
                {Array.from({ length: 100 }).map((_, i) => (
                  <SelectItem key={i} value={`item-${i}`}>
                    Item {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger
                className="w-full"
                variant={triggerVariant}
                size={triggerSize}
                disabled={disabled}
                aria-invalid={invalid}
              >
                <SelectValue
                  placeholder={
                    <>
                      <CircleDashed />
                      With Icon
                    </>
                  }
                />
              </SelectTrigger>
              <SelectContent
                variants={{
                  content: contentVariant,
                  item: itemVariant,
                  indicator: indicatorVariant,
                }}
                width={width as (typeof widths)[number]}
                position={position as (typeof positions)[number]}
              >
                <SelectItem value="line">
                  <ChartLineIcon />
                  Line
                </SelectItem>
                <SelectItem value="bar">
                  <ChartBarIcon />
                  Bar
                </SelectItem>
                <SelectItem value="pie">
                  <ChartPieIcon />
                  Pie
                </SelectItem>
                <SelectItem value="disabled" disabled>
                  <BanIcon />
                  Disabled
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="trigger-variant">Trigger Variant</Label>
          <Select
            value={triggerVariant}
            onValueChange={(value) =>
              setTriggerVariant(value as TriggerVariant)
            }
          >
            <SelectTrigger id="trigger-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {triggerVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="trigger-size">
            Trigger Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {triggerSize}
            </span>
          </Label>
          <Slider
            id="trigger-size"
            className="w-full"
            min={1}
            max={3}
            step={1}
            value={[triggerSizeIdx]}
            onValueChange={(value) => setTriggerSizeIdx(value[0])}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="content-variant">Content Variant</Label>
          <Select
            value={contentVariant}
            onValueChange={(value) =>
              setContentVariant(value as ContentVariant)
            }
          >
            <SelectTrigger id="content-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {contentVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="item-variant">Item Variant</Label>
          <Select
            value={itemVariant}
            onValueChange={(value) => setItemVariant(value as ItemVariant)}
          >
            <SelectTrigger id="item-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {itemVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="indicator-variant">Indicator Variant</Label>
          <Select
            value={indicatorVariant}
            onValueChange={(value) =>
              setIndicatorVariant(value as IndicatorVariant)
            }
          >
            <SelectTrigger id="indicator-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {indicatorVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <span
                    className={cn(
                      menuItemIndicatorVariants({ variant }),
                      "relative inline-flex size-3.5 items-center justify-center"
                    )}
                  >
                    <CheckIcon className="size-3.5 text-current" />
                  </span>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="item-width">Item Width</Label>
          <Select
            value={width}
            onValueChange={(value) =>
              setWidth(value as (typeof widths)[number])
            }
          >
            <SelectTrigger id="item-width" className="w-full">
              <SelectValue placeholder="Select width" />
            </SelectTrigger>
            <SelectContent>
              {widths.map((width) => (
                <SelectItem key={width} value={width}>
                  {width}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="content-position">Content Position</Label>
          <Select
            value={position}
            onValueChange={(value) =>
              setPosition(value as (typeof positions)[number])
            }
          >
            <SelectTrigger id="content-position" className="w-full">
              <SelectValue placeholder="Select position" />
            </SelectTrigger>
            <SelectContent>
              {positions.map((position) => (
                <SelectItem key={position} value={position}>
                  {position}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="select-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="select-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="select-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="select-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
