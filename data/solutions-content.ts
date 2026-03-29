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
    title: "Immobilier & actifs",
    intro:
      "Tout type de bien immobilier — résidentiel, tertiaire, commercial. Visite 3D précise pour valoriser, commercialiser ou documenter, partout au Maroc.",
    challenges: [
      "Commercialisation à distance avec peu de visites physiques",
      "Documentation fiable d'un bien avant transaction ou travaux",
      "Onboarding technique de nouveaux occupants ou exploitants",
    ],
    deliverables: [
      "Visite immersive Matterport pour tout type de bien",
      "Référentiel spatial partagé avec acheteurs, locataires ou exploitants",
      "Plans et livrables techniques sur devis",
    ],
    ctaText: "Obtenez un devis pour votre bien",
  },
];

export const solutionPathBySlug = Object.fromEntries(
  solutionPages.map((solution) => [
    solution.slug,
    `/solutions/${solution.slug}`,
  ])
) as Record<string, string>;
