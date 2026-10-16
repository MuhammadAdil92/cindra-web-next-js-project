"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";

import type { SiteNavItem } from "@/components/home/SiteHeader";
import { cn } from "@/lib/utils";

export type MobileNavDrawerProps = {
  open: boolean;
  onClose: () => void;
  navItems: readonly SiteNavItem[];
};

export default function MobileNavDrawer({ open, onClose, navItems }: MobileNavDrawerProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[90] bg-black/35 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        onClick={onClose}
      />

      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "fixed inset-y-0 left-0 z-[100] flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "pointer-events-none -translate-x-full",
        )}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-[#E8E6EF] px-6 py-5">
          <span className="text-[22px] font-semibold text-[#2B214F]">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center cursor-pointer justify-center rounded-xl text-[#2B214F] transition-colors hover:bg-[#F5F3FB]"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-3 overflow-y-auto px-6 py-6" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="rounded-xl bg-[#F5F3FB] cursor-pointer px-5 py-4 text-[18px] font-medium text-[#2B214F] transition-colors hover:bg-[#EDE9F9]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="shrink-0 border-t border-[#E8E6EF] p-6 pt-4">
          <Link
            href="#early-access"
            onClick={onClose}
            className="block w-full rounded-xl cursor-pointer bg-[#3E2E6F] px-6 py-4 text-center text-[18px] font-semibold text-white shadow-md transition-opacity hover:opacity-95"
          >
            Request Early Access
          </Link>
        </div>
      </aside>
    </>
  );
}
