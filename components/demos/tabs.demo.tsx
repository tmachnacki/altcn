"use client";

import * as React from "react";
import { ImageIcon, MusicIcon, PodcastIcon } from "lucide-react";

import { Card, CardBody, CardHeader, CardTitle } from "~/components/ui/card";
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
  Tabs,
  TabsContent,
  TabsList,
  tabsListVariants,
  TabsTrigger,
  tabsTriggerVariants,
} from "~/components/ui/tabs";
import { BackgroundPattern } from "~/components/background-pattern";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

type ListVariant = keyof typeof tabsListVariants.variants.variant;
const listVariants = Object.keys(
  tabsListVariants.variants.variant
) as ListVariant[];

type TriggerVariant = keyof typeof tabsTriggerVariants.variants.variant;
const triggerVariants = Object.keys(
  tabsTriggerVariants.variants.variant
) as TriggerVariant[];

const orientations = ["horizontal", "vertical"] as const;

export function TabsDemo() {
  const [listVariant, setListVariant] = React.useState<ListVariant>("muted");
  const [triggerVariant, setTriggerVariant] =
    React.useState<TriggerVariant>("default");
  const [orientation, setOrientation] = React.useState("horizontal");
  const [disabled, setDisabled] = React.useState(false);

  return (
    <>
      <ComponentContainer className="overflow-hidden rounded-t-lg p-0 md:rounded-l-lg md:rounded-r-none">
        <div className="relative flex h-full min-h-96 w-full min-w-0 flex-col items-center justify-center bg-center p-(--demo-gutter)">
          {listVariant === "translucent" && <BackgroundPattern />}
          <Tabs
            defaultValue="music"
            className="relative w-full max-w-lg"
            orientation={orientation as (typeof orientations)[number]}
          >
            <TabsList
              variants={{
                list: listVariant,
                trigger: triggerVariant,
              }}
            >
              <TabsTrigger value="music" disabled={disabled}>
                <MusicIcon />
                Music
              </TabsTrigger>
              <TabsTrigger value="podcasts" disabled={disabled}>
                <PodcastIcon />
                Podcasts
              </TabsTrigger>
              <TabsTrigger
                value="photos"
                disabled={disabled}
                className="hidden sm:inline-flex"
              >
                <ImageIcon />
                Photos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="music">
              <Card>
                <CardHeader>
                  <CardTitle>Music</CardTitle>
                </CardHeader>
                <CardBody>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime asperiores possimus quo aspernatur nostrum odio
                    consequuntur facilis aliquam sint at, aut labore quam
                    dolorum minima beatae dolore impedit perspiciatis explicabo.
                  </p>
                </CardBody>
              </Card>
            </TabsContent>
            <TabsContent value="podcasts">
              <Card>
                <CardHeader>
                  <CardTitle>Podcasts</CardTitle>
                </CardHeader>
                <CardBody>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime asperiores possimus quo aspernatur nostrum odio
                    consequuntur facilis aliquam sint at, aut labore quam
                    dolorum minima beatae dolore impedit perspiciatis explicabo.
                  </p>
                </CardBody>
              </Card>
            </TabsContent>
            <TabsContent value="photos" className="hidden sm:block">
              <Card>
                <CardHeader>
                  <CardTitle>Photos</CardTitle>
                </CardHeader>
                <CardBody>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime asperiores possimus quo aspernatur nostrum odio
                    consequuntur facilis aliquam sint at, aut labore quam
                    dolorum minima beatae dolore impedit perspiciatis explicabo.
                  </p>
                </CardBody>
              </Card>
            </TabsContent>
          </Tabs>
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
          <Label htmlFor="trigger-variant">Trigger Variant</Label>
          <Select
            value={triggerVariant}
            onValueChange={(value) =>
              setTriggerVariant(value as TriggerVariant)
            }
          >
            <SelectTrigger id="trigger-variant" className="w-full">
              <SelectValue placeholder="Select a variant" />
            </SelectTrigger>
            <SelectContent>
              {triggerVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tabs-orientation">Orientation</Label>
          <Select value={orientation} onValueChange={setOrientation}>
            <SelectTrigger id="tabs-orientation" className="w-full">
              <SelectValue placeholder="Select a variant" />
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
            checked={disabled}
            onCheckedChange={setDisabled}
            id="tabs-disabled"
          />
          <Label htmlFor="tabs-disabled">Disabled</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
