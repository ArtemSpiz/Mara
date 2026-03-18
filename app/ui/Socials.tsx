import Soc1 from "@/public/SocialX.png";
import Soc2 from "@/public/SocialInb.png";
import Soc3 from "@/public/SocialF.png";
import Image from "next/image";

export default function Socials() {
  const Socials = [
    {
      image: Soc1,
    },
    {
      image: Soc2,
    },
    {
      image: Soc3,
    },
  ];

  return (
    <>
      <div className="flex gap-2 items-center">
        {Socials.map((value, i) => (
          <div
            key={i}
            className="border cursor-pointer rounded-full border-[#151A23] w-10 h-10 flex justify-center items-center"
          >
            <Image src={value.image} alt="" width={16} height={16} />
          </div>
        ))}
      </div>
    </>
  );
}
