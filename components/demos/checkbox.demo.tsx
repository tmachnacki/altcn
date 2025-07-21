"use client";

import * as React from "react";

import { Checkbox, checkBoxVariants } from "~/components/ui/checkbox";
import { Description } from "~/components/ui/description";
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

type Variant = keyof typeof checkBoxVariants.variants.variant;
const variants = Object.keys(checkBoxVariants.variants.variant) as Variant[];

export function CheckboxDemo() {
  const [variant, setVariant] = React.useState<Variant>("primary");
  const [disabled, setDisabled] = React.useState(false);
  const [invalid, setInvalid] = React.useState(false);

  const [selected, setSelected] = React.useState<string[]>(["data"]);

  return (
    <>
      <ComponentContainer>
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-3">
            <Checkbox
              id="all"
              name="all"
              variant={variant}
              disabled={disabled}
              aria-invalid={invalid}
              checked={
                selected.length === 2
                  ? true
                  : selected.length > 0
                    ? "indeterminate"
                    : false
              }
              onCheckedChange={(checked) => {
                setSelected(checked ? ["data", "terms"] : []);
              }}
            />
            <Label htmlFor="all">Select All</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="data"
              name="data"
              value="data"
              variant={variant}
              disabled={disabled}
              aria-invalid={invalid}
              checked={selected.includes("data")}
              onCheckedChange={(checked) => {
                setSelected((prev) =>
                  checked
                    ? [...prev, "data"]
                    : prev.filter((value) => value !== "data")
                );
              }}
            />
            <Label htmlFor="data">Sell Your Data</Label>
          </div>
          <div className="group grid grid-cols-[auto_1fr] items-start gap-x-3 gap-y-2">
            <Checkbox
              id="terms"
              name="terms"
              value="terms"
              variant={variant}
              disabled={disabled}
              aria-invalid={invalid}
              checked={selected.includes("terms")}
              onCheckedChange={(checked) => {
                setSelected((prev) =>
                  checked
                    ? [...prev, "terms"]
                    : prev.filter((value) => value !== "terms")
                );
              }}
            />
            <Label htmlFor="terms" className="col-start-2 row-start-1">
              Accept terms and conditions
            </Label>
            <Description className="col-start-2 row-start-2 group-has-disabled:opacity-50">
              By clicking this checkbox, you agree to the terms and conditions.
            </Description>
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="checkbox-variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => setVariant(value as Variant)}
          >
            <SelectTrigger id="checkbox-variant" className="w-full">
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
