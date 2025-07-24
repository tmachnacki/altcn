import { PlusIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContainer,
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
      <div className="flex items-center gap-2">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">
              <PlusIcon />
              Create
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerContainer>
              <DrawerHeader>
                <DrawerTitle>New Project</DrawerTitle>
                <DrawerDescription>
                  Enter some details about your project.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerBody className="grid gap-6">
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
              </DrawerBody>
              <DrawerFooter>
                <Button type="submit">Publish</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContainer>
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Scrollable</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="w-full overflow-y-auto p-(--drawer-p)">
              <DrawerContainer className="p-0">
                <DrawerHeader>
                  <DrawerTitle>Scrollable Drawer</DrawerTitle>
                  <DrawerDescription>
                    This drawer has a lot of lorem ipsum.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerBody className="grid gap-6">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <p key={index}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sint voluptates iusto exercitationem adipisci suscipit
                      debitis esse illum dignissimos reiciendis consequuntur
                      sunt, libero veritatis cum fuga delectus iste voluptas
                      quam culpa.
                    </p>
                  ))}
                </DrawerBody>
              </DrawerContainer>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </ComponentContainer>
  );
}
