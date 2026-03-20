"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FilterMenu, FilterState, SortOption } from "@/app/ui/FilterMenu";
import { BLOG_POSTS, type BlogPost } from "@/app/blog/data";
import { ViewToggle } from "@/app/ui/ViewToggle";

function matchesFilter(item: BlogPost, filter: FilterState): boolean {
  if (!filter.topics || filter.topics.length === 0) return true;
  return filter.topics.includes(item.category);
}

function filterItems(items: BlogPost[], filter: FilterState): BlogPost[] {
  return items.filter((item) => matchesFilter(item, filter));
}

function sortItems(items: BlogPost[], sort: SortOption): BlogPost[] {
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

function paginateItems(
  items: BlogPost[],
  page: number,
  itemsPerPage: number,
): BlogPost[] {
  const start = (page - 1) * itemsPerPage;
  return items.slice(start, start + itemsPerPage);
}

interface BlogGridProps {
  filter: FilterState;
  page: number;
  itemsPerPage: number;
  onTotalPagesChange: (total: number) => void;
  viewMode: "grid" | "list";
  onFilterChange: (filter: FilterState) => void;
  onViewModeChange: (mode: "grid" | "list") => void;
}

function BlogGridCard({ item }: { item: BlogPost }) {
  return (
    <Link
      href={`/blog/${item.slug}`}
      className="flex cursor-pointer flex-col gap-4"
    >
      <div className="overflow-hidden">
        <Image
          src={item.image}
          alt=""
          width={item.image.width}
          height={item.image.height}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2 pt-4 border-t border-mara-soil/20">
        <div className="text-mara-soil/60 font-sans text-sm">{item.date}</div>
        <div className="text-xl md:text-2xl font-normal text-mara-soil">
          {item.title}
        </div>
        <div className="text-sm text-mara-soil/70">{item.text}</div>
      </div>
    </Link>
  );
}

function BlogListRow({ item }: { item: BlogPost }) {
  return (
    <div className="grid grid-cols-[200px_1fr_1fr_100px] items-center gap-4 w-full py-4 max-md:border-b max-md:pb-2 max-md:grid-cols-1 max-md:py-0 max-md:gap-2 border-mara-midnight/20">
      <div className="text-mara-soil/60 font-sans text-sm">{item.date}</div>
      <div className="text-xl md:text-2xl font-normal text-mara-soil">
        {item.title}
      </div>
      <div className="text-sm text-mara-soil/70">{item.text}</div>

      <Link
        href={`/blog/${item.slug}`}
        className="text-mara-midnight cursor-pointer w-full justify-end flex text-sm underline font-sans"
      >
        Read
      </Link>
    </div>
  );
}

export function BlogGrid({
  filter,
  page,
  itemsPerPage,
  onTotalPagesChange,
  viewMode,
  onFilterChange,
  onViewModeChange,
}: BlogGridProps) {
  const listView = viewMode === "list";

  const allItems = useMemo(() => {
    const filtered = filterItems(BLOG_POSTS, filter);
    return sortItems(filtered, filter.sort);
  }, [filter]);

  useEffect(() => {
    const total = Math.ceil(allItems.length / itemsPerPage);
    onTotalPagesChange(Math.max(1, total));
  }, [allItems.length, itemsPerPage, onTotalPagesChange]);

  const items = useMemo(() => {
    return paginateItems(allItems, page, itemsPerPage);
  }, [allItems, page, itemsPerPage]);

  const sectionRef = useRef<HTMLElement>(null);
  const prevPageRef = useRef<number | null>(null);

  useEffect(() => {
    if (prevPageRef.current === null) {
      prevPageRef.current = page;
      return;
    }

    if (prevPageRef.current !== page) {
      prevPageRef.current = page;

      if (sectionRef.current) {
        const top =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [page]);

  return (
    <section
      ref={sectionRef}
      className="mx-auto px-12 max-w-[1800px] max-md:px-4 pt-24 max-md:pt-5 pb-16"
    >
      <div className="mb-12 max-md:mb-5 flex items-center justify-between gap-4">
        <div className="text-3xl font-sans text-mara-midnight">Posts</div>

        <div className="flex gap-2 items-center px-6 max-md:justify-between max-md:px-4">
          <div className="flex items-start gap-4">
            <FilterMenu right value={filter} onChange={onFilterChange} />
          </div>

          <ViewToggle value={viewMode} onChange={onViewModeChange} />
        </div>
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
            className="group relative animate-[fadeUp_0.45s_ease_both]"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            {listView ? (
              <BlogListRow item={item} />
            ) : (
              <BlogGridCard item={item} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
