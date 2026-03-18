"use client";

import Image from "next/image";
import LogoFooter from "@/public/logoFooter.png";
import partnerLogo1 from "@/public/partnerLogo1.png";
import partnerLogo2 from "@/public/partnerLogo2.png";

export default function Footer() {
  const FooterLinks = [
    {
      title: "Home",
      subtitles: ["Pricing", "About Us", "Services"],
    },
    {
      title: "Resources",
      subtitles: ["Blog", "Resources", "Clients", "Tools"],
    },
    {
      title: "Work",
      subtitles: ["Portfolio", "Rejected Concepts"],
    },
    {
      title: "Follow us",
      subtitles: ["Dribble", "Behance", "Medium", "X (Twitter)"],
    },
  ];

  return (
    <footer className="bg-[#232323]">
      <div className="px-10 py-10 border-b border-[#FFFFFF]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex justify-between gap-2.5 w-full order-first md:order-last max-md:justify-center max-md:gap-x-10 max-md:flex-wrap max-md:pb-8">
            {FooterLinks.map((link, i) => (
              <div
                key={link.title}
                className="flex flex-col gap-3 max-md:items-center"
              >
                <div className="font-semibold text-[#FFFFFF66] text-sm">
                  {link.title}
                </div>
                <div
                  className={`flex flex-col ${i === FooterLinks.length - 1 ? "max-md:flex max-sm:flex-row max-md:gap-3" : "max-md:hidden"}`}
                >
                  {link.subtitles.map((subtitle, index) => (
                    <a
                      key={subtitle}
                      className={`text-[#FFFFFFCC] hover:text-[#d0cececc] cursor-pointer`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {subtitle}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-end max-md:mx-auto max-md:items-center order-last md:order-first">
            <Image src={LogoFooter} width={300} height={80} alt="Logo" />
            <div className="flex text-sm font-sans gap-5 max-md:gap-1 items-center pt-6 md:pt-10 max-md:flex-col max-md:items-center max-md:text-center">
              <div className="text-[#FFFFFF66] leading-normal shrink-0">About</div>
              <div className="text-[#FFFFFFCC]">
                We help startups and companies design and build digital products
                that fuel growth and innovation.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 md:px-14 py-8 md:py-10 flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between w-full">
        <div className="flex gap-5 items-center">
          <Image src={partnerLogo1} width={70} height={25} alt="Clutch" />
          <Image src={partnerLogo2} width={74} height={35} alt="Upwork" />
        </div>
        <div className="flex gap-5 text-[#FFFFFFCC] font-sans text-sm">
          <div>Privacy Policy</div>
          <div>Terms of Condition</div>
        </div>
      </div>
    </footer>
  );
}
