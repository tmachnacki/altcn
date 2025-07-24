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

type Variant = keyof typeof badgeVariants.variants.variant;
const variants = Object.keys(badgeVariants.variants.variant) as Variant[];

type Shape = keyof typeof badgeVariants.variants.shape;
const shapes = Object.keys(badgeVariants.variants.shape) as Shape[];

export function BadgeDemo() {
  const [variant, setVariant] = React.useState<Variant>("outline");
  const [shape, setShape] = React.useState<Shape>("box");
  const [showBadge, setShowBadge] = React.useState(true);

  async function onClose() {
    setShowBadge(false);
    await sleep(2000);
    setShowBadge(true);
  }

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-wrap gap-2">
          <Badge variant={variant} shape={shape}>
            Badge
          </Badge>
          <Badge variant={variant} shape={shape}>
            <CheckIcon />
            Icon
          </Badge>
          <Badge asChild variant={variant} shape={shape}>
            <a href="#">
              Link
              <ArrowRightIcon />
            </a>
          </Badge>
          <Badge asChild variant={variant} shape={shape}>
            <button>Button</button>
          </Badge>
          <Badge asChild variant={variant} shape={shape}>
            <button disabled>Disabled</button>
          </Badge>
          <Badge
            variant={variant}
            shape={shape}
            className={showBadge ? "visible" : "invisible"}
          >
            Close
            <BadgeClose onClick={onClose} />
          </Badge>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="badge-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="badge-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {variants.map((variant) => (
                <SelectItem key={`badge-${variant}`} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="badge-shape">Shape</Label>
          <Select
            value={shape}
            onValueChange={(value) => setShape(value as Shape)}
          >
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
