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

export default function CaseStudyClient({ item }: { item: CaseStudyItem }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socOpen, setSocOpen] = useState(false);

  const titlesInfo = [
    {
      title: "DOmain",
    },
    {
      title: "Services",
    },
    {
      title: "Tech Stack",
    },
    {
      title: "Preview",
    },
  ];

  return (
    <>
      <div className=" gap-10 max-md:flex-col z-50 pointer-events-auto min-h-screen md:px-10 flex pt-35 max-md:pt-20 pb-16">
        <div
          className="flex md:flex-col  z-50 max-md:justify-between max-md:px-8 max-md:py-5 gap-8 md:pl-5  md:h-full sticky top-5 max-md:top-0 max-md:w-full max-md:border-b max-md:border-[#000000]
                max-md:bg-white/10
                max-md:shadow-lg
                max-md:backdrop-blur-[5px]
                max-md:transition-all max-md:duration-300"
        >
          <Link
            href={`/case-studies`}
            className="flex cursor-pointer items-center gap-2 text-[#32404F95] uppercase text-base font-display"
          >
            <Image src={ArrowBack} width={20} height={20} alt="" />
            <span className="max-md:hidden">Back</span>
          </Link>
          <div className="flex md:hidden items-center gap-5">
            <Image
              src={SocialsIconMob}
              width={20}
              height={20}
              alt=""
              className="cursor-pointer"
            />
          </div>

          <div className="max-md:hidden">
            <Socials />
          </div>
          <div className="text-[#32404F] font-sans max-md:hidden">12312312</div>
        </div>
        <div className="mx-auto max-md:px-5 md:pr-5 max-w-4xl">
          <p className="text-base text-[#32404F95] mb-4">
            {item.category} • {item.date}
          </p>
          <h1 className="text-4xl md:text-5xl font-sans leading-none mb-6">
            {item.title}
          </h1>
          <div className="border-[#32404F1A] max-md:border-b max-md:pb-2">
            <Image src={item.image} alt="" />
          </div>

          <div className=" pt-8 justify-between gap-5 grid grid-cols-4 max-md:grid-cols-2 max-md:gap-y-5">
            {titlesInfo.map((content, i) => (
              <div key={i} className="text-base text-[#32404F95] uppercase">
                {content.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-b border-[#151A23]">
        <CaseStudiesAnother currentSlug={item.slug} allItems={CASE_STUDIES} />
      </div>
      <ContactSection />
    </>
  );
}
