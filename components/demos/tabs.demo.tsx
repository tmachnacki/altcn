"use client";

import * as React from "react";
import { BanIcon, ImageIcon, MusicIcon, PodcastIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

// import { Swatch } from "~/components/swatch";

const tabsListVariants = [
  "outline",
  "muted",
  "faded",
  "underlined",
  "ghost",
] as const;

const tabsTriggerVariants = [
  "default",
  "base",
  "outline",
  "accent",
  "surface",
  "underlined",
  "ghost",
  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "primary-underlined",
  "primary-ghost",
  "primary-tron",
  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "secondary-underlined",
  "secondary-ghost",
  "secondary-tron",
] as const;

export function TabsDemo() {
  const [tabsListVariant, setTabsListVariant] = React.useState("muted");
  const [tabsTriggerVariant, setTabsTriggerVariant] = React.useState("default");

  return (
    <>
      <ComponentContainer>
        <Tabs defaultValue="music" className="w-full max-w-xl">
          <TabsList
            variant={tabsListVariant as (typeof tabsListVariants)[number]}
            className="grid w-full grid-cols-4"
          >
            <TabsTrigger
              value="music"
              variant={
                tabsTriggerVariant as (typeof tabsTriggerVariants)[number]
              }
            >
              <MusicIcon />
              Music
            </TabsTrigger>
            <TabsTrigger
              value="podcasts"
              variant={
                tabsTriggerVariant as (typeof tabsTriggerVariants)[number]
              }
            >
              <PodcastIcon />
              Podcasts
            </TabsTrigger>
            <TabsTrigger
              value="photos"
              variant={
                tabsTriggerVariant as (typeof tabsTriggerVariants)[number]
              }
            >
              <ImageIcon />
              Photos
            </TabsTrigger>
            <TabsTrigger
              value="onlyfans"
              variant={
                tabsTriggerVariant as (typeof tabsTriggerVariants)[number]
              }
              disabled
            >
              <BanIcon />
              OnlyFans
            </TabsTrigger>
          </TabsList>
          <TabsContent value="music">
            <Card>
              <CardHeader>
                <CardTitle>Music</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maxime asperiores possimus quo aspernatur nostrum odio
                  consequuntur facilis aliquam sint at, aut labore quam dolorum
                  minima beatae dolore impedit perspiciatis explicabo.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="podcasts">
            <Card>
              <CardHeader>
                <CardTitle>Podcasts</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maxime asperiores possimus quo aspernatur nostrum odio
                  consequuntur facilis aliquam sint at, aut labore quam dolorum
                  minima beatae dolore impedit perspiciatis explicabo.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="photos">
            <Card>
              <CardHeader>
                <CardTitle>Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maxime asperiores possimus quo aspernatur nostrum odio
                  consequuntur facilis aliquam sint at, aut labore quam dolorum
                  minima beatae dolore impedit perspiciatis explicabo.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="onlyfans">
            <Card>
              <CardHeader>
                <CardTitle>OnlyFans</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maxime asperiores possimus quo aspernatur nostrum odio
                  consequuntur facilis aliquam sint at, aut labore quam dolorum
                  minima beatae dolore impedit perspiciatis explicabo.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="list-variant">List Variant</Label>
          <Select value={tabsListVariant} onValueChange={setTabsListVariant}>
            <SelectTrigger id="list-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {tabsListVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="trigger-variant">Trigger Variant</Label>
          <Select
            value={tabsTriggerVariant}
            onValueChange={setTabsTriggerVariant}
          >
            <SelectTrigger id="trigger-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {tabsTriggerVariants.map((variant) => (
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
