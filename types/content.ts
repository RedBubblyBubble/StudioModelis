export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

export type VerticalCard = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export type ValuePillar = {
  title: string;
  description: string;
};

export type PricingInfo = {
  basePrice: string;
  priceAmount: string;
  baseDescription: string;
  customDescription: string;
};

export type ProofItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type FaqItem = {
  id: string;
  title: string;
  content: string;
};

export type SolutionPageContent = {
  slug: string;
  title: string;
  intro: string;
  challenges: string[];
  deliverables: string[];
  ctaText: string;
};

export type TechFeature = {
  title: string;
  description: string;
};

export type StatItem = {
  value: number;
  suffix: string;
  label: string;
};
