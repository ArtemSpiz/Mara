"use client";

import { useRef, useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type BlogItem = {
  slug: string;
  category: string;
  date: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
};

type BlogAnotherProps = {
  currentSlug: string;
  allItems: BlogItem[];
};

export function BlogAnother({ currentSlug, allItems }: BlogAnotherProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const otherItems = allItems.filter((item) => item.slug !== currentSlug);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "right" ? 400 : -400,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto w-[95vw] overflow-hidden max-md:py-5 py-20">
      <div className="flex items-center justify-between mb-8 px-12 max-md:px-4">
        <div className="font-sans text-3xl max-md:text-2xl text-[#151A23]">
          Continue Reading
        </div>

        <div className="flex items-center gap-4 max-md:hidden">
          <div className="w-full h-[1px] min-w-[275px] bg-[#32404F20] relative">
            <div
              className="absolute left-0 top-0 h-full bg-[#2185D0] transition-all duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <button
            onClick={() => scroll("left")}
            className="cursor-pointer"
            aria-label="Scroll left"
          >
            <span
              className={` text-lg ml-3 leading-none ${progress == 0 ? " text-[#32404F95]" : "text-[#151A23]"}`}
            >
              ←
            </span>
          </button>
          <button
            onClick={() => scroll("right")}
            className="cursor-pointer"
            aria-label="Scroll right"
          >
            <span
              className={` text-lg leading-none ${progress >= 1 ? " text-[#32404F95]" : "text-[#151A23]"}`}
            >
              →
            </span>
          </button>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex px-12 max-md:px-4 gap-6 overflow-x-auto scroll-smooth pb-4
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-md:flex-col"
      >
        {otherItems.map((item, index) => (
          <Link
            key={item.slug}
            href={`/blog/${item.slug}`}
            className={`flex-shrink-0  md:w-80 max-md:w-full group cursor-pointer ${index >= 3 ? "max-md:hidden" : ""}`}
          >
            <div className="flex flex-col gap-4">
              <div className=" overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t border-[#351E1C33]">
                <div className="text-[#351E1C99] font-sans text-sm">
                  {item.date}
                </div>
                <div className="text-xl md:text-2xl font-normal text-[#351E1C]">
                  {item.title}
                </div>
                <div className="text-sm text-[#351E1CB2]">{item.subtitle}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
