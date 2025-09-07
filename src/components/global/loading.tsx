import { PageLayout } from "@/components/global/page-layout";
import { Loader2 } from "lucide-react";

type LoadingProps = {
  message?: string;
}

export default function Loading({ message = "Loading..." }: LoadingProps) {
  return <PageLayout className="flex justify-center items-center h-screen">
    <div className="flex items-center gap-2 flex-col">
      <Loader2 className="size-8 animate-spin" />
      <p>{message}</p>
    </div>
  </PageLayout>;
} 