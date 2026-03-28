import type { SolutionPageContent } from "@/types/content";

export const solutionPages: SolutionPageContent[] = [
  {
    slug: "architectes-et-bureaux-detudes",
    title: "Architectes et bureaux d'études",
    intro:
      "Fiabilisez l'état existant avant conception, avec une base visuelle complète et mesurable.",
    challenges: [
      "Sites incomplets ou hétérogènes à documenter rapidement",
      "Multiplication des déplacements pour vérifications",
      "Manque de référentiel commun entre équipes projet",
    ],
    deliverables: [
      "Visite 3D Matterport navigable",
      "Mesures et annotations sur modèle",
      "Plans DWG ou nuage de points sur devis",
    ],
    ctaText: "Besoin d'un relevé fiable pour vos études ?",
  },
  {
    slug: "retail-et-franchises",
    title: "Retail et franchises",
    intro:
      "Standardisez vos audits et vos déploiements avec un jumeau numérique exploitable par siège et terrain.",
    challenges: [
      "Réseaux multi-sites difficiles à piloter à distance",
      "Hétérogénéité d'exécution des standards magasin",
      "Allers-retours coûteux entre siège, agences et prestataires",
    ],
    deliverables: [
      "Capture 3D immersive de chaque point de vente",
      "Support d'audit visuel partagé",
      "Export et documentation technique sur devis",
    ],
    ctaText: "Structurons vos relevés multi-sites",
  },
  {
    slug: "ingenierie-et-chantier",
    title: "Ingénierie et chantier",
    intro:
      "Documentez l'existant et le suivi chantier avec une trace visuelle précise des zones clés.",
    challenges: [
      "Coordination inter-lots sans vision commune",
      "Validation d'interfaces techniques à distance",
      "Traçabilité visuelle insuffisante des étapes chantier",
    ],
    deliverables: [
      "Captures périodiques de zones techniques",
      "Comparaison visuelle entre états",
      "Exports avancés (nuage de points, IFC) sur devis",
    ],
    ctaText: "Sécurisez votre suivi technique",
  },
  {
    slug: "immobilier-tertiaire",
    title: "Immobilier tertiaire",
    intro:
      "Valorisez et exploitez vos actifs tertiaires grâce à des visites 3D précises et immédiatement partageables.",
    challenges: [
      "Commercialisation de surfaces avec peu de visites physiques",
      "Onboarding technique de nouveaux occupants",
      "Besoin de documentation fiable pour exploitation",
    ],
    deliverables: [
      "Visite immersive pour commercialisation",
      "Référentiel spatial partagé avec exploitants",
      "Plans et livrables techniques sur devis",
    ],
    ctaText: "Accélérez la valorisation de vos actifs",
  },
];

export const solutionPathBySlug = Object.fromEntries(
  solutionPages.map((solution) => [
    solution.slug,
    `/solutions/${solution.slug}`,
  ])
) as Record<string, string>;
