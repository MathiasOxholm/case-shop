import { PageLayout } from "@/components/global/page-layout";
import { SHOP_NAME } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home | ${SHOP_NAME}`,
  description: 'Browse all products available in the store',
};

export default function Home() {
  return (
    <PageLayout className="pt-8">
      <div>
        <h1 className="text-2xl font-bold">Home</h1>
      </div>
    </PageLayout>
  );
}
