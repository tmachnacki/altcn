"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { ImageIcon, MusicIcon, PodcastIcon } from "lucide-react";

import { cn } from "~/lib/utils";

import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import {
  TabNav,
  TabNavItem,
  TabNavLink,
  TabNavList,
} from "~/components/ui/tab-nav";
import { tabsListVariants, tabsTriggerVariants } from "~/components/ui/tabs";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type ListVariant = keyof typeof tabsListVariants.variants.variant;
const listVariants = Object.keys(
  tabsListVariants.variants.variant
) as ListVariant[];

type LinkVariant = keyof typeof tabsTriggerVariants.variants.variant;
const linkVariants = Object.keys(
  tabsTriggerVariants.variants.variant
) as LinkVariant[];

const orientations = ["horizontal", "vertical"] as const;

export function TabNavDemo() {
  return (
    <React.Suspense fallback={null}>
      <TabNavWithParams />
    </React.Suspense>
  );
}

function TabNavWithParams() {
  const [listVariant, setListVariant] =
    React.useState<ListVariant>("underlined");
  const [linkVariant, setLinkVariant] =
    React.useState<LinkVariant>("primary-underlined");
  const [orientation, setOrientation] = React.useState("horizontal");
  const [disabled, setDisabled] = React.useState(false);

  const page = useSearchParams().get("page") ?? "music";

  return (
    <>
      <ComponentContainer withBackground={listVariant === "translucent"}>
        <div
          className={cn(
            "relative flex w-full max-w-lg gap-4",
            orientation === "horizontal" ? "flex-col" : "flex-row"
          )}
        >
          <TabNav
            className={cn(orientation === "horizontal" ? "w-full" : "w-fit")}
          >
            <TabNavList
              variants={{ list: listVariant, link: linkVariant }}
              orientation={orientation as "horizontal" | "vertical"}
            >
              <TabNavItem>
                <TabNavLink
                  href="/components/tab-nav?page=music"
                  isActive={page === "music"}
                  disabled={disabled}
                >
                  <MusicIcon />
                  Music
                </TabNavLink>
              </TabNavItem>
              <TabNavItem>
                <TabNavLink
                  href="/components/tab-nav?page=podcasts"
                  isActive={page === "podcasts"}
                  disabled={disabled}
                >
                  <PodcastIcon />
                  Podcasts
                </TabNavLink>
              </TabNavItem>
              <TabNavItem>
                <TabNavLink
                  href="/components/tab-nav?page=photos"
                  isActive={page === "photos"}
                  disabled={disabled}
                >
                  <ImageIcon />
                  Photos
                </TabNavLink>
              </TabNavItem>
            </TabNavList>
          </TabNav>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold capitalize">{page}</h2>
          </div>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="list-variant">List Variant</Label>
          <Select
            value={listVariant}
            onValueChange={(value) => setListVariant(value as ListVariant)}
          >
            <SelectTrigger id="list-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {listVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="link-variant">Link Variant</Label>
          <Select
            value={linkVariant}
            onValueChange={(value) => setLinkVariant(value as LinkVariant)}
          >
            <SelectTrigger id="link-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {linkVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tab-nav-orientation">Orientation</Label>
          <Select value={orientation} onValueChange={setOrientation}>
            <SelectTrigger id="tab-nav-orientation" className="w-full">
              <SelectValue placeholder="Select orientation" />
            </SelectTrigger>
            <SelectContent>
              {orientations.map((orientation) => (
                <SelectItem key={orientation} value={orientation}>
                  {orientation}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="links-disabled"
            checked={disabled}
            onCheckedChange={setDisabled}
          />
          <Label htmlFor="links-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
