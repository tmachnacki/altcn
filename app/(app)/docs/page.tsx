import { Container } from "@/components/container";

import { AccordionDemo } from "@/components/demos/accordion-demo";
import { AlertDemo } from "@/components/demos/alert-demo";
import { AlertDialogDemo } from "@/components/demos/alert-dialog-demo";
import { AvatarDemo } from "@/components/demos/avatar-demo";
import { BadgeDemo } from "@/components/demos/badge-demo";
import { ButtonDemo } from "@/components/demos/button-demo";
import { CardDemo } from "@/components/demos/card-demo";
import { CheckboxDemo } from "@/components/demos/checkbox-demo";
import { ContextMenuDemo } from "@/components/demos/context-menu-demo";
import { DialogDemo } from "@/components/demos/dialog-demo";
import { DropdownMenuDemo } from "@/components/demos/dropdown-menu-demo";
import { InputDemo } from "@/components/demos/input-demo";
import { MenubarDemo } from "@/components/demos/menubar-demo";
import { RadioGroupDemo } from "@/components/demos/radio-group-demo";
import { SkeletonDemo } from "@/components/demos/skeleton-demo";

const COMPONENTS = [
  {
    title: "Accordion",
    id: "accordion",
    component: <AccordionDemo />,
  },
  {
    title: "Alert",
    id: "alert",
    component: <AlertDemo />,
  },
  {
    title: "Alert Dialog",
    id: "alert-dialog",
    component: <AlertDialogDemo />,
  },
  {
    title: "Avatar",
    id: "avatar",
    component: <AvatarDemo />,
  },
  {
    title: "Badge",
    id: "badge",
    component: <BadgeDemo />,
  },
  {
    title: "Button",
    id: "button",
    component: <ButtonDemo />,
  },
  {
    title: "Card",
    id: "card",
    component: <CardDemo />,
  },
  {
    title: "Checkbox",
    id: "checkbox",
    component: <CheckboxDemo />,
  },
  {
    title: "Context Menu",
    id: "context-menu",
    component: <ContextMenuDemo />,
  },
  {
    title: "Dialog",
    id: "dialog",
    component: <DialogDemo />,
  },
  {
    title: "Dropdown Menu",
    id: "dropdown-menu",
    component: <DropdownMenuDemo />,
  },
  {
    title: "Input",
    id: "input",
    component: <InputDemo />,
  },
  {
    title: "Menubar",
    id: "menubar",
    component: <MenubarDemo />,
  },
  {
    title: "Radio Group",
    id: "radio-group",
    component: <RadioGroupDemo />,
  },
  {
    title: "Skeleton",
    id: "skeleton",
    component: <SkeletonDemo />,
  },
];

function ComponentDemoWrapper({
  title,
  id,
  children,
}: React.ComponentProps<"div"> & { title: string }) {
  return (
    <div className="flex scroll-mt-24 flex-col gap-3" id={id}>
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="flex max-h-[56rem] min-h-48 flex-1 overflow-y-auto rounded-md border p-8">
        {children}
      </div>
    </div>
  );
}

export default function Components() {
  return (
    <div className="flex gap-16">
      <aside className="fixed top-12 left-0 w-64 overflow-y-auto">
        <nav className="flex flex-col gap-2 p-4">
          {COMPONENTS.map((component) => (
            <a
              key={component.id}
              href={`#${component.id}`}
              className="hover:underline"
            >
              {component.title}
            </a>
          ))}
        </nav>
      </aside>
      <Container>
        <div className="space-y-16 py-content">
          <h1 className="text-2xl font-bold">Components</h1>
          <div className="flex flex-col gap-12">
            {COMPONENTS.map((component) => (
              <ComponentDemoWrapper
                key={component.id}
                title={component.title}
                id={component.id}
              >
                {component.component}
              </ComponentDemoWrapper>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
