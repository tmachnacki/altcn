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
const contextMenuWidths = ["default", "full"] as const;

export function ContextMenuDemo() {
  const [variant, setVariant] = React.useState("accent");
  const [width, setWidth] = React.useState("default");

  const [defaultChecked, setDefaultChecked] = React.useState(true);
  const [primaryChecked, setPrimaryChecked] = React.useState(true);
  const [secondaryChecked, setSecondaryChecked] = React.useState(true);
  const [destructiveChecked, setDestructiveChecked] = React.useState(true);
  const [successChecked, setSuccessChecked] = React.useState(true);
  const [warningChecked, setWarningChecked] = React.useState(true);
  const [radioIndicator, setRadioIndicator] = React.useState("default");

  const variantLabel = variant.replace("-", " ");

  return (
    <>
      <ComponentContainer>
        <ContextMenu>
          <ContextMenuTrigger className="grid min-h-32 w-full max-w-xs place-items-center rounded-md border border-dashed border-border capitalize">
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
              <ContextMenuCheckboxItem
                checked={destructiveChecked}
                onCheckedChange={setDestructiveChecked}
                indicatorVariant="destructive"
              >
                Destructive Indicator
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={successChecked}
                onCheckedChange={setSuccessChecked}
                indicatorVariant="success"
              >
                Success Indicator
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={warningChecked}
                onCheckedChange={setWarningChecked}
                indicatorVariant="warning"
              >
                Warning Indicator
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
                <ContextMenuRadioItem
                  value="destructive"
                  indicatorVariant="destructive"
                >
                  Destructive
                </ContextMenuRadioItem>
                <ContextMenuRadioItem
                  value="success"
                  indicatorVariant="success"
                >
                  Success
                </ContextMenuRadioItem>
                <ContextMenuRadioItem
                  value="warning"
                  indicatorVariant="warning"
                >
                  Warning
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
