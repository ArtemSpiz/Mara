export type FooterSubtitle = {
  label: string;
  href: string;
};

export type FooterLink = {
  title: string;
  subtitles: FooterSubtitle[];
};

export const FOOTER_LINKS: FooterLink[] = [
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
