"use client";

import * as React from "react";
import {
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CircleDashed,
} from "lucide-react";

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
  const variants = [
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
  ] as const;

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-8">
      {variants.map((variant) => (
        <div key={variant} className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent variant={variant}>
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
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Large List" />
              </SelectTrigger>
              <SelectContent variant={variant}>
                {Array.from({ length: 100 }).map((_, i) => (
                  <SelectItem key={i} value={`item-${i}`}>
                    Item {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select disabled>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent variant={variant}>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes" disabled>
                  Grapes
                </SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={
                    <>
                      <CircleDashed className="text-muted-foreground" />
                      With Icon
                    </>
                  }
                />
              </SelectTrigger>
              <SelectContent variant={variant}>
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
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Indicator Variants" />
              </SelectTrigger>
              <SelectContent variant={variant}>
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
          </div>
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent variant={variant} wide>
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
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Large List" />
              </SelectTrigger>
              <SelectContent variant={variant} wide>
                {Array.from({ length: 100 }).map((_, i) => (
                  <SelectItem key={i} value={`item-${i}`}>
                    Item {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select disabled>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent variant={variant} wide>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes" disabled>
                  Grapes
                </SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder={
                    <>
                      <CircleDashed className="text-muted-foreground" />
                      With Icon
                    </>
                  }
                />
              </SelectTrigger>
              <SelectContent variant={variant} wide>
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
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Indicator Variants" />
              </SelectTrigger>
              <SelectContent variant={variant} wide>
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
          </div>
        </div>
      ))}
    </div>
  );
}
