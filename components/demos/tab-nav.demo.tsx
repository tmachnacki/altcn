"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { BanIcon, ImageIcon, MusicIcon, PodcastIcon } from "lucide-react";

import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
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

  const page = useSearchParams().get("page") ?? "music";

  return (
    <>
      <ComponentContainer>
        <TabNav className="w-full max-w-md">
          <TabNavList
            variants={{ list: listVariant, link: linkVariant }}
            className="grid w-full grid-cols-4"
          >
            <TabNavItem>
              <TabNavLink
                href="/components/tab-nav?page=music"
                isActive={page === "music"}
              >
                <MusicIcon />
                Music
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink
                href="/components/tab-nav?page=podcasts"
                isActive={page === "podcasts"}
              >
                <PodcastIcon />
                Podcasts
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink
                href="/components/tab-nav?page=photos"
                isActive={page === "photos"}
              >
                <ImageIcon />
                Photos
              </TabNavLink>
            </TabNavItem>
            <TabNavItem>
              <TabNavLink href="/components/tab-nav?page=onlyfans" disabled>
                <BanIcon />
                OnlyFans
              </TabNavLink>
            </TabNavItem>
          </TabNavList>
        </TabNav>
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
      </ComponentPlayground>
    </>
  );
}
