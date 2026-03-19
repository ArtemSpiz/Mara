"use client";

import {
  ContinueReadingCarousel,
  type ContinueReadingItem,
} from "../shared/ContinueReadingCarousel";

type BlogAnotherProps = {
  currentSlug: string;
  allItems: ContinueReadingItem[];
};

export function BlogAnother({ currentSlug, allItems }: BlogAnotherProps) {
  return (
    <ContinueReadingCarousel
      currentSlug={currentSlug}
      items={allItems}
      getHref={(slug) => `/blog/${slug}`}
    />
  );
}
