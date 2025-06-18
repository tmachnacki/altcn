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

const contextMenuVariants = [
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

const contextMenuDestructiveVariants = [
  "destructive",
  "destructive-accent",
  "destructive-muted",
  "destructive-surface",
  "destructive-faded",
] as const;

const contextMenuWidths = ["default", "full"] as const;

export function ContextMenuDemo() {
  const [variant, setVariant] = React.useState("accent");
  const [checkboxIndicatorVariant, setCheckboxIndicatorVariant] =
    React.useState("default");
  const [radioIndicatorVariant, setRadioIndicatorVariant] =
    React.useState("default");
  const [destructiveVariant, setDestructiveVariant] =
    React.useState("destructive");
  const [width, setWidth] = React.useState("default");

  const [checked, setChecked] = React.useState(true);
  const [radioIndicator, setRadioIndicator] = React.useState("one");

  const variantLabel = variant.replace("-", " ");

  return (
    <>
      <ComponentContainer>
        <ContextMenu>
          <ContextMenuTrigger className="grid min-h-48 w-full max-w-xs place-items-center rounded-lg border border-dashed border-border capitalize">
            {variantLabel}
          </ContextMenuTrigger>
          <ContextMenuContent
            variant={variant as (typeof contextMenuVariants)[number]}
            width={width as (typeof contextMenuWidths)[number]}
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
                  <ContextMenuItem position="inset">More</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuItem>
                New Team
                <ContextMenuShortcut>⌘+T</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel position="inset">Checkboxes</ContextMenuLabel>
              <ContextMenuCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
                indicatorVariant={
                  checkboxIndicatorVariant as (typeof checkboxIndicatorVariants)[number]
                }
                onSelect={(e) => e.preventDefault()}
              >
                Default Indicator
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem checked disabled>
                Disabled
              </ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel position="inset">Radio Group</ContextMenuLabel>
              <ContextMenuRadioGroup
                value={radioIndicator}
                onValueChange={setRadioIndicator}
              >
                <ContextMenuRadioItem
                  value="one"
                  indicatorVariant={
                    radioIndicatorVariant as (typeof radioIndicatorVariants)[number]
                  }
                  onSelect={(e) => e.preventDefault()}
                >
                  Option 1
                </ContextMenuRadioItem>
                <ContextMenuRadioItem
                  value="two"
                  indicatorVariant={
                    radioIndicatorVariant as (typeof radioIndicatorVariants)[number]
                  }
                  onSelect={(e) => e.preventDefault()}
                >
                  Option 2
                </ContextMenuRadioItem>
                <ContextMenuRadioItem
                  value="disabled"
                  disabled
                  indicatorVariant={
                    radioIndicatorVariant as (typeof radioIndicatorVariants)[number]
                  }
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
                  destructiveVariant as (typeof contextMenuDestructiveVariants)[number]
                }
              >
                <TrashIcon />
                Destructive
                <ContextMenuShortcut>⌘+D</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem
                variant={
                  destructiveVariant as (typeof contextMenuDestructiveVariants)[number]
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
          <Label htmlFor="context-menu-variant">Context Menu Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="context-menu-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {contextMenuVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="context-menu-checkbox-indicator-variant">
            Checkbox Indicator Variant
          </Label>
          <Select
            value={checkboxIndicatorVariant}
            onValueChange={setCheckboxIndicatorVariant}
          >
            <SelectTrigger
              id="context-menu-checkbox-indicator-variant"
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
          <Label htmlFor="context-menu-radio-indicator-variant">
            Radio Indicator Variant
          </Label>
          <Select
            value={radioIndicatorVariant}
            onValueChange={setRadioIndicatorVariant}
          >
            <SelectTrigger
              id="context-menu-radio-indicator-variant"
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
          <Label htmlFor="context-menu-destructive-variant">
            Destructive Variant
          </Label>
          <Select
            value={destructiveVariant}
            onValueChange={setDestructiveVariant}
          >
            <SelectTrigger
              id="context-menu-destructive-variant"
              className="w-full"
            >
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {contextMenuDestructiveVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="context-menu-width">Context Menu Width</Label>
          <Select value={width} onValueChange={setWidth}>
            <SelectTrigger id="context-menu-width" className="w-full">
              <SelectValue placeholder="Select width" />
            </SelectTrigger>
            <SelectContent>
              {contextMenuWidths.map((width) => (
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
