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

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "~/components/ui/context-menu";
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

export function ContextMenuDemo() {
  const [variant, setVariant] = React.useState("accent");
  const [indicatorVariant, setIndicatorVariant] = React.useState("default");
  const [destructiveVariant, setDestructiveVariant] =
    React.useState("destructive-muted");
  const [width, setWidth] = React.useState("default");

  const [checked, setChecked] = React.useState(true);
  const [radioSelection, setRadioSelection] = React.useState("one");

  return (
    <>
      <ComponentContainer>
        <ContextMenu>
          <ContextMenuTrigger className="grid min-h-48 w-full max-w-xs place-items-center rounded-lg border border-dashed border-border capitalize">
            Right Click
          </ContextMenuTrigger>
          <ContextMenuContent
            variant={variant as (typeof itemVariants)[number]}
            width={width as (typeof itemWidths)[number]}
            indicatorVariant={
              indicatorVariant as (typeof indicatorVariants)[number]
            }
          >
            <ContextMenuGroup>
              <ContextMenuLabel>Account</ContextMenuLabel>
              <ContextMenuItem>
                <BadgeCheckIcon />
                Account
              </ContextMenuItem>
              <ContextMenuItem>
                <CreditCardIcon />
                Billing
              </ContextMenuItem>
              <ContextMenuItem>
                <BellIcon />
                Notifications
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel>Team</ContextMenuLabel>
              <ContextMenuSub>
                <ContextMenuSubTrigger>Invite users</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>
                    <MailIcon />
                    Email
                    <ContextMenuShortcut>⌘+E</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <SendIcon />
                    Message
                    <ContextMenuShortcut>⌘+M</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem align="inset">More</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuItem>
                New Team
                <ContextMenuShortcut>⌘+T</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel align="inset">Checkboxes</ContextMenuLabel>
              <ContextMenuCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
                onSelect={(e) => e.preventDefault()}
              >
                Checkbox Indicator
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem checked disabled>
                Disabled
              </ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel align="inset">Radio Group</ContextMenuLabel>
              <ContextMenuRadioGroup
                value={radioSelection}
                onValueChange={setRadioSelection}
              >
                <ContextMenuRadioItem
                  value="one"
                  onSelect={(e) => e.preventDefault()}
                >
                  Option 1
                </ContextMenuRadioItem>
                <ContextMenuRadioItem
                  value="two"
                  onSelect={(e) => e.preventDefault()}
                >
                  Option 2
                </ContextMenuRadioItem>
                <ContextMenuRadioItem
                  value="disabled"
                  disabled
                  onSelect={(e) => e.preventDefault()}
                >
                  Disabled
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant={
                  destructiveVariant as (typeof destructiveItemVariants)[number]
                }
              >
                <TrashIcon />
                Destructive
                <ContextMenuShortcut>⌘+D</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem
                variant={
                  destructiveVariant as (typeof destructiveItemVariants)[number]
                }
                disabled
              >
                <TrashIcon />
                Destructive Disabled
                <ContextMenuShortcut>⌘+D</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
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
                  <Swatch variant={variant} />
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
      </ComponentPlayground>
    </>
  );
}
