"use client";

import Image from "next/image";
import Bg from "@/public/Home/BgHome.png";
import BgMob from "@/public/Home/BgHomeMob.png";
import { useEffect, useState, useRef } from "react";
import { ContactSection } from "../ContactSection";
import ContactButton from "@/app/ui/ContactButton";

function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute z-[1] inset-0 max-lg:hidden pointer-events-none overflow-hidden"
      aria-hidden
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className="h-full min-h-full w-full object-cover"
      >
        <source src="/videoBg.webm" type="video/webm" />
        <source src="/videoBg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

function HeroCopy() {
  return (
    <>
      <div className="text-mara-ink z-10 text-6xl max-md:text-5xl max-w-[350px] max-md:max-w-[300px] tracking-tighter">
        We are{" "}
        <span className="text-7xl max-md:text-6xl font-instrument-serif italic">
          Coming Soon
        </span>
      </div>

      <div className="text-mara-ink z-10 max-w-[350px] text-xl max-md:text-base font-light leading-[120%]">
        We&apos;re working on our new website. Meanwhile review our work.
      </div>
    </>
  );
}

function HeroContactOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="z-200 relative">
      <ContactSection close={onClose} />
    </div>
  );
}

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="relative flex flex-col min-h-screen text-center items-center justify-center gap-5 font-sans">
        <div className="absolute inset-0 z-0">
          <Image
            src={BgMob}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:hidden"
          />
          <Image
            src={Bg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center hidden md:block"
          />
        </div>

        <HeroVideoBackground />
        <HeroCopy />
        <ContactButton onClick={() => setOpen(true)} />
      </div>

      {open && <HeroContactOverlay onClose={() => setOpen(false)} />}
    </>
  );
}
