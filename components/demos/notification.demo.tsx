import * as React from "react";
import { BellIcon, InboxIcon, MessageCircleIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Notification } from "~/components/ui/notification";
import { ComponentContainer } from "~/components/component-container";

const variants = [
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "destructive",
  "destructive-accent",
  "destructive-muted",
  "destructive-surface",
  "destructive-faded",
  "success",
  "success-accent",
  "success-muted",
  "success-surface",
  "success-faded",
  "warning",
  "warning-accent",
  "warning-muted",
  "warning-surface",
  "warning-faded",
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
                  <div className="relative">
                    <Button variant="primary" size="icon">
                      <MessageCircleIcon />
                    </Button>
                    <Notification
                      variant={variant}
                      position="top-right"
                      outlined
                    >
                      5
                    </Notification>
                  </div>
                  <div className="relative">
                    <Button variant="outline" size="icon">
                      <MessageCircleIcon />
                    </Button>
                    <Notification
                      variant={variant}
                      position="top-right"
                      animated
                    />
                  </div>
                  <div className="relative">
                    <Button variant="outline" size="icon">
                      <MessageCircleIcon />
                    </Button>
                    <Notification
                      variant={variant}
                      position="top-right"
                      animated
                    >
                      <BellIcon />
                    </Notification>
                  </div>
                  <div className="relative">
                    <Button variant="outline" size="icon">
                      <MessageCircleIcon />
                    </Button>
                    <Notification
                      variant={variant}
                      position="top-right"
                      animated
                    >
                      20+
                    </Notification>
                  </div>
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
