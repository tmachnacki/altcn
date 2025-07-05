"use client";

import * as React from "react";
import {
  DayButton,
  DayPicker,
  Dropdown,
  getDefaultClassNames,
  type DateRange,
} from "react-day-picker";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

type SelectVariants = {
  selectTrigger?: React.ComponentProps<typeof SelectTrigger>["variant"];
  selectItem?: React.ComponentProps<typeof SelectItem>["variant"];
  selectItemWidth?: React.ComponentProps<typeof SelectItem>["width"];
};

type DayVariants = {
  unselected?: Extract<
    React.ComponentProps<typeof Button>["variant"],
    "ghost" | "primary-ghost" | "secondary-ghost"
  >;
  selected?: Extract<
    React.ComponentProps<typeof Button>["variant"],
    | "base"
    | "primary"
    | "primary-shadow"
    | "primary-gradient"
    | "primary-tron"
    | "secondary"
    | "secondary-shadow"
    | "secondary-gradient"
    | "secondary-tron"
  >;
  range?: Extract<
    React.ComponentProps<typeof Button>["variant"],
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
    | "secondary-faded"
  >;
};

type CalendarVariants = {
  variants?: {
    nav?: React.ComponentProps<typeof Button>["variant"];
  } & SelectVariants &
    DayVariants;
};

const CalendarContext = React.createContext<CalendarVariants>({});

