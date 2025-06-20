"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";
import { ComponentContainer } from "~/components/component-container";

const defaultToasts = [
  {
    name: "Default Basic",
    action: () => toast("Event has been created"),
  },
  {
    name: "Default Description",
    action: () =>
      toast("Event has been created", {
        description: "Monday, January 3rd at 6:00pm",
      }),
  },
  {
    name: "Default Action",
    action: () =>
      toast.message("Event has been created", {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
  {
    name: "Default Cancel",
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
        }
      ),
  },
];

const successToasts = [
  // success
  {
    name: "Success Basic",
    action: () =>
      toast.success(
        "Event has been created. However, this is a really long title, so let's see how it wraps"
      ),
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
    name: "Success Description & Cancel",
    action: () =>
      toast.success("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        cancel: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      }),
  },
];

const infoToasts = [
  // info
  {
    name: "Info Basic",
    action: () =>
      toast.info(
        "Event has been created. However, this is a really long title, so let's see how it wraps"
      ),
  },
  {
    name: "Info Description",
    action: () =>
      toast.info("Event has been created", {
        description: "Monday, January 3rd at 6:00pm",
      }),
  },
  {
    name: "Info Action",
    action: () =>
      toast.info("Event has been created", {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
  {
    name: "Info Cancel",
    action: () =>
      toast.info("Event has been created", {
        cancel: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      }),
  },
  {
    name: "Info Description & Action",
    action: () =>
      toast.info("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
  {
    name: "Info Description & Cancel",
    action: () =>
      toast.info("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        cancel: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      }),
  },
];

const warningToasts = [
  // warning
  {
    name: "Warning Basic",
    action: () =>
      toast.warning(
        "Event has been created. However, this is a really long title, so let's see how it wraps"
      ),
  },
  {
    name: "Warning Description",
    action: () =>
      toast.warning("Event has been created", {
        description: "Monday, January 3rd at 6:00pm",
      }),
  },
  {
    name: "Warning Action",
    action: () =>
      toast.warning("Event has been created", {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
  {
    name: "Warning Cancel",
    action: () =>
      toast.warning("Event has been created", {
        cancel: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      }),
  },
  {
    name: "Warning Description & Action",
    action: () =>
      toast.warning("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
  {
    name: "Warning Description & Cancel",
    action: () =>
      toast.warning("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        cancel: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      }),
  },
];

const errorToasts = [
  // error
  {
    name: "Error Basic",
    action: () =>
      toast.error(
        "Event has been created. However, this is a really long title, so let's see how it wraps"
      ),
  },
  {
    name: "Error Description",
    action: () =>
      toast.error("Event has been created", {
        description: "Monday, January 3rd at 6:00pm",
      }),
  },
  {
    name: "Error Action",
    action: () =>
      toast.error("Event has been created", {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
  {
    name: "Error Cancel",
    action: () =>
      toast.error("Event has been created", {
        cancel: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      }),
  },
  {
    name: "Error Description & Action",
    action: () =>
      toast.error("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      }),
  },
  {
    name: "Error Description & Cancel",
    action: () =>
      toast.error("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        cancel: {
          label: "Cancel",
          onClick: () => console.log("Cancel"),
        },
      }),
  },
];

export function SonnerDemo() {
  return (
    <ComponentContainer>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center gap-4">
          {defaultToasts.map((toast) => (
            <Button variant="outline" key={toast.name} onClick={toast.action}>
              {toast.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {successToasts.map((toast) => (
            <Button variant="outline" key={toast.name} onClick={toast.action}>
              {toast.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {infoToasts.map((toast) => (
            <Button variant="outline" key={toast.name} onClick={toast.action}>
              {toast.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {warningToasts.map((toast) => (
            <Button variant="outline" key={toast.name} onClick={toast.action}>
              {toast.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {errorToasts.map((toast) => (
            <Button variant="outline" key={toast.name} onClick={toast.action}>
              {toast.name}
            </Button>
          ))}
        </div>
      </div>
    </ComponentContainer>
  );
}
