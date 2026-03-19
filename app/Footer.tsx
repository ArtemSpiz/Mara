"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import LogoFooter from "@/public/logoFooter.png";
import partnerLogo1 from "@/public/partnerLogo1.png";
import partnerLogo2 from "@/public/partnerLogo2.png";

type FooterSubtitle = {
  label: string;
  href: string;
};

type FooterLink = {
  title: string;
  subtitles: FooterSubtitle[];
};

const FOOTER_LINKS: FooterLink[] = [
  {
    title: "Home",
    subtitles: [
      { label: "Pricing", href: "#pricing" },
      { label: "About Us", href: "#about" },
      { label: "Services", href: "/case-studies" },
    ],
  },
  {
    title: "Resources",
    subtitles: [
      { label: "Blog", href: "/blog" },
      { label: "Resources", href: "#resources" },
      { label: "Clients", href: "#clients" },
      { label: "Tools", href: "#tools" },
    ],
  },
  {
    title: "Work",
    subtitles: [
      { label: "Portfolio", href: "/case-studies" },
      { label: "Rejected Concepts", href: "#rejected-concepts" },
    ],
  },
  {
    title: "Follow us",
    subtitles: [
      { label: "Dribble", href: "#dribble" },
      { label: "Behance", href: "#behance" },
      { label: "Medium", href: "#medium" },
      { label: "X (Twitter)", href: "#x" },
    ],
  },
];

function FooterMobileLayout({
  links,
  openIndex,
  setOpenIndex,
  navRef,
}: {
  links: FooterLink[];
  openIndex: number | null;
  setOpenIndex: (next: number | null) => void;
  navRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="flex flex-col gap-8 md:hidden">
      <div ref={navRef} className="flex justify-between relative">
        {links.map((link, i) => (
          <div key={link.title} className="relative">
            <button
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
                className={`absolute top-9/12 mt-3 z-50 bg-[#2c2c2c] border border-white/10 rounded-xl overflow-hidden shadow-xl shadow-black/30 min-w-[130px] ${
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
        <Image src={LogoFooter} width={260} height={70} alt="Logo" />
        <p className="text-white/40 text-sm leading-relaxed text-center max-w-xs">
          We help startups and companies design and build digital products that
          fuel growth and innovation.
        </p>
      </div>
    </div>
  );
}

function FooterDesktopLayout({ links }: { links: FooterLink[] }) {
  return (
    <div className="hidden md:flex justify-between gap-10">
      <div className="flex flex-col justify-end gap-6">
        <Image src={LogoFooter} width={280} height={75} alt="Logo" />
        <div className="flex gap-5 items-center">
          <span className="text-white/30 text-sm shrink-0">About</span>
          <p className="text-white/70 text-sm leading-relaxed max-w-[340px]">
            We help startups and companies design and build digital products
            that fuel growth and innovation.
          </p>
        </div>
      </div>

      <div className="flex gap-5 justify-between w-full max-w-3xl ">
        {links.map((link) => (
          <div key={link.title} className="flex flex-col gap-3">
            <span className="text-white/30 text-sm font-medium">
              {link.title}
            </span>
            <div className="flex flex-col gap-2">
              {link.subtitles.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="
                      relative w-fit text-white/70 hover:text-white text-sm transition-colors
                      after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0
                      after:bg-white after:transition-all after:duration-300
                      hover:after:w-full
                    "
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
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
    <footer className="bg-[#232323] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/noise.png')]" />

      <div className="px-10 relative py-10 border-b z-20 border-white/10">
        <FooterMobileLayout
          links={FOOTER_LINKS}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          navRef={navRef}
        />

        <FooterDesktopLayout links={FOOTER_LINKS} />
      </div>

      {/* Bottom bar */}
      <div className="px-10 z-20 relative py-6 flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between">
        <div className="flex gap-5 items-center">
          <Image
            src={partnerLogo1}
            width={66}
            height={24}
            alt="Clutch"
            className="opacity-50"
          />
          <Image
            src={partnerLogo2}
            width={70}
            height={32}
            alt="Upwork"
            className="opacity-50"
          />
        </div>
        <div className="flex gap-5 text-white/30 text-xs">
          <a href="#" className="hover:text-white/60 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white/60 transition-colors">
            Terms of Condition
          </a>
        </div>
      </div>
    </footer>
  );
}
