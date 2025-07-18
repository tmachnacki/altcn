import * as InputPasswordPrimitive from "@radix-ui/react-password-toggle-field";
import { tv, type VariantProps } from "tailwind-variants";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { cn } from "~/lib/utils";

const inputPasswordVariants = tv({
  slots: {
    container: [
      "relative grid w-full min-w-0 grid-cols-1 items-center rounded-md",
      "has-disabled:pointer-events-none has-disabled:opacity-50",
      "has-aria-invalid:text-destructive-accent-foreground",
    ],
    input: [
      "all-[unset] col-start-1 row-start-1 block h-full min-h-0 w-full shrink grow appearance-none self-center rounded-none bg-transparent text-inherit outline-none",
      "pr-[calc(var(--toggle-size)+var(--input-px)+var(--input-px))] pl-(--input-px)",
      "selection:bg-primary selection:text-primary-foreground",
      "aria-invalid:selection:bg-destructive aria-invalid:selection:text-destructive-foreground",
    ],
    toggle: [
      "touch-target col-start-1 row-start-1 mr-1 inline-flex shrink-0 grow-0 items-center justify-center self-center justify-self-end rounded-sm -outline-offset-1 focus-visible:outline-2 active:opacity-80",
      "mr-(--input-px) size-(--toggle-size) *:[svg]:size-(--toggle-size)",
      "disabled:pointer-events-none",
      "peer-disabled/input-password-input:pointer-events-none peer-disabled/input-password-input:text-muted-foreground",
      "peer-aria-invalid/input-password-input:text-destructive-muted-foreground peer-aria-invalid/input-password-input:outline-destructive peer-aria-invalid/input-password-input:hover:text-destructive-accent-foreground",
    ],
  },
  variants: {
    size: {
      sm: {
        container:
          "h-(--size-sm) [--input-px:--spacing(2.5)] [--toggle-size:--spacing(4)]",
        input: "py-1 text-sm",
      },
      md: {
        container:
          "h-(--size-md) [--input-px:--spacing(3)] [--toggle-size:--spacing(4)]",
        input: "py-1 text-base sm:text-sm",
      },
      lg: {
        container:
          "h-(--size-lg) [--input-px:--spacing(3.5)] [--toggle-size:--spacing(5)]",
        input: "py-1.5 text-base",
      },
    },
    variant: {
      outline: {
        container: [
          "bg-background text-foreground shadow-xs outline-1 -outline-offset-1 outline-border dark:bg-faded",
          "hover:not-focus-within:not-has-aria-invalid:outline-hover-border",
          "has-disabled:bg-faded has-disabled:shadow-none",
          "focus-within:outline-2 focus-within:outline-primary",
          "has-aria-invalid:outline-destructive has-aria-invalid:has-disabled:bg-destructive-faded dark:has-aria-invalid:bg-destructive-faded",
        ],
        input: [
          "placeholder:text-placeholder",
          "aria-invalid:placeholder:text-destructive-placeholder",
        ],
        toggle: "text-muted-foreground outline-outline hover:text-foreground",
      },
      muted: {
        container: [
          "bg-muted text-accent-foreground outline-0 -outline-offset-1",
          "hover:not-focus-within:not-has-aria-invalid:bg-hover-muted",
          "outline-primary focus-within:outline-2",
          "has-aria-invalid:bg-destructive-muted has-aria-invalid:outline-destructive has-aria-invalid:hover:not-has-disabled:not-focus-within:bg-hover-destructive-muted",
        ],
        input: [
          "placeholder:text-placeholder",
          "aria-invalid:placeholder:text-destructive-placeholder",
        ],
        toggle:
          "text-muted-foreground outline-outline hover:text-accent-foreground",
      },
      underlined: {
        container: [
          "rounded-none bg-transparent text-foreground shadow-[inset_0_-1px_0_0_var(--color-border)] outline-none hover:not-focus-within:not-has-aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-hover-border)]",
          "focus-within:shadow-[inset_0_-2px_0_0_var(--color-primary)]",
          "has-aria-invalid:shadow-[inset_0_-1px_0_0_var(--color-destructive)] has-aria-invalid:focus-within:shadow-[inset_0_-2px_0_0_var(--color-destructive)]",
        ],
        input: [
          "placeholder:text-placeholder",
          "aria-invalid:placeholder:text-destructive-placeholder",
        ],
        toggle: "text-muted-foreground outline-outline hover:text-foreground",
      },
      "primary-muted": {
        container: [
          "bg-primary-muted text-primary-accent-foreground outline-0 -outline-offset-1 hover:not-focus-within:not-has-aria-invalid:bg-hover-primary-muted",
          "has-disabled:bg-muted has-disabled:text-accent-foreground",
          "outline-primary focus-within:outline-2",
          "has-aria-invalid:bg-destructive-muted has-aria-invalid:focus-within:outline-destructive has-aria-invalid:hover:not-has-disabled:not-focus-within:bg-hover-destructive-muted",
        ],
        input: [
          "disabled:placeholder:text-placeholder",
          "placeholder:text-primary-placeholder",
          "aria-invalid:placeholder:text-destructive-placeholder",
        ],
        toggle:
          "text-primary-muted-foreground outline-primary hover:text-primary-accent-foreground",
      },
      "secondary-muted": {
        container: [
          "bg-secondary-muted text-secondary-accent-foreground outline-0 -outline-offset-1 hover:not-focus-within:not-has-aria-invalid:bg-hover-secondary-muted",
          "has-disabled:bg-muted has-disabled:text-accent-foreground",
          "outline-secondary focus-within:outline-2",
          "has-aria-invalid:bg-destructive-muted has-aria-invalid:focus-within:outline-destructive has-aria-invalid:hover:not-has-disabled:not-focus-within:bg-hover-destructive-muted",
        ],
        input: [
          "selection:bg-secondary selection:text-secondary-foreground",
          "disabled:placeholder:text-placeholder",
          "placeholder:text-secondary-placeholder",
          "aria-invalid:placeholder:text-destructive-placeholder",
        ],
        toggle:
          "text-secondary-muted-foreground outline-secondary hover:text-secondary-accent-foreground",
      },
    },
  },
  compoundVariants: [
    {
      size: "sm",
      variant: "underlined",
      className: {
        container: "[--input-px:--spacing(0.5)]",
        input:
          "pr-[calc(var(--toggle-size)+var(--input-px)+(var(--spacing)*2.5))]",
      },
    },
    {
      size: "md",
      variant: "underlined",
      className: {
        container: "[--input-px:--spacing(0.5)]",
        input:
          "pr-[calc(var(--toggle-size)+var(--input-px)+(var(--spacing)*3))]",
      },
    },
    {
      size: "lg",
      variant: "underlined",
      className: {
        container: "[--input-px:--spacing(0.5)]",
        input:
          "pr-[calc(var(--toggle-size)+var(--input-px)+(var(--spacing)*3.5))]",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});

type InputPasswordProps = Omit<
  React.ComponentProps<typeof InputPasswordPrimitive.Input>,
  "size"
> &
  VariantProps<typeof inputPasswordVariants> & {
    classNames?: {
      container?: string;
      input?: string;
      toggle?: string;
    };
    htmlSize?: number;

    // PasswordToggleField.Root props
    id?: string;
    visible?: boolean;
    defaultVisible?: boolean;
    onVisibilityChange?: (visible: boolean) => void; // typo in radix package: prop is named "onVisiblityChange"
  };

function InputPasswordRadix({
  size = "md",
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
  const { container, input, toggle } = inputPasswordVariants({ size, variant });
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
        className={cn(container(), classNames?.container, className)}
      >
        <InputPasswordPrimitive.Input
          data-slot="input-password-input"
          className={cn(
            input(),
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
          className={cn(toggle(), classNames?.toggle)}
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

export { InputPasswordRadix, inputPasswordVariants };
