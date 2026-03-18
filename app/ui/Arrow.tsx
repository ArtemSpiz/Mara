"use client";

interface ArrowLeftProps {
  color?: string;
  className?: string;
}

export default function ArrowLeft({
  color = "#000",
  className,
}: ArrowLeftProps) {
  return (
    <svg viewBox="0 0 130 100" className={className} fill="none">
      <path
        d="M80 10 
           L50 38 
           Q38 50 50 62 
           L80 90"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
    </svg>
  );
}
