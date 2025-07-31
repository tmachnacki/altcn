"use client";

import * as React from "react";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ChevronDownIcon,
  DownloadIcon,
  ExternalLinkIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";
import { Switch } from "~/components/ui/switch";
import { toggleVariants } from "~/components/ui/toggle";
import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  toolbarVariants,
} from "~/components/ui/toolbar";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type BarVariant = keyof typeof toolbarVariants.variants.variant;
const barVariants = Object.keys(
  toolbarVariants.variants.variant
) as BarVariant[];

type ToggleItemVariant = keyof typeof toggleVariants.variants.variant;
const toggleItemVariants = Object.keys(
  toggleVariants.variants.variant
) as ToggleItemVariant[];

type Size = keyof typeof toggleVariants.variants.size;
const sizesMap: Record<number, Size> = {
  1: "2xs",
  2: "xs",
  3: "sm",
  4: "md",
  5: "lg",
};

const spacings = ["compact", "split"] as const;

export function ToolbarDemo() {
  const [barVariant, setBarVariant] = React.useState<BarVariant>("solid");
  const [toggleItemVariant, setToggleItemVariant] =
    React.useState<ToggleItemVariant>("primary");
  const [sizeIdx, setSizeIdx] = React.useState(3);
  const [spacing, setSpacing] = React.useState("split");
  const [disabled, setDisabled] = React.useState(false);

  const size = sizesMap[sizeIdx];

  return (
    <>
      <ComponentContainer withBackground={barVariant === "translucent"}>
        <DropdownMenu>
          <Toolbar variant={barVariant} className="w-full">
            <ToolbarToggleGroup
              type="multiple"
              variant={toggleItemVariant}
              size={size}
              spacing={spacing as (typeof spacings)[number]}
            >
              <ToolbarToggleItem aria-label="Toggle bold" value="bold">
                <BoldIcon />
              </ToolbarToggleItem>
              <ToolbarToggleItem
                aria-label="Toggle underline"
                value="underline"
              >
                <UnderlineIcon />
              </ToolbarToggleItem>
              <ToolbarToggleItem aria-label="Toggle italic" value="italic">
                <ItalicIcon />
              </ToolbarToggleItem>
              <ToolbarToggleItem
                aria-label="Toggle strikethrough"
                value="strikethrough"
              >
                <StrikethroughIcon />
              </ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator />
            <ToolbarToggleGroup
              type="single"
              variant={toggleItemVariant}
              size={size}
              spacing={spacing as (typeof spacings)[number]}
            >
              <ToolbarToggleItem aria-label="Toggle align left" value="left">
                <AlignLeftIcon />
              </ToolbarToggleItem>
              <ToolbarToggleItem
                aria-label="Toggle align center"
                value="center"
              >
                <AlignCenterIcon />
              </ToolbarToggleItem>
              <ToolbarToggleItem aria-label="Toggle align right" value="right">
                <AlignRightIcon />
              </ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator />
            <ToolbarLink
              size={size}
              href="#"
              className="text-muted-foreground hover:text-primary"
            >
              Edited 2 hours ago
            </ToolbarLink>
            <DropdownMenuTrigger asChild>
              <ToolbarButton asChild>
                <Button
                  variant={toggleItemVariant}
                  size={size}
                  className="ml-auto"
                >
                  Share
                  <ChevronDownIcon />
                </Button>
              </ToolbarButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <ExternalLinkIcon />
                Copy link
              </DropdownMenuItem>
              <DropdownMenuItem>
                <DownloadIcon />
                Download
              </DropdownMenuItem>
            </DropdownMenuContent>
          </Toolbar>
        </DropdownMenu>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="toolbar-bar-variant">Toolbar Variant</Label>
          <Select
            value={barVariant}
            onValueChange={(value) => setBarVariant(value as BarVariant)}
          >
            <SelectTrigger id="toolbar-bar-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {barVariants.map((barVariant) => (
                <SelectItem key={barVariant} value={barVariant}>
                  {barVariant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="toolbar-toggle-item-variant">Toggle Variant</Label>
          <Select
            value={toggleItemVariant}
            onValueChange={(value) =>
              setToggleItemVariant(value as ToggleItemVariant)
            }
          >
            <SelectTrigger id="toolbar-toggle-item-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {toggleItemVariants.map((toggleItemVariant) => (
                <SelectItem key={toggleItemVariant} value={toggleItemVariant}>
                  {toggleItemVariant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-3">
          <Label id="toggle-size">
            Size:{" "}
            <span className="font-normal text-primary-muted-foreground">
              {size}
            </span>
          </Label>
          <Slider
            aria-labelledby="toggle-size"
            min={1}
            max={Object.keys(sizesMap).length}
            step={1}
            value={[sizeIdx]}
            onValueChange={(value) => setSizeIdx(value[0])}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="toggle-spacing">Spacing</Label>
          <Select value={spacing} onValueChange={setSpacing}>
            <SelectTrigger id="toggle-spacing" className="w-full">
              <SelectValue placeholder="Select a spacing" />
            </SelectTrigger>
            <SelectContent>
              {spacings.map((spacing) => (
                <SelectItem key={spacing} value={spacing}>
                  {spacing}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="toggle-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="toggle-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
