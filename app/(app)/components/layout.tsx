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
    <div className="relative container flex h-full min-h-0 gap-12">
      <aside className="sticky top-12 z-10 hidden h-[calc(100svh-var(--header-h))] w-48 flex-none flex-col py-content lg:flex">
        <ComponentNav />
      </aside>
      <main className="mx-auto min-h-min w-full flex-1 px-4 py-content lg:px-0">
        <ComponentDemo>{children}</ComponentDemo>
      </main>
    </div>
  );
}
