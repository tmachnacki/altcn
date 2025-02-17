import { Container } from "@/components/container";
import { ComponentDemoWrapper } from "./component-demo-wrapper";

import { AccordionDemo } from "@/components/demos/accordion-demo";
import { AlertDemo } from "@/components/demos/alert-demo";
import { AlertDialogDemo } from "@/components/demos/alert-dialog-demo";
import { BadgeDemo } from "@/components/demos/badge-demo";
import { ButtonDemo } from "@/components/demos/button-demo";
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
    title: "Skeleton",
    id: "skeleton",
    component: <SkeletonDemo />,
  },
];

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
