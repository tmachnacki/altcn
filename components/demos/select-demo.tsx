"use client";

import * as React from "react";
import {
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CircleDashed,
} from "lucide-react";
import { ComponentContainer } from "@/components/demos/component-container";
import { ComponentPlayground } from "@/components/demos/component-playground";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  const [triggerVariant, setTriggerVariant] = React.useState("default");
  const [triggerSize, setTriggerSize] = React.useState("default");
  const [itemsVariant, setItemsVariant] = React.useState("accent");
  const [wide, setWide] = React.useState(false);
  const [indicatorVariant, setIndicatorVariant] = React.useState("default");

  const triggerVariants = ["default"] as const;

  const triggerSizes = ["default"] as const;

  const itemsVariants = [
    "accent",
    "surface",
    "primary",
    "primary-accent",
    "primary-muted",
    "primary-surface",
    "primary-faded",
    "secondary",
    "secondary-accent",
    "secondary-muted",
    "secondary-surface",
    "secondary-faded",
    "destructive",
    "destructive-accent",
    "destructive-muted",
    "destructive-surface",
    "destructive-faded",
  ] as const;

  const indicatorVariants = ["default", "primary", "secondary"] as const;

  return (
    <>
      <ComponentContainer>
        <div className="flex h-full flex-1 flex-wrap items-center justify-start gap-4">
          <Select>
            <SelectTrigger
              className="w-[180px]"
              variant={triggerVariant as (typeof triggerVariants)[number]}
            >
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent
              variant={itemsVariant as (typeof itemsVariants)[number]}
              wide={wide}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
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
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger
              className="w-[180px]"
              variant={triggerVariant as (typeof triggerVariants)[number]}
            >
              <SelectValue placeholder="Large List" />
            </SelectTrigger>
            <SelectContent
              variant={itemsVariant as (typeof itemsVariants)[number]}
              wide={wide}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
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
              className="w-[180px]"
              variant={triggerVariant as (typeof triggerVariants)[number]}
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
              variant={itemsVariant as (typeof itemsVariants)[number]}
              wide={wide}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
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
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger
              className="w-[180px]"
              variant={triggerVariant as (typeof triggerVariants)[number]}
            >
              <SelectValue placeholder="Indicator Variants" />
            </SelectTrigger>
            <SelectContent
              variant={itemsVariant as (typeof itemsVariants)[number]}
              wide={wide}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
            >
              <SelectGroup>
                <SelectLabel>Variant</SelectLabel>
                <SelectItem value="default" indicatorVariant={"default"}>
                  Default
                </SelectItem>
                <SelectItem value="primary" indicatorVariant={"primary"}>
                  Primary
                </SelectItem>
                <SelectItem value="secondary" indicatorVariant={"secondary"}>
                  Secondary
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger
              className="w-[180px]"
              variant={triggerVariant as (typeof triggerVariants)[number]}
              aria-invalid={true}
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
              variant={itemsVariant as (typeof itemsVariants)[number]}
              wide={wide}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
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
            </SelectContent>
          </Select>
          <Select disabled>
            <SelectTrigger
              className="w-[180px]"
              variant={triggerVariant as (typeof triggerVariants)[number]}
            >
              <SelectValue placeholder="Disabled" />
            </SelectTrigger>
            <SelectContent
              variant={itemsVariant as (typeof itemsVariants)[number]}
              wide={wide}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
            >
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes" disabled>
                Grapes
              </SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="select-trigger-variant">Trigger Variant</Label>
          <Select
            value={triggerVariant}
            onValueChange={setTriggerVariant}
            defaultValue="default"
          >
            <SelectTrigger id="select-trigger-variant" className="w-full">
              <SelectValue>{triggerVariant}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {triggerVariants.map((triggerVariant) => (
                <SelectItem
                  key={`trigger-variant-${triggerVariant}`}
                  value={triggerVariant}
                >
                  {triggerVariant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="select-trigger-size">Trigger Size</Label>
          <Select
            value={triggerSize}
            onValueChange={setTriggerSize}
            defaultValue="default"
          >
            <SelectTrigger id="select-trigger-size" className="w-full">
              <SelectValue>{triggerSize}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {triggerSizes.map((triggerSize) => (
                <SelectItem
                  key={`trigger-size-${triggerSize}`}
                  value={triggerSize}
                >
                  {triggerSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="select-items-variant">Items Variant</Label>
          <Select
            value={itemsVariant}
            onValueChange={setItemsVariant}
            defaultValue="accent"
          >
            <SelectTrigger id="select-items-variant" className="w-full">
              <SelectValue>{itemsVariant}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {itemsVariants.map((itemsVariant) => (
                <SelectItem
                  key={`items-variant-${itemsVariant}`}
                  value={itemsVariant}
                >
                  {itemsVariant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Label className="flex items-center gap-2" htmlFor="select-wide">
          <span>Wide</span>
          <Switch id="select-wide" checked={wide} onCheckedChange={setWide} />
        </Label>
        <div className="flex flex-col gap-2">
          <Label htmlFor="select-indicator-variant">Indicator Variant</Label>
          <Select
            value={indicatorVariant}
            onValueChange={setIndicatorVariant}
            defaultValue="default"
          >
            <SelectTrigger id="select-indicator-variant" className="w-full">
              <SelectValue>{indicatorVariant}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {indicatorVariants.map((indicatorVariant) => (
                <SelectItem
                  key={`indicator-variant-${indicatorVariant}`}
                  value={indicatorVariant}
                >
                  {indicatorVariant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
