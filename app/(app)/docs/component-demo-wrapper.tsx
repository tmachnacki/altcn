type ComponentDemoWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export function ComponentDemoWrapper({
  title,
  children,
}: ComponentDemoWrapperProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="min-h-48 rounded-md border p-4">{children}</div>
    </div>
  );
}
