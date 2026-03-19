"use client";

import {
  ContinueReadingCarousel,
  type ContinueReadingItem,
} from "../shared/ContinueReadingCarousel";

type CaseStudiesAnotherProps = {
  currentSlug: string;
  allItems: ContinueReadingItem[];
};

export function CaseStudiesAnother({
  currentSlug,
  allItems,
}: CaseStudiesAnotherProps) {
  return (
    <ContinueReadingCarousel
      currentSlug={currentSlug}
      items={allItems}
      getHref={(slug) => `/case-studies/${slug}`}
    />
  );
}
