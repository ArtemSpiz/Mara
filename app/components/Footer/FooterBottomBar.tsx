import Image from "next/image";
import partnerLogo1 from "@/public/partnerLogo1.png";
import partnerLogo2 from "@/public/partnerLogo2.png";

export function FooterBottomBar() {
  return (
    <div className="px-10 z-20 relative py-6 flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between">
      <div className="flex gap-5 items-center">
        <Image
          src={partnerLogo1}
          width={66}
          height={24}
          alt="Clutch"
          className="opacity-50"
          sizes="66px"
        />
        <Image
          src={partnerLogo2}
          width={70}
          height={32}
          alt="Upwork"
          className="opacity-50"
          sizes="70px"
        />
      </div>
      <div className="flex gap-5 text-white/30 text-xs">
        <a href="#" className="hover:text-white/60 transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white/60 transition-colors">
          Terms of Condition
        </a>
      </div>
    </div>
  );
}
