import { NextRequest, NextResponse } from "next/server";

import Products from "@/db/products.json";
import { Product, ProductResponse, SortOrder } from "@/types";

function sortProductsByPrice(products: Product[], sortOrder: SortOrder): Product[] {
  return products.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    }

    return b.price - a.price;
  });
}

const pageSize = 8;

export function GET(request: NextRequest): NextResponse {
  const searchParams = request.nextUrl.searchParams;
  const sortOrder = searchParams.get('sortOrder') as SortOrder;
  const page = parseInt(searchParams.get('page') || '1');

  const jsonProducts: Product[] = Products;
  const products = sortOrder ? sortProductsByPrice(jsonProducts, sortOrder) : jsonProducts;
  const paginatedProducts = products.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(products.length / pageSize);

  const response: ProductResponse = {
    products: paginatedProducts,
    total: products.length,
    totalPages,
  }

  return NextResponse.json(response);
}