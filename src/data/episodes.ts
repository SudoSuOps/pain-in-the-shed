export type CostToMint = {
  compute: number;
  human_review: number;
  validator_pass: number;
  storage: number;
  energy: number;
  retries: number;
  repair: number;
  deed_issuance: number;
  total: number;
  hyperscaler_equivalent: number;
  human_only_equivalent: number;
};

export type Episode = {
  num: number;
  slug: string;
  title: string;
  lane: string;
  status: 'shipped' | 'queued' | 'recording';
  date?: string;
  duration_min?: number;
  ddeed?: string;
  hook: string;
  notes?: string[];
  cost_to_mint?: CostToMint;
  topic?: string;
  run_scope?: string;
};

export const EPISODES: Episode[] = [
  {
    num: 1,
    slug: 'false-honey',
    title: 'False Honey',
    lane: 'false-honey',
    status: 'queued',
    hook: 'Agent sounded smart. Failed the assignment. Tribunal caught it. SwarmFixer repaired it. We deeded what we learned.',
    notes: [
      'Cold open: principal calls about an agent output that looked correct but missed the ask',
      'The Tribunal verdict trace · which validator check downgraded the artifact',
      'The SwarmFixer repair pair · how the fix got generated',
      'Repair lift measured · pre-score vs post-score · trace deeded',
      'The doctrine takeaway · why False Honey is the classic failure mode',
      'Cost-to-Mint segment · live readout',
      'Sign-off · to the shed',
    ],
    topic: 'Lane 7 · False Honey · agent sounded smart but failed assignment',
    run_scope: 'One DDEED-VOCAB term reissued after Tribunal verdict + SwarmFixer repair',
    cost_to_mint: {
      compute: 0.12,
      human_review: 26.6667,
      validator_pass: 0.0006,
      storage: 0.0005,
      energy: 0.0045,
      retries: 0.1,
      repair: 0.02,
      deed_issuance: 0.0003,
      total: 26.9125,
      hyperscaler_equivalent: 4.9155,
      human_only_equivalent: 26.6667,
    },
  },
  {
    num: 2,
    slug: '117gb-reclaimed',
    title: '117GB Reclaimed',
    lane: 'vast-ai-field-notes',
    status: 'queued',
    hook: 'Real fleet hygiene · compute ops · why infrastructure discipline matters when your model layer compounds.',
    notes: [
      'The post-rental cleanup story · 117GB recovered from a stale Vast.ai instance',
      'Why disk hygiene compounds over a 4-node fleet',
      'The audit log that caught the leak',
      'Per-vertical fleet hygiene baselines',
      'Cost-to-Mint segment for one cleanup cycle',
    ],
    topic: 'Lane 4 · Vast.ai Field Notes · post-rental hygiene',
    run_scope: 'One 117GB cleanup cycle across one Vast.ai instance',
  },
  {
    num: 3,
    slug: 'probability-of-close',
    title: 'Probability of Close',
    lane: 'cost-to-mint',
    status: 'queued',
    hook: 'CRE street language meets AI alignment. Why humans do not speak in schemas · and how the Communicator bridges the gap.',
    notes: [
      'The 30-year CRE-broker definition of probability of close',
      'How it translates to the AI-defense lane',
      'Communicator LLM intake examples · MAGIC funnel trace',
      'Cost-to-Mint for one Communicator pair',
    ],
    topic: 'Lane 1 · Cost to Mint · vocabulary intake economics',
    run_scope: 'One Communicator training pair from one principal call',
  },
  {
    num: 4,
    slug: 'offense-goes-dark',
    title: 'Offense Goes Dark',
    lane: 'cost-to-mint',
    status: 'queued',
    hook: 'Why defense infrastructure matters. The trust-layer thesis · books and records as the asset.',
    notes: [
      'The strategic reframe · offense vs defense in AI infrastructure',
      'Why books and records are the moat',
      'Datadog · Vanta · KPMG · Cloudflare parallel · how each became trust infra',
      'Cost-to-Mint for the doctrine page itself',
    ],
    topic: 'Lane 1 · doctrine deep-dive',
    run_scope: 'One doctrine page deeded as DDEED-MEDIA-POST',
  },
];

export function getEpisodeBySlug(slug: string | undefined): Episode | undefined {
  return slug ? EPISODES.find(e => e.slug === slug) : undefined;
}

export function cumulativeCostToMint(): {
  episodes_published: number;
  total_artifacts_minted: number;
  total_spend: number;
  hyperscaler_equivalent: number;
  human_only_equivalent: number;
} {
  const published = EPISODES.filter(e => e.cost_to_mint);
  return {
    episodes_published: published.length,
    total_artifacts_minted: published.length,
    total_spend: published.reduce((a, e) => a + (e.cost_to_mint?.total ?? 0), 0),
    hyperscaler_equivalent: published.reduce((a, e) => a + (e.cost_to_mint?.hyperscaler_equivalent ?? 0), 0),
    human_only_equivalent: published.reduce((a, e) => a + (e.cost_to_mint?.human_only_equivalent ?? 0), 0),
  };
}
