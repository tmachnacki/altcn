"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { SuccessFilledIcon } from "@/components/icons/success-filled";
import { InfoFilledIcon } from "@/components/icons/info-filled";
import { WarningFilledIcon } from "@/components/icons/warning-filled";
import { ErrorFilledIcon } from "@/components/icons/error-filled";

// TODO: maybe abstract to headless variants
// FIXME: overriding styles is straight booty cheeks
// FIXME: custom spinner is off
// FIXME: align icons
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      richColors
      closeButton
      duration={Infinity}
      position="top-center"
      icons={{
        loading: <Spinner className="size-4 text-muted-foreground" />,
        success: <SuccessFilledIcon className="text-success" />,
        info: <InfoFilledIcon className="text-primary" />,
        warning: <WarningFilledIcon className="text-warning" />,
        error: <ErrorFilledIcon className="text-destructive" />,
      }}
      toastOptions={{
        classNames: {
          toast: "group/toast",

          default:
            "!border-border !bg-popover !text-popover-foreground **:data-description:!text-muted-foreground",
          success:
            "!border-border-success-faded !bg-success-faded !text-success-accent-foreground **:data-button:!bg-success **:data-button:!text-success-foreground **:data-cancel:!bg-success/15 **:data-cancel:!text-success-muted-foreground **:data-description:!text-success-muted-foreground",
          info: "!border-border-primary-faded !bg-primary-faded !text-primary-accent-foreground **:data-description:!text-primary-muted-foreground",
          warning:
            "!border-border-warning-faded !bg-warning-faded !text-warning-accent-foreground **:data-description:!text-warning-muted-foreground",
          error:
            "!border-border-destructive-faded !bg-destructive-faded !text-destructive-accent-foreground **:data-description:!text-destructive-muted-foreground",
        },
      }}
      // style={
      //   {
      //     "--normal-bg": "var(--popover)",
      //     "--normal-text": "var(--accent-foreground)",
      //     "--normal-border": "var(--border)",
      //     "[data-type='default'][data-description]":
      //       "text-muted-foreground !important",

      //     "--success-bg": "var(--success-faded)",
      //     "--success-text": "var(--success-accent-foreground)",
      //     "--success-border": "var(--border-success-faded)",
      //     "--success-description": "var(--success-muted-foreground)",

      //     "--info-bg": "var(--primary-faded)",
      //     "--info-text": "var(--primary-accent-foreground)",
      //     "--info-border": "var(--border-primary-faded)",
      //     "--info-description": "var(--primary-muted-foreground)",

      //     "--warning-bg": "var(--warning-faded)",
      //     "--warning-text": "var(--warning-accent-foreground)",
      //     "--warning-border": "var(--border-warning-faded)",
      //     "--warning-description": "var(--warning-muted-foreground)",

      //     "--error-bg": "var(--destructive-faded)",
      //     "--error-text": "var(--destructive-accent-foreground)",
      //     "--error-border": "var(--border-destructive-faded)",
      //     "--error-description": "var(--destructive-muted-foreground)",
      //   } as React.CSSProperties
      // }
      {...props}
    />
  );
};

export { Toaster };
