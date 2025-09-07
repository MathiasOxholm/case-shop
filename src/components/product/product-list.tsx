import { Product } from "@/types";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";

type ProductListProps = {
  products: Product[];
  isLoading?: boolean;
}

export function ProductList({ products, isLoading }: ProductListProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", isLoading && 'opacity-50 pointer-events-none')}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}