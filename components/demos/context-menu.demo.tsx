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

export function ContextMenuDemo() {
  const [defaultChecked, setDefaultChecked] = React.useState(true);
  const [primaryChecked, setPrimaryChecked] = React.useState(true);
  const [secondaryChecked, setSecondaryChecked] = React.useState(true);

  const [radioIndicator, setRadioIndicator] = React.useState("default");

  const contextMenuDemos = [
    {
      label: "Accent",
      variant: "accent",
      wide: undefined,
    },
    {
      label: "Accent Wide",
      variant: "accent",
      wide: true,
    },
    {
      label: "Surface",
      variant: "surface",
      wide: undefined,
    },
    {
      label: "Surface Wide",
      variant: "surface",
      wide: true,
    },
    {
      label: "Primary",
      variant: "primary",
      wide: undefined,
    },
    {
      label: "Primary Wide",
      variant: "primary",
      wide: true,
    },
    {
      label: "Primary Accent",
      variant: "primary-accent",
      wide: undefined,
    },
    {
      label: "Primary Accent Wide",
      variant: "primary-accent",
      wide: true,
    },
    {
      label: "Primary Muted",
      variant: "primary-muted",
      wide: undefined,
    },
    {
      label: "Primary Muted Wide",
      variant: "primary-muted",
      wide: true,
    },
    {
      label: "Primary Surface",
      variant: "primary-surface",
      wide: undefined,
    },
    {
      label: "Primary Surface Wide",
      variant: "primary-surface",
      wide: true,
    },
    {
      label: "Primary Faded",
      variant: "primary-faded",
      wide: undefined,
    },
    {
      label: "Primary Faded Wide",
      variant: "primary-faded",
      wide: true,
    },
    {
      label: "Secondary",
      variant: "secondary",
      wide: undefined,
    },
    {
      label: "Secondary Wide",
      variant: "secondary",
      wide: true,
    },
    {
      label: "Secondary Accent",
      variant: "secondary-accent",
      wide: undefined,
    },
    {
      label: "Secondary Accent Wide",
      variant: "secondary-accent",
      wide: true,
    },
    {
      label: "Secondary Muted",
      variant: "secondary-muted",
      wide: undefined,
    },
    {
      label: "Secondary Muted Wide",
      variant: "secondary-muted",
      wide: true,
    },
    {
      label: "Secondary Surface",
      variant: "secondary-surface",
      wide: undefined,
    },
    {
      label: "Secondary Surface Wide",
      variant: "secondary-surface",
      wide: true,
    },
    {
      label: "Secondary Faded",
      variant: "secondary-faded",
      wide: undefined,
    },
    {
      label: "Secondary Faded Wide",
      variant: "secondary-faded",
      wide: true,
    },
  ] as const;

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-8">
      <div className="grid grid-cols-2 gap-4">
        {contextMenuDemos.map((demo) => (
          <ContextMenu key={demo.label}>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed bg-faded text-sm">
              {demo.label}
            </ContextMenuTrigger>
            <ContextMenuContent variant={demo.variant} wide={demo.wide}>
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
                    <ContextMenuItem inset>More</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuItem>
                  New Team
                  <ContextMenuShortcut>⌘+T</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuLabel inset>Checkboxes</ContextMenuLabel>
                <ContextMenuCheckboxItem
                  checked={defaultChecked}
                  onCheckedChange={setDefaultChecked}
                >
                  Default Indicator
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={primaryChecked}
                  onCheckedChange={setPrimaryChecked}
                  indicatorVariant="primary"
                >
                  Primary Indicator
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={secondaryChecked}
                  onCheckedChange={setSecondaryChecked}
                  indicatorVariant="secondary"
                >
                  Secondary Indicator
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem checked disabled>
                  Disabled
                </ContextMenuCheckboxItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuLabel inset>Radio Group</ContextMenuLabel>
                <ContextMenuRadioGroup
                  value={radioIndicator}
                  onValueChange={setRadioIndicator}
                >
                  <ContextMenuRadioItem value="default">
                    Default
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem
                    value="primary"
                    indicatorVariant="primary"
                  >
                    Primary
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem
                    value="secondary"
                    indicatorVariant="secondary"
                  >
                    Secondary
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="disabled" disabled>
                    Disabled
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem variant="destructive">
                  <TrashIcon />
                  Destructive
                  <ContextMenuShortcut>⌘+D</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem variant="destructive-accent">
                  <TrashIcon />
                  Destructive Accent
                  <ContextMenuShortcut>⌘+D</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem variant="destructive-muted">
                  <TrashIcon />
                  Destructive Muted
                  <ContextMenuShortcut>⌘+D</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem variant="destructive-surface">
                  <TrashIcon />
                  Destructive Surface
                  <ContextMenuShortcut>⌘+D</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem variant="destructive-faded">
                  <TrashIcon />
                  Destructive Faded
                  <ContextMenuShortcut>⌘+D</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem variant="destructive" disabled>
                  <TrashIcon />
                  Destructive Disabled
                  <ContextMenuShortcut>⌘+D</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        ))}
      </div>
    </div>
  );
}
