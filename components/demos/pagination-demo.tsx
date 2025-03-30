import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo() {
  // const paginationLinkVariants = [
  //   "base",
  //   "outline",
  //   "accent",
  //   "muted",
  //   "surface",
  //   "faded",
  //   "ghost",
  //   "link",
  //   "input",
  //   "primary",
  //   "primary-accent",
  //   "primary-muted",
  //   "primary-surface",
  //   "primary-faded",
  //   "primary-tron",
  //   "primary-shadow",
  //   "primary-gradient",
  //   "primary-ghost",
  //   "secondary",
  //   "secondary-accent",
  //   "secondary-muted",
  //   "secondary-surface",
  //   "secondary-faded",
  //   "secondary-tron",
  //   "secondary-shadow",
  //   "secondary-gradient",
  //   "secondary-ghost",
  // ] as const;

  return (
    <div className="flex flex-col gap-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#pagination" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pagination">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pagination" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pagination">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#pagination" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
