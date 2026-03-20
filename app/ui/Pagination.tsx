"use client";

import ArrowLeft from "./Arrow";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = (): (number | "ellipsis")[] => {
    const pages: (number | "ellipsis")[] = [];
    const nums = new Set<number>();

    [1, 2, totalPages - 1, totalPages].forEach((n) => {
      if (n >= 1 && n <= totalPages) nums.add(n);
    });

    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      nums.add(i);
    }

    const sorted = [...nums].sort((a, b) => a - b);

    sorted.forEach((n, i) => {
      if (i > 0 && n - sorted[i - 1] > 1) {
        pages.push("ellipsis");
      }
      pages.push(n);
    });

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      className="flex items-center border-t border-b border-mara-soil max-md:border-mara-charcoal/10 justify-center gap-1 py-6 flex-wrap max-md:justify-between px-5"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center cursor-pointer justify-center w-8 h-8 rounded-xs border border-mara-border-hairline disabled:cursor-not-allowed transition-colors ${currentPage === 1 ? "text-mara-border-hairline" : "text-mara-soil"}`}
        aria-label="Previous page"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>

      {/* Desktop: page buttons */}
      <div className="hidden md:flex items-center gap-1 flex-wrap justify-center">
        {pages.map((page, i) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${i}`}
              className="w-8 h-8 flex items-center justify-center text-mara-zinc-700/50 text-sm"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`w-8 h-8 rounded-xs bg-transparent cursor-pointer border text-sm font-sans transition-colors ${
                page === currentPage
                  ? "border-mara-soil text-mara-soil"
                  : "border-mara-border-hairline text-mara-soil/85"
              }`}
            >
              {page}
            </button>
          ),
        )}
      </div>

      {/* Mobile: Page X of Y */}
      <span className="md:hidden text-sm font-sans text-mara-soil">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center cursor-pointer justify-center w-8 h-8 rounded-xs border border-mara-border-hairline disabled:cursor-not-allowed transition-colors ${currentPage === totalPages ? "text-mara-border-hairline" : "text-mara-soil"}`}
        aria-label="Next page"
      >
        <ArrowLeft className="w-4 h-4 rotate-180" />
      </button>
    </nav>
  );
}
