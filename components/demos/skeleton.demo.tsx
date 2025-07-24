import { Card, CardBody, CardHeader } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { ComponentContainer } from "~/components/component-container";

export function SkeletonDemo() {
  return (
    <ComponentContainer>
      <div className="flex h-full w-full flex-1 flex-col gap-8">
        <div className="flex items-center gap-4">
          <Skeleton className="size-10 shrink-0 rounded-full" />
          <div className="grid gap-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardBody>
                <Skeleton className="aspect-square w-full" />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </ComponentContainer>
  );
}
