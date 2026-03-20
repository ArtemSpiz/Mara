# Mara — статус тасків

**Оновлюй цей файл** при закритті тасків (переносити рядки з «Залишилось» у «Виконано», у новому рядку став **✅** замість **⬜**). Повний план і принципи — у [TASKS.md](TASKS.md).

**Останнє оновлення статусу:** за станом репо (ітерації 1–3B закриті в коді; 4–7 — у черзі).

**Позначки:** ✅ зроблено · ⬜ у черзі

---

## Виконано

| | ID | Короткий опис |
|--|-----|----------------|
| ✅ | **1.01** | `npm run build`, попередження Next зафіксовані без окремого perf-файлу |
| ✅ | **1.02** | Прибрано невикористаний `localFont` з `layout.tsx` |
| ✅ | **1.03** | Прибрано плейсхолдер у `BlogClient` |
| ✅ | **1.04** | `socOpen` на mobile + sticky; прибрано мертвий `menuOpen` |
| ✅ | **2.01** | Окремий тип/модуль для блогу (`BlogPost`, `blog/data.ts`) |
| ✅ | **2.02** | Спільні дані в `content/articles.ts`; `BLOG_POSTS` / `CASE_STUDIES` |
| ✅ | **2.03** | `BlogArticlePage`, дані з `BLOG_POSTS` |
| ✅ | **2.04** | Блог-компоненти на `BLOG_POSTS`, не на `CASE_STUDIES` |
| ✅ | **2.05** | `app/sitemap.ts` (статика + blog/case slugs) |
| ✅ | **2.06** | `app/robots.ts`, `ROBOTS_NOINDEX`, `.env.example` |
| ✅ | **2.07** | Кореневий `metadata` + `metadataBase` + `openGraph` |
| ✅ | **2.08** | `generateMetadata` для `blog/[slug]` |
| ✅ | **2.09** | `generateMetadata` для `case-studies/[slug]` |
| ✅ | **2.10** | `metadata` для `/blog`, `/case-studies`, `/contact-us` |
| ✅ | **3.01** | Інвентаризація client boundary Header/Footer |
| ✅ | **3.02** | `header/config.ts` (server) |
| ✅ | **3.03** | `HeaderClient` — scramble, меню, burger |
| ✅ | **3.04** | `Header.tsx` → `HeaderClient` + `HEADER_LINKS` |
| ✅ | **3.05** | Footer: `FooterDesktop` / `FooterMobile` / `FooterBottomBar` + `footer/constants.ts` |
| ✅ | **3.06** | Hero: `next/image` замість CSS `backgroundImage` |
| ✅ | **3.07** | Hero: mobile/desktop зображення, `sizes` |
| ✅ | **3.08** | Hero video: `preload="none"`, Intersection Observer, `prefers-reduced-motion` |
| ✅ | **3.09** | Аудит `<Image>` |
| ✅ | **3.10** | Blog*: `sizes`, розміри, `priority` |
| ✅ | **3.11** | Case studies, Contact, Carousel, Header/Footer images |
| ✅ | **3.12** | Одне `priority` на LCP-кандидата на сторінку |
| ✅ | **3.13** | Instrument Serif — `next/font/google` |
| ✅ | **3.14** | Аудит ваг шрифтів |
| ✅ | **3.15** | Скорочені `fonts.ts` (Cera/Satoshi) |
| ✅ | **3.16** | `tailwind.config.mjs`, `@config`, `docs/tailwind.md` |
| ✅ | **3.17** | Палітра `--color-mara-*` у `@theme` |
| ✅ | **3.18** | `--text-mara-*` у `@theme` |
| ✅ | **3.19** | Header/Footer/Hero — токени `mara-*` |
| ✅ | **3.20** | Blog / CaseStudies — токени |
| ✅ | **3.21** | Contact, Filter, BlogSlugInfo, UI — токени |
| ✅ | **3.22** | Arbitrary hex прибрані / винятки в `tailwind.md` |
| ✅ | **—** | Додатково: `CaseStudy` mobile socials; `BlogSlugInfo` без сміттєвого рядка; `ContactButton`/canvas з CSS vars; `payload-sitemap-seo.md` |

