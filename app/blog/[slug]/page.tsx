import { BLOG_POSTS } from "@/app/blog/data";
import { notFound } from "next/navigation";
import BlogClient from "@/app/components/Blog/BlogClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return BLOG_POSTS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = BLOG_POSTS.find((c) => c.slug === slug);
  if (!item) return {};

  const description =
    item.subtitle || `${item.category} — ${item.excerpt}`.slice(0, 160);

  return {
    title: `${item.title} | Mara`,
    description,
    openGraph: {
      title: item.title,
      description,
      type: "article",
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = BLOG_POSTS.find((c) => c.slug === slug);

  if (!item) notFound();

  return <BlogClient item={item} />;
}
