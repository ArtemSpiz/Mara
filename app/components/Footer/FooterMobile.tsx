"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import LogoFooter from "@/public/logoFooter.png";
import type { FooterLink } from "@/app/footer/constants";

export function FooterMobile({ links }: { links: FooterLink[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex flex-col gap-8 md:hidden">
      <div ref={navRef} className="flex justify-between relative">
        {links.map((link, i) => (
          <div key={link.title} className="relative">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex flex-col items-center gap-1 group"
            >
              <span
                className={`text-sm transition-colors duration-150 ${
                  openIndex === i
                    ? "text-white"
                    : "text-white/50 group-hover:text-white/80"
                }`}
              >
                {link.title}
              </span>
              <span
                className={`block h-px w-full transition-all duration-200 ${
                  openIndex === i ? "bg-white" : "bg-transparent"
                }`}
              />
            </button>

            {openIndex === i && (
              <div
                className={`absolute top-9/12 mt-3 z-50 bg-mara-panel border border-white/10 rounded-xl overflow-hidden shadow-xl shadow-black/30 min-w-[130px] ${
                  i === 0
                    ? "left-0"
                    : i === links.length - 1
                      ? "right-0"
                      : "left-1/2 -translate-x-1/2"
                }`}
              >
                {link.subtitles.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    onClick={() => setOpenIndex(null)}
                    className={`block px-4 py-2.5 text-sm text-white/65 hover:text-white hover:bg-white/5 transition-colors
                          ${
                            idx !== 0 ? "border-t border-white/5" : ""
                          }`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 pt-2">
        <Image
          src={LogoFooter}
          width={260}
          height={70}
          alt="Mara"
          sizes="260px"
        />
        <p className="text-white/40 text-sm leading-relaxed text-center max-w-xs">
          We help startups and companies design and build digital products that
          fuel growth and innovation.
        </p>
      </div>
    </div>
  );
}
