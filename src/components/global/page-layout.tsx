import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type PageLayoutProps = PropsWithChildren<{
  className?: string;
}>

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={cn("min-h-screen", className)}>
      <div className="container mx-auto px-6 lg:px-12">
        {children}
      </div>
    </div>
  );
}