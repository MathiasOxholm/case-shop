import { Product, ProductResponse } from "@/types";
import { SortOrder } from "@/types";

type GetProductsParams = {
  sortOrder?: SortOrder;
  page?: number;
}

export async function getProducts({ sortOrder, page }: GetProductsParams) {
  const products = await fetch(`${process.env.API_URL}/products?sortOrder=${sortOrder}&page=${page}`);

  return products.json() as Promise<ProductResponse>;
}

export async function getProductById(id: string) {
  const products = await fetch(`${process.env.API_URL}/products/${id}`);

  return products.json() as Promise<Product>;
}