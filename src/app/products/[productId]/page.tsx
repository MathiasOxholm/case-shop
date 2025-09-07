import { PageLayout } from "@/components/global/page-layout";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/api";
import { SHOP_NAME } from "@/lib/constants";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = PageProps<'/products/[productId]'>;

export async function generateMetadata({ params }: Props) {
  const { productId } = await params;
  const product = await getProductById(productId);

  return {
    title: `${product.title} | ${SHOP_NAME}`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { productId } = await params;
  const product = await getProductById(productId);

  if (!product.id) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 py-8">
        <figure className="bg-gray-100 rounded-lg p-4">
          <Image src={product.images[0]} alt={product.title} width={500} height={500} className="w-full h-full object-cover" />
        </figure>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="mb-4">{product.description}</p>

          <p className="text-lg font-bold mb-4">Features:</p>
          <ul className="mb-4">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <p className="text-lg font-bold mb-4">${product.price}</p>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </PageLayout>
  );
}