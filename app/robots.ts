import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/app/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  const noIndex = process.env.ROBOTS_NOINDEX === "1";

  if (noIndex) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
