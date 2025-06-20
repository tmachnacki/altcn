"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Separator, SeparatorLabel } from "~/components/ui/separator";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

import { Label } from "../ui/label";

const labelVariants = ["ghost", "outline"] as const;

export function SeparatorDemo() {
  const [labelVariant, setLabelVariant] = React.useState("ghost");

  return (
    <>
      <ComponentContainer>
        <div className="grid gap-8">
          <div className="flex flex-col">
            <div className="text-sm font-medium">Tailwind CSS</div>
            <div className="text-sm text-muted-foreground">
              A utility-first CSS framework.
            </div>
            <Separator className="my-3" />
            <div className="flex h-5 items-center gap-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Lorem</div>
            <Separator>
              <SeparatorLabel
                variant={labelVariant as (typeof labelVariants)[number]}
              >
                ipsum
              </SeparatorLabel>
            </Separator>
            <div>Dolor</div>
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="label-variant">Label Variant</Label>
          <Select value={labelVariant} onValueChange={setLabelVariant}>
            <SelectTrigger id="label-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {labelVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
