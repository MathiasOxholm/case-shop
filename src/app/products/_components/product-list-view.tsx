'use client';

import { ProductList } from "@/components/product/product-list";
import { Button } from "@/components/ui/button";
import { Product, SortOrder } from "@/types";
import { useQueryState } from "nuqs";
import { searchParams } from './search-params';
import { useEffect, useTransition } from "react";
import { cn } from "@/lib/utils";
import { ProductPagination } from "./pagination";

type ProductListViewProps = {
  products: Product[];
  title: string;
  description: string;
  total: number;
  totalPages: number;
}

export function ProductListView({ products, title, description, total, totalPages }: ProductListViewProps) {
  const [isLoading, startTransition] = useTransition();
  const [sortOrderState, setSortOrderState] = useQueryState(
    'sortOrder', 
    searchParams.sortOrder.withOptions({
      startTransition,
      shallow: false
    }),
  );

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withOptions({
      startTransition,
      shallow: false
    }),
  );

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleSortChange(newSortOrder: SortOrder) {
    setPage(1);
    setSortOrderState(newSortOrder);
  };

  function handlePageChange(newPage: number) {
    setPage(newPage);
  };

  useEffect(() => {
    handleScrollToTop();
  }, [sortOrderState, page]);

  return (
    <div>
      <div className={cn('flex flex-col lg:flex-row justify-between lg:items-center mb-8', isLoading && 'opacity-50 pointer-events-none')}>
        <div>
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        
        <div className="flex gap-2 items-center mt-8 lg:mt-0">
          <span className="text-sm text-gray-600">{total} products</span>
          <Button 
            variant={sortOrderState === 'asc' ? 'default' : 'outline'} 
            onClick={() => handleSortChange('asc')}
            disabled={isLoading || sortOrderState === 'asc'}
          >
            Ascending
          </Button>
          <Button 
            variant={sortOrderState === 'desc' ? 'default' : 'outline'} 
            onClick={() => handleSortChange('desc')}
            disabled={isLoading || sortOrderState === 'desc'}
          >
            Descending
          </Button>
        </div>
      </div>

      <ProductList products={products} isLoading={isLoading} />

      <ProductPagination 
        page={page} 
        changePage={handlePageChange} 
        className="mt-20" 
        totalPages={totalPages}
        isLoading={isLoading}
      />
    </div>
  )
}