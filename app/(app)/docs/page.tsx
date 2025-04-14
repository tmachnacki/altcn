import { Container } from "@/components/container";

import { AccordionDemo } from "@/components/demos/accordion.demo";
import { AlertDemo } from "@/components/demos/alert.demo";
import { AlertDialogDemo } from "@/components/demos/alert-dialog.demo";
import { AvatarDemo } from "@/components/demos/avatar.demo";
import { BadgeDemo } from "@/components/demos/badge.demo";
import { ButtonDemo } from "@/components/demos/button.demo";
import { CardDemo } from "@/components/demos/card.demo";
import { CheckboxDemo } from "@/components/demos/checkbox.demo";
import { ContextMenuDemo } from "@/components/demos/context-menu.demo";
import { DialogDemo } from "@/components/demos/dialog.demo";
import { DropdownMenuDemo } from "@/components/demos/dropdown-menu.demo";
import { InputDemo } from "@/components/demos/input.demo";
import { InputOTPDemo } from "@/components/demos/input-otp.demo";
import { InputPasswordDemo } from "@/components/demos/input-password.demo";
import { MenubarDemo } from "@/components/demos/menubar.demo";
import { NotificationDemo } from "@/components/demos/notification.demo";
import { PaginationDemo } from "@/components/demos/pagination.demo";
import { PopoverDemo } from "@/components/demos/popover.demo";
import { ProgressDemo } from "@/components/demos/progress.demo";
import { RadioGroupDemo } from "@/components/demos/radio-group.demo";
import { SelectDemo } from "@/components/demos/select.demo";
import { SheetDemo } from "@/components/demos/sheet.demo";
import { SkeletonDemo } from "@/components/demos/skeleton.demo";
import { SliderDemo } from "@/components/demos/slider.demo";
import { SonnerDemo } from "@/components/demos/sonner.demo";
import { SwitchDemo } from "@/components/demos/switch.demo";
import { TabsDemo } from "@/components/demos/tabs.demo";
import { ToggleDemo } from "@/components/demos/toggle.demo";
import { TooltipDemo } from "@/components/demos/tooltip.demo";

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
    title: "Input OTP",
    id: "input-otp",
    component: <InputOTPDemo />,
  },
  {
    title: "Input Password",
    id: "input-password",
    component: <InputPasswordDemo />,
  },
  {
    title: "Menubar",
    id: "menubar",
    component: <MenubarDemo />,
  },
  {
    title: "Notification",
    id: "notification",
    component: <NotificationDemo />,
  },
  {
    title: "Pagination",
    id: "pagination",
    component: <PaginationDemo />,
  },
  {
    title: "Popover",
    id: "popover",
    component: <PopoverDemo />,
  },
  {
    title: "Progress",
    id: "progress",
    component: <ProgressDemo />,
  },
  {
    title: "Radio Group",
    id: "radio-group",
    component: <RadioGroupDemo />,
  },
  {
    title: "Select",
    id: "select",
    component: <SelectDemo />,
  },
  {
    title: "Sheet",
    id: "sheet",
    component: <SheetDemo />,
  },
  {
    title: "Skeleton",
    id: "skeleton",
    component: <SkeletonDemo />,
  },
  {
    title: "Slider",
    id: "slider",
    component: <SliderDemo />,
  },
  {
    title: "Sonner",
    id: "sonner",
    component: <SonnerDemo />,
  },
  {
    title: "Switch",
    id: "switch",
    component: <SwitchDemo />,
  },
  {
    title: "Tabs",
    id: "tabs",
    component: <TabsDemo />,
  },
  {
    title: "Toggle",
    id: "toggle",
    component: <ToggleDemo />,
  },
  {
    title: "Tooltip",
    id: "tooltip",
    component: <TooltipDemo />,
  },
];

function ComponentSection({
  title,
  id,
  children,
}: React.ComponentProps<"div"> & { title: string }) {
  return (
    <div className="flex scroll-mt-24 flex-col gap-3" id={id}>
      <h2 className="text-lg font-medium capitalize">{title}</h2>
      <div className="flex flex-1 rounded-md border">{children}</div>
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
              <ComponentSection
                key={component.id}
                title={component.title}
                id={component.id}
              >
                {component.component}
              </ComponentSection>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
