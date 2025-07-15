"use client";

import * as React from "react";

import { Checkbox, checkBoxVariants } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

type Variant = keyof typeof checkBoxVariants.variants.variant;
const variants = Object.keys(checkBoxVariants.variants.variant) as Variant[];

export function CheckboxDemo() {
  const [variant, setVariant] = React.useState("primary");
  const [disabled, setDisabled] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Checkbox
              id="cb-1"
              variant={variant as Variant}
              disabled={disabled}
              aria-invalid={invalid}
            />
            <Label htmlFor="cb-1">Accept terms and conditions</Label>
          </div>
          <div className="group grid grid-cols-[auto_1fr] items-start gap-x-3 gap-y-2">
            <Checkbox
              id="cb-2"
              defaultChecked
              variant={variant as Variant}
              disabled={disabled}
              aria-invalid={invalid}
            />
            <Label htmlFor="cb-2" className="col-start-2 row-start-1">
              Accept terms and conditions
            </Label>
            <p className="col-start-2 row-start-2 text-sm text-muted-foreground group-has-disabled:opacity-50">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="cb-3"
              checked={"indeterminate"}
              variant={variant as Variant}
              disabled={disabled}
              aria-invalid={invalid}
            />
            <Label htmlFor="cb-3">Indeterminate checkbox</Label>
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="checkbox-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="checkbox-variant" className="w-full">
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
        <div className="flex items-center gap-3">
          <Switch
            id="checkbox-invalid"
            checked={invalid}
            onCheckedChange={setInvalid}
          />
          <Label htmlFor="checkbox-invalid">Invalid</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="checkbox-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="checkbox-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
