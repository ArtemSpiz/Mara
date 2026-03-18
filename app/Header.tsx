"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Icon1 from "@/public/HeaderLink1.png";
import Icon2 from "@/public/HeaderLink2.png";
import Icon3 from "@/public/HeaderLink3.png";
import Icon4 from "@/public/HeaderLink4.png";
import Burger from "@/public/Burger.png";
import Cross from "@/public/Cross.png";
import { overlayBg } from "@/app/ui/overlayBg";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { useScramble } from "./hooks/useScramble";

function ScrambleLink({
  href,
  label,
  className,
  onClick,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const scrambleTo = useScramble(ref);
  const isDisabled = href.startsWith("#");

  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      onMouseEnter={() => !isDisabled && scrambleTo()}
      onMouseLeave={() => !isDisabled && scrambleTo()}
    >
      <span ref={ref}>{label}</span>
    </a>
  );
}

function ScrambleNavLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const scrambleTo = useScramble(ref);

  return (
    <Link
      href={href}
      className={className}
      onMouseEnter={() => scrambleTo()}
      onMouseLeave={() => scrambleTo()}
    >
      <span ref={ref}>{label}</span>
    </Link>
  );
}

export default function Header() {
  const HeaderLinks = [
    {
      title: "Home",
      href: "/",
      subtitles: [
        { label: "Pricing", href: "#pricing" },
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
      ],
      icon: Icon1,
    },
    {
      title: "Resources",
      href: "#resources",
      subtitles: [
        { label: "Blog", href: "/blog" },
        { label: "Rejected Concepts", href: "#rejected Concepts" },
        { label: "Clients", href: "#clients" },
        { label: "Tools", href: "#tools" },
      ],
      icon: Icon2,
    },
    {
      title: "Work",
      href: "/case-studies",
      subtitles: [
        { label: "Portfolio", href: "#Portfolio" },
        { label: "Concepts", href: "#concepts" },
      ],
      icon: Icon3,
    },
    {
      title: "Contact Us",
      href: "/contact-us",
      subtitles: [
        { label: "Telegram", href: "#telegram" },
        { label: "Calendly", href: "#calendly" },
      ],
      icon: Icon4,
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`absolute top-0 left-0 p-7 w-full z-40 max-md:items-start flex justify-between items-start max-md:z-100
      ${menuOpen ? `${overlayBg.className} h-screen` : "bg-white/0"}`}
    >
      <Link href="/">
        <Image src={Logo} alt="Mara logo" width={80} height={20} />
      </Link>

      {/* Mobile burger */}
      <button
        className="md:hidden z-50"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Image
          src={menuOpen ? Cross : Burger}
          alt={menuOpen ? "Close menu" : "Open menu"}
          width={24}
          height={24}
        />
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-12">
        {HeaderLinks.map((link) => (
          <div key={link.title} className="flex flex-col gap-2 font-cera-pro">
            <ScrambleNavLink
              href={link.href}
              label={link.title}
              className="font-semibold text-[#351E1C] text-sm select-none"
            />
            <div className="flex flex-col gap-1">
              {link.subtitles.map((subtitle) => (
                <ScrambleLink
                  key={subtitle.label}
                  href={subtitle.href}
                  label={subtitle.label}
                  className={`text-sm transition-colors duration-200 ${
                    subtitle.href.startsWith("#")
                      ? "text-[#351E1C30] cursor-not-allowed"
                      : "text-[#351E1C80] hover:text-[#351E1CFF]"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="z-50 absolute top-[50px] left-0 w-full flex flex-col gap-4 p-6 md:hidden transition-all duration-300">
          {HeaderLinks.map((link, i) => (
            <div
              key={link.title}
              className={`flex flex-col gap-2 pb-5 ${
                i === HeaderLinks.length - 1
                  ? "border-0"
                  : "border-b border-[#0000001A]"
              }`}
            >
              <div className="flex items-center w-full justify-between">
                <ScrambleNavLink
                  href={link.href}
                  label={link.title}
                  className="font-semibold w-max text-[#351E1C] text-lg max-md:text-base"
                />
                <Image src={link.icon} alt="Icon" width={20} height={20} />
              </div>
              {link.subtitles.map((subtitle) => (
                <ScrambleLink
                  key={subtitle.label}
                  href={subtitle.href}
                  label={subtitle.label}
                  className={`max-md:text-sm w-max transition-all duration-300 ${
                    subtitle.href.startsWith("#")
                      ? "text-[#351E1C30] cursor-not-allowed"
                      : "text-[#351E1C80] hover:text-[#351E1CFF] cursor-pointer"
                  }`}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
