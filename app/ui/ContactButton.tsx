"use client";

import { useRef, useEffect, useState } from "react";
import { useScramble } from "../hooks/useScramble";

interface ContactButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  hoverLabel?: string;
  variant?: "dark" | "light" | "cream";
}

export default function ContactButton({
  onClick,
  disabled,
  label = "Contact Us",
  hoverLabel = "Don't be shy",
  variant = "dark",
}: ContactButtonProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const scrambleTo = useScramble(textRef);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const isLight = variant === "light";
  const isCream = variant === "cream";
  const useCanvas = !isCream;
  const [hovered, setHovered] = useState(false);
  const progressRef = useRef(0);

  const fillWaveDarkRef = useRef("#252525");
  const fillWaveLightRef = useRef("#fcf6ef");

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const cs = getComputedStyle(root);
    const ch = cs.getPropertyValue("--color-mara-charcoal").trim();
    const cr = cs.getPropertyValue("--color-mara-cream-warm").trim();
    if (ch) fillWaveDarkRef.current = ch;
    if (cr) fillWaveLightRef.current = cr;
  }, []);

  useEffect(() => {
    if (!useCanvas) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const target = hovered ? 1 : 0;
    const speed = 0.07;

    const animate = () => {
      const diff = target - progressRef.current;
      progressRef.current += diff * speed;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const p = progressRef.current;
      if (p < 0.001) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const fillY = h * (1 - p);
      const waveAmp = 6 * Math.sin(p * Math.PI);
      const freq = (2 * Math.PI) / w;
      const phase = Date.now() * 0.004;

      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x++) {
        const y = fillY + Math.sin(x * freq * 2 + phase) * waveAmp;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = isLight
        ? fillWaveDarkRef.current
        : fillWaveLightRef.current;
      ctx.fill();

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hovered, isLight, useCanvas]);

  // У ContactButton — після рендеру виміряй обидва і встанови максимум
  useEffect(() => {
    if (!textRef.current) return;
    const el = textRef.current;

    // Міряємо поточний
    el.style.width = "";
    const w1 = el.getBoundingClientRect().width;

    // Міряємо hover текст тимчасово
    const prev = el.textContent;
    el.textContent = hoverLabel;
    const w2 = el.getBoundingClientRect().width;
    el.textContent = prev;

    // Фіксуємо максимум
    el.style.display = "inline-block";
    el.style.whiteSpace = "nowrap";
    el.style.overflow = "hidden";
    el.style.width = `${Math.max(w1, w2)}px`;
  }, [hoverLabel]);

  const handleMouseEnter = () => {
    if (disabled) return;
    setHovered(true);
    scrambleTo(hoverLabel);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setHovered(false);
    scrambleTo(label);
  };

  const baseSize = isLight
    ? { width: "auto", height: "auto", padding: "10px 24px" }
    : isCream
      ? { width: "100%", padding: "8px" }
      : { width: "200px", height: "55px" };

  return (
    <>
      <style>{`
        .cbtn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          outline: none;
          overflow: hidden;
          border: 1px solid var(--color-mara-charcoal);
          background: transparent;
          transition: border-color 0.3s ease;
        }
        .cbtn:disabled { opacity: 0.45; cursor: not-allowed; }
        .cbtn--dark { background: var(--color-mara-charcoal); }
        .cbtn--light { background: var(--color-mara-white); }
        .cbtn--cream { background: transparent; border-color: var(--color-mara-mist); }

        .cbtn__canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .cbtn__label {
          position: relative;
          z-index: 2;
          white-space: nowrap;
          transition: color 0.15s ease;
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        .cbtn--dark .cbtn__label { color: var(--color-mara-cream-warm); font-size: 16px; }
        .cbtn--light .cbtn__label { color: var(--color-mara-charcoal); font-size: 14px; }
        .cbtn--cream .cbtn__label { color: var(--color-mara-ink-strong); font-size: 16px; font-weight: 500; }

        .cbtn--dark.cbtn--hovered .cbtn__label { color: var(--color-mara-charcoal); }
        .cbtn--light.cbtn--hovered .cbtn__label { color: var(--color-mara-cream-warm); }
        .cbtn--cream.cbtn--hovered .cbtn__label { color: var(--color-mara-cream-warm); }

        .cbtn__arrow {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.15s ease;
        }
        .cbtn--dark .cbtn__arrow { color: var(--color-mara-cream-warm); }
        .cbtn--light .cbtn__arrow { color: var(--color-mara-charcoal); }
        .cbtn--dark.cbtn--hovered .cbtn__arrow { color: var(--color-mara-charcoal); }
        .cbtn--light.cbtn--hovered .cbtn__arrow { color: var(--color-mara-cream-warm); }

        /* cream slide overlay */
        .cbtn__slide {
          position: absolute;
          inset: 0;
          background: var(--color-mara-mist);
          z-index: 1;
          transform-origin: right;
          transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .cbtn--cream:hover .cbtn__slide { transform: scaleX(0); }

        /* corner accents */
        .cbtn__corner {
          position: absolute;
          width: 6px;
          height: 6px;
          z-index: 3;
          transition: opacity 0.3s ease, transform 0.3s ease;
          opacity: 0;
        }
        .cbtn:hover .cbtn__corner { opacity: 1; }
        .cbtn__corner--tl { top: -1px; left: -1px; border-top: 1.5px solid currentColor; border-left: 1.5px solid currentColor; transform: translate(3px, 3px); }
        .cbtn__corner--tr { top: -1px; right: -1px; border-top: 1.5px solid currentColor; border-right: 1.5px solid currentColor; transform: translate(-3px, 3px); }
        .cbtn__corner--bl { bottom: -1px; left: -1px; border-bottom: 1.5px solid currentColor; border-left: 1.5px solid currentColor; transform: translate(3px, -3px); }
        .cbtn__corner--br { bottom: -1px; right: -1px; border-bottom: 1.5px solid currentColor; border-right: 1.5px solid currentColor; transform: translate(-3px, -3px); }
        .cbtn:hover .cbtn__corner--tl { transform: translate(0, 0); }
        .cbtn:hover .cbtn__corner--tr { transform: translate(0, 0); }
        .cbtn:hover .cbtn__corner--bl { transform: translate(0, 0); }
        .cbtn:hover .cbtn__corner--br { transform: translate(0, 0); }
        .cbtn--dark .cbtn__corner { color: var(--color-mara-cream-warm); }
        .cbtn--light .cbtn__corner { color: var(--color-mara-charcoal); }
        .cbtn--cream .cbtn__corner { color: var(--color-mara-ink-strong); }
      `}</style>

      <button
        className={`cbtn cbtn--${variant}${hovered ? " cbtn--hovered" : ""}`}
        style={baseSize as React.CSSProperties}
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {useCanvas && (
          <canvas
            ref={canvasRef}
            className="cbtn__canvas"
            width={400}
            height={110}
          />
        )}

        {isCream && <span className="cbtn__slide" />}

        <span ref={textRef} className="cbtn__label">
          {label}
        </span>

        {isLight && (
          <span className="cbtn__arrow">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </span>
        )}
      </button>
    </>
  );
}
