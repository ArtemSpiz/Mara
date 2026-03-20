import Image from "next/image";
import LogoFooter from "@/public/logoFooter.png";
import type { FooterLink } from "@/app/footer/constants";

export function FooterDesktop({ links }: { links: FooterLink[] }) {
  return (
    <div className="hidden md:flex justify-between gap-10">
      <div className="flex flex-col justify-end gap-6">
        <Image
          src={LogoFooter}
          width={280}
          height={75}
          alt="Mara"
          sizes="(min-width: 768px) 280px, 0px"
        />
        <div className="flex gap-5 items-center">
          <span className="text-white/30 text-sm shrink-0">About</span>
          <p className="text-white/70 text-sm leading-relaxed max-w-[340px]">
            We help startups and companies design and build digital products that
            fuel growth and innovation.
          </p>
        </div>
      </div>

      <div className="flex gap-5 justify-between w-full max-w-3xl ">
        {links.map((link) => (
          <div key={link.title} className="flex flex-col gap-3">
            <span className="text-white/30 text-sm font-medium">
              {link.title}
            </span>
            <div className="flex flex-col gap-2">
              {link.subtitles.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="
                      relative w-fit text-white/70 hover:text-white text-sm transition-colors
                      after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0
                      after:bg-white after:transition-all after:duration-300
                      hover:after:w-full
                    "
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
