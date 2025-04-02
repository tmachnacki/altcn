import { ComponentContainer } from "@/components/demos/component-container";
import {
  ImageIcon,
  MusicIcon,
  PodcastIcon,
  FilmIcon,
  BanIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  const tabsListVariants = [
    "muted",
    "outline",
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

  const tabsDemos = tabsListVariants.flatMap((tabsListVariant) =>
    tabsTriggerVariants.map((tabsTriggerVariant) => ({
      tabsListVariant,
      tabsTriggerVariant,
    })),
  );

  return (
    <ComponentContainer>
      <div className="flex flex-col gap-8">
        <Tabs defaultValue="account" className="max-w-[400px]">
          <TabsList className="w-full">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-name">Name</Label>
                  <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-username">Username</Label>
                  <Input id="tabs-demo-username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button variant={"primary-faded"}>Cancel</Button>
                <Button variant={"primary-shadow"}>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-current">Current password</Label>
                  <Input id="tabs-demo-current" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-new">New password</Label>
                  <Input id="tabs-demo-new" type="password" />
                </div>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button variant={"primary-faded"}>Cancel</Button>
                <Button variant={"primary-shadow"}>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        <Tabs defaultValue="home">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs defaultValue="home">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="settings" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {tabsDemos.map((tabDemo) => (
          <Tabs
            defaultValue="music"
            className="w-full max-w-xl"
            key={`${tabDemo.tabsListVariant}-${tabDemo.tabsTriggerVariant}`}
          >
            <TabsList
              variant={tabDemo.tabsListVariant}
              className="grid w-full grid-cols-5"
            >
              <TabsTrigger value="music" variant={tabDemo.tabsTriggerVariant}>
                <MusicIcon />
                Music
              </TabsTrigger>
              <TabsTrigger
                value="podcasts"
                variant={tabDemo.tabsTriggerVariant}
              >
                <PodcastIcon />
                Podcasts
              </TabsTrigger>
              <TabsTrigger value="photos" variant={tabDemo.tabsTriggerVariant}>
                <ImageIcon />
                Photos
              </TabsTrigger>
              <TabsTrigger value="videos" variant={tabDemo.tabsTriggerVariant}>
                <FilmIcon />
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="onlyfans"
                variant={tabDemo.tabsTriggerVariant}
                disabled
              >
                <BanIcon />
                OnlyFans
              </TabsTrigger>
            </TabsList>
          </Tabs>
        ))}
      </div>
    </ComponentContainer>
  );
}
