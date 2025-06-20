"use client";

import * as React from "react";

import { Label } from "~/components/ui/label";
import { Progress } from "~/components/ui/progress";
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
  "primary",
  "primary-muted",
  "primary-faded",
  "secondary",
  "secondary-muted",
  "secondary-faded",
] as const;

export function ProgressDemo() {
  const [variant, setVariant] = React.useState("primary");

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 25 : 100));
    }, 500);
    return () => clearInterval(interval);
  }, [variant]);

  return (
    <>
      <ComponentContainer>
        <Progress
          variant={variant as (typeof variants)[number]}
          value={progress}
          className="w-full max-w-sm"
        />
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="progress-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="progress-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {variants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
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
