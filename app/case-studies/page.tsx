import { CaseStudiesPage } from "../components/CaseStudies/CaseStudiesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case studies",
  description: "Selected work and case studies from Mara.",
  openGraph: {
    title: "Case studies | Mara",
    description: "Selected work and case studies from Mara.",
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
