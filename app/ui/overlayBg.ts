export const overlayBg = {
  className: "bg-mara-page/90 backdrop-blur-md backdrop-saturate-150",

  style: {
    background: "color-mix(in srgb, var(--color-mara-page) 90%, transparent)",
    backdropFilter: "blur(12px) saturate(1.5)",
    WebkitBackdropFilter: "blur(12px) saturate(1.5)",
  } as React.CSSProperties,
} as const;
