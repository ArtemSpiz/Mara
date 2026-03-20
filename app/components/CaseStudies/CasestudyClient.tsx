"use client";

import Image, { StaticImageData } from "next/image";
import ArrowBack from "@/public/ArrowBack.png";
import Socials from "@/app/ui/Socials";
import Link from "next/link";
import SocialsIconMob from "@/public/SocialsIconMob.png";
import { useState } from "react";
import { ContactSection } from "../ContactSection";
import { CASE_STUDIES } from "./data";
import { CaseStudiesAnother } from "./CaseStudiesAnother";

type CaseStudyItem = {
  slug: string;
  category: string;
  date: string;
  title: string;
  image: StaticImageData;
};

const CASE_STUDY_TITLES_INFO = [
  { title: "DOmain" },
  { title: "Services" },
  { title: "Tech Stack" },
  { title: "Preview" },
];

function CaseStudyStickyTopBar() {
  const [socOpen, setSocOpen] = useState(false);

  return (
    <div
      className="relative flex md:flex-col  z-50 max-md:justify-between max-md:px-8 max-md:py-5 gap-8 md:pl-5  md:h-full sticky top-5 max-md:top-0 max-md:w-full max-md:border-b max-md:border-black
                max-md:bg-white/10
                max-md:shadow-lg
                max-md:backdrop-blur-[5px]
                max-md:transition-all max-md:duration-300"
    >
      <Link
        href={`/case-studies`}
        className="flex cursor-pointer items-center gap-2 text-mara-slate/60 uppercase text-base font-display"
      >
        <Image src={ArrowBack} width={20} height={20} alt="" sizes="20px" />
        <span className="max-md:hidden">Back</span>
      </Link>

      <div className="flex md:hidden items-center gap-5">
        <button
          type="button"
          aria-expanded={socOpen}
          aria-label="Toggle social links"
          onClick={() => setSocOpen((o) => !o)}
          className="p-0 border-0 bg-transparent cursor-pointer"
        >
          <Image
            src={SocialsIconMob}
            width={20}
            height={20}
            alt=""
            sizes="20px"
          />
        </button>
      </div>

      {socOpen && (
        <div className="z-50 md:hidden absolute top-[50px] w-max right-5 rounded-lg flex flex-col gap-4 p-6 bg-white/80 shadow-lg text-mara-slate transition-all duration-300">
          <Socials />
        </div>
      )}

      <div className="max-md:hidden">
        <Socials />
      </div>
    </div>
  );
}

function CaseStudyArticleHeader({ item }: { item: CaseStudyItem }) {
  return (
    <div className="mx-auto max-md:px-5 md:pr-5 max-w-4xl">
      <p className="text-base text-mara-slate/60 mb-4">
        {item.category} • {item.date}
      </p>
      <h1 className="text-4xl md:text-5xl font-sans leading-none mb-6">
        {item.title}
      </h1>
      <div className="border-mara-slate/10 max-md:border-b max-md:pb-2">
        <Image
          src={item.image}
          alt=""
          width={item.image.width}
          height={item.image.height}
          sizes="(min-width: 896px) 896px, 100vw"
          priority
        />
      </div>

      <div className=" pt-8 justify-between gap-5 grid grid-cols-4 max-md:grid-cols-2 max-md:gap-y-5">
        {CASE_STUDY_TITLES_INFO.map((content) => (
          <div
            key={content.title}
            className="text-base text-mara-slate/60 uppercase"
          >
            {content.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyClient({ item }: { item: CaseStudyItem }) {
  return (
    <>
      <div className=" gap-10 max-md:flex-col z-50 pointer-events-auto min-h-screen md:px-10 flex pt-35 max-md:pt-20 pb-16">
        <CaseStudyStickyTopBar />
        <CaseStudyArticleHeader item={item} />
      </div>
      <div className="border-b border-mara-midnight">
        <CaseStudiesAnother currentSlug={item.slug} allItems={CASE_STUDIES} />
      </div>
      <ContactSection />
    </>
  );
}
