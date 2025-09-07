import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="pt-0 overflow-hidden">
      <Image 
        src={product.images[0]} 
        alt={product.title} 
        width={400} 
        height={400} 
        loading="lazy" 
        className="w-full h-auto"
      />
      
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>Rating: {product.rating} / 5</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between items-center">
        <p className="text-lg font-bold">${product.price}</p>
        <Button asChild>
          <Link href={`/products/${product.id}`}>View product</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}