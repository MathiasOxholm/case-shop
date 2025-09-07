import { PageLayout } from "@/components/global/page-layout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="text-sm text-gray-500">The product you are looking for does not exist.</p>
      </div>
    </PageLayout>
  );
}
