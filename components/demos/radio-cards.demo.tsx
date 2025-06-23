"use client";

import * as React from "react";
import { UsersIcon } from "lucide-react";

import { Label } from "~/components/ui/label";
import {
  RadioCards,
  RadioCardsIndicator,
  RadioCardsItem,
} from "~/components/ui/radio-cards";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import { ComponentContainer } from "~/components/component-container";
import { ComponentPlayground } from "~/components/component-playground";

const mailingLists = [
  {
    id: 1,
    title: "Newsletter",
    description: "Last message sent an hour ago",
    users: "621",
  },
  {
    id: 2,
    title: "Existing customers",
    description: "Last message sent 2 weeks ago",
    users: "1200",
  },
  {
    id: 3,
    title: "Trial users",
    description: "Last message sent 4 days ago",
    users: "2740",
  },
  {
    id: 4,
    title: "Disabled list",
    description: "Last message sent 2 days ago",
    users: "960",
  },
  {
    id: 5,
    title: "Invalid list",
    description: "Last message sent 2 days ago",
    users: "960",
  },
];

const radioCardsVariants = ["primary", "secondary"] as const;

export function RadioCardsDemo() {
  const [variant, setVariant] = React.useState("primary");
  const [withIndicator, setWithIndicator] = React.useState(true);

  return (
    <>
      <ComponentContainer>
        <div className="flex w-full flex-col gap-12">
          <fieldset>
            <legend className="mb-6 block font-semibold">
              Select a mailing list
            </legend>

            <RadioCards
              className="grid w-full grid-cols-1 gap-3 lg:grid-cols-3"
              defaultValue={mailingLists[3].title}
            >
              {mailingLists.map((mailingList) => (
                <RadioCardsItem
                  key={mailingList.id}
                  variant={variant as (typeof radioCardsVariants)[number]}
                  value={mailingList.title}
                  aria-label={mailingList.title}
                  aria-description={`${mailingList.description} to ${mailingList.users}`}
                  className="min-h-36 w-full"
                  disabled={mailingList.title === "Disabled list"}
                  aria-invalid={mailingList.title === "Invalid list"}
                >
                  <div className="flex h-full min-h-0 flex-col items-start justify-start">
                    <div className="flex-1">
                      <h3 className="font-medium">{mailingList.title}</h3>
                      <span className="mt-1 text-muted-foreground">
                        {mailingList.description}
                      </span>
                    </div>
                    <span className="mt-6 flex flex-none items-center gap-2 font-medium">
                      <UsersIcon
                        className="size-4 text-muted-foreground"
                        aria-label="users"
                      />
                      {mailingList.users}
                    </span>
                  </div>
                  {withIndicator && <RadioCardsIndicator />}
                </RadioCardsItem>
              ))}
            </RadioCards>
          </fieldset>
        </div>
      </ComponentContainer>
      <ComponentPlayground>
        <div className="grid gap-2">
          <Label htmlFor="radio-cards-variant">Variant</Label>
          <Select value={variant} onValueChange={setVariant}>
            <SelectTrigger id="radio-cards-variant" className="w-full">
              <SelectValue placeholder="Select variant" />
            </SelectTrigger>
            <SelectContent>
              {radioCardsVariants.map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="radio-cards-with-indicator"
            checked={withIndicator}
            onCheckedChange={setWithIndicator}
          />
          <Label htmlFor="radio-cards-with-indicator">With indicator</Label>
        </div>
      </ComponentPlayground>
    </>
  );
}
