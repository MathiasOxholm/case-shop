import { NextRequest, NextResponse } from "next/server";

import Products from "@/db/products.json";

type RouteProps = {
  params: Promise<{ productId: string }>;
}

export async function GET(_request: NextRequest, { params }: RouteProps) {
  const { productId } = (await params);

  const product = Products.find((product) => product.id === productId);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}