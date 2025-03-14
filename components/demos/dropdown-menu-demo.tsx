"use client";

import * as React from "react";
import {
  BadgeCheckIcon,
  BellIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  LogOutIcon,
  MoreHorizontalIcon,
  PencilIcon,
  ShareIcon,
  SparklesIcon,
  TrashIcon,
  CircleEllipsisIcon,
  MailIcon,
  SendIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  menuItemVariants,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VariantProps } from "class-variance-authority";

type TDropdownMenuDemo = {
  label: string;
  variant: VariantProps<typeof menuItemVariants>["variant"];
  wide?: boolean;
};

const dropdownMenuDemos: TDropdownMenuDemo[] = [
  {
    label: "Accent",
    variant: "accent",
  },
  {
    label: "Accent Wide",
    variant: "accent",
    wide: true,
  },
  {
    label: "Surface",
    variant: "surface",
  },
  {
    label: "Surface Wide",
    variant: "surface",
    wide: true,
  },
  {
    label: "Primary",
    variant: "primary",
  },
  {
    label: "Primary Wide",
    variant: "primary",
    wide: true,
  },
  {
    label: "Primary Accent",
    variant: "primary-accent",
  },
  {
    label: "Primary Accent Wide",
    variant: "primary-accent",
    wide: true,
  },
  {
    label: "Primary Muted",
    variant: "primary-muted",
  },
  {
    label: "Primary Muted Wide",
    variant: "primary-muted",
    wide: true,
  },
  {
    label: "Primary Surface",
    variant: "primary-surface",
  },
  {
    label: "Primary Surface Wide",
    variant: "primary-surface",
    wide: true,
  },
  {
    label: "Primary Faded",
    variant: "primary-faded",
  },
  {
    label: "Primary Faded Wide",
    variant: "primary-faded",
    wide: true,
  },
  {
    label: "Secondary",
    variant: "secondary",
  },
  {
    label: "Secondary Wide",
    variant: "secondary",
    wide: true,
  },
  {
    label: "Secondary Accent",
    variant: "secondary-accent",
  },
  {
    label: "Secondary Accent Wide",
    variant: "secondary-accent",
    wide: true,
  },
  {
    label: "Secondary Muted",
    variant: "secondary-muted",
  },
  {
    label: "Secondary Muted Wide",
    variant: "secondary-muted",
    wide: true,
  },
  {
    label: "Secondary Surface",
    variant: "secondary-surface",
  },
  {
    label: "Secondary Surface Wide",
    variant: "secondary-surface",
    wide: true,
  },
  {
    label: "Secondary Faded",
    variant: "secondary-faded",
  },
  {
    label: "Secondary Faded Wide",
    variant: "secondary-faded",
    wide: true,
  },
];

export function DropdownMenuDemo() {
  const [defaultChecked, setDefaultChecked] = React.useState(true);
  const [primaryChecked, setPrimaryChecked] = React.useState(true);
  const [secondaryChecked, setSecondaryChecked] = React.useState(true);
  const [disabledChecked, setDisabledChecked] = React.useState(true);

  const [radioIndicator, setRadioIndicator] = React.useState("default");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-4">
        {dropdownMenuDemos.map((demo) => (
          <DropdownMenu key={demo.label}>
            <DropdownMenuTrigger asChild>
              <Button variant={demo.variant}>{demo.label}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-56"
              variant={demo.variant}
              wide={demo.wide}
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
                  <DropdownMenuPortal>
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
                      <DropdownMenuItem>
                        <CircleEllipsisIcon />
                        More
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuLabel inset>Checkboxes</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                  checked={defaultChecked}
                  onCheckedChange={setDefaultChecked}
                >
                  Default Indicator
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={primaryChecked}
                  onCheckedChange={setPrimaryChecked}
                  indicatorVariant="primary"
                >
                  Primary Indicator
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={secondaryChecked}
                  onCheckedChange={setSecondaryChecked}
                  indicatorVariant="secondary"
                >
                  Secondary Indicator
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={disabledChecked}
                  onCheckedChange={setDisabledChecked}
                  disabled
                >
                  Disabled
                </DropdownMenuCheckboxItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuLabel inset>Radio Group</DropdownMenuLabel>
                <DropdownMenuRadioGroup
                  value={radioIndicator}
                  onValueChange={setRadioIndicator}
                >
                  <DropdownMenuRadioItem value="default">
                    Default
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="primary"
                    indicatorVariant="primary"
                  >
                    Primary
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="secondary"
                    indicatorVariant="secondary"
                  >
                    Secondary
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="disabled" disabled>
                    Disabled
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <TrashIcon />
                  Destructive
                  <DropdownMenuShortcut>⌘+D</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive-accent">
                  <TrashIcon />
                  Destructive Accent
                  <DropdownMenuShortcut>⌘+D</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive-muted">
                  <TrashIcon />
                  Destructive Muted
                  <DropdownMenuShortcut>⌘+D</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive-surface">
                  <TrashIcon />
                  Destructive Surface
                  <DropdownMenuShortcut>⌘+D</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive-faded">
                  <TrashIcon />
                  Destructive Faded
                  <DropdownMenuShortcut>⌘+D</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive" disabled>
                  <TrashIcon />
                  Destructive Disabled
                  <DropdownMenuShortcut>⌘+D</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenuSimple />
        <DropdownMenuWithAvatar />
        <DropdownMenuAvatarOnly />
        <DropdownMenuIconColor />
      </div>
    </div>
  );
}

function DropdownMenuSimple() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem wide>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DropdownMenuWithAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-12 justify-start px-2 md:max-w-[200px]"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">shadcn</span>
            <span className="truncate text-xs text-muted-foreground">
              shadcn@example.com
            </span>
          </div>
          <ChevronsUpDownIcon className="ml-auto text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
        align="start"
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">shadcn</span>
              <span className="truncate text-xs text-muted-foreground">
                shadcn@example.com
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <SparklesIcon />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
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
        <DropdownMenuItem>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DropdownMenuAvatarOnly() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="size-8 rounded-full border-none p-0"
        >
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="leerob" />
            <AvatarFallback className="rounded-lg">LR</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
        align="start"
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="leerob" />
              <AvatarFallback className="rounded-lg">LR</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">leerob</span>
              <span className="truncate text-xs text-muted-foreground">
                leerob@example.com
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <SparklesIcon />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
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
        <DropdownMenuItem>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DropdownMenuIconColor() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontalIcon />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuGroup className="*:data-[slot=dropdown-menu-item]:[&>svg]:text-muted-foreground">
          <DropdownMenuItem>
            <PencilIcon />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShareIcon />
            Share
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
