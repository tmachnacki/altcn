"use client";

import * as React from "react";
import {
  ClipboardIcon,
  PlusIcon,
  PrinterIcon,
  SaveIcon,
  ShareIcon,
} from "lucide-react";

import { cn } from "~/lib/utils";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  SpeedDial,
  SpeedDialContent,
  SpeedDialItem,
  SpeedDialTrigger,
} from "~/components/ui/speed-dial";
import { BackgroundPattern } from "~/components/background-pattern";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

const contentVariants = ["ghost", "solid", "translucent"] as const;

const sides = ["top", "right", "bottom", "left"] as const;

export function SpeedDialDemo() {
  const [open, setOpen] = React.useState(false);
  const [contentVariant, setContentVariant] = React.useState("ghost");
  const [side, setSide] = React.useState("top");
  const [tooltipSide, setTooltipSide] = React.useState("left");

  return (
    <>
      <ComponentContainer className="p-0">
        <div className="relative flex min-h-96 w-full min-w-0 flex-col items-center justify-center overflow-hidden rounded-s-lg bg-transparent p-4">
          <div className="absolute top-0 left-0 z-0 flex size-full shrink-0 items-center justify-center overflow-hidden">
            <BackgroundPattern className="shrink-0" />
          </div>
          <SpeedDial open={open} onOpenChange={setOpen}>
            <SpeedDialTrigger asChild>
              <Button
                variant="primary"
                size="icon-lg"
                className={cn(
                  "group absolute z-10 size-12 rounded-full shadow-md",
                  {
                    top: "bottom-4 left-1/2 -translate-x-1/2",
                    right: "top-1/2 left-4 -translate-y-1/2",
                    bottom: "top-4 left-1/2 -translate-x-1/2",
                    left: "top-1/2 right-4 -translate-y-1/2",
                  }[side || "top"]
                )}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                <PlusIcon
                  aria-hidden="true"
                  className={`transition-transform group-data-[state=open]:rotate-45`}
                />
              </Button>
            </SpeedDialTrigger>
            <SpeedDialContent
              contentVariant={
                contentVariant as (typeof contentVariants)[number]
              }
              side={side as (typeof sides)[number]}
              tooltipSide={tooltipSide as (typeof sides)[number]}
            >
              <SpeedDialItem label="Copy">
                <ClipboardIcon />
              </SpeedDialItem>
              <SpeedDialItem label="Save">
                <SaveIcon />
              </SpeedDialItem>
              <SpeedDialItem label="Print">
                <PrinterIcon />
              </SpeedDialItem>
              <SpeedDialItem label="Share">
                <ShareIcon />
              </SpeedDialItem>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="content-variant">Content variant</Label>
          <Select value={contentVariant} onValueChange={setContentVariant}>
            <SelectTrigger id="content-variant" className="w-full">
              <SelectValue placeholder="Select content variant" />
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
          <Label htmlFor="content-side">Content Side</Label>
          <Select value={side} onValueChange={setSide}>
            <SelectTrigger id="content-side" className="w-full">
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
          <Label htmlFor="tooltip-side">Tooltip Side</Label>
          <Select value={tooltipSide} onValueChange={setTooltipSide}>
            <SelectTrigger id="tooltip-side" className="w-full">
              <SelectValue placeholder="Select tooltip side" />
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
      </ComponentPlayground>
    </>
  );
}
