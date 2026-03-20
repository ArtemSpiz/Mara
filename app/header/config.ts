import type { StaticImageData } from "next/image";
import Icon1 from "@/public/HeaderLink1.png";
import Icon2 from "@/public/HeaderLink2.png";
import Icon3 from "@/public/HeaderLink3.png";
import Icon4 from "@/public/HeaderLink4.png";

export type HeaderSubtitle = {
  label: string;
  href: string;
};

export type HeaderLink = {
  title: string;
  href: string;
  subtitles: HeaderSubtitle[];
  icon: StaticImageData;
};

export const HEADER_LINKS: HeaderLink[] = [
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
