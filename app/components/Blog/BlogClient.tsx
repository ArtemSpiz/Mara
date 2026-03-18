"use client";

import Image, { StaticImageData } from "next/image";
import ArrowBack from "@/public/ArrowBack.png";
import Socials from "@/app/ui/Socials";
import Link from "next/link";
import Burger from "@/public/Burger2.png";
import SocialsIconMob from "@/public/SocialsIconMob.png";
import { useState } from "react";
import Cross from "@/public/Cross.png";
import BlogSlugInfo from "./BlogSlugInfo";
import { BlogAnother } from "./BlogAnother";
import { CASE_STUDIES } from "../CaseStudies/data";
import { ContactSection } from "../ContactSection";

type BlogItem = {
  slug: string;
  category: string;
  date: string;
  title: string;
  image: StaticImageData;
  excerpt: string;
};

export default function BlogClient({ item }: { item: BlogItem }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socOpen, setSocOpen] = useState(false);

  return (
    <>
      <div className=" gap-10 z-50 pointer-events-auto min-h-screen flex flex-col pt-24 pb-16">
        <div
          className="flex md:flex-col  z-50 max-md:justify-between max-md:px-8 max-md:py-5 gap-10 md:pl-5  md:h-full sticky top-5 max-md:top-10 max-md:w-full max-md:border-b max-md:border-[#000000]
                max-md:bg-white/10
                max-md:shadow-lg
                max-md:backdrop-blur-[5px]
                max-md:transition-all max-md:duration-300"
        >
          <Link
            href={`/blog`}
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
              onClick={() => setSocOpen((prev) => !prev)}
            />
            <Image
              src={menuOpen ? Cross : Burger}
              width={20}
              height={20}
              alt=""
              className="cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          </div>

          {menuOpen && (
            <div className="z-50 absolute top-[50px] w-max right-5 rounded-lg flex flex-col gap-4 p-6 bg-[#FFFFFFCC] shadow-lg text-[#32404F] transition-all duration-300">
              12312313
            </div>
          )}

          {socOpen && (
            <div className="z-50 absolute top-[50px] w-max right-5 rounded-lg flex flex-col gap-4 p-6 bg-[#FFFFFFCC] shadow-lg text-[#32404F] transition-all duration-300">
              <Socials />
            </div>
          )}
        </div>

        <div className="mx-auto relative max-md:px-5 md:pr-5 max-w-4xl">
          <div>
            <p className="text-base font-display uppercase text-[#32404F95] mb-4">
              {item.category} • {item.excerpt}
            </p>
            <h1 className="text-4xl md:text-5xl font-sans leading-none mb-6">
              {item.title}
            </h1>
            <p className="text-base text-[#32404F95] mb-4">
              {item.category} - {item.date}
            </p>
            <div className="z-10">
              {" "}
              <Image src={item.image} alt="" />
            </div>
          </div>
          <BlogSlugInfo />
        </div>
      </div>
      <div className="border-b border-[#151A23]">
        <BlogAnother currentSlug={item.slug} allItems={CASE_STUDIES} />
      </div>
      <ContactSection />
    </>
  );
}
