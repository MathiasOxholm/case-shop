export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  dimensions: {
    length?: string;
    width?: string;
    height?: string;
    [key: string]: string | undefined;
  };
  materials: string[];
  colors: string[];
  category: string;
  images: string[];
  features: string[];
}

export type ProductResponse = {
  products: Product[];
  total: number;
  totalPages: number;
}