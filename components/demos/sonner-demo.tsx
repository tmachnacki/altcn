"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const allTypes = [
  {
    name: "Default",
    action: () => toast("Event has been created"),
  },
  {
    name: "Description",
    action: () =>
      toast("Event has been created", {
        description: "Monday, January 3rd at 6:00pm",
      }),
  },
  {
    name: "Success Basic",
    action: () => toast.success("Event has been created. However, this is a really long title, so let's see how it wraps"),
  },
  {
    name: "Success Description",
    action: () =>
      toast.success("Event has been created", {
        description: "Monday, January 3rd at 6:00pm",
      }),
  },
  {
    name: "Success Action",
    action: () =>
      toast.success("Event has been created", {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
  {
    name: "Success Cancel",
    action: () =>
      toast.success("Event has been created", {
        cancel: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      }),
  },
  {
    name: "Success Description & Action",
    action: () =>
      toast.success("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
  {
    name: "Info",
    action: () => toast.info("Be at the area 10 minutes before the event time"),
  },
  {
    name: "Warning",
    action: () => toast.warning("Event start time cannot be earlier than 8am"),
  },
  {
    name: "Error",
    action: () => toast.error("Event has not been created"),
  },
  {
    name: "Action",
    action: () =>
      toast.message("Event has been created", {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
  {
    name: "Cancel",
    action: () =>
      toast.message("Event has been created", {
        cancel: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      }),
  },
  {
    name: "Promise",
    action: () =>
      toast.promise<{ name: string }>(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve({ name: "Sonner" });
            }, 2000);
          }),
        {
          loading: "Loading...",
          success: (data) => {
            return `${data.name} toast has been added`;
          },
          error: "Error",
        },
      ),
  },
];

export function SonnerDemo() {
  const [activeType, setActiveType] = React.useState(allTypes[0]);
  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => toast("My first toast")} variant="outline">
        Give me a toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
      {allTypes.map((type) => (
        <Button
          variant="ghost"
          data-active={activeType.name === type.name}
          onClick={() => {
            type.action();
            setActiveType(type);
          }}
          key={type.name}
        >
          {type.name}
        </Button>
      ))}
    </div>
  );
}
