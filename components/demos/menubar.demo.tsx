"use client";

import * as React from "react";
import {
  CircleIcon,
  HelpCircleIcon,
  SettingsIcon,
  Trash2Icon,
} from "lucide-react";

import { cn } from "~/lib/utils";

import {
  menuContentVariants,
  menuItemIndicatorVariants,
  menuItemVariants,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import {
  Menubar,
  menubarBarVariants,
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
  menubarTriggerVariants,
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

type BarVariant = keyof typeof menubarBarVariants.variants.variant;
const barVariants = Object.keys(
  menubarBarVariants.variants.variant
) as BarVariant[];

type TriggerVariant = keyof typeof menubarTriggerVariants.variants.variant;
const triggerVariants = Object.keys(
  menubarTriggerVariants.variants.variant
) as TriggerVariant[];

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

export function MenubarDemo() {
  const [barVariant, setBarVariant] = React.useState<BarVariant>("outline");
  const [triggerVariant, setTriggerVariant] =
    React.useState<TriggerVariant>("accent");
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
      <ComponentContainer
        withBackground={true}
        className="flex flex-col items-center justify-start"
      >
        <Menubar
          variants={{
            bar: barVariant,
            trigger: triggerVariant,
            content: contentVariant,
            item: itemVariant,
            indicator: indicatorVariant,
          }}
          width={width as (typeof widths)[number]}
        >
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
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
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
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
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
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
              <MenubarItem align="inset">
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled align="inset">
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem align="inset">Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem align="inset">Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
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
              <MenubarItem align="inset">Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem align="inset">Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>More</MenubarTrigger>
            <MenubarContent>
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
                <MenubarItem variant={destructiveItemVariant}>
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
          <Label htmlFor="menubar-bar-variant">Bar Variant</Label>
          <Select
            value={barVariant}
            onValueChange={(value) => setBarVariant(value as BarVariant)}
          >
            <SelectTrigger id="menubar-bar-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {barVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="menubar-trigger-variant">Trigger Variant</Label>
          <Select
            value={triggerVariant}
            onValueChange={(value) =>
              setTriggerVariant(value as TriggerVariant)
            }
          >
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
          <Label htmlFor="menubar-content-variant">Content Variant</Label>
          <Select
            value={contentVariant}
            onValueChange={(value) =>
              setContentVariant(value as ContentVariant)
            }
          >
            <SelectTrigger id="menubar-content-variant" className="w-full">
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
          <Label htmlFor="menubar-destructive-variant">
            Destructive Item Variant
          </Label>
          <Select
            value={destructiveItemVariant}
            onValueChange={(value) =>
              setDestructiveItemVariant(value as DestructiveItemVariant)
            }
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
          <Label htmlFor="item-width">Item Width</Label>
          <Select
            value={width}
            onValueChange={(value) =>
              setWidth(value as (typeof widths)[number])
            }
          >
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
