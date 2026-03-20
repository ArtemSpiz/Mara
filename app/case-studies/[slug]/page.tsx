import CaseStudyClient from "@/app/components/CaseStudies/CasestudyClient";
import { CASE_STUDIES } from "../../components/CaseStudies/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return CASE_STUDIES.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = CASE_STUDIES.find((c) => c.slug === slug);
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

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = CASE_STUDIES.find((c) => c.slug === slug);

  if (!item) notFound();

  return <CaseStudyClient item={item} />;
}
