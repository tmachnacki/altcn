"use client";

import * as React from "react";
import {
  BadgeCheckIcon,
  BellIcon,
  CircleIcon,
  CreditCardIcon,
  MailIcon,
  SendIcon,
  TrashIcon,
} from "lucide-react";

import { cn } from "~/lib/utils";

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
import {
  menuContentVariants,
  menuItemIndicatorVariants,
  menuItemVariants,
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

type ContentVariant = keyof typeof menuContentVariants.variants.variant;
const contentVariants = Object.keys(
  menuContentVariants.variants.variant
) as ContentVariant[];

type ItemVariant = keyof typeof menuItemVariants.variants.variant;
const itemVariants = Object.keys(menuItemVariants.variants.variant).filter(
  (variant) => !variant.includes("destructive")
) as ItemVariant[];

type IndicatorVariant = keyof typeof menuItemIndicatorVariants.variants.variant;
const indicatorVariants = Object.keys(
  menuItemIndicatorVariants.variants.variant
) as IndicatorVariant[];

type DestructiveItemVariant = keyof typeof menuItemVariants.variants.variant;
const destructiveItemVariants = Object.keys(
  menuItemVariants.variants.variant
).filter((variant) =>
  variant.includes("destructive")
) as DestructiveItemVariant[];

const widths = ["default", "full"] as const;

export function ContextMenuDemo() {
  const [contentVariant, setContentVariant] =
    React.useState<ContentVariant>("solid");
  const [itemVariant, setItemVariant] = React.useState<ItemVariant>("accent");
  const [indicatorVariant, setIndicatorVariant] =
    React.useState<IndicatorVariant>("base");
  const [destructiveItemVariant, setDestructiveItemVariant] =
    React.useState<DestructiveItemVariant>("destructive-muted");
  const [width, setWidth] = React.useState("default");

  const [checked, setChecked] = React.useState(true);
  const [radioSelection, setRadioSelection] = React.useState("one");

  return (
    <>
      <ComponentContainer withBackground={true}>
        <ContextMenu>
          <ContextMenuTrigger className="grid min-h-48 w-full max-w-xs place-items-center rounded-lg border border-dashed border-border bg-faded text-accent-foreground capitalize backdrop-blur-md">
            Right Click
          </ContextMenuTrigger>
          <ContextMenuContent
            variants={{
              content: contentVariant,
              item: itemVariant,
              indicator: indicatorVariant,
            }}
            width={width as (typeof widths)[number]}
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
              <ContextMenuItem variant={destructiveItemVariant}>
                <TrashIcon />
                Destructive
                <ContextMenuShortcut>⌘+D</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem variant={destructiveItemVariant} disabled>
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
          <Label htmlFor="content-variant">Content Variant</Label>
          <Select
            value={contentVariant}
            onValueChange={(value) =>
              setContentVariant(value as ContentVariant)
            }
          >
            <SelectTrigger id="content-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {contentVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="item-variant">Item Variant</Label>
          <Select
            value={itemVariant}
            onValueChange={(value) => setItemVariant(value as ItemVariant)}
          >
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
          <Select
            value={indicatorVariant}
            onValueChange={(value) =>
              setIndicatorVariant(value as IndicatorVariant)
            }
          >
            <SelectTrigger id="indicator-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {indicatorVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <span
                    className={cn(
                      menuItemIndicatorVariants({ variant }),
                      "relative inline-flex size-2 items-center justify-center"
                    )}
                  >
                    <CircleIcon className="size-2 fill-current text-current" />
                  </span>
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
            value={destructiveItemVariant}
            onValueChange={(value) =>
              setDestructiveItemVariant(value as DestructiveItemVariant)
            }
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
              {widths.map((width) => (
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
