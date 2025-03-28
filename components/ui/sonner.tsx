"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { cx } from "class-variance-authority";

// import { Spinner } from "@/components/ui/spinner";
// import { SuccessFilledIcon } from "@/components/icons/success-filled";
// import { InfoFilledIcon } from "@/components/icons/info-filled";
// import { WarningFilledIcon } from "@/components/icons/warning-filled";
// import { ErrorFilledIcon } from "@/components/icons/error-filled";

// TODO: should probably abstract to headless/custom implementation
// FIXME: overriding styles is straight booty cheeks
// FIXME: custom spinner and icons
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      closeButton
      duration={Infinity}
      position="bottom-right"
      className=""
      richColors
      toastOptions={{
        classNames: {
          toast:
            "group/toast !shadow-lg focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-outline",

          icon: cx([
            "!text-muted-foreground",

            "group-data-[type=success]/toast:!text-success-600 dark:group-data-[type=success]/toast:!text-success-500",

            "group-data-[type=info]/toast:!text-primary-600 dark:group-data-[type=info]/toast:!text-primary-500",

            "group-data-[type=warning]/toast:!text-warning-600 dark:group-data-[type=warning]/toast:!text-warning-500",

            "group-data-[type=error]/toast:!text-destructive-600 dark:group-data-[type=error]/toast:!text-destructive-500",
          ]),

          actionButton: cx([
            "!cursor-default !shadow-none focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-outline active:!opacity-80",

            "!bg-base-600 !text-white hover:!bg-base-600/90",

            "group-data-[type=success]/toast:!bg-success group-data-[type=success]/toast:!text-success-foreground group-data-[type=success]/toast:hover:!bg-success/90",

            "group-data-[type=info]/toast:!bg-primary group-data-[type=info]/toast:!text-primary-foreground group-data-[type=info]/toast:hover:!bg-primary/90",

            "group-data-[type=warning]/toast:!bg-warning group-data-[type=warning]/toast:!text-warning-foreground group-data-[type=warning]/toast:hover:!bg-warning/90",

            "group-data-[type=error]/toast:!bg-destructive group-data-[type=error]/toast:!text-destructive-foreground group-data-[type=error]/toast:hover:!bg-destructive/90",
          ]),

          cancelButton: cx([
            "!cursor-default !inset-ring focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-outline active:!opacity-80",

            "!bg-muted !text-muted-foreground !inset-ring-border-faded hover:!bg-accent",

            "group-data-[type=success]/toast:!bg-success-muted group-data-[type=success]/toast:!text-success-muted-foreground group-data-[type=success]/toast:!inset-ring-border-success-faded group-data-[type=success]/toast:hover:!bg-success-200/70 dark:group-data-[type=success]/toast:hover:!bg-success-900/70",

            "group-data-[type=info]/toast:!bg-primary-muted group-data-[type=info]/toast:!text-primary-muted-foreground group-data-[type=info]/toast:!inset-ring-border-primary-faded group-data-[type=info]/toast:hover:!bg-primary-200/70 dark:group-data-[type=info]/toast:hover:!bg-primary-900/70",

            "group-data-[type=warning]/toast:!bg-warning-muted group-data-[type=warning]/toast:!text-warning-muted-foreground group-data-[type=warning]/toast:!inset-ring-border-warning-faded group-data-[type=warning]/toast:hover:!bg-warning-200/70 dark:group-data-[type=warning]/toast:hover:!bg-warning-900/70",

            "group-data-[type=error]/toast:!bg-destructive-muted group-data-[type=error]/toast:!text-destructive-muted-foreground group-data-[type=error]/toast:!inset-ring-border-destructive-faded group-data-[type=error]/toast:hover:!bg-destructive-200/70 dark:group-data-[type=error]/toast:hover:!bg-destructive-900/70",
          ]),

          description: cx([
            "!text-muted-foreground",

            "group-data-[type=success]/toast:!text-success-muted-foreground",

            "group-data-[type=info]/toast:!text-primary-muted-foreground",

            "group-data-[type=warning]/toast:!text-warning-muted-foreground",

            "group-data-[type=error]/toast:!text-destructive-muted-foreground",
          ]),

          closeButton: "!text-current hover:!bg-popover",

          default: "dark:!shadow-base-300/10",

          success: "dark:!shadow-success-300/10",

          info: "dark:!shadow-primary-300/10",

          warning: "dark:!shadow-warning-300/10",

          error: "dark:!shadow-destructive-300/10",
        },
      }}
      /* some classNames are not overriding properly on richColors types --> overriding sonner's css vars seems to work */
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--accent-foreground)",
          "--normal-border": "var(--border)",

          "--success-bg": "var(--success-popover)",
          "--success-text": "var(--success-accent-foreground)",
          "--success-border": "var(--border-success-faded)",

          "--info-bg": "var(--primary-popover)",
          "--info-text": "var(--primary-accent-foreground)",
          "--info-border": "var(--border-primary-faded)",

          "--warning-bg": "var(--warning-popover)",
          "--warning-text": "var(--warning-accent-foreground)",
          "--warning-border": "var(--border-warning-faded)",

          "--error-bg": "var(--destructive-popover)",
          "--error-text": "var(--destructive-accent-foreground)",
          "--error-border": "var(--border-destructive-faded)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
