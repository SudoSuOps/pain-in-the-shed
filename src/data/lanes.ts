export type Lane = {
  num: number;
  slug: string;
  title: string;
  one_liner: string;
  description: string;
  sample_titles: string[];
};

export const LANES: Lane[] = [
  {
    num: 1,
    slug: 'cost-to-mint',
    title: 'Cost to Mint',
    one_liner: 'What does one trusted AI artifact actually cost?',
    description:
      'The signature lane. End-to-end economics on a single deeded artifact: compute · human review · validator · storage · energy · retries · repair · deed issuance. Comparison to hyperscaler-equivalent and human-only-equivalent baselines.',
    sample_titles: ['Cost to Mint · One Receipt End to End', 'When the Validator Costs More Than the Compute'],
  },
  {
    num: 2,
    slug: 'hyperscaler-pain',
    title: 'Hyperscaler Pain',
    one_liner: 'Why big AI is expensive · fragile · power-hungry.',
    description:
      'AWS p4d.24xlarge math. GCP TPU surprises. Azure quota tetris. The real operational cost of hyperscaler dependency. From the operator floor · with receipts.',
    sample_titles: ['The $32.77/hr Trap', 'Why Quota Tetris Kills Velocity'],
  },
  {
    num: 3,
    slug: 'gpu-street-prices',
    title: 'GPU Street Prices',
    one_liner: '5090s · 3090s · RTX 6000s · V100s · Blackwell · used compute.',
    description:
      'The real GPU market · per-card depreciation curves · sweet spots · used-card grading · auction strategies. Cite-able. Verifiable. Sold-comp grade.',
    sample_titles: ['The 5090 Is the New Workhorse', 'Used Card Grading · A 5-Tier Discipline'],
  },
  {
    num: 4,
    slug: 'vast-ai-field-notes',
    title: 'Vast.ai Field Notes',
    one_liner: 'What renters actually do · what breaks · what earns.',
    description:
      'Marketplace operations from both sides of the table: as renter (sourcing capacity) and as host (offering capacity). Real failure modes · real margins · real war stories.',
    sample_titles: ['117GB Reclaimed After Rental', 'Why Host Margins Compress in Q4'],
  },
  {
    num: 5,
    slug: 'edge-appliance-economics',
    title: 'Edge Appliance Economics',
    one_liner: 'Why not every job needs a hyperscaler.',
    description:
      'HoneyBox · Defendable Box · Jetson Orin family economics. Per-device throughput. Per-vertical break-even math. Why edge wins above 30% sustained utilization.',
    sample_titles: ['The 30% Utilization Crossover', 'A HoneyBox in Every SMB'],
  },
  {
    num: 6,
    slug: 'energy-is-the-receipt',
    title: 'Energy Is The Receipt',
    one_liner: 'Power draw · thermal · uptime · cost per deed.',
    description:
      'The doctrine that energy IS proof. Watts → dollars → receipts. Per-deed kWh math. Thermal envelope discipline. Why the power meter belongs in the deed.',
    sample_titles: ['Watts Are Witnesses', 'Thermal Discipline in a 4-Node Rack'],
  },
  {
    num: 7,
    slug: 'false-honey',
    title: 'False Honey',
    one_liner: 'When AI looks smart but fails the assignment.',
    description:
      'The classic adjudication failure mode. Real incidents · real Tribunal verdicts · real repair-lift outcomes. The most honest content we publish.',
    sample_titles: ['False Honey Incident #001', 'When the Agent Sounded Smart but Missed the Ask'],
  },
  {
    num: 8,
    slug: 'repair-lift',
    title: 'Repair Lift',
    one_liner: 'The economics of fixing AI instead of rerunning blindly.',
    description:
      'SwarmFixer pipeline economics. Pre-vs-post score deltas. Per-failure-mode repair-lift baselines. Why repair compounds and re-runs don\'t.',
    sample_titles: ['Repair Lift Beats Re-run · The Math', 'Per-Mode Lift Baselines · 2026 Q2'],
  },
];

export function getLaneBySlug(slug: string | undefined): Lane | undefined {
  return slug ? LANES.find(l => l.slug === slug) : undefined;
}
