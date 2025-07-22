"use client";

import * as React from "react";

import { Label } from "~/components/ui/label";
import { Progress, progressVariants } from "~/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type Variant = keyof typeof progressVariants.variants.variant;
const variants = Object.keys(progressVariants.variants.variant) as Variant[];

export function ProgressDemo() {
  const [variant, setVariant] = React.useState<Variant>("primary");

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
          variant={variant}
          value={progress}
          className="w-full max-w-sm"
        />
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="progress-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="progress-variant" className="w-full">
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
      </ComponentPlayground>
    </>
  );
}
