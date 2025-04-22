"use client";

import * as React from "react";
import { HelpCircleIcon, SettingsIcon, Trash2Icon } from "lucide-react";

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

export function MenubarDemo() {
  const [defaultChecked, setDefaultChecked] = React.useState(true);
  const [primaryChecked, setPrimaryChecked] = React.useState(true);
  const [secondaryChecked, setSecondaryChecked] = React.useState(true);
  const [destructiveChecked, setDestructiveChecked] = React.useState(true);

  const [radioIndicator, setRadioIndicator] = React.useState("default");

  const menubarDemos = [
    {
      triggerVariant: "base",
      itemVariant: "base",
      wide: undefined,
    },
    {
      triggerVariant: "base",
      itemVariant: "base",
      wide: true,
    },
    {
      triggerVariant: "accent",
      itemVariant: "accent",
      wide: undefined,
    },
    {
      triggerVariant: "accent",
      itemVariant: "accent",
      wide: true,
    },
    {
      triggerVariant: "surface",
      itemVariant: "surface",
      wide: undefined,
    },
    {
      triggerVariant: "surface",
      itemVariant: "surface",
      wide: true,
    },
    {
      triggerVariant: "primary",
      itemVariant: "primary",
      wide: undefined,
    },
    {
      triggerVariant: "primary",
      itemVariant: "primary",
      wide: true,
    },
    {
      triggerVariant: "primary-accent",
      itemVariant: "primary-accent",
      wide: undefined,
    },
    {
      triggerVariant: "primary-accent",
      itemVariant: "primary-accent",
      wide: true,
    },
    {
      triggerVariant: "primary-muted",
      itemVariant: "primary-muted",
      wide: undefined,
    },
    {
      triggerVariant: "primary-muted",
      itemVariant: "primary-muted",
      wide: true,
    },
    {
      triggerVariant: "primary-surface",
      itemVariant: "primary-surface",
      wide: undefined,
    },
    {
      triggerVariant: "primary-surface",
      itemVariant: "primary-surface",
      wide: true,
    },
    {
      triggerVariant: "primary-faded",
      itemVariant: "primary-faded",
      wide: undefined,
    },
    {
      triggerVariant: "primary-faded",
      itemVariant: "primary-faded",
      wide: true,
    },
    {
      triggerVariant: "primary-tron",
      itemVariant: "primary-faded",
      wide: undefined,
    },
    {
      triggerVariant: "primary-tron",
      itemVariant: "primary-faded",
      wide: true,
    },
    {
      triggerVariant: "primary-ghost",
      itemVariant: "primary-faded",
      wide: undefined,
    },
    {
      triggerVariant: "primary-ghost",
      itemVariant: "primary-faded",
      wide: true,
    },
    {
      triggerVariant: "secondary",
      itemVariant: "secondary",
      wide: undefined,
    },
    {
      triggerVariant: "secondary",
      itemVariant: "secondary",
      wide: true,
    },
    {
      triggerVariant: "secondary-accent",
      itemVariant: "secondary-accent",
      wide: undefined,
    },
    {
      triggerVariant: "secondary-accent",
      itemVariant: "secondary-accent",
      wide: true,
    },
    {
      triggerVariant: "secondary-muted",
      itemVariant: "secondary-muted",
      wide: undefined,
    },
    {
      triggerVariant: "secondary-muted",
      itemVariant: "secondary-muted",
      wide: true,
    },
    {
      triggerVariant: "secondary-surface",
      itemVariant: "secondary-surface",
      wide: undefined,
    },
    {
      triggerVariant: "secondary-surface",
      itemVariant: "secondary-surface",
      wide: true,
    },
    {
      triggerVariant: "secondary-faded",
      itemVariant: "secondary-faded",
      wide: undefined,
    },
    {
      triggerVariant: "secondary-faded",
      itemVariant: "secondary-faded",
      wide: true,
    },
    {
      triggerVariant: "secondary-tron",
      itemVariant: "secondary-faded",
      wide: undefined,
    },
    {
      triggerVariant: "secondary-tron",
      itemVariant: "secondary-faded",
      wide: true,
    },
    {
      triggerVariant: "secondary-ghost",
      itemVariant: "secondary-faded",
      wide: undefined,
    },
    {
      triggerVariant: "secondary-ghost",
      itemVariant: "secondary-faded",
      wide: true,
    },
  ] as const;

  return (
    <div className="grid grid-cols-2 gap-8">
      {menubarDemos.map(({ triggerVariant, itemVariant, wide }) => {
        return (
          <div
            className="flex flex-wrap gap-4"
            key={
              wide
                ? `menubar-${triggerVariant}-wide`
                : `menubar-${triggerVariant}`
            }
          >
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger variant={triggerVariant}>File</MenubarTrigger>
                <MenubarContent variant={itemVariant} wide={wide}>
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
                <MenubarTrigger variant={triggerVariant}>Edit</MenubarTrigger>
                <MenubarContent variant={itemVariant} wide={wide}>
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
                <MenubarTrigger variant={triggerVariant}>View</MenubarTrigger>
                <MenubarContent variant={itemVariant} wide={wide}>
                  <MenubarCheckboxItem
                    checked={defaultChecked}
                    onCheckedChange={setDefaultChecked}
                  >
                    Default Indicator
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={primaryChecked}
                    onCheckedChange={setPrimaryChecked}
                    indicatorVariant="primary"
                  >
                    Primary Indicator
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={secondaryChecked}
                    onCheckedChange={setSecondaryChecked}
                    indicatorVariant="secondary"
                  >
                    Secondary Indicator
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={destructiveChecked}
                    onCheckedChange={setDestructiveChecked}
                    indicatorVariant="destructive"
                  >
                    Destructive Indicator
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked disabled>
                    Disabled
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem inset>
                    Reload <MenubarShortcut>⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled inset>
                    Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger variant={triggerVariant}>
                  Profiles
                </MenubarTrigger>
                <MenubarContent variant={itemVariant} wide={wide}>
                  <MenubarRadioGroup
                    value={radioIndicator}
                    onValueChange={setRadioIndicator}
                  >
                    <MenubarRadioItem value="default">Default</MenubarRadioItem>
                    <MenubarRadioItem
                      value="primary"
                      indicatorVariant="primary"
                    >
                      Primary
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="secondary"
                      indicatorVariant="secondary"
                    >
                      Secondary
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="destructive"
                      indicatorVariant="destructive"
                    >
                      Destructive
                    </MenubarRadioItem>
                    <MenubarRadioItem value="disabled" disabled>
                      Disabled
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem inset>Edit...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger variant={triggerVariant}>More</MenubarTrigger>
                <MenubarContent variant={itemVariant} wide={wide}>
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
                    <MenubarItem variant="destructive">
                      <Trash2Icon />
                      Delete
                      <MenubarShortcut>⌘+D</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem variant="destructive-accent">
                      <Trash2Icon />
                      Delete
                      <MenubarShortcut>⌘+D</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem variant="destructive-muted">
                      <Trash2Icon />
                      Delete
                      <MenubarShortcut>⌘+D</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem variant="destructive-surface">
                      <Trash2Icon />
                      Delete
                      <MenubarShortcut>⌘+D</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem variant="destructive-faded">
                      <Trash2Icon />
                      Delete
                      <MenubarShortcut>⌘+D</MenubarShortcut>
                    </MenubarItem>
                  </MenubarGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        );
      })}
    </div>
  );
}
