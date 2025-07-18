"use client";

import * as React from "react";
import Link from "next/link";
import { type VariantProps } from "tailwind-variants";

import { cn } from "~/lib/utils";

import { tabsListVariants, tabsTriggerVariants } from "~/components/ui/tabs";
import { Tron } from "~/components/ui/tron";

function TabNav({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav data-slot="tab-nav" className={cn("w-fit", className)} {...props} />
  );
}

type TabNavListContextProps = {
  variants?: {
    list?: VariantProps<typeof tabsListVariants>["variant"];
    link?: VariantProps<typeof tabsTriggerVariants>["variant"];
  };
};

const TabNavListContext = React.createContext<TabNavListContextProps>({});

function TabNavList({
  className,
  variants,
  ...props
}: React.ComponentProps<"ul"> & TabNavListContextProps) {
  return (
    <TabNavListContext.Provider value={{ variants }}>
      <ul
        data-slot="tab-nav-list"
        className={cn(tabsListVariants({ variant: variants?.list }), className)}
        {...props}
      />
    </TabNavListContext.Provider>
  );
}

function TabNavItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="tab-nav-item"
      className={cn("w-full", className)}
      {...props}
    />
  );
}

type TabNavLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof tabsTriggerVariants> & {
    isActive?: boolean;
    disabled?: boolean;
  };

function TabNavLink({
  className,
  variant,
  isActive,
  disabled,
  children,
  ...props
}: TabNavLinkProps) {
  const { variants } = React.useContext(TabNavListContext);
  const _variant = variant || variants?.link;

  return (
    <Link
      data-slot="tab-nav-link"
      data-state={isActive ? "active" : "inactive"}
      data-disabled={disabled ? "true" : undefined}
      aria-current={isActive ? "page" : undefined}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={cn(
        tabsTriggerVariants({ variant: _variant }),
        "flex",
        "group/tab-nav-link",
        className
      )}
      {...props}
    >
      {_variant?.includes("tron") && (
        <>
          <Tron
            side="bottom"
            type="beam"
            className="via-(--tron-beam) opacity-0 group-data-[state=active]/tab-nav-link:opacity-100"
          />
          <Tron
            side="bottom"
            type="blur"
            className="via-(--tron-blur) opacity-0 group-data-[state=active]/tab-nav-link:opacity-100"
          />
        </>
      )}
      {children}
    </Link>
  );
}

export { TabNav, TabNavList, TabNavItem, TabNavLink };
