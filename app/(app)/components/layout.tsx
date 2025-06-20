import { Metadata } from "next";

import { ComponentDemo } from "~/components/component-demo";
import { ComponentNav } from "~/components/component-nav";
import { ComponentPager } from "~/components/component-pager";

export const metadata: Metadata = {
  title: "Components",
  description: "Components",
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative container flex flex-1 gap-12">
      <aside className="relative z-10 hidden h-[calc(100svh-var(--header-h))] w-full max-w-48 shrink-0 mask-[linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] [--scroll-shadow-size:--spacing(8)] lg:sticky lg:top-12 lg:block">
        <ComponentNav />
      </aside>
      <main className="mx-auto flex w-full flex-1 flex-col gap-12 px-0 py-content">
        <ComponentDemo className="flex-1">{children}</ComponentDemo>
        <ComponentPager />
      </main>
    </div>
  );
}
