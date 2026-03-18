import CaseStudyClient from "@/app/components/CaseStudies/CasestudyClient";
import { CASE_STUDIES } from "../../components/CaseStudies/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return CASE_STUDIES.map((item) => ({ slug: item.slug }));
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
