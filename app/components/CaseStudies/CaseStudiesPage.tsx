"use client";

import { useState } from "react";
import { FilterMenu, type FilterState } from "@/app/ui/FilterMenu";
import { CaseStudiesGrid } from "./CaseStudiesGrid";
import { ContactSection } from "../ContactSection";
import { Pagination } from "@/app/ui/Pagination";

const ITEMS_PER_PAGE = 7;

export function CaseStudiesPage() {
  const [filter, setFilter] = useState<FilterState>({
    topics: null,
    sort: "lasted",
  });

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  function handleFilterChange(newFilter: FilterState) {
    setFilter(newFilter);
    setPage(1); // reset to first page on filter change
  }

  return (
    <div className="">
      <div className="mx-auto  px-6 pt-24 h-[500px]  justify-center flex flex-col  max-md:h-[300px]">
        <h1 className="font-sans text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-[56px] max-sm:max-w-[200px]">
          Bring bold ideas{" "}
          <em className="italic font-instrument-serif">to life</em>
        </h1>
        <p className="mt-4 max-w-xl text-sm font-sans leading-relaxed text-[#151A23E5]">
          Imagine and build experiences, products and businesses that disrupt
          the status quo, win hearts and realize the future.
        </p>
      </div>

      <CaseStudiesGrid
        filter={filter}
        page={page}
        itemsPerPage={ITEMS_PER_PAGE}
        onTotalPagesChange={setTotalPages}
        onFilterChange={handleFilterChange}
      />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      <div className="mx-auto">
        <ContactSection />
      </div>
    </div>
  );
}
