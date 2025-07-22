"use client";

import * as React from "react";
import {
  DayButton,
  DayPicker,
  Dropdown,
  getDefaultClassNames,
} from "react-day-picker";
import { tv, type VariantProps } from "tailwind-variants";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

import { cn } from "~/lib/utils";

import { Button, buttonVariants } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  selectContentVariants,
  SelectItem,
  selectItemIndicatorVariants,
  selectItemVariants,
  SelectTrigger,
  selectTriggerVariants,
  SelectValue,
} from "~/components/ui/select";

const dayVariants = tv({
  base: [
    "group/day",
    "relative inline-flex aspect-square h-full w-full items-center justify-center bg-transparent p-0 select-none",
    // apply radius to button child if first or last day of week
    "data-[selected=true]:first:*:[button]:rounded-l-md data-[selected=true]:last:*:[button]:rounded-r-md",
  ],
  variants: {
    range: {
      outline:
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:border-border not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:border-border",

      accent:
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-muted not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-muted",

      muted:
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-muted not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-muted",

      surface: [
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-faded not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-faded",
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:border-faded-border not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:border-faded-border",
      ],

      faded: [
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-faded not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-faded",
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:border-faded-border not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:border-faded-border",
      ],

      "primary-accent":
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-primary-muted not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-primary-muted",

      "primary-muted":
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-primary-muted not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-primary-muted",

      "primary-surface": [
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-primary-faded not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-primary-faded",
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:border-primary-faded-border not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:border-primary-faded-border",
      ],

      "primary-faded": [
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-primary-faded not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-primary-faded",
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:border-primary-faded-border not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:border-primary-faded-border",
      ],

      "secondary-accent":
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-secondary-muted not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-secondary-muted",

      "secondary-muted":
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-secondary-muted not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-secondary-muted",

      "secondary-surface": [
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-secondary-faded not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-secondary-faded",
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:border-secondary-faded-border not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:border-secondary-faded-border",
      ],

      "secondary-faded": [
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:bg-secondary-faded not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:bg-secondary-faded",
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:border-secondary-faded-border not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:border-secondary-faded-border",
      ],
    },
  },
  compoundVariants: [
    {
      range: [
        "outline",
        "surface",
        "faded",
        "primary-surface",
        "primary-faded",
        "secondary-surface",
        "secondary-faded",
      ],
      className: [
        // apply border-y to day cell if start or end of range
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-end=true]:border-y not-data-[outside=true]:data-[selected=true]:has-data-[range-start=true]:border-y",

        // apply border-l to button child when previous day is outside
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-middle=true]:[&:is(:where([data-outside='true'])_+_*)]:*:[button]:border-l",

        // apply border-r to button child when next day is outside
        "not-data-[outside=true]:data-[selected=true]:has-data-[range-middle=true]:[&:is(:has(+_[data-outside='true']))]:*:[button]:border-r",

        // apply border to button child if first or last day of week
        "not-data-[outside=true]:data-[selected=true]:first:*:[button]:border-l not-data-[outside=true]:data-[selected=true]:last:*:[button]:border-r",
      ],
    },
  ],
});

type SelectVariants = {
  select?: {
    trigger?: VariantProps<typeof selectTriggerVariants>["variant"];
    content?: VariantProps<typeof selectContentVariants>["variant"];
    item?: VariantProps<typeof selectItemVariants>["variant"];
    indicator?: VariantProps<typeof selectItemIndicatorVariants>["variant"];
    width?: VariantProps<typeof selectItemVariants>["width"];
  };
};

type DayVariants = {
  unselected?: "ghost" | "primary-ghost" | "secondary-ghost";
  selected?:
    | "contrast"
    | "base"
    | "base-shadow"
    | "base-gradient"
    | "primary"
    | "primary-shadow"
    | "primary-gradient"
    | "primary-tron"
    | "secondary"
    | "secondary-shadow"
    | "secondary-gradient"
    | "secondary-tron";

  range?:
    | "outline"
    | "accent"
    | "muted"
    | "surface"
    | "faded"
    | "primary-accent"
    | "primary-muted"
    | "primary-surface"
    | "primary-faded"
    | "secondary-accent"
    | "secondary-muted"
    | "secondary-surface"
    | "secondary-faded";
};

type CalendarVariants = {
  variants?: {
    nav?:
      | "outline"
      | "accent"
      | "muted"
      | "surface"
      | "faded"
      | "ghost"
      | "primary-accent"
      | "primary-muted"
      | "primary-surface"
      | "primary-faded"
      | "primary-ghost"
      | "secondary-accent"
      | "secondary-muted"
      | "secondary-surface"
      | "secondary-faded"
      | "secondary-ghost";
  } & SelectVariants &
    DayVariants;
};

