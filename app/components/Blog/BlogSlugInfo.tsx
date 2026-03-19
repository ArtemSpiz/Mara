"use client";

import Socials from "@/app/ui/Socials";
import Image from "next/image";
import BgBlogSlug from "@/public/BgBlogSlug.png";
import logoFooter from "@/public/logoFooter.png";
import { useEffect, useRef, useState } from "react";
import ContactButton from "@/app/ui/ContactButton";

function ReadingProgress({
  contentRef,
}: {
  contentRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elHeight = el.offsetHeight;
      const windowCenter = window.innerHeight / 2;

      const scrolled = windowCenter - rect.top;
      const percent = Math.min(Math.max((scrolled / elHeight) * 100, 0), 100);

      setProgress(Math.round(percent));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentRef]);

  return (
    <div className="flex items-center gap-2 w-full max-md:hidden">
      <div className="relative flex-1 h-[2px] bg-[#151A23]">
        <div
          className="absolute top-0 left-0 h-full bg-[#5CE1E6] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-[#32404F] font-sans text-sm font-medium whitespace-nowrap">
        {progress}%
      </span>
    </div>
  );
}

function BlogSlugSidebar({
  contentRef,
}: {
  contentRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="flex flex-col gap-6 max-md:relative sticky top-5 self-start max-md:border-b max-md:w-full border-[#151A231A] max-md:pb-5">
      <div className="flex flex-col gap-4">
        <ReadingProgress contentRef={contentRef} />

        <div className="text-[#32404F] font-sans ">12312312</div>

        <div className="font-sans text-sm">
          <div className="text-[#151A23]">Author: Theresa W.</div>
          <div className="text-[#151A2380]">UX Researcher</div>
        </div>

        <div className="max-md:flex max-sm:gap-2 items-center">
          <div className="text-[#374A5F] font-sans text-sm sm:mb-1">
            Share
          </div>
          <Socials />
        </div>
      </div>

      <div
        className="bg-cover bg-right px-4 py-8 flex flex-col w-[200px] gap-4 max-md:hidden"
        style={{ backgroundImage: `url(${BgBlogSlug.src})` }}
      >
        <Image src={logoFooter} width={60} height={12} alt="" />

        <div className="font-sans text-xl leading-none font-bold text-[#ECEDE3]">
          Work with the top design agency
        </div>

        <div className="font-sans text-xs text-[#ECEDE3]">
          100+ Clients. Halborn, Hearst, Delphyr, AlivedX, Wardem, GMX and
          others.
        </div>

        <ContactButton variant="cream" />
      </div>
    </div>
  );
}

const ARTICLE_PARAGRAPH =
  "We use KernelBench, a dataset of 250 PyTorch-based classic deep learning tasks. It measures a model`s ability to replace the PyTorch operators with optimized CUDA kernels. We focus on the first two levels, each containing 100 tasks. Level 1 includes foundational tasks such as matrix multiplication, convolution, and loss functions, while level 2 consists of fused operators. We train on 180 tasks of these two levels, with a holdout set of 20 tasks.";

const ARTICLE_PARAGRAPHS = Array.from({ length: 6 }, () => ARTICLE_PARAGRAPH);

function BlogArticleContent({
  contentRef,
}: {
  contentRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={contentRef}
      className="flex flex-col gap-3 font-sans max-md:pt-4 text-base text-[#151A23]"
    >
      {ARTICLE_PARAGRAPHS.map((text, idx) => (
        <span key={idx}>{text}</span>
      ))}
    </div>
  );
}

export default function BlogSlugInfo() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex gap-5 pt-10 max-md:flex-col">
      <BlogSlugSidebar contentRef={contentRef} />
      <BlogArticleContent contentRef={contentRef} />
    </div>
  );
}
