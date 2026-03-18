"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FilterState, SortOption } from "@/app/ui/FilterMenu";
import { CASE_STUDIES, CaseCategory, CaseStudy } from "../CaseStudies/data";

function matchesFilter(item: CaseStudy, filter: FilterState): boolean {
  if (!filter.topics || filter.topics.length === 0) return true;
  return filter.topics.includes(item.category as CaseCategory);
}

const SORT_LABELS: Record<SortOption, string> = {
  lasted: "Our Latest",
  oldest: "Our Oldest",
  popular: "Most Popular",
  random: "Discover Random",
  "a-z": "A → Z",
};

function sortItems(items: CaseStudy[], sort: SortOption): CaseStudy[] {
  const copy = [...items];
  switch (sort) {
    case "lasted":
      return copy.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    case "oldest":
      return copy.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    case "popular":
      return copy;
    case "random":
      return copy.sort(() => Math.random() - 0.5);
    case "a-z":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return copy;
  }
}

interface BlogGridProps {
  filter: FilterState;
  page: number;
  itemsPerPage: number;
  onTotalPagesChange: (total: number) => void;
  viewMode: "grid" | "list";
}

export function BlogGrid({
  filter,
  page,
  itemsPerPage,
  onTotalPagesChange,
  viewMode,
}: BlogGridProps) {
  const listView = viewMode === "list";

  const allItems = useMemo(() => {
    const filtered = CASE_STUDIES.filter((item) => matchesFilter(item, filter));
    return sortItems(filtered, filter.sort);
  }, [filter]);

  useEffect(() => {
    const total = Math.ceil(allItems.length / itemsPerPage);
    onTotalPagesChange(Math.max(1, total));
  }, [allItems.length, itemsPerPage, onTotalPagesChange]);

  const items = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return allItems.slice(start, start + itemsPerPage);
  }, [allItems, page, itemsPerPage]);

  return (
    <section className="mx-auto px-12 max-w-[1800px] max-md:px-4 pt-24 max-md:pt-5 pb-16">
      <div className="mb-12 max-md:mb-5 flex items-center justify-between gap-4">
        <div className="text-3xl font-sans text-[#151A23]">Posts</div>
      </div>

      <div
        className={`grid gap-x-4 gap-y-5 ${
          listView
            ? "grid-cols-1 gap-y-10 max-md:gap-y-5"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="group  relative animate-[fadeUp_0.45s_ease_both]"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            {!listView && (
              <Link
                href={`/blog/${item.slug}`}
                className="flex cursor-pointer flex-col gap-4"
              >
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
                  <div className="text-sm text-[#351E1CB2]">{item.text}</div>
                </div>
              </Link>
            )}

            {listView && (
              <div className="grid grid-cols-[200px_1fr_1fr_100px] max-md:border-b max-md:pb-2 border-[#151A2333] items-center gap-4 w-full  py-4 max-md:grid-cols-1 max-md:py-0 max-md:gap-2">
                <div className="text-[#351E1C99] font-sans text-sm">
                  {item.date}
                </div>
                <div className="text-xl md:text-2xl font-normal text-[#351E1C]">
                  {item.title}
                </div>
                <div className="text-sm text-[#351E1CB2]">{item.text}</div>
                <Link
                  href={`/blog/${item.slug}`}
                  className="text-[#151A23] cursor-pointer w-full justify-end flex text-sm underline font-sans cursor-pointer"
                >
                  Read
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
