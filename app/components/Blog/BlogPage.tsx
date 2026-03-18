"use client";

import { useState } from "react";
import { BlogGrid } from "./BlogGrid";
import { ContactSection } from "../ContactSection";
import { Pagination } from "@/app/ui/Pagination";
import { FilterMenu, type FilterState } from "@/app/ui/FilterMenu";
import Image from "next/image";
import Grid from "@/public/Grid.png";
import List from "@/public/List.png";
import { ViewToggle } from "@/app/ui/ViewToggle";
import { BlogFeatured } from "./BlogFeatured";
import { BlogProject } from "./BlogProject";

const ITEMS_PER_PAGE = 6;

export function BlogPage() {
  const [filter, setFilter] = useState<FilterState>({
    topics: null,
    sort: "lasted",
  });

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  function handleFilterChange(newFilter: FilterState) {
    setFilter(newFilter);
    setPage(1); // reset to first page on filter change
  }

  return (
    <div className="">
      <div className="mx-auto  px-6 pt-24 h-[300px]  justify-center flex flex-col max-md:h-[200px] max-md:pt-10">
        <h1 className="font-sans text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-[56px] ">
          The latest from <em className="italic font-instrument-serif">Mara</em>
        </h1>
      </div>

      <div className="flex gap-2 items-center px-6 max-md:justify-between max-md:px-4 ">
        <div className=" flex  items-start gap-4 ">
          <FilterMenu value={filter} onChange={setFilter} />
        </div>

        <ViewToggle value={viewMode} onChange={setViewMode} />
      </div>
      <BlogFeatured />

      <BlogGrid
        filter={filter}
        page={page}
        itemsPerPage={ITEMS_PER_PAGE}
        onTotalPagesChange={setTotalPages}
        viewMode={viewMode}
      />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
      <BlogProject />

      <div className="mx-auto">
        <ContactSection />
      </div>
    </div>
  );
}
