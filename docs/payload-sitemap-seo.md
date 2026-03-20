# Payload: SEO, sitemap, robots

Короткий орієнтир для інтеграції з Next.js. Поточні [`app/sitemap.ts`](../app/sitemap.ts) і [`app/robots.ts`](../app/robots.ts) — **тимчасовий скелет** до підключення CMS; після Payload їх варто замінити або переписати так, щоб джерелом правди були опубліковані URL з API / плагіна.

## Офіційний SEO-плагін Payload

**[@payloadcms/plugin-seo](https://payloadcms.com/docs/plugins/seo)** додає в адмінці групу полів для **meta title**, **description**, **OG image** тощо. Це **не** генератор XML `sitemap.xml` і **не** `robots.txt` — лише контент для `<meta>` / `generateMetadata` у Next.

- Документація: [SEO Plugin | Payload](https://payloadcms.com/docs/plugins/seo)

План у [TASKS.md](TASKS.md): таски **5.09–5.10** (плагін + `generateMetadata` з API).

## Sitemap (XML)

У **офіційному** наборі Payload окремого плагіна «sitemap» на рівні `@payloadcms/plugin-*` може не бути; типові варіанти:

1. **Спільнотний плагін** на кшталт **[payload-sitemap-plugin](https://github.com/ainsleyclark/payload-sitemap-plugin)** (перевіряй сумісність з вашою версією Payload 3.x перед встановленням): ендпоінт / кеш / збір URL з колекцій.
2. **Next.js `sitemap.ts` / `generateSitemaps`**: залишити маршрут у App Router, але **підвантажувати список slug’ів** з Payload REST/GraphQL (лише `published`) — це відповідає таску **5.13** у `TASKS.md`.
3. **Custom Payload route** (`/api/sitemap.xml`), якщо хочете віддавати XML прямо з бекенду Payload.

Після вибору варіанту **прибрати дубль**: або один XML-ендпоінт (Payload/плагін), або один `app/sitemap.ts`, щоб пошуковці не плуталися.

## Robots.txt

Окремого «robots-плагіна» в Payload зазвичай **немає**. Найчастіше:

- **[`app/robots.ts`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)** у Next (як зараз) + `ROBOTS_NOINDEX` для staging.
- За потреби частину правил (наприклад, чи показувати sitemap URL) брати з **global `siteSettings`** у Payload після ітерації 5.

Таска **5.14** у `TASKS.md` — оновити `robots.ts` під прод / preview і узгодити з `siteSettings`.

## Підсумок

| Що потрібно | Типове рішення в стеку Payload + Next |
|-------------|----------------------------------------|
| Meta, OG, прев’ю в адмінці | `@payloadcms/plugin-seo` |
| `sitemap.xml` | Плагін спільноти **або** `app/sitemap.ts` з даними Payload |
| `robots.txt` | `app/robots.ts` + env / поля з CMS |
