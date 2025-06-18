"use client";

import * as React from "react";
import {
  BadgeCheckIcon,
  BellIcon,
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

const dropdownMenuVariants = [
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

const checkboxIndicatorVariants = [
  "default",
  "primary",
  "secondary",
  "destructive",
  "success",
  "warning",
] as const;
const radioIndicatorVariants = [
  "default",
  "primary",
  "secondary",
  "destructive",
  "success",
  "warning",
] as const;

const dropdownMenuDestructiveVariants = [
  "destructive",
  "destructive-accent",
  "destructive-muted",
  "destructive-surface",
  "destructive-faded",
] as const;

const dropdownMenuWidths = ["default", "full"] as const;
const dropdownMenuSides = ["top", "right", "bottom", "left"] as const;
const dropdownMenuAligns = ["start", "center", "end"] as const;

export function DropdownMenuDemo() {
  const [variant, setVariant] = React.useState("accent");
  const [checkboxIndicatorVariant, setCheckboxIndicatorVariant] =
    React.useState("default");
  const [radioIndicatorVariant, setRadioIndicatorVariant] =
    React.useState("default");
  const [destructiveVariant, setDestructiveVariant] =
    React.useState("destructive");
  const [width, setWidth] = React.useState("default");
  const [side, setSide] = React.useState("bottom");
  const [align, setAlign] = React.useState("start");

  const [checked, setChecked] = React.useState(true);
  const [radioIndicator, setRadioIndicator] = React.useState("one");

  const variantLabel = variant.replace("-", " ");

  return (
    <>
      <ComponentContainer>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} className="capitalize">
              {variantLabel}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            variant={variant as (typeof dropdownMenuVariants)[number]}
            width={width as (typeof dropdownMenuWidths)[number]}
            align={align as (typeof dropdownMenuAligns)[number]}
            side={side as (typeof dropdownMenuSides)[number]}
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
                  <DropdownMenuItem position="inset">More</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel position="inset">Checkboxes</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
                indicatorVariant={
                  checkboxIndicatorVariant as (typeof checkboxIndicatorVariants)[number]
                }
                onSelect={(e) => e.preventDefault()}
              >
                Default Indicator
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked disabled>
                Disabled
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel position="inset">
                Radio Group
              </DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={radioIndicator}
                onValueChange={setRadioIndicator}
              >
                <DropdownMenuRadioItem
                  value="one"
                  indicatorVariant={
                    radioIndicatorVariant as (typeof radioIndicatorVariants)[number]
                  }
                  onSelect={(e) => e.preventDefault()}
                >
                  Option 1
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="two"
                  indicatorVariant={
                    radioIndicatorVariant as (typeof radioIndicatorVariants)[number]
                  }
                  onSelect={(e) => e.preventDefault()}
                >
                  Option 2
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="disabled"
                  disabled
                  indicatorVariant={
                    radioIndicatorVariant as (typeof radioIndicatorVariants)[number]
                  }
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
                  destructiveVariant as (typeof dropdownMenuDestructiveVariants)[number]
                }
              >
                <TrashIcon />
                Destructive
                <DropdownMenuShortcut>⌘+D</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem
                variant={
                  destructiveVariant as (typeof dropdownMenuDestructiveVariants)[number]
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
          <Label htmlFor="dropdown-menu-variant">Dropdown Menu Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="dropdown-menu-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {dropdownMenuVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="dropdown-menu-checkbox-indicator-variant">
            Checkbox Indicator Variant
          </Label>
          <Select
            value={checkboxIndicatorVariant}
            onValueChange={setCheckboxIndicatorVariant}
          >
            <SelectTrigger
              id="dropdown-menu-checkbox-indicator-variant"
              className="w-full"
            >
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {checkboxIndicatorVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="dropdown-menu-radio-indicator-variant">
            Radio Indicator Variant
          </Label>
          <Select
            value={radioIndicatorVariant}
            onValueChange={setRadioIndicatorVariant}
          >
            <SelectTrigger
              id="dropdown-menu-radio-indicator-variant"
              className="w-full"
            >
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {radioIndicatorVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="dropdown-menu-destructive-variant">
            Destructive Variant
          </Label>
          <Select
            value={destructiveVariant}
            onValueChange={setDestructiveVariant}
          >
            <SelectTrigger
              id="dropdown-menu-destructive-variant"
              className="w-full"
            >
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {dropdownMenuDestructiveVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="dropdown-menu-width">Dropdown Menu Width</Label>
          <Select value={width} onValueChange={setWidth}>
            <SelectTrigger id="dropdown-menu-width" className="w-full">
              <SelectValue placeholder="Select width" />
            </SelectTrigger>
            <SelectContent>
              {dropdownMenuWidths.map((width) => (
                <SelectItem key={width} value={width}>
                  {width}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="dropdown-menu-side">Dropdown Menu Side</Label>
          <Select value={side} onValueChange={setSide}>
            <SelectTrigger id="dropdown-menu-side" className="w-full">
              <SelectValue placeholder="Select side" />
            </SelectTrigger>
            <SelectContent>
              {dropdownMenuSides.map((side) => (
                <SelectItem key={side} value={side}>
                  {side}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="dropdown-menu-align">Dropdown Menu Align</Label>
          <Select value={align} onValueChange={setAlign}>
            <SelectTrigger id="dropdown-menu-align" className="w-full">
              <SelectValue placeholder="Select align" />
            </SelectTrigger>
            <SelectContent>
              {dropdownMenuAligns.map((align) => (
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
