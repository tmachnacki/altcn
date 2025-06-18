"use client";

import * as React from "react";
import { HelpCircleIcon, SettingsIcon, Trash2Icon } from "lucide-react";

import { Label } from "~/components/ui/label";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "~/components/ui/menubar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

const triggerVariants = [
  "base",
  "accent",
  "surface",
  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "primary-tron",
  "primary-ghost",
  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "secondary-tron",
  "secondary-ghost",
] as const;

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

const widths = ["default", "full"] as const;

export function MenubarDemo() {
  const [triggerVariant, setTriggerVariant] = React.useState("accent");
  const [itemVariant, setItemVariant] = React.useState("accent");
  const [indicatorVariant, setIndicatorVariant] = React.useState("default");
  const [destructiveVariant, setDestructiveVariant] =
    React.useState("destructive-muted");
  const [width, setWidth] = React.useState("default");

  const [checked, setChecked] = React.useState(true);
  const [radioSelection, setRadioSelection] = React.useState("one");

  return (
    <>
      <ComponentContainer>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger
              variant={triggerVariant as (typeof triggerVariants)[number]}
            >
              File
            </MenubarTrigger>
            <MenubarContent
              variant={itemVariant as (typeof itemVariants)[number]}
              width={width as (typeof widths)[number]}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
            >
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              variant={triggerVariant as (typeof triggerVariants)[number]}
            >
              Edit
            </MenubarTrigger>
            <MenubarContent
              variant={itemVariant as (typeof itemVariants)[number]}
              width={width as (typeof widths)[number]}
            >
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              variant={triggerVariant as (typeof triggerVariants)[number]}
            >
              View
            </MenubarTrigger>
            <MenubarContent
              variant={itemVariant as (typeof itemVariants)[number]}
              width={width as (typeof widths)[number]}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
            >
              <MenubarCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
                onSelect={(e) => e.preventDefault()}
              >
                Checkbox Indicator
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked disabled>
                Disabled
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem position="inset">
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled position="inset">
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem position="inset">Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem position="inset">Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              variant={triggerVariant as (typeof triggerVariants)[number]}
            >
              Profiles
            </MenubarTrigger>
            <MenubarContent
              variant={itemVariant as (typeof itemVariants)[number]}
              width={width as (typeof widths)[number]}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
            >
              <MenubarRadioGroup
                value={radioSelection}
                onValueChange={setRadioSelection}
              >
                <MenubarRadioItem
                  value="one"
                  onSelect={(e) => e.preventDefault()}
                >
                  Option One
                </MenubarRadioItem>
                <MenubarRadioItem
                  value="two"
                  onSelect={(e) => e.preventDefault()}
                >
                  Option Two
                </MenubarRadioItem>
                <MenubarRadioItem
                  value="three"
                  onSelect={(e) => e.preventDefault()}
                >
                  Option Three
                </MenubarRadioItem>
                <MenubarRadioItem value="disabled" disabled>
                  Disabled
                </MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem position="inset">Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem position="inset">Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              variant={triggerVariant as (typeof triggerVariants)[number]}
            >
              More
            </MenubarTrigger>
            <MenubarContent
              variant={itemVariant as (typeof itemVariants)[number]}
              width={width as (typeof widths)[number]}
              indicatorVariant={
                indicatorVariant as (typeof indicatorVariants)[number]
              }
            >
              <MenubarGroup>
                <MenubarItem>
                  <SettingsIcon />
                  Settings
                </MenubarItem>
                <MenubarItem>
                  <HelpCircleIcon />
                  Help
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem
                  variant={
                    destructiveVariant as (typeof destructiveItemVariants)[number]
                  }
                >
                  <Trash2Icon />
                  Delete
                  <MenubarShortcut>⌘+D</MenubarShortcut>
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="menubar-trigger-variant">Trigger Variant</Label>
          <Select value={triggerVariant} onValueChange={setTriggerVariant}>
            <SelectTrigger id="menubar-trigger-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {triggerVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="menubar-item-variant">Item Variant</Label>
          <Select value={itemVariant} onValueChange={setItemVariant}>
            <SelectTrigger id="menubar-item-variant" className="w-full">
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
          <Label htmlFor="menubar-indicator-variant">Indicator Variant</Label>
          <Select value={indicatorVariant} onValueChange={setIndicatorVariant}>
            <SelectTrigger id="menubar-indicator-variant" className="w-full">
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
          <Label htmlFor="menubar-destructive-variant">
            Destructive Item Variant
          </Label>
          <Select
            value={destructiveVariant}
            onValueChange={setDestructiveVariant}
          >
            <SelectTrigger id="menubar-destructive-variant" className="w-full">
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
          <Label htmlFor="menubar-width">Menubar Item Width</Label>
          <Select value={width} onValueChange={setWidth}>
            <SelectTrigger id="menubar-width" className="w-full">
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
