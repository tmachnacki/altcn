"use client";

import * as React from "react";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

import { sleep } from "~/lib/utils";

import { Badge, BadgeClose, badgeVariants } from "~/components/ui/badge";
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

type Variant = keyof typeof badgeVariants.variants.variant;
const variants = Object.keys(badgeVariants.variants.variant) as Variant[];

type Shape = keyof typeof badgeVariants.variants.shape;
const shapes = Object.keys(badgeVariants.variants.shape) as Shape[];

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
          <Badge variant={variant as Variant} shape={shape as Shape}>
            Badge
          </Badge>
          <Badge variant={variant as Variant} shape={shape as Shape}>
            <CheckIcon />
            Icon
          </Badge>
          <Badge asChild variant={variant as Variant} shape={shape as Shape}>
            <a href="#">
              Link
              <ArrowRightIcon />
            </a>
          </Badge>
          <Badge asChild variant={variant as Variant} shape={shape as Shape}>
            <button>Button</button>
          </Badge>
          <Badge asChild variant={variant as Variant} shape={shape as Shape}>
            <button disabled>Disabled</button>
          </Badge>
          <Badge
            variant={variant as Variant}
            shape={shape as Shape}
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
                <SelectItem key={`badge-${variant}`} value={variant}>
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
                <SelectItem key={`badge-${shape}`} value={shape}>
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
