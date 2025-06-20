"use client";

import * as React from "react";
import { BellIcon, MessageCircleIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Notification } from "~/components/ui/notification";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";
import { Swatch } from "~/components/swatch";

const variants = [
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
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
  "success",
  "success-accent",
  "success-muted",
  "success-surface",
  "success-faded",
  "warning",
  "warning-accent",
  "warning-muted",
  "warning-surface",
  "warning-faded",
] as const;

const positions = [
  "top-right",
  "top-left",
  "bottom-right",
  "bottom-left",
] as const;

export function NotificationDemo() {
  const [variant, setVariant] = React.useState("primary");
  const [position, setPosition] = React.useState("top-right");

  const [outlined, setOutlined] = React.useState(false);
  const [ping, setPing] = React.useState(false);

  return (
    <>
      <ComponentContainer>
        <div className="grid gap-8">
          <div className="flex flex-wrap items-center gap-4">
            <Notification
              variant={variant as (typeof variants)[number]}
              ping={ping}
            >
              New
            </Notification>
            <Notification
              variant={variant as (typeof variants)[number]}
              ping={ping}
            >
              7
            </Notification>
            <Notification
              variant={variant as (typeof variants)[number]}
              ping={ping}
            >
              20+
            </Notification>
            <Notification
              variant={variant as (typeof variants)[number]}
              ping={ping}
            >
              <BellIcon />
            </Notification>
            <Notification
              variant={variant as (typeof variants)[number]}
              ping={ping}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <Button variant="accent" size="icon">
                <MessageCircleIcon />
              </Button>
              <Notification
                variant={variant as (typeof variants)[number]}
                position={position as (typeof positions)[number]}
                outlined={outlined}
                ping={ping}
              >
                5
              </Notification>
            </div>
            <div className="relative">
              <Button variant="accent" size="icon">
                <MessageCircleIcon />
              </Button>
              <Notification
                variant={variant as (typeof variants)[number]}
                position={position as (typeof positions)[number]}
                outlined={outlined}
                ping={ping}
              />
            </div>
            <div className="relative">
              <Button variant="accent" size="icon">
                <MessageCircleIcon />
              </Button>
              <Notification
                variant={variant as (typeof variants)[number]}
                position={position as (typeof positions)[number]}
                outlined={outlined}
                ping={ping}
              >
                <BellIcon />
              </Notification>
            </div>
            <div className="relative">
              <Button variant="accent" size="icon">
                <MessageCircleIcon />
              </Button>
              <Notification
                variant={variant as (typeof variants)[number]}
                position={position as (typeof positions)[number]}
                outlined={outlined}
                ping={ping}
              >
                20+
              </Notification>
            </div>
          </div>
        </div>
      </ComponentContainer>

      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="notification-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="notification-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent className="max-h-96">
              {variants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  <Swatch variant={variant} />
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="notification-position">Position</Label>
          <Select value={position} onValueChange={setPosition}>
            <SelectTrigger id="notification-position" className="w-full">
              <SelectValue placeholder="Select position" />
            </SelectTrigger>
            <SelectContent>
              {positions.map((position) => (
                <SelectItem key={position} value={position}>
                  {position}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="notification-outlined"
            checked={outlined}
            onCheckedChange={setOutlined}
          />
          <Label htmlFor="notification-outlined">Outlined</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="notification-ping"
            checked={ping}
            onCheckedChange={setPing}
          />
          <Label htmlFor="notification-ping">Ping</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
