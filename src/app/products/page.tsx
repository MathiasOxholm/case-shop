import { PageLayout } from "@/components/global/page-layout";
import { getProducts } from "@/lib/api";
import { SHOP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import { ProductListView } from "./_components/product-list-view";
import { SortOrder } from "@/types";
import { searchParamsCache } from "./_components/search-params";

const TITLE = "All products";
const DESCRIPTION = "Browse all products available in the store";

export const metadata: Metadata = {
  title: `${TITLE} | ${SHOP_NAME}`,
  description: DESCRIPTION,
}

type Props = PageProps<'/products'> & {
  searchParams: Promise<{
    sortOrder?: SortOrder;
    page?: number;
  }>;
};

export default async function ProductListPage({ searchParams }: Props) {
  await searchParamsCache.parse(searchParams);
  const { sortOrder, page } = searchParamsCache.all() as { sortOrder: SortOrder, page: number };

  const { products, total, totalPages } = await getProducts({ sortOrder, page });

  return (
    <PageLayout className="py-20">
      <ProductListView 
        products={products} 
        title={TITLE} 
        description={DESCRIPTION} 
        total={total}
        totalPages={totalPages}
      />
    </PageLayout>
  );
}