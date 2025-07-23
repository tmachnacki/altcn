"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { cx } from "class-variance-authority";

// import { Spinner } from "~/components/ui/spinner";
// import { SuccessFilledIcon } from "~/components/icons/success-filled";
// import { InfoFilledIcon } from "~/components/icons/info-filled";
// import { WarningFilledIcon } from "~/components/icons/warning-filled";
// import { ErrorFilledIcon } from "~/components/icons/error-filled";

// TODO: should probably abstract to headless/custom implementation
// FIXME: overriding styles is straight booty cheeks
// FIXME: custom spinner and icons
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      closeButton
      position="bottom-right"
      richColors
      toastOptions={{
        classNames: {
          toast:
            "group/toast !shadow-lg focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-outline",

          loader: cx(["!h-6 !w-5 !items-center !justify-center"]),

          icon: cx([
            "!h-6 !w-5 !items-center !justify-center",

            "!text-muted-foreground",

            "group-data-[type=success]/toast:!text-success-600 dark:group-data-[type=success]/toast:!text-success-500",

            "group-data-[type=info]/toast:!text-primary-600 dark:group-data-[type=info]/toast:!text-primary-500",

            "group-data-[type=warning]/toast:!text-warning-600 dark:group-data-[type=warning]/toast:!text-warning-500",

            "group-data-[type=error]/toast:!text-destructive-600 dark:group-data-[type=error]/toast:!text-destructive-500",
          ]),

          closeButton: cx([
            "!cursor-default !text-current/80 hover:!text-current/100",

            "!border-border !bg-popover hover:!bg-base-100 dark:hover:!bg-base-800",

            "group-data-[type=success]/toast:!border-success-faded-border group-data-[type=success]/toast:!bg-success-popover group-data-[type=success]/toast:hover:!bg-success-100 dark:group-data-[type=success]/toast:hover:!bg-success-950",

            "group-data-[type=info]/toast:!border-primary-faded-border group-data-[type=info]/toast:!bg-primary-popover group-data-[type=info]/toast:hover:!bg-primary-100 dark:group-data-[type=info]/toast:hover:!bg-primary-950",

            "group-data-[type=warning]/toast:!border-warning-faded-border group-data-[type=warning]/toast:!bg-warning-popover group-data-[type=warning]/toast:hover:!bg-warning-100 dark:group-data-[type=warning]/toast:hover:!bg-warning-950",

            "group-data-[type=error]/toast:!border-destructive-faded-border group-data-[type=error]/toast:!bg-destructive-popover group-data-[type=error]/toast:hover:!bg-destructive-100 dark:group-data-[type=error]/toast:hover:!bg-destructive-950",
          ]),

          actionButton: cx([
            "!cursor-default !shadow-none focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-outline active:!opacity-80",

            "!bg-base !text-base-foreground hover:!bg-hover-base",

            "group-data-[type=success]/toast:!bg-success group-data-[type=success]/toast:!text-success-foreground group-data-[type=success]/toast:hover:!bg-hover-success",

            "group-data-[type=info]/toast:!bg-primary group-data-[type=info]/toast:!text-primary-foreground group-data-[type=info]/toast:hover:!bg-hover-primary",

            "group-data-[type=warning]/toast:!bg-warning group-data-[type=warning]/toast:!text-warning-foreground group-data-[type=warning]/toast:hover:!bg-hover-warning",

            "group-data-[type=error]/toast:!bg-destructive group-data-[type=error]/toast:!text-destructive-foreground group-data-[type=error]/toast:hover:!bg-hover-destructive",
          ]),

          cancelButton: cx([
            "!cursor-default focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-outline active:!opacity-80",

            "!bg-muted !text-muted-foreground hover:!bg-hover-muted",

            "group-data-[type=success]/toast:!bg-success-muted group-data-[type=success]/toast:!text-success-muted-foreground group-data-[type=success]/toast:hover:!bg-hover-success-muted",

            "group-data-[type=info]/toast:!bg-primary-muted group-data-[type=info]/toast:!text-primary-muted-foreground group-data-[type=info]/toast:hover:!bg-hover-primary-muted",

            "group-data-[type=warning]/toast:!bg-warning-muted group-data-[type=warning]/toast:!text-warning-muted-foreground group-data-[type=warning]/toast:hover:!bg-hover-warning-muted",

            "group-data-[type=error]/toast:!bg-destructive-muted group-data-[type=error]/toast:!text-destructive-muted-foreground group-data-[type=error]/toast:hover:!bg-hover-destructive-muted",
          ]),

          description: cx([
            "!text-muted-foreground",

            "group-data-[type=success]/toast:!text-success-muted-foreground",

            "group-data-[type=info]/toast:!text-primary-muted-foreground",

            "group-data-[type=warning]/toast:!text-warning-muted-foreground",

            "group-data-[type=error]/toast:!text-destructive-muted-foreground",
          ]),

          default: "dark:!shadow-base-300/10",

          success: "dark:!shadow-success-300/10",

          info: "dark:!shadow-primary-300/10",

          warning: "dark:!shadow-warning-300/10",

          error: "dark:!shadow-destructive-300/10",
        },
      }}
      /*
       ** some classNames are not overriding properly on richColors types...
       ** overriding sonner's css vars seems to work and does some of the variant styling for us
       */
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--accent-foreground)",
          "--normal-border": "var(--border)",

          "--success-bg": "var(--success-popover)",
          "--success-text": "var(--success-accent-foreground)",
          "--success-border": "var(--success-faded-border)",

          "--info-bg": "var(--primary-popover)",
          "--info-text": "var(--primary-accent-foreground)",
          "--info-border": "var(--primary-faded-border)",

          "--warning-bg": "var(--warning-popover)",
          "--warning-text": "var(--warning-accent-foreground)",
          "--warning-border": "var(--warning-faded-border)",

          "--error-bg": "var(--destructive-popover)",
          "--error-text": "var(--destructive-accent-foreground)",
          "--error-border": "var(--destructive-faded-border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
