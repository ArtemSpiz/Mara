"use client";
import Bg from "@/public/Home/BgHome.png";
import BgMob from "@/public/Home/BgHomeMob.png";
import { useEffect, useState } from "react";
import { ContactSection } from "../ContactSection";
import ContactButton from "@/app/ui/ContactButton";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Відслідковуємо ширину екрану
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Блокуємо скрол, коли відкритий ContactSection
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
      <div
        className="flex relative flex-col min-h-screen text-center items-center justify-center gap-5 font-sans bg-cover bg-center"
        style={{ backgroundImage: `url(${isMobile ? BgMob.src : Bg.src})` }}
      >
        <div className="absolute z-0 top-0 left-0 w-full pointer-events-non max-lg:hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videoBg.webm" type="video/webm" />
            <source src="/videoBg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="text-[#242424] z-10 text-6xl max-md:text-5xl max-w-[350px] max-md:max-w-[300px] tracking-tighter">
          We are{" "}
          <span className="text-7xl max-md:text-6xl font-[family-name:var(--font-instrument-serif)] italic">
            Coming Soon
          </span>
        </div>
        <div className="text-[#242424] z-10 max-w-[350px] text-xl max-md:text-base font-light leading-[120%]">
          We&apos;re working on our new website. Meanwhile review our work.
        </div>
        <ContactButton onClick={() => setOpen(true)} />
      </div>

      {open && (
        <div className="z-200 relative">
          <ContactSection close={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
