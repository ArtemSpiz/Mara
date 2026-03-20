import Soc1 from "@/public/SocialX.png";
import Soc2 from "@/public/SocialInb.png";
import Soc3 from "@/public/SocialF.png";
import Image from "next/image";

export default function Socials() {
  const Socials = [{ image: Soc1 }, { image: Soc2 }, { image: Soc3 }];

  return (
    <>
      <style>{`
        .social-btn {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--color-mara-midnight);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .social-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: var(--color-mara-midnight);
          transform: scale(0);
          transition: transform 0.35s cubic-bezier(0.34, 1.3, 0.64, 1);
        }

        .social-btn:hover::before {
          transform: scale(1);
        }

        .social-btn__icon {
          position: relative;
          z-index: 1;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      filter 0.3s ease;
        }

        .social-btn:hover .social-btn__icon {
          transform: scale(1.15);
          filter: invert(1);
        }
      `}</style>

      <div className="flex gap-2 items-center">
        {Socials.map((value, i) => (
          <div key={i} className="social-btn">
            <Image
              src={value.image}
              alt=""
              width={16}
              height={16}
              sizes="16px"
              className="social-btn__icon"
            />
          </div>
        ))}
      </div>
    </>
  );
}
