import { PageLayout } from "@/components/global/page-layout";
import { SHOP_NAME } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About | ${SHOP_NAME}`,
  description: "About the store",
}

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-8">
        <h1 className="text-2xl font-bold">About</h1>
      </div>
    </PageLayout>
  );
}