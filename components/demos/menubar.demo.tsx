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
} from "@/components/ui/menubar";

export function MenubarDemo() {
  const [defaultChecked, setDefaultChecked] = React.useState(true);
  const [primaryChecked, setPrimaryChecked] = React.useState(true);
  const [secondaryChecked, setSecondaryChecked] = React.useState(true);
  const [destructiveChecked, setDestructiveChecked] = React.useState(true);

  const [radioIndicator, setRadioIndicator] = React.useState("default");

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
    "destructive",
    "destructive-accent",
    "destructive-muted",
    "destructive-surface",
    "destructive-faded",
  ] as const;

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-8">
      {triggerVariants.map((triggerVariant) => {
        const itemsVariant =
          triggerVariant in itemVariants
            ? (triggerVariant as (typeof itemVariants)[number])
            : "accent";

        return (
          <div
            className="flex flex-wrap gap-4"
            key={`menubar-${triggerVariant}`}
          >
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger variant={triggerVariant}>File</MenubarTrigger>
                <MenubarContent variant={itemsVariant}>
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
                <MenubarContent variant={itemsVariant}>
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
                <MenubarContent variant={itemsVariant}>
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
                <MenubarContent variant={itemsVariant}>
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
                <MenubarContent variant={itemsVariant}>
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

            <Menubar>
              <MenubarMenu>
                <MenubarTrigger variant={triggerVariant}>File</MenubarTrigger>
                <MenubarContent variant={itemsVariant} wide>
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
                <MenubarContent variant={itemsVariant} wide>
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
                <MenubarContent variant={itemsVariant} wide>
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
                <MenubarContent variant={itemsVariant} wide>
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
                <MenubarContent variant={itemsVariant} wide>
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
