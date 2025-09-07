import { NextRequest, NextResponse } from "next/server";

import Products from "@/db/products.json";

export async function GET(_request: NextRequest, { params }: PageProps<'/products/[productId]'>) {
  const { productId } = (await params);

  const product = Products.find((product) => product.id === productId);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}