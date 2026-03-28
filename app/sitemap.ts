import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site-config";
import { solutionPages } from "@/data/solutions-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const baseRoutes = ["", "/technologie", "/contact"];

  const solutionRoutes = solutionPages.map((solution) => `/solutions/${solution.slug}`);

  return [...baseRoutes, ...solutionRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
