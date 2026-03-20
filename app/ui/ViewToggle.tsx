"use client";

import { useState } from "react";

type ViewMode = "grid" | "list";

interface ViewToggleProps {
  value?: ViewMode;
  onChange?: (mode: ViewMode) => void;
}

export function ViewToggle({ value, onChange }: ViewToggleProps) {
  const [internal, setInternal] = useState<ViewMode>("grid");
  const mode = value ?? internal;

  function handleToggle(next: ViewMode) {
    setInternal(next);
    onChange?.(next);
  }

  return (
    <div className="relative flex items-center bg-mara-canvas-muted max-md:bg-mara-canvas-muted/40 rounded-full p-1 gap-1 max-md:p-1 shadow-[inset_0px_0px_3.33px_0px_rgb(0_0_0/0.15)]">
      {/* Sliding background circle */}
      <div
        className="absolute top-1 max-md:top-1 w-7 h-7 rounded-full bg-mara-knob shadow-md transition-transform duration-300 ease-in-out"
        style={{
          transform: mode === "grid" ? "translateX(0px)" : "translateX(32px)",
        }}
      />

      {/* Grid button */}
      <button
        onClick={() => handleToggle("grid")}
        className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center"
        aria-label="Grid view"
      >
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <rect
            x="1"
            y="1"
            width="5"
            height="5"
            rx="1"
            fill="none"
            stroke={
              mode === "grid"
                ? "var(--color-mara-white)"
                : "var(--color-mara-icon-muted)"
            }
            strokeWidth="1.5"
            className="transition-colors duration-300"
          />
          <rect
            x="8"
            y="1"
            width="5"
            height="5"
            rx="1"
            fill="none"
            stroke={
              mode === "grid"
                ? "var(--color-mara-white)"
                : "var(--color-mara-icon-muted)"
            }
            strokeWidth="1.5"
            className="transition-colors duration-300"
          />
          <rect
            x="1"
            y="8"
            width="5"
            height="5"
            rx="1"
            fill="none"
            stroke={
              mode === "grid"
                ? "var(--color-mara-white)"
                : "var(--color-mara-icon-muted)"
            }
            strokeWidth="1.5"
            className="transition-colors duration-300"
          />
          <rect
            x="8"
            y="8"
            width="5"
            height="5"
            rx="1"
            fill="none"
            stroke={
              mode === "grid"
                ? "var(--color-mara-white)"
                : "var(--color-mara-icon-muted)"
            }
            strokeWidth="1.5"
            className="transition-colors duration-300"
          />
        </svg>
      </button>

      {/* List button */}
      <button
        onClick={() => handleToggle("list")}
        className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center"
        aria-label="List view"
      >
        <svg width="14" height="12" viewBox="0 0 16 14" fill="none">
          <circle
            cx="1.5"
            cy="2"
            r="1.5"
            fill={
              mode === "list"
                ? "var(--color-mara-white)"
                : "var(--color-mara-icon-muted)"
            }
            className="transition-colors duration-300"
          />
          <rect
            x="5"
            y="1"
            width="11"
            height="2"
            rx="1"
            fill={
              mode === "list"
                ? "var(--color-mara-white)"
                : "var(--color-mara-icon-muted)"
            }
            className="transition-colors duration-300"
          />
          <circle
            cx="1.5"
            cy="7"
            r="1.5"
            fill={
              mode === "list"
                ? "var(--color-mara-white)"
                : "var(--color-mara-icon-muted)"
            }
            className="transition-colors duration-300"
          />
          <rect
            x="5"
            y="6"
            width="11"
            height="2"
            rx="1"
            fill={
              mode === "list"
                ? "var(--color-mara-white)"
                : "var(--color-mara-icon-muted)"
            }
            className="transition-colors duration-300"
          />
          <circle
            cx="1.5"
            cy="12"
            r="1.5"
            fill={
              mode === "list"
                ? "var(--color-mara-white)"
                : "var(--color-mara-icon-muted)"
            }
            className="transition-colors duration-300"
          />
          <rect
            x="5"
            y="11"
            width="11"
            height="2"
            rx="1"
            fill={
              mode === "list"
                ? "var(--color-mara-white)"
                : "var(--color-mara-icon-muted)"
            }
            className="transition-colors duration-300"
          />
        </svg>
      </button>
    </div>
  );
}
