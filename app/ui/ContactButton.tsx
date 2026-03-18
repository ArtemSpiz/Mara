"use client";

import { useRef } from "react";
import { useScramble } from "../hooks/useScramble";

interface ContactButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  hoverLabel?: string;
  variant?: "dark" | "light";
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

  const isLight = variant === "light";

  return (
    <>
      <style>{`
        .contact-btn {
          position: relative;
          border: 1px solid rgba(121,242,255,0.18);
          background: #1a1a1a;
          display: flex;
          width: 200px;
          height: 55px;
          align-items: center;
          justify-content: center;
          gap: 14px;
          cursor: pointer;
          outline: none;
          overflow: hidden;
          transition: border-color 0.42s ease;
        }
        .contact-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #79F2FF 0%, rgba(121,242,255,0) 80%);
          opacity: 0;
          transition: opacity 0.42s ease;
          pointer-events: none;
        }
        .contact-btn:hover { border-color: transparent; }
        .contact-btn:hover::before { opacity: 1; }
        .contact-btn__text {
          font-size: 16px;
          font-weight: 400;
          color: #FCF6EF;
          white-space: nowrap;
          transition: color 0.18s ease;
          position: relative;
          z-index: 2;
        }
        .contact-btn:hover .contact-btn__text { color: #252525; }
        .contact-btn__icon {
          width: 36px;
          height: 36px;
          border-radius: 4px;
          border: 1px solid rgba(121,242,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: scale(0.7) rotate(-8deg);
          transition:
            opacity 0.28s cubic-bezier(0.34,1.4,0.64,1),
            transform 0.32s cubic-bezier(0.34,1.4,0.64,1);
        }
        .contact-btn:hover .contact-btn__icon {
          opacity: 1;
          transform: scale(1) rotate(0deg);
          transition-delay: 0.18s;
          background: rgba(37,37,37,0.2);
          border-color: rgba(37,37,37,0.15);
        }

        /* light variant */
        .contact-btn--light {
          background: white;
          border: 1px solid #252525;
          width: auto;
          height: auto;
          padding: 10px 24px;
          gap: 8px;
        }
        .contact-btn--light::before { display: none; }
        .contact-btn--light:hover { border-color: #252525; background: #252525; }
        .contact-btn--light .contact-btn__text {
          color: #252525;
          font-size: 14px;
        }
        .contact-btn--light:hover .contact-btn__text { color: white; }
        .contact-btn--light .contact-btn__arrow {
          color: #252525;
          transition: color 0.18s ease;
          position: relative;
          z-index: 2;
          font-size: 14px;
        }
        .contact-btn--light:hover .contact-btn__arrow { color: white; }
      `}</style>

      {isLight ? (
        <button
          className="contact-btn contact-btn--light"
          onClick={onClick}
          disabled={disabled}
          onMouseEnter={() => !disabled && scrambleTo(hoverLabel)}
          onMouseLeave={() => !disabled && scrambleTo(label)}
        >
          <span ref={textRef} className="contact-btn__text">
            {label}
          </span>
          <span className="contact-btn__arrow">→</span>
        </button>
      ) : (
        <button
          className="contact-btn"
          onClick={onClick}
          disabled={disabled}
          onMouseEnter={() => !disabled && scrambleTo(hoverLabel)}
          onMouseLeave={() => !disabled && scrambleTo(label)}
        >
          <span ref={textRef} className="contact-btn__text">
            {label}
          </span>
          <div className="contact-btn__icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#252525"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </div>
        </button>
      )}
    </>
  );
}
