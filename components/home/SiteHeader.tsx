"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileNavDrawer from "@/components/home/MobileNavDrawer";

export type SiteNavItem = {
  label: string;
  href: string;
};

export const SITE_NAV_ITEMS: readonly SiteNavItem[] = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Metrics", href: "#metrics" },
  { label: "Deployment", href: "#deployment" },
] as const;

export default function  SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex w-full items-center justify-between md:gap-4">
        <div className="flex min-w-0 items-center gap-6 lg:gap-11">
          <div className="flex items-center gap-2 sm:gap-[10px]  pb-2 md:pb-0">
            <img
              src="/assets/8-1016/cindera-logo.svg"
              alt=""
              className="h-11 w-auto sm:h-[54px]"
            />
          </div>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {SITE_NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[18px] font-medium leading-snug text-[#2B214F] xl:text-[20px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="#early-access"
            className="hidden cursor-pointer rounded-[12px] bg-[#3E2E6F] px-6 py-4 text-[17px] font-medium leading-tight text-white lg:inline-flex xl:px-8 xl:py-5 xl:text-[20px]"
          >
            Request Early Access
          </Link>

          <button
            type="button"
            className="flex h-11 w-11  cursor-pointer items-center justify-center rounded-xl text-[#2B214F] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-7 w-7" strokeWidth={2} />
          </button>
        </div>
      </header>

      <MobileNavDrawer open={menuOpen} onClose={() => setMenuOpen(false)} navItems={SITE_NAV_ITEMS} />
    </>
  );
}
