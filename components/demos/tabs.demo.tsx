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
import {
  Tabs,
  TabsContent,
  TabsList,
  tabsListVariants,
  TabsTrigger,
  tabsTriggerVariants,
} from "~/components/ui/tabs";
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

export function TabsDemo() {
  const [listVariant, setListVariant] = React.useState<ListVariant>("muted");
  const [triggerVariant, setTriggerVariant] =
    React.useState<TriggerVariant>("default");

  return (
    <>
      <ComponentContainer>
        <Tabs defaultValue="music" className="w-full max-w-xl">
          <TabsList
            variants={{
              list: listVariant,
              trigger: triggerVariant,
            }}
            className="grid w-full grid-cols-4"
          >
            <TabsTrigger value="music">
              <MusicIcon />
              Music
            </TabsTrigger>
            <TabsTrigger value="podcasts">
              <PodcastIcon />
              Podcasts
            </TabsTrigger>
            <TabsTrigger value="photos">
              <ImageIcon />
              Photos
            </TabsTrigger>
            <TabsTrigger value="onlyfans" disabled>
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
      </ComponentPlayground>
    </>
  );
}