// const rangeVariants = (
//   range: DayVariants["range"] = "primary-muted",
//   position: "start" | "middle" | "end"
// ) => {
//   return cn(
//     {
//       accent: "bg-muted",
//       muted: "bg-muted",
//       surface: "bg-faded",
//       faded: "bg-faded",
//       "primary-accent": "bg-primary-muted",
//       "primary-muted": "bg-primary-muted",
//       "primary-surface": "bg-primary-faded",
//       "primary-faded": "bg-primary-faded",
//       "secondary-accent": "bg-secondary-muted",
//       "secondary-muted": "bg-secondary-muted",
//       "secondary-surface": "bg-secondary-faded",
//       "secondary-faded": "bg-secondary-faded",
//     }[range],
//     {
//       start: "rounded-l-md",
//       middle: "rounded-none",
//       end: "rounded-r-md",
//     }[position]
//   );
// };

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  variants = {
    nav: "ghost",
    selectTrigger: "outline",
    selectItem: "accent",
    selectItemWidth: "default",
    unselected: "primary-ghost",
    selected: "primary-gradient",
    range: "primary-accent",
  },
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & CalendarVariants) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <CalendarContext.Provider value={{ variants }}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          "group/calendar relative isolate bg-transparent p-3 [--cell-size:var(--size-sm)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
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
            "relative flex flex-col gap-4 md:flex-row",
            defaultClassNames.months
          ),
          month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
          nav: cn(
            "absolute inset-x-0 top-0 flex h-(--cell-size) w-full items-center justify-between gap-1",
            defaultClassNames.nav
          ),
          button_previous: cn(
            buttonVariants({ variant: variants.nav, size: "icon-sm" }),
            "size-7 rounded-full text-subtle-foreground hover:text-accent-foreground",
            defaultClassNames.button_previous
          ),
          button_next: cn(
            buttonVariants({ variant: variants.nav, size: "icon-sm" }),
            "size-7 rounded-full text-subtle-foreground hover:text-accent-foreground",
            defaultClassNames.button_next
          ),
          month_caption: cn(
            "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
            defaultClassNames.month_caption
          ),
          dropdowns: cn(
            "grid h-(--cell-size) w-full grid-cols-2 gap-1.5 px-1.5 text-sm",
            defaultClassNames.dropdowns
          ),
          dropdown_root: cn("", defaultClassNames.dropdown_root),
          dropdown: cn(
            "absolute inset-0 opacity-0",
            defaultClassNames.dropdown
          ),
          caption_label: cn(
            "font-medium select-none",
            captionLayout === "label"
              ? "text-sm"
              : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
            defaultClassNames.caption_label
          ),
          table: "w-full border-collapse",
          weekdays: cn("flex", defaultClassNames.weekdays),
          weekday: cn(
            "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
            defaultClassNames.weekday
          ),
          week: cn("mt-1 flex w-full", defaultClassNames.week),
          week_number_header: cn(
            "w-(--cell-size) select-none",
            defaultClassNames.week_number_header
          ),
          week_number: cn(
            "text-[0.8rem] text-muted-foreground select-none",
            defaultClassNames.week_number
          ),
          day: cn(
            "group/day relative inline-flex aspect-square h-full w-full items-center justify-center p-0 select-none first:data-[selected=true]:rounded-l-md last:data-[selected=true]:rounded-r-md data-[selected=true]:first:*:[button]:rounded-l-md data-[selected=true]:last:*:[button]:rounded-r-md",
            defaultClassNames.day
          ),
          range_start: cn(
            // rangeVariants(variants.range, "start"),
            "rounded-l-md",
            defaultClassNames.range_start
          ),
          range_middle: cn(
            // rangeVariants(variants.range, "middle"),
            "rounded-none",
            defaultClassNames.range_middle
          ),
          range_end: cn(
            // rangeVariants(variants.range, "end"),
            "rounded-r-md",
            defaultClassNames.range_end
          ),
          today: cn(
            // "before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-2 before:size-1 before:rounded-full before:bg-current",
            // "underline underline-offset-4",
            defaultClassNames.today
          ),
          outside: cn(
            // "text-muted-foreground pointer-events-none",
            "bg-transparent",
            defaultClassNames.outside
          ),
          disabled: cn(
            "pointer-events-none text-muted-foreground line-through opacity-50",
            defaultClassNames.disabled
          ),
          hidden: cn("invisible", defaultClassNames.hidden),
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => {
            return (
              <div
                data-slot="calendar"
                ref={rootRef}
                className={cn(className)}
                {...props}
              />
            );
          },
          Chevron: ({ className, orientation, ...props }) => {
            if (orientation === "left") {
              return (
                <ChevronLeftIcon
                  className={cn("size-4", className)}
                  {...props}
                />
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
    </CalendarContext.Provider>
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

  return (
    <Button
      ref={ref}
      variant={variant()}
      size="icon-sm"
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
      className={cn(
        "aspect-square size-auto w-full min-w-(--cell-size) gap-0 p-0 leading-none font-normal tabular-nums outline-offset-1 focus-visible:outline-1",

        "group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10",

        // "data-[selected=true]:outline-primary",

        "not-data-[selected=true]:group-not-data-[outside=true]/day:text-subtle-foreground hover:not-data-[selected=true]:group-not-data-[outside=true]/day:text-accent-foreground",

        "data-[today=true]:underline data-[today=true]:underline-offset-2",

        "data-[range-end=true]:rounded-l-none data-[range-end=true]:rounded-r-md data-[range-end=true]:border-l-0",
        // "data-[range-end=true]:group-not-data-[outside=true]/day:bg-primary data-[range-end=true]:group-not-data-[outside=true]/day:text-primary-foreground",

        "data-[range-middle=true]:rounded-none data-[range-middle=true]:border-r-0 data-[range-middle=true]:border-l-0",
        // "data-[range-middle=true]:group-not-data-[outside=true]/day:bg-primary-muted data-[range-middle=true]:group-not-data-[outside=true]/day:text-primary-muted-foreground hover:data-[range-middle=true]:group-not-data-[outside=true]/day:bg-hover-primary-muted hover:data-[range-middle=true]:group-not-data-[outside=true]/day:text-primary-accent-foreground",

        "data-[range-start=true]:rounded-l-md data-[range-start=true]:rounded-r-none data-[range-start=true]:border-r-0",
        // "data-[range-start=true]:group-not-data-[outside=true]/day:bg-primary data-[range-start=true]:group-not-data-[outside=true]/day:text-primary-foreground",

        // "data-[selected-single=true]:group-not-data-[outside=true]/day:bg-primary data-[selected-single=true]:group-not-data-[outside=true]/day:text-primary-foreground",

        "group-data-[outside=true]/day:pointer-events-none group-data-[outside=true]/day:border-0 group-data-[outside=true]/day:bg-transparent group-data-[outside=true]/day:bg-none group-data-[outside=true]/day:text-muted-foreground/75 group-data-[outside=true]/day:shadow-none",
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
        className="relative z-10 w-full"
        size={"sm"}
        variant={variants?.selectTrigger}
      >
        <SelectValue>{selected?.label}</SelectValue>
      </SelectTrigger>
      <SelectContent
        className="max-h-96 w-24 min-w-0"
        width={variants?.selectItemWidth}
        variant={variants?.selectItem}
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

export { Calendar, type DateRange };
