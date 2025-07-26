"use client";

import * as React from "react";
import {
  BadgeCheckIcon,
  BellIcon,
  ChevronDownIcon,
  CircleIcon,
  CreditCardIcon,
  MailIcon,
  SendIcon,
  TrashIcon,
} from "lucide-react";

import { cn } from "~/lib/utils";

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

const sides = ["top", "right", "bottom", "left"] as const;
const aligns = ["start", "center", "end"] as const;

export function DropdownMenuDemo() {
  const [contentVariant, setContentVariant] =
    React.useState<ContentVariant>("solid");
  const [itemVariant, setItemVariant] = React.useState<ItemVariant>("accent");
  const [indicatorVariant, setIndicatorVariant] =
    React.useState<IndicatorVariant>("base");
  const [destructiveItemVariant, setDestructiveItemVariant] =
    React.useState<DestructiveItemVariant>("destructive-muted");
  const [width, setWidth] = React.useState("default");

  const [side, setSide] = React.useState("bottom");
  const [align, setAlign] = React.useState("start");

  const [checked, setChecked] = React.useState(true);
  const [radioSelection, setRadioSelection] = React.useState("one");

  return (
    <>
      <ComponentContainer
        withBackground={true}
        className={cn(
          "flex flex-col items-center justify-center",
          side === "bottom" && "justify-start",
          side === "top" && "justify-end"
        )}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} className="capitalize">
              Open <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            variants={{
              content: contentVariant,
              item: itemVariant,
              indicator: indicatorVariant,
            }}
            width={width as (typeof widths)[number]}
            align={align as (typeof aligns)[number]}
            side={side as (typeof sides)[number]}
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
              <DropdownMenuItem variant={destructiveItemVariant}>
                <TrashIcon />
                Destructive
                <DropdownMenuShortcut>⌘+D</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem variant={destructiveItemVariant} disabled>
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
