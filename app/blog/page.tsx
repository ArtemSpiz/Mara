import { BlogPage } from "../components/Blog/BlogPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "The latest from Mara — articles and updates.",
  openGraph: {
    title: "Blog | Mara",
    description: "The latest from Mara — articles and updates.",
  },
};

export default function Page() {
  return <BlogPage />;
}
