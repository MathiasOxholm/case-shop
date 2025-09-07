import { SHOP_NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center text-sm bg-black text-white py-20">
      <p>Copyright © {currentYear} {SHOP_NAME}</p>
    </footer>
  );
}