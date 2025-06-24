import * as InputPasswordPrimitive from "@radix-ui/react-password-toggle-field";
import { cva, type VariantProps } from "class-variance-authority";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { cn } from "~/lib/utils";

// import { Button } from "~/components/ui/button";

const inputPasswordContainerVariants = cva(
  [
    "relative grid w-full min-w-0 grid-cols-1 items-center rounded-md",
    "has-disabled:cursor-not-allowed has-disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        default: "h-(--size-default)",
        sm: "h-(--size-sm)",
        lg: "h-(--size-lg)",
      },
      variant: {
        outline: [
          "bg-background shadow-xs outline-1 -outline-offset-1 outline-border dark:bg-faded",
          "hover:not-has-disabled:not-has-focus:not-has-aria-invalid:outline-hover-border hover:not-has-aria-invalid:has-[button:focus-visible]:outline-hover-border",
          "has-disabled:bg-faded has-disabled:shadow-none",
          "has-focus:outline-2 has-focus:outline-primary has-[button:focus-visible]:outline-1 has-[button:focus-visible]:outline-border",
          "has-aria-invalid:outline-destructive/50 has-aria-invalid:has-focus:outline-destructive has-aria-invalid:hover:not-has-disabled:not-has-focus:outline-destructive dark:has-aria-invalid:bg-destructive-faded",
        ],
        muted: [
          "bg-muted outline-0 -outline-offset-1",
          "hover:not-has-disabled:not-has-focus:not-has-aria-invalid:bg-hover-muted hover:not-has-aria-invalid:has-[button:focus-visible]:bg-hover-muted",
          "outline-primary has-focus:outline-2 has-[button:focus-visible]:outline-0",
          "has-aria-invalid:bg-destructive-muted has-aria-invalid:outline-destructive has-aria-invalid:hover:not-has-disabled:not-has-focus:bg-hover-destructive-muted has-aria-invalid:hover:has-[button:focus-visible]:bg-hover-destructive-muted",
        ],
        underlined: [
          "rounded-none bg-transparent shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-has-disabled:not-has-focus:not-has-aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",

          "has-focus:shadow-[inset_0_-2px_0_0_var(--color-primary)]",

          "has-aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] has-aria-invalid:has-focus:shadow-[inset_0_-2px_0_0_var(--color-destructive)]",
        ],
        "primary-muted": [
          "bg-primary-muted outline-0 -outline-offset-1 hover:not-has-disabled:not-has-focus:not-has-aria-invalid:bg-hover-primary-muted",

          "has-disabled:bg-muted",

          "outline-primary focus-visible:outline-2",

          "has-aria-invalid:bg-destructive-muted has-aria-invalid:hover:not-has-focus:bg-hover-destructive-muted has-aria-invalid:has-focus:outline-destructive",
        ],
        "secondary-muted": [
          "bg-secondary-muted outline-0 -outline-offset-1 hover:not-has-disabled:not-has-focus:not-has-aria-invalid:bg-hover-secondary-muted",

          "has-disabled:bg-muted",

          "outline-secondary has-focus:outline-2",

          "has-aria-invalid:bg-destructive-muted has-aria-invalid:hover:not-has-focus:bg-hover-destructive-muted has-aria-invalid:has-focus:outline-destructive",
        ],
      },
    },
    defaultVariants: {
      size: "default",
      variant: "outline",
    },
  }
);

