import BlogImg from "@/public/BlogImg.png";
import Image from "next/image";

export function BlogProject() {
  return (
    <section className="mx-auto px-12 py-36 max-md:px-4 relative  max-md:py-10 border-b border-[#151A23]">
      <div className="text-[#151A2399] absolute text-base font-sans top-10 left-10 max-md:hidden">
        [Contact us]
      </div>

      <div className=" font-sans uppercase max-w-[950px] max-md:max-w-[300px] text-[#151A23] text-8xl max-lg:text-4xl max-md:text-4xl">
        let’s discuss your next{" "}
        <span className=" font-medium font-display">Project</span>
      </div>
    </section>
  );
}
