import { SHOP_NAME } from "@/lib/constants";
import { BriefcaseBusiness } from 'lucide-react';
import Link from "next/link";

const navigationLinks = [
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export function Header() {
  return (
    <header className="flex justify-between items-center h-20 border-b fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center h-full">
        <Link href="/" className="flex items-center gap-2">
          <BriefcaseBusiness className="w-6 h-6" />
          <p className="text-lg font-bold">{SHOP_NAME}</p>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="h-full">
            <ul className="flex gap-6 h-full items-center">
              {navigationLinks.map((link) => (
                <li key={link.href} className="h-full">
                  <Link href={link.href} className="h-full flex items-center">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}