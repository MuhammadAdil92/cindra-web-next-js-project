"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

/** Trim so stray spaces/newlines from .env copies don’t break IDs */
const emailjsPublicKey = (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "").trim();
const emailjsServiceId = (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "").trim();
const emailjsTemplateId = (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "").trim();

function getEmailJsApiText(error: unknown): string {
  if (
    error &&
    typeof error === "object" &&
    "text" in error &&
    typeof (error as { text: unknown }).text === "string"
  ) {
    return (error as { text: string }).text;
  }
  return "";
}

function emailJsToastMessage(error: unknown): string {
  const text = getEmailJsApiText(error);
  return text.trim() || "Something went wrong. Please try again in a moment.";
}

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Metrics", href: "#metrics" },
  { label: "Deployment", href: "#deployment" },
] as const;

export default function FinalCtaSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedEmail || !isValidEmail) {
      toast.error("Please enter a valid work email.");
      return;
    }

    if (!emailjsPublicKey || !emailjsServiceId || !emailjsTemplateId) {
      toast.error("Email sign-up is not configured. Add EmailJS keys to your environment.");
      return;
    }

    if (
      emailjsServiceId.startsWith("template_") ||
      emailjsTemplateId.startsWith("service_")
    ) {
      toast.error("EmailJS IDs look swapped in .env", {
        description:
          "NEXT_PUBLIC_EMAILJS_SERVICE_ID must look like service_xxxx. NEXT_PUBLIC_EMAILJS_TEMPLATE_ID must look like template_xxxx. Fix environments/.local.env (or staging/production), save, then restart dev.",
        duration: 14_000,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          // Must match EmailJS template placeholders (e.g. {{email}}, {{title}})
          email: trimmedEmail,
          title: "Early access request",
          user_email: trimmedEmail,
          message: `Early access request from ${trimmedEmail}`,
        },
        emailjsPublicKey,
      );
      toast.success("Email sent successfully.");
      setEmail("");
    } catch (error: unknown) {
      const apiText = getEmailJsApiText(error);
      if (/template id not found/i.test(apiText)) {
        toast.error("EmailJS: template ID not found", {
          description:
            "In https://dashboard.emailjs.com/admin → Email Templates, open your template. Copy the Template ID shown there (starts with template_) into NEXT_PUBLIC_EMAILJS_TEMPLATE_ID. It must belong to the same EmailJS account as your Public Key. Restart npm run dev after saving.",
          duration: 16_000,
        });
      } else {
        toast.error(emailJsToastMessage(error));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#3E2E6F]">
      <div className="relative w-full px-[10px]">
        <div className="relative w-full overflow-hidden pb-10 pt-8 md:pb-[58px] md:pt-[72px]">
          <div
            className="pointer-events-none absolute inset-0 h-full w-full bg-[url('/assets/mobile-footer-bg.png')] bg-cover bg-bottom bg-no-repeat md:bg-[url('/assets/footer-bg.png')]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex max-w-[1320px] flex-col items-start px-4 text-left md:items-center md:px-8 md:text-center">
            <h2 className="max-w-full text-balance text-[32px] font-semibold leading-[1.1] text-[#2B214F] md:mx-auto md:max-w-none md:text-[62px] md:leading-[1.2]">
             Made With Love Developed by Muhammad Adil
            </h2>
            <p className="mt-4 max-w-[616px] text-pretty text-[16px] leading-[1.45] text-[#0F172A] md:mx-auto md:mt-6 md:text-[20px] md:leading-[1.25]">
              We&apos;re onboarding pilot hospitals now. Request early access and we&apos;ll be in touch to
              discuss how Cindera fits your facility.
            </p>
            <form
              id="early-access"
              className="mt-8 pb-35 md:pb-1 flex w-full max-w-[576px] flex-col items-stretch gap-3 md:mt-[57px] md:flex-row md:items-start md:justify-center md:gap-[14px]"
              onSubmit={handleSubmit}
            >
              <label htmlFor="cta-email" className="sr-only">
                Work email
              </label>
              <input
                id="cta-email"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="your@hospital.org"
                className="h-[60px] w-full rounded-[14px] border border-[#3E2E6F] bg-[#F1F0F8] px-5 text-[15px] text-[#2B214F] placeholder:text-[#2B214F]/45 outline-none focus-visible:ring-2 focus-visible:ring-[#3E2E6F]/35"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[60px] w-fit shrink-0 rounded-[14px] bg-[#3E2E6F] px-[44px] text-[24px] font-medium text-white transition-colors hover:bg-[#32265d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 disabled:pointer-events-none disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="relative z-10 mt-3 md:mt-8">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 pb-4 pt-4 md:gap-x-8"
          aria-label="Footer"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[16px] font-medium leading-[21px] text-white transition-opacity hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative overflow-hidden">
          <div className="relative z-[1] mx-auto flex h-[120px] w-full max-w-[100vw] items-end justify-center overflow-hidden md:h-[320px]">
            <p className="translate-y-[10%] select-none text-center text-[100px] font-semibold leading-none tracking-[-0.01em] text-white md:translate-y-[12.5%] md:text-[352px]">
              Cindera
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
