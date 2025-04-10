import * as React from "react";
import { InboxIcon, BellIcon } from "lucide-react";
import { Notification } from "@/components/ui/notification";
import { Button } from "@/components/ui/button";

import { ComponentContainer } from "@/components/demos/component-container";

const variants = [
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
  "dotted",
  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "primary-dotted",
  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "secondary-dotted",
  "destructive",
  "destructive-accent",
  "destructive-muted",
  "destructive-surface",
  "destructive-faded",
  "destructive-dotted",
  "success",
  "success-accent",
  "success-muted",
  "success-surface",
  "success-faded",
  "success-dotted",
  "warning",
  "warning-accent",
  "warning-muted",
  "warning-surface",
  "warning-faded",
  "warning-dotted",
] as const;

const positions = [
  "top-right",
  "top-left",
  "bottom-right",
  "bottom-left",
] as const;

export function NotificationDemo() {
  return (
    <ComponentContainer>
      <div className="grid gap-8">
        {variants.map((variant) => {
          return (
            <div className="grid gap-8" key={`notification-${variant}`}>
              <div className="grid gap-8">
                <div className="flex flex-wrap items-center gap-4">
                  <Notification variant={variant}>New</Notification>
                  <Notification variant={variant}>7</Notification>
                  <Notification variant={variant}>20+</Notification>
                  <Notification variant={variant}>
                    <BellIcon />
                  </Notification>
                  <Notification variant={variant}></Notification>
                </div>

                <div className="flex flex-wrap items-center gap-8">
                  {positions.map((position) => (
                    <React.Fragment key={`notification-${variant}-${position}`}>
                      {/* wrap in element to prevent button opacity changes from affecting notification */}
                      <div className="relative">
                        <Notification variant={variant} position={position}>
                          New
                        </Notification>
                        <Button variant="outline">
                          <InboxIcon />
                          Inbox
                        </Button>
                      </div>
                      <div className="relative">
                        <Notification variant={variant} position={position}>
                          7
                        </Notification>
                        <Button variant="outline">
                          <InboxIcon />
                          Inbox
                        </Button>
                      </div>
                      <div className="relative">
                        <Notification variant={variant} position={position}>
                          20+
                        </Notification>
                        <Button variant="outline">
                          <InboxIcon />
                          Inbox
                        </Button>
                      </div>
                      <div className="relative">
                        <Notification variant={variant} position={position}>
                          <BellIcon />
                        </Notification>
                        <Button variant="outline">
                          <InboxIcon />
                          Inbox
                        </Button>
                      </div>
                      <div className="relative">
                        <Notification variant={variant} position={position} />
                        <Button variant="outline">
                          <InboxIcon />
                          Inbox
                        </Button>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ComponentContainer>
  );
}
