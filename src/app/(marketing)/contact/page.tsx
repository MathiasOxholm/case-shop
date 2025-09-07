import { PageLayout } from "@/components/global/page-layout";
import { SHOP_NAME } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact | ${SHOP_NAME}`,
  description: "Contact us for any questions or feedback",
}

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="py-8">
        <h1 className="text-2xl font-bold">Contact</h1>
      </div>
    </PageLayout>
  );
}