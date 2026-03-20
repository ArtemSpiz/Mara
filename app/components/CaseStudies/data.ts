import type { Article, ArticleCategory } from "@/app/content/articles";
import { ARTICLES } from "@/app/content/articles";

export type CaseStudy = Article;
export type CaseCategory = ArticleCategory;

export const CASE_STUDIES: CaseStudy[] = ARTICLES;
