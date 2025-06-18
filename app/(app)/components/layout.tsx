import { Metadata } from "next";

import { ComponentDemo } from "~/components/component-demo";
import { ComponentNav } from "~/components/component-nav";

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
    <div className="relative container grid grid-cols-1 gap-12 lg:grid-cols-[12rem_minmax(0,1fr)]">
      <aside className="relative z-10 hidden h-[calc(100svh-var(--header-h))] w-full shrink-0 mask-[linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] [--scroll-shadow-size:--spacing(8)] lg:sticky lg:top-12 lg:block">
        <ComponentNav />
      </aside>
      <main className="mx-auto min-h-min w-full px-4 py-content lg:px-0">
        <ComponentDemo>{children}</ComponentDemo>
      </main>
    </div>
  );
}
