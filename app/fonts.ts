import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";

/** Display: використовуються ваги 400 / 500 / 700 (semibold у Tailwind ≈ 600 — найближчий наявний шрифт). */
export const ceraPro = localFont({
  src: [
    {
      path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cera-pro",
  display: "swap",
});

/** Sans: light / normal / medium / bold. */
export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
});
