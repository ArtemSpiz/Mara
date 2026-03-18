import BlogImg from "@/public/BlogImg.png";
import Image from "next/image";

export function BlogFeatured() {
  return (
    <section className="mx-auto  px-12 max-md:px-4  max-md:pt-5 pb-16 max-md:pb-5">
      <div className="text-[#151A2399] text-base font-sans py-16 max-md:hidden">
        [Featured]
      </div>

      <div className="flex gap-5 items-center mx-auto max-w-7xl justify-between">
        <div className="flex flex-col gap-5 flex-1 max-w-[400px]">
          <div className="flex gap-1 items-center text-[#151A2380] font-sans text-sm">
            <span className="text-[#151A23]">Design</span> - 12, August 2024
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-3xl text-[#151A23] font-sans">
              How to Calculate the Cost of Smart Contract?
            </div>
            <div className="font-display text-[#151A23B2] text-sm">
              At our core, we believe in delivering high-quality designs in
              days, not weeks. This ensures that your project stays on track and
              progresses smoothly, minimizing delays and maximizing
              efficiency.{" "}
            </div>
          </div>
          <div className="flex gap-1 items-center text-[#151A2380] font-sans text-sm">
            Read - <span className="text-[#151A23]">7 min</span>
          </div>
        </div>
        <div className="max-w-[750px]  flex-2 h-auto max-md:hidden">
          <Image src={BlogImg} alt="" width={750} />
        </div>
      </div>
    </section>
  );
}
