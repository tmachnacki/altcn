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
      duration={Infinity}
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

            "!border-border !bg-popover hover:!border-hover-border hover:!bg-muted",

            "group-data-[type=success]/toast:!bg-success-popover group-data-[type=success]/toast:!border-success-border-faded group-data-[type=success]/toast:hover:!border-success-600/40 group-data-[type=success]/toast:hover:!bg-success-muted dark:group-data-[type=success]/toast:hover:!border-success-400/40",

            "group-data-[type=info]/toast:!bg-primary-popover group-data-[type=info]/toast:!border-primary-border-faded group-data-[type=info]/toast:hover:!border-primary-600/40 group-data-[type=info]/toast:hover:!bg-primary-muted dark:group-data-[type=info]/toast:hover:!border-primary-400/40",

            "group-data-[type=warning]/toast:!bg-warning-popover group-data-[type=warning]/toast:!border-warning-border-faded group-data-[type=warning]/toast:hover:!border-warning-600/40 group-data-[type=warning]/toast:hover:!bg-warning-muted dark:group-data-[type=warning]/toast:hover:!border-warning-400/40",

            "group-data-[type=error]/toast:!bg-destructive-popover group-data-[type=error]/toast:!border-destructive-border-faded group-data-[type=error]/toast:hover:!border-destructive-600/40 group-data-[type=error]/toast:hover:!bg-destructive-muted dark:group-data-[type=error]/toast:hover:!border-destructive-400/40",
          ]),

          actionButton: cx([
            "!cursor-default !shadow-none focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-outline active:!opacity-80",

            "!bg-base !text-base-foreground hover:!bg-base/90",

            "group-data-[type=success]/toast:!bg-success group-data-[type=success]/toast:!text-success-foreground group-data-[type=success]/toast:hover:!bg-success/90",

            "group-data-[type=info]/toast:!bg-primary group-data-[type=info]/toast:!text-primary-foreground group-data-[type=info]/toast:hover:!bg-primary/90",

            "group-data-[type=warning]/toast:!bg-warning group-data-[type=warning]/toast:!text-warning-foreground group-data-[type=warning]/toast:hover:!bg-warning/90",

            "group-data-[type=error]/toast:!bg-destructive group-data-[type=error]/toast:!text-destructive-foreground group-data-[type=error]/toast:hover:!bg-destructive/90",
          ]),

          cancelButton: cx([
            "!cursor-default !inset-ring focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-outline active:!opacity-80",

            "!bg-muted !text-muted-foreground !inset-ring-border-faded hover:!bg-accent",

            "group-data-[type=success]/toast:!bg-success-muted group-data-[type=success]/toast:!text-success-muted-foreground group-data-[type=success]/toast:!inset-ring-success-border-faded group-data-[type=success]/toast:hover:!bg-success-200/70 dark:group-data-[type=success]/toast:hover:!bg-success-900/70",

            "group-data-[type=info]/toast:!bg-primary-muted group-data-[type=info]/toast:!text-primary-muted-foreground group-data-[type=info]/toast:!inset-ring-primary-border-faded group-data-[type=info]/toast:hover:!bg-primary-200/70 dark:group-data-[type=info]/toast:hover:!bg-primary-900/70",

            "group-data-[type=warning]/toast:!inset-ring-warning-border-faded group-data-[type=warning]/toast:!bg-warning-muted group-data-[type=warning]/toast:!text-warning-muted-foreground group-data-[type=warning]/toast:hover:!bg-warning-200/70 dark:group-data-[type=warning]/toast:hover:!bg-warning-900/70",

            "group-data-[type=error]/toast:!bg-destructive-muted group-data-[type=error]/toast:!text-destructive-muted-foreground group-data-[type=error]/toast:!inset-ring-destructive-border-faded group-data-[type=error]/toast:hover:!bg-destructive-200/70 dark:group-data-[type=error]/toast:hover:!bg-destructive-900/70",
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

          "--success-bg": "var(--success-faded-solid)",
          "--success-text": "var(--success-accent-foreground)",
          "--success-border": "var(--success-border-faded)",

          "--info-bg": "var(--primary-faded-solid)",
          "--info-text": "var(--primary-accent-foreground)",
          "--info-border": "var(--primary-border-faded)",

          "--warning-bg": "var(--warning-faded-solid)",
          "--warning-text": "var(--warning-accent-foreground)",
          "--warning-border": "var(--warning-border-faded)",

          "--error-bg": "var(--destructive-faded-solid)",
          "--error-text": "var(--destructive-accent-foreground)",
          "--error-border": "var(--destructive-border-faded)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
