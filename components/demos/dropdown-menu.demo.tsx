"use client";

import * as React from "react";
import {
  BadgeCheckIcon,
  BellIcon,
  ChevronDownIcon,
  CreditCardIcon,
  MailIcon,
  SendIcon,
  TrashIcon,
} from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

const itemVariants = [
  "base",
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

const indicatorVariants = [
  "default",
  "primary",
  "secondary",
  "destructive",
  "success",
  "warning",
] as const;

const destructiveItemVariants = [
  "destructive",
  "destructive-accent",
  "destructive-muted",
  "destructive-surface",
  "destructive-faded",
] as const;

const itemWidths = ["default", "full"] as const;
const sides = ["top", "right", "bottom", "left"] as const;
const aligns = ["start", "center", "end"] as const;

export function DropdownMenuDemo() {
  const [variant, setVariant] = React.useState("accent");
  const [indicatorVariant, setIndicatorVariant] = React.useState("default");
  const [destructiveVariant, setDestructiveVariant] =
    React.useState("destructive-muted");
  const [width, setWidth] = React.useState("default");
  const [side, setSide] = React.useState("bottom");
  const [align, setAlign] = React.useState("start");

  const [checked, setChecked] = React.useState(true);
  const [radioSelection, setRadioSelection] = React.useState("one");

  return (
    <>
      <ComponentContainer>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} className="capitalize">
              Open <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            variant={variant as (typeof itemVariants)[number]}
            width={width as (typeof itemWidths)[number]}
            align={align as (typeof aligns)[number]}
            side={side as (typeof sides)[number]}
            indicatorVariant={
              indicatorVariant as (typeof indicatorVariants)[number]
            }
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem>
                <BadgeCheckIcon />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCardIcon />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Team</DropdownMenuLabel>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <MailIcon />
                    Email
                    <DropdownMenuShortcut>⌘+E</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SendIcon />
                    Message
                    <DropdownMenuShortcut>⌘+M</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem align="inset">More</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel align="inset">Checkboxes</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
                onSelect={(e) => e.preventDefault()}
              >
                Checkbox Indicator
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked disabled>
                Disabled
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel align="inset">Radio Group</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={radioSelection}
                onValueChange={setRadioSelection}
              >
                <DropdownMenuRadioItem
                  value="one"
                  onSelect={(e) => e.preventDefault()}
                >
                  Option 1
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="two"
                  onSelect={(e) => e.preventDefault()}
                >
                  Option 2
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="disabled"
                  disabled
                  onSelect={(e) => e.preventDefault()}
                >
                  Disabled
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                variant={
                  destructiveVariant as (typeof destructiveItemVariants)[number]
                }
              >
                <TrashIcon />
                Destructive
                <DropdownMenuShortcut>⌘+D</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem
                variant={
                  destructiveVariant as (typeof destructiveItemVariants)[number]
                }
                disabled
              >
                <TrashIcon />
                Destructive Disabled
                <DropdownMenuShortcut>⌘+D</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="item-variant">Item Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="item-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {itemVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="indicator-variant">Indicator Variant</Label>
          <Select value={indicatorVariant} onValueChange={setIndicatorVariant}>
            <SelectTrigger id="indicator-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {indicatorVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="destructive-item-variant">
            Destructive Item Variant
          </Label>
          <Select
            value={destructiveVariant}
            onValueChange={setDestructiveVariant}
          >
            <SelectTrigger id="destructive-item-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {destructiveItemVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="item-width">Item Width</Label>
          <Select value={width} onValueChange={setWidth}>
            <SelectTrigger id="item-width" className="w-full">
              <SelectValue placeholder="Select width" />
            </SelectTrigger>
            <SelectContent>
              {itemWidths.map((width) => (
                <SelectItem key={width} value={width}>
                  {width}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="side">Side</Label>
          <Select value={side} onValueChange={setSide}>
            <SelectTrigger id="side" className="w-full">
              <SelectValue placeholder="Select side" />
            </SelectTrigger>
            <SelectContent>
              {sides.map((side) => (
                <SelectItem key={side} value={side}>
                  {side}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="align">Align</Label>
          <Select value={align} onValueChange={setAlign}>
            <SelectTrigger id="align" className="w-full">
              <SelectValue placeholder="Select align" />
            </SelectTrigger>
            <SelectContent>
              {aligns.map((align) => (
                <SelectItem key={align} value={align}>
                  {align}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </ComponentPlayground>
    </>
  );
}
