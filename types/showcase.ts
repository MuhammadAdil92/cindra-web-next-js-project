export type Step = {
    id: string;
    stepLabel: string;
    title: string;
    description: string;
    tags?: string[];
    /** Mint callout (STEP 03) — replaces tag pills when set */
    highlightBadge?: string;
    image: string;
    imageAlt: string;
  };
  