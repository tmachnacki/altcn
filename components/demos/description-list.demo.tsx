import { Badge } from "~/components/ui/badge";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "~/components/ui/description-list";
import { Heading } from "~/components/ui/heading";
import { ComponentContainer } from "~/components/component-container";

export function DescriptionListDemo() {
  return (
    <ComponentContainer>
      <div className="flex w-full max-w-lg flex-col gap-4">
        <Heading level={2} size="lg">
          Invoice Summary
        </Heading>
        <DescriptionList>
          <DescriptionTerm>Invoice Number</DescriptionTerm>
          <DescriptionDetails>INV-12345</DescriptionDetails>
          <DescriptionTerm>Invoice Date</DescriptionTerm>
          <DescriptionDetails>September 21, 2024</DescriptionDetails>
          <DescriptionTerm>Due Date</DescriptionTerm>
          <DescriptionDetails>October 21, 2024</DescriptionDetails>
          <DescriptionTerm>Customer Name</DescriptionTerm>
          <DescriptionDetails>John Doe</DescriptionDetails>
          <DescriptionTerm>Total Amount</DescriptionTerm>
          <DescriptionDetails>$1,250.00</DescriptionDetails>
          <DescriptionTerm className="inline-flex items-center">
            Status
          </DescriptionTerm>
          <DescriptionDetails>
            <Badge variant="faded">Pending</Badge>
          </DescriptionDetails>
        </DescriptionList>
      </div>
    </ComponentContainer>
  );
}
