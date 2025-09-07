import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  totalPages: number;
  changePage: (page: number) => void;
  className?: string;
  isLoading?: boolean;
}

export function ProductPagination({ page, changePage, className, totalPages, isLoading }: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent className={cn(className)}>
        <PaginationItem>
          <PaginationPrevious disabled={page === 1 || isLoading} onClick={() => changePage(page - 1)} />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink isActive={page === index + 1} disabled={isLoading || index + 1 === page} onClick={() => changePage(index + 1)}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext disabled={page === totalPages || isLoading} onClick={() => changePage(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
