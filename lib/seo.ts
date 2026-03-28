import type { Metadata } from "next";

import { defaultKeywords } from "@/data/seo-content";
import { siteConfig } from "@/data/site-config";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: BuildMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
