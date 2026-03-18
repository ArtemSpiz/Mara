"use client";

import { useState } from "react";
import type { CaseCategory } from "../components/CaseStudies/data";
import Image from "next/image";
import arrowDown from "@/public/arrowDown.png";
import Filter from "@/public/Filter.png";

const ALL_OPTION = "All";

export type SortOption = "lasted" | "oldest" | "popular" | "random" | "a-z";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "lasted", label: "Lasted" },
  { value: "oldest", label: "Oldest" },
  { value: "popular", label: "Popular" },
  { value: "random", label: "Random" },
  { value: "a-z", label: "A to Z" },
];

const TOPIC_OPTIONS: (CaseCategory | typeof ALL_OPTION)[] = [
  ALL_OPTION,
  "Design",
  "UI",
  "Development",
  "Fintech",
  "Web3",
];

export type FilterState = {
  topics: CaseCategory[] | null;
  sort: SortOption;
};

type Props = {
  value: FilterState;
  onChange: (value: FilterState) => void;
  right?: boolean;
};

export function FilterMenu({ value, onChange, right }: Props) {
  const [open, setOpen] = useState(false);

  const appliedTopicsCount = value.topics ? value.topics.length : 0;
  const isNonDefaultSort = value.sort !== "lasted";
  const appliedCount = appliedTopicsCount + (isNonDefaultSort ? 1 : 0);

  function togglePanel() {
    setOpen((prev) => !prev);
  }

  function handleSortClick(sort: SortOption) {
    onChange({ ...value, sort });
  }

  function handleTopicClick(option: CaseCategory | typeof ALL_OPTION) {
    if (option === ALL_OPTION) {
      onChange({ ...value, topics: null });
      return;
    }

    const current = value.topics ?? [];
    const exists = current.includes(option as CaseCategory);
    let next: CaseCategory[];
    if (exists) {
      next = current.filter((v) => v !== option);
    } else {
      next = [...current, option as CaseCategory];
    }
    onChange({ ...value, topics: next.length ? next : null });
  }

  const activeTopics: (CaseCategory | typeof ALL_OPTION)[] =
    value.topics && value.topics.length ? value.topics : [ALL_OPTION];

  return (
    <div className="relative inline-block  text-sm">
      <button
        type="button"
        onClick={togglePanel}
        className="inline-flex cursor-pointer items-center gap-1.5 px-3 py-1.5 text-base font-medium text-zinc-900 max-md:px-0"
      >
        <Image src={Filter} alt="" width={16} height={16} />
        <span>Filter & Sort</span>
        {appliedCount > 0 && (
          <span className="inline-flex min-w-4 items-center justify-center rounded-[4px] bg-zinc-800 px-1 text-[9px] font-bold text-white">
            {appliedCount}
          </span>
        )}
        <Image
          src={arrowDown}
          alt=""
          width={16}
          height={16}
          className={`transition-all duration-300 ease-in-out ${open ? "-rotate-180" : ""}`}
        />
      </button>

      {/* Backdrop */}
      {open && (
        <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
      )}

      <div
        className={`absolute top-10 z-20 w-[340px] max-md:w-[300px] origin-top-left overflow-hidden rounded-2xl max-md:rounded-lg border border-white/60  bg-white/10
                shadow-lg
                backdrop-blur-md transition-all duration-200 ${
                  open
                    ? "pointer-events-auto scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0"
                } ${right ? "right-0" : "left-0"}`}
      >
        <div className="grid grid-cols-2 ">
          {/* Sort By column */}
          <div className="px-6 py-6">
            <div className="mb-3 text-sm font-medium uppercase text-[#351E1C80]">
              Sort By
            </div>
            <div className="flex flex-col gap-0.5">
              {SORT_OPTIONS.map(({ value: sortVal, label }) => {
                const selected = value.sort === sortVal;
                return (
                  <button
                    key={sortVal}
                    type="button"
                    onClick={() => handleSortClick(sortVal)}
                    className={`relative cursor-pointer font-normal flex h-8 max-md:h-6 w-full items-center rounded-md px-3 text-left text-[13px] transition-all ${
                      selected
                        ? " text-[#351E1C] font-medium opacity-100"
                        : " text-[#351E1C80] opacity-90 hover:opacity-100"
                    }`}
                  >
                    {selected && (
                      <span className="absolute left-1 h-3.5 w-0.5 -translate-x-0.5 rounded-full bg-[#79F2FF]" />
                    )}
                    <span className="pl-1">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Topics column */}
          <div className="px-6 py-6">
            <div className="mb-3 text-sm font-medium uppercase text-[#351E1C80]">
              Topics
            </div>
            <div className="flex flex-col gap-0.5">
              {TOPIC_OPTIONS.map((option) => {
                const selected = activeTopics.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleTopicClick(option)}
                    className={`relative cursor-pointer flex h-8 max-md:h-6 w-full items-center rounded-md px-3 text-left text-[13px] transition-all ${
                      selected
                        ? " text-[#351E1C] font-medium opacity-100"
                        : " text-[#351E1C80] opacity-90 hover:opacity-100"
                    }`}
                  >
                    {selected && (
                      <span className="absolute left-1 h-3.5 w-0.5 -translate-x-0.5 rounded-full bg-[#79F2FF]" />
                    )}
                    <span className="pl-1">{option}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
