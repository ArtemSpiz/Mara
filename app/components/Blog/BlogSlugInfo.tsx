"use client";

import Socials from "@/app/ui/Socials";
import Image from "next/image";
import BgBlogSlug from "@/public/BgBlogSlug.png";
import logoFooter from "@/public/logoFooter.png";
import { useEffect, useRef, useState } from "react";

function ReadingProgress({
  contentRef,
}: {
  contentRef: React.RefObject<HTMLDivElement>;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elTop = rect.top + window.scrollY;
      const elHeight = el.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrolled = window.scrollY + windowHeight - elTop;
      const total = elHeight;

      const percent = Math.min(Math.max((scrolled / total) * 100, 0), 100);
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

export default function BlogSlugInfo() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex gap-5 pt-10 max-md:flex-col">
      {/* Left sticky sidebar */}
      <div className="flex flex-col gap-6 max-md:relative sticky top-5 self-start max-md:border-b max-md:w-full border-[#151A231A] max-md:pb-5">
        <div className="flex flex-col gap-4">
          <ReadingProgress contentRef={contentRef} />
          <div className="text-[#32404F] font-sans max-md:hidden">12312312</div>
          <div className="font-sans text-sm">
            <div className="text-[#151A23]">Author: Theresa W.</div>
            <div className="text-[#151A2380]">UX Researcher</div>
          </div>
          <div className="max-md:flex max-sm:gap-2 items-center">
            <div className="text-[#374A5F] font-sans text-sm">Share</div>
            <Socials />
          </div>
        </div>

        <div
          className="bg-cover bg-center px-4 py-6 flex flex-col w-[200px] gap-3 max-md:hidden"
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

          <button className="relative overflow-hidden border border-[#ECEDE3] py-2 px-2 w-full text-base text-[#222222] group">
            <span className="relative z-10 transition font-medium duration-300 group-hover:text-[#FCF6EF]">
              Contact Us
            </span>
            <span className="absolute inset-0 bg-[#ECEDE3] transition-transform duration-500 origin-right group-hover:scale-x-0"></span>
          </button>
        </div>
      </div>

      {/* Right text content — ref тут */}
      <div
        ref={contentRef}
        className="flex flex-col gap-3 font-sans text-sm text-[#151A23]"
      >
        <span>
          We use KernelBench, a dataset of 250 PyTorch-based classic deep
          learning tasks. It measures a model`s ability to replace the PyTorch
          operators with optimized CUDA kernels. We focus on the first two
          levels, each containing 100 tasks. Level 1 includes foundational tasks
          such as matrix multiplication, convolution, and loss functions, while
          level 2 consists of fused operators. We train on 180 tasks of these
          two levels, with a holdout set of 20 tasks.
        </span>
        <span>
          We use KernelBench, a dataset of 250 PyTorch-based classic deep
          learning tasks. It measures a model`s ability to replace the PyTorch
          operators with optimized CUDA kernels. We focus on the first two
          levels, each containing 100 tasks. Level 1 includes foundational tasks
          such as matrix multiplication, convolution, and loss functions, while
          level 2 consists of fused operators. We train on 180 tasks of these
          two levels, with a holdout set of 20 tasks.
        </span>
        <span>
          We use KernelBench, a dataset of 250 PyTorch-based classic deep
          learning tasks. It measures a model`s ability to replace the PyTorch
          operators with optimized CUDA kernels. We focus on the first two
          levels, each containing 100 tasks. Level 1 includes foundational tasks
          such as matrix multiplication, convolution, and loss functions, while
          level 2 consists of fused operators. We train on 180 tasks of these
          two levels, with a holdout set of 20 tasks.
        </span>
        <span>
          We use KernelBench, a dataset of 250 PyTorch-based classic deep
          learning tasks. It measures a model`s ability to replace the PyTorch
          operators with optimized CUDA kernels. We focus on the first two
          levels, each containing 100 tasks. Level 1 includes foundational tasks
          such as matrix multiplication, convolution, and loss functions, while
          level 2 consists of fused operators. We train on 180 tasks of these
          two levels, with a holdout set of 20 tasks.
        </span>
        <span>
          We use KernelBench, a dataset of 250 PyTorch-based classic deep
          learning tasks. It measures a model`s ability to replace the PyTorch
          operators with optimized CUDA kernels. We focus on the first two
          levels, each containing 100 tasks. Level 1 includes foundational tasks
          such as matrix multiplication, convolution, and loss functions, while
          level 2 consists of fused operators. We train on 180 tasks of these
          two levels, with a holdout set of 20 tasks.
        </span>
        <span>
          We use KernelBench, a dataset of 250 PyTorch-based classic deep
          learning tasks. It measures a model`s ability to replace the PyTorch
          operators with optimized CUDA kernels. We focus on the first two
          levels, each containing 100 tasks. Level 1 includes foundational tasks
          such as matrix multiplication, convolution, and loss functions, while
          level 2 consists of fused operators. We train on 180 tasks of these
          two levels, with a holdout set of 20 tasks.
        </span>
      </div>
    </div>
  );
}
