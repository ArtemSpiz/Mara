import type { Article, ArticleCategory } from "@/app/content/articles";
import { ARTICLES } from "@/app/content/articles";

export type BlogPost = Article;
export type BlogCategory = ArticleCategory;

/** Дані блогу; зараз співпадають з ARTICLES — пізніше можна замінити окремим масивом без зміни типів UI. */
export const BLOG_POSTS: BlogPost[] = ARTICLES;
