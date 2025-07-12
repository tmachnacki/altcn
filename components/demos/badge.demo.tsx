"use client";

import * as React from "react";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

import { sleep } from "~/lib/utils";

import { Badge, BadgeClose } from "~/components/ui/badge";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const variants = [
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
  "base-gradient",
  "dotted",

  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "primary-tron",
  "primary-gradient",
  "primary-dotted",

  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "secondary-tron",
  "secondary-gradient",
  "secondary-dotted",

  "destructive",
  "destructive-accent",
  "destructive-muted",
  "destructive-surface",
  "destructive-faded",
  "destructive-tron",
  "destructive-gradient",
  "destructive-dotted",

  "success",
  "success-accent",
  "success-muted",
  "success-surface",
  "success-faded",
  "success-tron",
  "success-gradient",
  "success-dotted",

  "warning",
  "warning-accent",
  "warning-muted",
  "warning-surface",
  "warning-faded",
  "warning-tron",
  "warning-gradient",
  "warning-dotted",
] as const;

const shapes = ["box", "pill"] as const;

export function BadgeDemo() {
  const [variant, setVariant] = React.useState("outline");
  const [shape, setShape] = React.useState("box");
  const [showBadge, setShowBadge] = React.useState(true);

  async function handleCloseBadge() {
    setShowBadge(false);
    await sleep(2000);
    setShowBadge(true);
  }

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-wrap gap-3">
          <Badge
            variant={variant as (typeof variants)[number]}
            shape={shape as (typeof shapes)[number]}
          >
            Badge
          </Badge>
          <Badge
            variant={variant as (typeof variants)[number]}
            shape={shape as (typeof shapes)[number]}
          >
            <CheckIcon />
            Icon
          </Badge>
          <Badge
            asChild
            variant={variant as (typeof variants)[number]}
            shape={shape as (typeof shapes)[number]}
          >
            <a href="#">
              Link
              <ArrowRightIcon />
            </a>
          </Badge>
          <Badge
            asChild
            variant={variant as (typeof variants)[number]}
            shape={shape as (typeof shapes)[number]}
          >
            <button>Button</button>
          </Badge>
          <Badge
            variant={variant as (typeof variants)[number]}
            shape={shape as (typeof shapes)[number]}
            className={showBadge ? "visible" : "invisible"}
          >
            Close
            <BadgeClose onClick={handleCloseBadge} />
          </Badge>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="badge-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="badge-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {variants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="badge-shape">Shape</Label>
          <Select value={shape} onValueChange={setShape}>
            <SelectTrigger id="badge-shape" className="w-full">
              <SelectValue placeholder="Select shape" />
            </SelectTrigger>
            <SelectContent>
              {shapes.map((shape) => (
                <SelectItem key={shape} value={shape}>
                  {shape}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
