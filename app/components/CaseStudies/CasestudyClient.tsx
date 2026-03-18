"use client";

import Image from "next/image";
import ArrowBack from "@/public/ArrowBack.png";
import Socials from "@/app/ui/Socials";
import Link from "next/link";
import Burger from "@/public/Burger2.png";
import SocialsIconMob from "@/public/SocialsIconMob.png";
import { useState } from "react";
import Cross from "@/public/Cross.png";

type CaseStudyItem = {
  slug: string;
  category: string;
  date: string;
  title: string;
  image: any;
};

export default function CaseStudyClient({ item }: { item: CaseStudyItem }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socOpen, setSocOpen] = useState(false);

  return (
    <div className="bg-[#F5F3EC] gap-10 z-50 pointer-events-auto min-h-screen md:px-10 flex pt-24 pb-16">
      <div
        className="flex md:flex-col  max-md:justify-between max-md:px-8 max-md:py-5 gap-10 md:pl-5 max-md:fixed md:h-full sticky top-5  max-md:top-10 max-md:w-full max-md:border-b max-md:border-[#000000]
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
        <div className="max-md:hidden">
          <Socials />
        </div>

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
      <div className="mx-auto max-md:px-5 md:pr-5 max-w-4xl">
        <p className="text-base text-[#32404F95] mb-4">
          {item.category} • {item.date}
        </p>
        <h1 className="text-4xl md:text-5xl font-sans leading-none mb-6">
          {item.title}
        </h1>

        <Image src={item.image} alt="" />
      </div>
    </div>
  );
}
