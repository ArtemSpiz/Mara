# Tailwind у проєкті Mara

Проєкт на **Tailwind CSS v4** з `@tailwindcss/postcss`. На відміну від v3, **основне джерело теми — CSS**, а не лише `tailwind.config.*`.

## Де що лежить

| Файл | Призначення |
|------|----------------|
| [tailwind.config.mjs](../tailwind.config.mjs) | Офіційний файл конфігурації (зараз мінімальний). Сюди підключатимуться **плагіни**; `content` у v4 зазвичай визначається автоматично. |
| [app/globals.css](../app/globals.css) | `@import "tailwindcss"`, `@config`, блок **`@theme`** — палітра **Mara** (`mara-*`), кастомні розміри тексту (`text-mara-*`), прив’язка шрифтів. |
| [app/fonts.ts](../app/fonts.ts) | Локальні та Google-шрифти через `next/font`; CSS-змінні `--font-satoshi`, `--font-cera-pro`, `--font-instrument-serif` підхоплюються в `@theme`. |

## Як додати колір

1. У `app/globals.css` всередині `@theme inline { ... }` додай рядок виду `--color-mara-назва: #hex;`
2. У компонентах використовуй `bg-mara-назва`, `text-mara-назва`, `border-mara-назва` тощо.
3. Уникай нових `bg-[#...]` / `text-[#...]`, якщо для відтінку вже є токен.

## Як додати розмір тексту

У тому ж `@theme`:

```css
--text-mara-display-sm: 1.5rem;
--text-mara-display-lg: clamp(2.25rem, 4vw, 3.5rem);
```

У розмітці: `text-mara-display-sm`, `text-mara-display-lg`.

## Поточні токени кольорів (`mara-*`)

Усі визначені в `app/globals.css` (`@theme inline`), зокрема: `mara-page`, `mara-ink`, `mara-soil`, `mara-midnight`, `mara-slate`, `mara-slate-deep`, `mara-footer`, `mara-charcoal`, `mara-panel`, `mara-mist`, `mara-white`, `mara-soft`, `mara-canvas-muted`, `mara-knob`, `mara-border-hairline`, `mara-icon-muted`, `mara-accent-blue`, `mara-accent-cyan`, `mara-accent-teal`, `mara-cream-warm`, `mara-ink-strong`, `mara-zinc-900`, `mara-zinc-700`, `mara-zinc-100`.

Компоненти переведені на ці утиліти; **виняток**: у `ViewToggle` лишається один arbitrary `shadow-[inset_..._rgb(0_0_0/0.15)]` — за потреби винести в `--shadow-*` у `@theme`.

## Чому не один великий `tailwind.config.js` як у v3

У v4 рекомендовано тримати дизайн-токени поруч з `@import "tailwindcss"` — так зміни видно в одному місці, а `tailwind.config.mjs` лишається для сумісності та плагінів. Директива `@config "../tailwind.config.mjs"` у `globals.css` явно підключає цей файл.