const CalendarContext = React.createContext<CalendarVariants>({});

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  variants = {
    select: {
      trigger: "outline",
      content: "solid",
      item: "accent",
      indicator: "base",
      width: "default",
    },
    nav: "ghost",
    unselected: "ghost",
    selected: "primary",
    range: "primary-muted",
  },
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & CalendarVariants) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "[--caption-size:var(--size-md)] [--cell-size:var(--size-lg)] [--nav-size:var(--size-sm)] sm:[--caption-size:var(--size-sm)] sm:[--cell-size:var(--size-md)] sm:[--nav-size:var(--size-xs)]",
        "group/calendar",
        "relative isolate bg-transparent p-3",
        "[[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-5 sm:gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn(
          "flex w-full flex-col gap-5 sm:gap-4",
          defaultClassNames.month
        ),
        nav: cn(
          "absolute top-0 right-0 flex h-(--caption-size) w-fit items-center justify-center gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: variants.nav, size: "icon-xs" }),
          "rounded-full",
          variants.nav?.includes("ghost") && "text-subtle-foreground",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: variants.nav, size: "icon-xs" }),
          "rounded-full",
          variants.nav?.includes("ghost") && "text-subtle-foreground",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--caption-size) w-full items-center justify-start pr-[calc((var(--spacing)*4)_+_(var(--nav-size)*2))]",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "grid h-(--caption-size) w-full grid-cols-2 gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn("", defaultClassNames.dropdown_root),
        dropdown: cn("absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "flex items-center gap-2 pl-2.5 text-base font-medium text-subtle-foreground select-none sm:text-sm *:[svg]:size-(--icon-lg) *:[svg]:text-muted-foreground sm:*:[svg]:size-(--icon-md)",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-md text-base font-normal text-muted-foreground select-none sm:text-sm",
          defaultClassNames.weekday
        ),
        week: cn("mt-1 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-base text-muted-foreground select-none sm:text-sm",
          defaultClassNames.week_number
        ),
        day: cn(dayVariants({ range: variants.range }), defaultClassNames.day),
        range_start: cn("rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md", defaultClassNames.range_end),
        today: cn(defaultClassNames.today),
        outside: cn("bg-transparent", defaultClassNames.outside),
        disabled: cn(
          "pointer-events-none bg-transparent bg-none",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, children, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            >
              <CalendarContext.Provider value={{ variants }}>
                {children}
              </CalendarContext.Provider>
            </div>
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },
        DayButton: CalendarDayButton,
        Dropdown: CalendarDropdown,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const { variants } = React.useContext(CalendarContext);
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const variant = React.useCallback(() => {
    if (
      modifiers.selected &&
      !modifiers.range_start &&
      !modifiers.range_end &&
      !modifiers.range_middle
    ) {
      return variants?.selected;
    } else if (modifiers.range_start || modifiers.range_end) {
      return variants?.selected;
    } else if (modifiers.range_middle) {
      return variants?.range;
    } else {
      return variants?.unselected;
    }
  }, [
    variants?.selected,
    variants?.range,
    variants?.unselected,
    modifiers.selected,
    modifiers.range_start,
    modifiers.range_end,
    modifiers.range_middle,
  ]);

  const _variant = variant();

  return (
    <Button
      ref={ref}
      variant={_variant}
      size="icon-md"
      data-day={day.date.toLocaleDateString()}
      data-selected={modifiers.selected}
      // data-selected-single={
      //   modifiers.selected &&
      //   !modifiers.range_start &&
      //   !modifiers.range_end &&
      //   !modifiers.range_middle
      // }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      data-today={modifiers.today}
      data-disabled={modifiers.disabled}
      disabled={modifiers.disabled}
      className={cn(
        "z-10 gap-0 p-0 text-base leading-none font-normal tabular-nums outline-offset-1 focus-visible:outline-1 sm:text-sm",

        "data-[disabled=true]:line-through data-[disabled=true]:not-data-[selected=true]:border-0 data-[disabled=true]:not-data-[selected=true]:bg-transparent data-[disabled=true]:not-data-[selected=true]:bg-none data-[disabled=true]:not-data-[selected=true]:text-muted-foreground data-[disabled=true]:not-data-[selected=true]:inset-ring-0",

        "group-data-[focused=true]/day:z-20",

        "data-[today=true]:before:absolute data-[today=true]:before:bottom-[20%] data-[today=true]:before:left-[35%] data-[today=true]:before:h-px data-[today=true]:before:w-[30%] data-[today=true]:before:rounded-full data-[today=true]:before:bg-current data-[today=true]:before:content-['']",

        "not-data-[selected=true]:group-not-data-[outside=true]/day:text-subtle-foreground hover:not-data-[selected=true]:group-not-data-[outside=true]/day:text-accent-foreground",

        "data-[range-end=true]:border-l-0",

        "data-[range-middle=true]:rounded-none data-[range-middle=true]:border-r-0 data-[range-middle=true]:border-l-0",

        "data-[range-start=true]:border-r-0",

        "group-data-[outside=true]/day:pointer-events-none group-data-[outside=true]/day:border-0 group-data-[outside=true]/day:bg-transparent group-data-[outside=true]/day:bg-none group-data-[outside=true]/day:text-muted-foreground/75 group-data-[outside=true]/day:shadow-none group-data-[outside=true]/day:inset-ring-0",

        _variant?.includes("tron") && "group-data-[outside=true]/day:*:[[data-slot*='tron-']]:hidden",


        defaultClassNames.day,
        className
      )}
      {...props}
    />
  );
}

function CalendarDropdown({
  value,
  onChange,
  options,
}: React.ComponentProps<typeof Dropdown>) {
  const { variants } = React.useContext(CalendarContext);

  const selected = options?.find((option) => option.value === value);
  const handleChange = (value: string) => {
    const changeEvent = {
      target: { value },
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange?.(changeEvent);
  };
  return (
    <Select
      value={value?.toString()}
      onValueChange={(value) => {
        handleChange(value);
      }}
    >
      <SelectTrigger
        className="relative z-10 w-full text-base sm:text-sm"
        size={"sm"}
        variant={variants?.select?.trigger}
      >
        <SelectValue>{selected?.label}</SelectValue>
      </SelectTrigger>
      <SelectContent
        className="max-h-[25rem] w-24 min-w-0"
        width={variants?.select?.width}
        variants={{
          content: variants?.select?.content,
          item: variants?.select?.item,
          indicator: variants?.select?.indicator,
        }}
      >
        {options?.map(({ value, label, disabled }, id) => (
          <SelectItem
            key={`${value}-${id}`}
            value={value?.toString()}
            disabled={disabled}
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export { Calendar };
