"use client";

import Image from "next/image";
import { useState } from "react";
import Icon1 from "@/public/HeaderLink1.png";
import Icon2 from "@/public/HeaderLink2.png";
import Icon3 from "@/public/HeaderLink3.png";
import Icon4 from "@/public/HeaderLink4.png";
import Burger from "@/public/Burger.png";
import Cross from "@/public/Cross.png";
import { overlayBg } from "@/app/ui/overlayBg";
import Link from "next/link";
import Logo from "@/public/logo.png";

export default function Header() {
  const HeaderLinks = [
    {
      title: "Home",
      subtitles: [
        { label: "Pricing", href: "#pricing" },
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
      ],
      icon: Icon1,
    },
    {
      title: "Resources",
      subtitles: [
        { label: "Blog", href: "/blog" },
        { label: "Resources", href: "#resources" },
        { label: "Clients", href: "#clients" },
        { label: "Tools", href: "#tools" },
      ],
      icon: Icon2,
    },
    {
      title: "Work",
      subtitles: [
        { label: "Portfolio", href: "/case-studies" },
        { label: "Concepts", href: "#concepts" },
      ],
      icon: Icon3,
    },
    {
      title: "Contact Us",
      subtitles: [
        { label: "Telegram", href: "#telegram" },
        { label: "Calendly", href: "#calendly" },
        { label: "Contact Us", href: "/contact-us" },
      ],
      icon: Icon4,
    },
  ];

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`absolute top-0 left-0 p-7 w-full max-md:items-start flex justify-between items-start  max-md:z-100 
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

      <div className="hidden md:flex gap-12">
        {HeaderLinks.map((link) => (
          <div key={link.title} className="flex flex-col gap-2 font-cera-pro">
            <h3 className="font-semibold text-[#351E1C] text-sm select-none">
              {link.title}
            </h3>
            <div className="flex flex-col gap-1">
              {link.subtitles.map((subtitle) => (
                <a
                  key={subtitle.label}
                  href={subtitle.href}
                  className="text-[#351E1C80] text-sm hover:text-[#351E1CFF] transition-colors duration-200"
                >
                  {subtitle.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      {menuOpen && (
        <div className="z-50 absolute top-[50px] left-0 w-full flex flex-col gap-4 p-6 md:hidden transition-all duration-300">
          {HeaderLinks.map((link, i) => (
            <div
              key={link.title}
              className={`flex flex-col gap-2 pb-5 ${i === HeaderLinks.length - 1 ? "border-0" : "border-b border-[#0000001A]"}`}
            >
              <div className="flex items-center w-full justify-between">
                <h3 className="font-semibold w-max text-[#351E1C] text-lg max-md:text-base">
                  {link.title}
                </h3>
                <Image src={link.icon} alt={"Icon"} width={20} height={20} />
              </div>
              {link.subtitles.map((subtitle) => (
                <a
                  key={subtitle.label}
                  href={subtitle.href}
                  className="text-[#351E1C80] max-md:text-sm w-max hover:text-[#351E1CFF] cursor-pointer transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {subtitle.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
