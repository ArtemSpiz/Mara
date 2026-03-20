"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Burger from "@/public/Burger.png";
import Cross from "@/public/Cross.png";
import { overlayBg } from "@/app/ui/overlayBg";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { useScramble } from "./hooks/useScramble";
import type { HeaderLink } from "./header/config";

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

function DesktopNav({ links }: { links: HeaderLink[] }) {
  return (
    <div className="hidden md:flex gap-12">
      {links.map((link) => (
        <div key={link.title} className="flex flex-col gap-2 font-cera-pro">
          <ScrambleNavLink
            href={link.href}
            label={link.title}
            className="font-semibold text-mara-soil text-sm select-none"
          />
          <div className="flex flex-col gap-1">
            {link.subtitles.map((subtitle) => (
              <ScrambleLink
                key={subtitle.label}
                href={subtitle.href}
                label={subtitle.label}
                className={`text-sm transition-colors duration-200 ${
                  subtitle.href.startsWith("#")
                    ? "text-mara-soil/20 cursor-not-allowed"
                    : "text-mara-soil/50 hover:text-mara-soil"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileMenu({
  links,
  onClose,
}: {
  links: HeaderLink[];
  onClose: () => void;
}) {
  return (
    <div className="z-50 absolute top-[50px] left-0 w-full flex flex-col gap-4 p-6 md:hidden transition-all duration-300">
      {links.map((link, i) => (
        <div
          key={link.title}
          className={`flex flex-col gap-2 pb-5 ${
            i === links.length - 1
              ? "border-0"
              : "border-b border-black/10"
          }`}
        >
          <div className="flex items-center w-full justify-between">
            <ScrambleNavLink
              href={link.href}
              label={link.title}
              className="font-semibold w-max text-mara-soil text-lg max-md:text-base"
            />
            <Image src={link.icon} alt="" width={20} height={20} />
          </div>
          {link.subtitles.map((subtitle) => (
            <ScrambleLink
              key={subtitle.label}
              href={subtitle.href}
              label={subtitle.label}
              className={`max-md:text-sm w-max transition-all duration-300 ${
                subtitle.href.startsWith("#")
                  ? "text-mara-soil/20 cursor-not-allowed"
                  : "text-mara-soil/50 hover:text-mara-soil cursor-pointer"
              }`}
              onClick={onClose}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function HeaderClient({ links }: { links: HeaderLink[] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`absolute top-0 left-0 p-7 w-full z-40 max-md:items-start flex justify-between items-start max-md:z-100
      ${menuOpen ? `${overlayBg.className} h-screen` : "bg-white/0"}`}
    >
      <Link href="/">
        <Image
          src={Logo}
          alt="Mara logo"
          width={80}
          height={20}
          sizes="80px"
        />
      </Link>

      <button
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="md:hidden z-50"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Image
          src={menuOpen ? Cross : Burger}
          alt=""
          width={24}
          height={24}
          sizes="24px"
        />
      </button>

      <DesktopNav links={links} />

      {menuOpen && (
        <MobileMenu links={links} onClose={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
