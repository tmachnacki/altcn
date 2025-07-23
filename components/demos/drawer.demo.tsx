import { PlusIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { ComponentContainer } from "~/components/component-container";

export function DrawerDemo() {
  return (
    <ComponentContainer>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <PlusIcon />
            Create
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>New Project</DrawerTitle>
              <DrawerDescription>
                Enter some details about your project.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid gap-6 px-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="e.g. 'My Awesome Project'" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="More details about your project..."
                />
              </div>
            </div>
            <DrawerFooter>
              <Button type="submit">Publish</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </ComponentContainer>
  );
}
