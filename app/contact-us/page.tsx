import { ContactSection } from "../components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mara.",
  openGraph: {
    title: "Contact | Mara",
    description: "Get in touch with Mara.",
  },
};

export default function Page() {
  return (
    <div className="mt-20 md:mt-42 border-t border-mara-charcoal">
      <ContactSection />
    </div>
  );
}
