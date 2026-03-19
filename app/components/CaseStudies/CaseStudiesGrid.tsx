"use client";

import { useEffect, useMemo, useState } from "react";
import { CASE_STUDIES, type CaseCategory, type CaseStudy } from "./data";
import {
  FilterMenu,
  type FilterState,
  type SortOption,
} from "../../ui/FilterMenu";
import Link from "next/link";
import Image from "next/image";

function matchesFilter(item: CaseStudy, filter: FilterState): boolean {
  if (!filter.topics || filter.topics.length === 0) return true;
  return filter.topics.includes(item.category as CaseCategory);
}

function getItemSpan(index: number): string {
  const pattern = [2, 1, 1, 1, 1, 1, 2] as const;
  const col = pattern[index % pattern.length] ?? 1;
  return col === 2 ? "md:col-span-2" : "md:col-span-1";
}

function CaseStudiesGridCard({ item }: { item: CaseStudy }) {
  return (
    <div className="space-y-2">
      <div className="text-xl md:text-2xl font-normal text-[#151A23]">
        {item.title}
      </div>
      <div className="text-sm text-[#151A23B2]">{item.subtitle}</div>
    </div>
  );
}

function CaseStudiesListRow({ item }: { item: CaseStudy }) {
  return (
    <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] items-center gap-6 border-b border-zinc-200/70 pb-4 pt-2 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)_auto]">
      <div className="space-y-2">
        <div className="max-w-xl text-[26px] font-medium leading-tight tracking-tight text-zinc-900">
          {item.title}
        </div>
        <div className="max-w-xl text-[13px] leading-snug text-zinc-500">
          {item.excerpt}
        </div>
      </div>
      <div className="flex items-center justify-start gap-4 text-[12px] text-zinc-500 md:justify-end">
        <span>{item.date}</span>
        <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
          {item.category}
        </span>
      </div>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-[13px] font-medium text-zinc-900 hover:opacity-70"
      >
        Read
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          className="stroke-current"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </a>
    </div>
  );
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

interface CaseStudiesGridProps {
  filter: FilterState;
  page: number;
  itemsPerPage: number;
  onTotalPagesChange: (total: number) => void;
  onFilterChange: (filter: FilterState) => void;
}

export function CaseStudiesGrid({
  filter,
  page,
  itemsPerPage,
  onTotalPagesChange,
  onFilterChange,
}: CaseStudiesGridProps) {
  const [listView] = useState(false);

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

  const headingLabel = SORT_LABELS[filter.sort] ?? "Our Latest";

  return (
    <section className="mx-auto max-w-[1800px] px-12 max-md:px-4 pt-16 max-md:pt-5 pb-16">
      <div className="mb-12 max-md:mb-5 flex items-center justify-between gap-4">
        <div className="text-3xl font-sans text-[#151A23]">{headingLabel}</div>
        <FilterMenu right value={filter} onChange={onFilterChange} />
      </div>

      <div
        className={`grid gap-x-4 gap-y-5 ${
          listView
            ? "grid-cols-1"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
        }`}
      >
        {items.map((item, index) => (
          <Link
            href={`/case-studies/${item.slug}`}
            key={item.id}
            className={`group cursor-pointer relative animate-[fadeUp_0.45s_ease_both] ${getItemSpan(index)}`}
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt=""
                className="object-cover max-h-[250px] 2xl:max-h-[300px] w-full transition-transform duration-300 hover:scale-105"
              />
            </div>

            {listView ? (
              <CaseStudiesListRow item={item} />
            ) : (
              <CaseStudiesGridCard item={item} />
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
