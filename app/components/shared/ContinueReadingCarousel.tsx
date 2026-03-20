"use client";

import { useRef, useState, useCallback, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type ContinueReadingItem = {
  slug: string;
  title: string;
  date: string;
  subtitle: string;
  image: StaticImageData;
};

type ContinueReadingCarouselProps<TItem extends ContinueReadingItem> = {
  heading?: string;
  currentSlug: string;
  items: TItem[];
  getHref: (slug: string) => string;

  maxVisibleOnMobileIndex?: number;
};

export function ContinueReadingCarousel<TItem extends ContinueReadingItem>({
  heading = "Continue Reading",
  currentSlug,
  items,
  getHref,
  maxVisibleOnMobileIndex = 3,
}: ContinueReadingCarouselProps<TItem>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const otherItems = useMemo(
    () => items.filter((item) => item.slug !== currentSlug),
    [items, currentSlug],
  );

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
        <div className="font-sans text-3xl max-md:text-2xl text-mara-midnight">
          {heading}
        </div>

        <div className="flex items-center gap-4 max-md:hidden">
          <div className="w-full h-px min-w-[275px] bg-mara-slate/15 relative">
            <div
              className="absolute left-0 top-0 h-full bg-mara-accent-blue transition-all duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <button
            onClick={() => scroll("left")}
            className="cursor-pointer"
            aria-label="Scroll left"
          >
            <span
              className={` text-lg ml-3 leading-none ${
                progress == 0 ? " text-mara-slate/60" : "text-mara-midnight"
              }`}
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
              className={` text-lg leading-none ${
                progress >= 1 ? " text-mara-slate/60" : "text-mara-midnight"
              }`}
            >
              →
            </span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex px-12 max-md:px-4 gap-6 overflow-x-auto scroll-smooth pb-4
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-md:flex-col"
      >
        {otherItems.map((item, index) => (
          <Link
            key={item.slug}
            href={getHref(item.slug)}
            className={`shrink-0 md:w-65 lg:w-107 max-md:w-full group cursor-pointer ${
              index >= maxVisibleOnMobileIndex ? "max-md:hidden" : ""
            }`}
          >
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 1024px) 428px, (min-width: 768px) 260px, 100vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-mara-soil/20">
                <div className="text-mara-soil/60 font-sans text-sm">
                  {item.date}
                </div>
                <div className="text-xl md:text-2xl font-normal text-mara-soil">
                  {item.title}
                </div>
                <div className="text-sm text-mara-soil/70">{item.subtitle}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
