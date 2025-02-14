import { Container } from "@/components/container";
import { ComponentDemoWrapper } from "./component-demo-wrapper";

import { ButtonDemo } from "@/components/demos/button-demo";
import { AccordionDemo } from "@/components/demos/accordion-demo";
export default function Components() {
  return (
    <Container>
      <div className="space-y-16 py-content">
        <h1 className="text-2xl font-bold">Components</h1>
        <div className="flex flex-col gap-12">
          <ComponentDemoWrapper title="Button">
            <ButtonDemo />
          </ComponentDemoWrapper>
          <ComponentDemoWrapper title="Accordion">
            <AccordionDemo />
          </ComponentDemoWrapper>
        </div>
      </div>
    </Container>
  );
}
