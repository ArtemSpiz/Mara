import localFont from "next/font/local";

export const ceraPro = localFont({
  src: [
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-thin.otf", weight: "100", style: "normal" },
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-black.otf", weight: "900", style: "normal" },
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-thinitalic.otf", weight: "100", style: "italic" },
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-lightitalic.otf", weight: "300", style: "italic" },
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-regularitalic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-mediumitalic.otf", weight: "500", style: "italic" },
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-bolditalic.otf", weight: "700", style: "italic" },
    { path: "../public/fonts/Cera-Pro/Demo_Fonts/Fontspring-DEMO-cerapro-blackitalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-cera-pro",
  display: "swap",
});

export const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi/Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/Satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/Satoshi/Satoshi-Black.otf", weight: "900", style: "normal" },
    { path: "../public/fonts/Satoshi/Satoshi-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../public/fonts/Satoshi/Satoshi-Italic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/Satoshi/Satoshi-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../public/fonts/Satoshi/Satoshi-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../public/fonts/Satoshi/Satoshi-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});