import { StaticImageData } from "next/image";

export type CaseCategory = "Design" | "UI" | "Development" | "Fintech" | "Web3";

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string | StaticImageData;
  category: CaseCategory;
  readTime: string;
  date: string;
  excerpt: string;
};

import Img1 from "@/public/CaseImg1.png";
import Img2 from "@/public/CaseImg3.png";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cargoping-tracking-ui",
    slug: "cargoping-tracking-ui",
    title: "Redesigning CargoPing's tracking UI",
    subtitle: "At our core, we believe",
    image: Img1,
    category: "Design",
    readTime: "6 min read",
    date: "12, August 2024",
    excerpt: "Concept 2025",
  },
  {
    id: "srcoin-web3-onboarding",
    slug: "srcoin-web3-onboarding",
    title: "SRCOIN - Web3 onboarding flow",
    subtitle: "At our core, we believe",
    image: Img1,
    category: "UI",
    readTime: "5 min read",
    date: "12, August 2024",
    excerpt: "Concept 2025",
  },
  {
    id: "mara-portal-react-migration",
    slug: "mara-portal-react-migration",
    title: "Mara Portal - React migration",
    subtitle: "At our core, we believe",
    image: Img2,
    category: "Development",
    readTime: "4 min read",
    date: "12, August 2024",
    excerpt: "Concept 2025",
  },
  {
    id: "fintech-saas-dashboard",
    slug: "fintech-saas-dashboard",
    title: "SaaS dashboard for fintech startup",
    subtitle: "At our core, we believe",
    image: Img1,
    category: "Fintech",
    readTime: "7 min read",
    date: "12, August 2024",
    excerpt: "Concept 2025",
  },
  {
    id: "ai-native-design-system",
    slug: "ai-native-design-system",
    title: "AI-native product design system",
    subtitle: "At our core, we believe",
    image: Img2,
    category: "Design",
    readTime: "5 min read",
    date: "12, August 2024",
    excerpt: "Concept 2025",
  },
  {
    id: "nft-marketplace-ux-audit",
    slug: "nft-marketplace-ux-audit",
    title: "NFT marketplace UX audit",
    subtitle: "At our core, we believe",
    image: Img1,
    category: "Web3",
    readTime: "4 min read",
    date: "12, August 2024",
    excerpt: "Concept 2025",
  },
  {
    id: "french-side-travel-ux-roast",
    slug: "french-side-travel-ux-roast",
    title: "French Side Travel - UX roast",
    subtitle: "At our core, we believe",
    image: Img1,
    category: "UI",
    readTime: "3 min read",
    date: "12, August 2024",
    excerpt: "Concept 2025",
  },
  {
    id: "french-side-travel-ux-roast1",
    slug: "french-side-travel-ux-roast1",
    title: "French Side Travel - UX roast",
    subtitle: "At our core, we believe",
    image: Img2,
    category: "UI",
    readTime: "3 min read",
    date: "12, August 2024",
    excerpt: "Concept 2025",
  },
  {
    id: "french-side-travel-ux-roast2",
    slug: "french-side-travel-ux-roast2",
    title: "French Side Travel - UX roast",
    subtitle: "At our core, we believe",
    image: Img2,
    category: "UI",
    readTime: "3 min read",
    date: "12, August 2024",
    excerpt: "Concept 2025",
  },
  {
    id: "french-side-travel-ux-roast3",
    slug: "french-side-travel-ux-roast3",
    title: "French Side Travel - UX roast",
    subtitle: "At our core, we believe",
    image: Img1,
    category: "UI",
    readTime: "3 min read",
    date: "12, August 2024",
    excerpt: "Concept 2025",
  },
  {
    id: "french-side-travel-ux-roast4",
    slug: "french-side-travel-ux-roast4",
    title: "French Side Travel - UX roast",
    subtitle: "At our core, we believe",
    image: Img1,
    category: "UI",
    readTime: "3 min read",
    date: "12, August 2024",
    excerpt: "Concept 2025",
  },
];