---

## Залишилось зробити

| | ID | Короткий опис |
|--|-----|----------------|
| ⬜ | **4.01** | Залежності Payload 3 + `@payloadcms/next`, інтеграція з Next 16 |
| ⬜ | **4.02** | `payload.config.ts`, Users, старт колекцій |
| ⬜ | **4.03** | Адмінка `/admin` без поломки фронту |
| ⬜ | **4.04** | БД + `docs/env.md` |
| ⬜ | **4.05** | Колекція Media, локальне сховище (dev) |
| ⬜ | **4.06** | Віддалене сховище (S3 / Vercel Blob) |
| ⬜ | **4.07** | `next.config` `images.remotePatterns` |
| ⬜ | **4.08** | Webhook / `revalidateTag` |
| ⬜ | **5.01** | Колекція Pages (або Posts + CaseStudies), slug, published |
| ⬜ | **5.02** | Поле `blocks`, перший блок (RichText) |
| ⬜ | **5.03** | Блоки Media, CTA |
| ⬜ | **5.04** | Одна спільна схема `blocks` |
| ⬜ | **5.05** | Реєстр блоків у Next |
| ⬜ | **5.06** | `BlockRenderer` + fallback |
| ⬜ | **5.07** | Fetch by slug, мапінг медіа → props |
| ⬜ | **5.08** | Pilot-сторінка з CMS |
| ⬜ | **5.09** | `@payloadcms/plugin-seo` |
| ⬜ | **5.10** | `generateMetadata` з API + OG |
| ⬜ | **5.11** | Опційні поля блоків (variant, spacing, anchor) |
| ⬜ | **5.12** | Groups блоків у Payload (за потреби) |
| ⬜ | **5.13** | Sitemap з Payload / плагін; без дубля XML |
| ⬜ | **5.14** | `robots.ts` + CMS; `docs/cms-blocks.md` |
| ⬜ | **5.15** | Global `siteSettings`, усі UI-рядки з адмінки |
| ⬜ | **5.16** | Навігація header/footer з CMS |
| ⬜ | **5.17** | Контент сторінок лише блоки/CMS |
| ⬜ | **5.18** | Alt/aria / `lib/ui-strings` з API |
| ⬜ | **5.19** | Прапорці контенту в адмінці, не в `.env` |
| ⬜ | **5.20** | Політика PR / ESLint проти літералів |
| ⬜ | **6.01** | Localization у Payload |
| ⬜ | **6.02** | Локалізований pilot-контент |
| ⬜ | **6.03** | Next `app/[locale]/...` |
| ⬜ | **6.04** | Middleware локалі |
| ⬜ | **6.05** | `generateStaticParams` для локалей |
| ⬜ | **6.06** | hreflang, `html lang` |
| ⬜ | **6.07** | siteSettings: пікселі (GA4, GTM, Meta) |
| ⬜ | **6.08** | `AnalyticsScripts` + `next/script` |
| ⬜ | **6.09** | Draft/preview без пікселів |
| ⬜ | **7.01** | `docs/perf-baseline.md` + Lighthouse mobile |
| ⬜ | **7.02** | Build warnings у baseline |
| ⬜ | **7.03** | TBT / `dynamic()` якщо < 90 |
| ⬜ | **7.04** | Списки / віртуалізація якщо < 90 |
| ⬜ | **7.05** | Payload `imageSizes` ↔ `sizes` |
| ⬜ | **7.06** | Перевірка розмірів зображень |
| ⬜ | **7.07** | `docs/deploy-vercel.md` |
| ⬜ | **7.08** | Фінальні метрики + user flows |

---

## Чеклісти тестування (ще пройти вручну)

З [TASKS.md](TASKS.md) залишились невідмічені пункти після іт. 1–3B (регресія, sitemap/robots у браузері тощо) — виконай при нагоді або після Payload.
