type ComponentDemoWrapperProps = {
  title: string;
  id: string;
  children: React.ReactNode;
};

export function ComponentDemoWrapper({
  title,
  id,
  children,
}: ComponentDemoWrapperProps) {
  return (
    <div className="scroll-mt-24 space-y-3" id={id}>
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="min-h-48 rounded-md border p-8">{children}</div>
    </div>
  );
}
