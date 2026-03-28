import type {
  FaqItem,
  HeroContent,
  PricingInfo,
  ProofItem,
  StatItem,
  ValuePillar,
  VerticalCard,
} from "@/types/content";

export const heroContent: HeroContent = {
  title: "Capture 3D locale, rapide et exploitable",
  subtitle:
    "Studio Modelis transforme vos sites en jumeaux numériques Matterport prêts à l'usage métier.",
  ctaLabel: "Demander un devis",
  ctaHref: "/contact",
  imageSrc: "/images/hero-operator.png",
  imageAlt: "Opérateur MetaScan en mission de capture 3D sur site",
};

export const verticalCards: VerticalCard[] = [
  {
    title: "Architectes & bureaux d'études",
    description:
      "Base fiable pour étude de l'existant, coordination et préparation des interventions.",
    href: "/solutions/architectes-et-bureaux-detudes",
    imageSrc: "/images/dollhouse.png",
    imageAlt: "Vue 3D dollhouse d'un bâtiment",
  },
  {
    title: "Retail & franchises",
    description:
      "Standardisez audits, déploiements et contrôle qualité sur l'ensemble du réseau.",
    href: "/solutions/retail-et-franchises",
    imageSrc: "/images/retail-scan.png",
    imageAlt: "Point de vente capturé en 3D",
  },
  {
    title: "Ingénierie & chantier",
    description:
      "Suivez l'avancement réel, validez les interfaces techniques et réduisez les déplacements.",
    href: "/solutions/ingenierie-et-chantier",
    imageSrc: "/images/device-closeup.png",
    imageAlt: "Capteur de scan 3D en gros plan",
  },
  {
    title: "Immobilier tertiaire",
    description:
      "Facilitez commercialisation, onboarding et gestion technique des espaces professionnels.",
    href: "/solutions/immobilier-tertiaire",
    imageSrc: "/images/measurements.png",
    imageAlt: "Mesures et annotations précises dans un scan 3D",
  },
];

export const valuePillars: ValuePillar[] = [
  {
    title: "Capture maîtrisée",
    description:
      "Intervention locale avec protocole clair pour des scans cohérents, même sur sites complexes.",
  },
  {
    title: "Rigueur opérationnelle",
    description:
      "Process cadré, délais annoncés et communication directe avec un interlocuteur technique.",
  },
  {
    title: "Livrables utiles",
    description:
      "Visite immersive Matterport, plans, exports nuage de points ou IFC selon besoins réels.",
  },
];

export const pricingInfo: PricingInfo = {
  basePrice: "Scan à partir de 129€ HT",
  priceAmount: "129€",
  baseDescription: "Tarif d'appel pour capture Matterport selon conditions d'intervention.",
  customDescription:
    "Plans DWG, exports nuage de points et maquettes IFC sur devis selon surface et complexité.",
};

export const proofItems: ProofItem[] = [
  {
    title: "Lecture spatiale immédiate",
    description:
      "Compréhension rapide des volumes grâce aux vues immersives et à la vue dollhouse.",
    imageSrc: "/images/dollhouse.png",
    imageAlt: "Modèle dollhouse permettant de visualiser l'espace global",
  },
  {
    title: "Précision exploitable",
    description:
      "Mesures, repères et annotations pour accélérer relevés techniques et prises de décision.",
    imageSrc: "/images/measurements.png",
    imageAlt: "Interface de mesures dans un relevé Matterport",
  },
  {
    title: "Preuve terrain",
    description:
      "Capture en conditions réelles pour documenter l'existant et limiter les retours sur site.",
    imageSrc: "/images/device-closeup.png",
    imageAlt: "Appareil de capture utilisé sur le terrain",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "delais",
    title: "Quel est le délai entre la capture et la livraison ?",
    content:
      "Pour une mission standard, la livraison Matterport intervient généralement sous 24 à 72 heures selon la surface et les contraintes d'accès.",
  },
  {
    id: "livrables",
    title: "Quels livrables sont inclus dans une mission ?",
    content:
      "La base inclut la visite immersive. Selon ton besoin, on ajoute plans 2D, exports nuage de points ou maquette IFC sur devis.",
  },
  {
    id: "precision",
    title: "Le scan est-il assez précis pour un usage technique ?",
    content:
      "La précision dépend du contexte et du protocole de capture. Pour la préparation d'interventions ou la coordination, la qualité est généralement suffisante et exploitable.",
  },
  {
    id: "surface",
    title: "Avez-vous une limite de surface ou de type de site ?",
    content:
      "Non, la méthodologie est adaptée à la complexité du site. Le cadrage en amont permet de confirmer le temps de capture et les livrables attendus.",
  },
];

export const statsItems: StatItem[] = [
  { value: 48, suffix: "h", label: "Délai moyen de livraison" },
  { value: 4, suffix: "", label: "Secteurs métier couverts" },
  { value: 129, suffix: "€", label: "Tarif d'entrée HT" },
  { value: 3, suffix: "", label: "Formats de livrables" },
];