const inputPasswordInputVariants = cva(
  [
    "all-[unset] col-start-1 row-start-1 block h-full min-h-0 w-full shrink grow appearance-none self-center rounded-none bg-transparent outline-none",
    "selection:bg-primary selection:text-primary-foreground",
    "aria-invalid:text-destructive-accent-foreground aria-invalid:selection:bg-destructive aria-invalid:selection:text-destructive-foreground",
  ],
  {
    variants: {
      size: {
        default: "py-1 pr-10 pl-3 text-base sm:text-sm",
        sm: "py-1 pr-9 pl-2.5 text-sm",
        lg: "py-1.5 pr-11 pl-3.5 text-base sm:text-sm",
      },
      variant: {
        outline: [
          "text-foreground",
          "placeholder:text-placeholder",
          "aria-invalid:placeholder:text-destructive-placeholder",
        ],
        muted: [
          "text-accent-foreground",
          "placeholder:text-muted-foreground",
          "aria-invalid:placeholder:text-destructive-muted-foreground",
        ],
        underlined: [
          "pl-0.5 text-foreground",
          "placeholder:text-placeholder",
          "aria-invalid:placeholder:text-destructive-placeholder",
        ],
        "primary-muted": [
          "text-primary-accent-foreground",
          "disabled:text-accent-foreground disabled:placeholder:text-muted-foreground",
          "placeholder:text-primary-muted-foreground",
          "aria-invalid:placeholder:text-destructive-muted-foreground",
        ],
        "secondary-muted": [
          "text-secondary-accent-foreground",
          "selection:bg-secondary selection:text-secondary-foreground",
          "disabled:text-accent-foreground disabled:placeholder:text-muted-foreground",
          "placeholder:text-secondary-muted-foreground",
          "aria-invalid:placeholder:text-destructive-muted-foreground",
        ],
      },
    },
    compoundVariants: [
      {
        size: "default",
        variant: "underlined",
        className: "pr-[calc(var(--spacing)*9.5)]",
      },
      {
        size: "sm",
        variant: "underlined",
        className: "pr-[calc(var(--spacing)*8.5)]",
      },
      {
        size: "lg",
        variant: "underlined",
        className: "pr-[calc(var(--spacing)*10.5)]",
      },
    ],
    defaultVariants: {
      size: "default",
      variant: "outline",
    },
  }
);

const inputPasswordToggleVariants = cva(
  [
    "touch-target col-start-1 row-start-1 mr-1 inline-flex flex-none items-center justify-center self-center justify-self-end rounded-sm outline-offset-0 focus-visible:outline-2 active:opacity-80",
    "peer-aria-invalid/input-password-input:text-destructive-muted-foreground peer-aria-invalid/input-password-input:outline-destructive peer-aria-invalid/input-password-input:hover:bg-destructive-500/20",
    "disabled:pointer-events-none disabled:text-muted-foreground",
  ],
  {
    variants: {
      size: {
        default: "size-7 *:[svg]:size-4",
        sm: "size-6 *:[svg]:size-4",
        lg: "size-8 *:[svg]:size-5",
      },
      variant: {
        outline: "text-subtle-foreground outline-outline hover:bg-base-500/20",
        muted: "text-subtle-foreground outline-outline hover:bg-base-500/20",
        underlined:
          "mr-0.5 text-subtle-foreground outline-outline hover:bg-base-500/20",
        "primary-muted":
          "text-primary-muted-foreground outline-primary hover:bg-primary-500/20",
        "secondary-muted":
          "text-secondary-muted-foreground outline-secondary hover:bg-secondary-500/20",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "outline",
    },
  }
);

type InputPasswordProps = Omit<
  React.ComponentProps<typeof InputPasswordPrimitive.Input>,
  "size"
> &
  VariantProps<typeof inputPasswordContainerVariants> & {
    classNames?: {
      container?: string;
      input?: string;
      toggle?: string;
    };
    htmlSize?: number;

    // Root props
    id?: string;
    visible?: boolean;
    defaultVisible?: boolean;
    onVisibilityChange?: (visible: boolean) => void; // typo in radix package: prop is named "onVisiblityChange"
  };

function InputPasswordRadix({
  size = "default",
  variant = "outline",
  disabled,
  htmlSize,
  id,
  visible,
  defaultVisible,
  onVisibilityChange,
  className,
  classNames,
  ...props
}: InputPasswordProps) {
  return (
    <InputPasswordPrimitive.Root
      data-slot="input-password"
      id={id}
      visible={visible}
      defaultVisible={defaultVisible}
      onVisiblityChange={onVisibilityChange}
    >
      <div
        data-slot="input-password-container"
        className={cn(
          inputPasswordContainerVariants({ size, variant }),
          classNames?.container,
          className
        )}
      >
        <InputPasswordPrimitive.Input
          data-slot="input-password-input"
          className={cn(
            inputPasswordInputVariants({ size, variant }),
            "peer/input-password-input",
            classNames?.input
          )}
          id={id}
          disabled={disabled}
          size={htmlSize}
          {...props}
        />
        <InputPasswordPrimitive.Toggle
          data-slot="input-password-toggle"
          className={cn(
            inputPasswordToggleVariants({ size, variant }),
            classNames?.toggle
          )}
        >
          <InputPasswordPrimitive.Icon
            visible={<EyeOffIcon aria-hidden="true" />}
            hidden={<EyeIcon aria-hidden="true" />}
          />
        </InputPasswordPrimitive.Toggle>
      </div>
    </InputPasswordPrimitive.Root>
  );
}

export { InputPasswordRadix };
