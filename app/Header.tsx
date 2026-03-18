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
import Logo from '@/public/logo.png'

export default function Header() {
  const HeaderLinks = [
    {
      title: "Home",
      subtitles: [
        { label: "Pricing", href: "#pricing" },
        { label: "About Us", href: "#about" },
        { label: "Services", href: "/case-studies" },
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
        { label: "Portfolio", href: "#portfolio" },
        { label: "Concepts", href: "#concepts" },
      ],
      icon: Icon3,
    },
    {
      title: "Contact Us",
      subtitles: [
        { label: "Telegram", href: "#telegram" },
        { label: "Calendly", href: "#calendly" },
      ],
      icon: Icon4,
    },
  ];

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`absolute top-0 left-0 p-7 w-full max-md:items-start flex justify-between items-center z-20 
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
        {HeaderLinks.map((link, i) => (
          <div
            key={link.title}
            className="relative font-cera-pro"
            onMouseEnter={() => setHoveredLink(link.title)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <h3 className="font-semibold cursor-pointer text-[#351E1C] text-lg cursor-default select-none">
              {link.title}
            </h3>

            <div
              className={`
                absolute top-8 z-20 w-max origin-top-left overflow-hidden rounded-lg border border-white/20
                bg-white/10
                shadow-lg
                backdrop-blur-[12px]
                transition-all duration-300
                ${
                  hoveredLink === link.title
                    ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                    : "opacity-0 scale-95  -translate-y-1"
                }
                ${i === HeaderLinks.length - 1 ? "right-0" : "left-0"}
              `}
            >
              <div className="flex flex-col p-3 gap-1">
                {link.subtitles.map((subtitle, index) => (
                  <a
                    key={subtitle.label}
                    href={subtitle.href}
                    className={`
                      text-[#351E1C80] hover:text-[#351E1CFF] 
                      cursor-pointer rounded-lg px-2 py-1
                      transition-all duration-200
                    `}
                    style={{
                      transitionDelay:
                        hoveredLink === link.title ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {subtitle.label}
                  </a>
                ))}
              </div>
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
