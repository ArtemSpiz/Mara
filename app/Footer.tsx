import { FOOTER_LINKS } from "./footer/constants";
import { FooterDesktop } from "./components/Footer/FooterDesktop";
import { FooterMobile } from "./components/Footer/FooterMobile";
import { FooterBottomBar } from "./components/Footer/FooterBottomBar";

export default function Footer() {
  return (
    <footer className="bg-mara-footer relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/noise.png')]" />

      <div className="px-10 relative py-10 border-b z-20 border-white/10">
        <FooterMobile links={FOOTER_LINKS} />
        <FooterDesktop links={FOOTER_LINKS} />
      </div>

      <FooterBottomBar />
    </footer>
  );
}
