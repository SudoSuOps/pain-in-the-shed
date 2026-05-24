import type { CostToMint } from '../data/episodes';

type Props = {
  ctm: CostToMint;
  episodeNum: number;
  topic?: string;
  runScope?: string;
};

export default function CostToMintReadout({ ctm, episodeNum, topic, runScope }: Props) {
  const hyperscalerMultiple = ctm.total > 0 ? (ctm.hyperscaler_equivalent / ctm.total).toFixed(2) : '—';
  const humanMultiple = ctm.total > 0 ? (ctm.human_only_equivalent / ctm.total).toFixed(2) : '—';

  return (
    <div className="ctm-readout">
      <div className="text-center mb-4">
        <div className="ring-ring mb-1">cost to mint</div>
        <div className="font-serif text-lg text-cream-50">Episode {episodeNum}</div>
      </div>
      {topic && <div className="text-cream-200 text-xs mb-1"><strong>Topic:</strong> {topic}</div>}
      {runScope && <div className="text-cream-200 text-xs mb-4"><strong>Run scope:</strong> {runScope}</div>}

      <div className="space-y-1 mb-4">
        <div className="ctm-row"><span>Compute</span><span>${ctm.compute.toFixed(4)}</span></div>
        <div className="ctm-row"><span>Human review</span><span>${ctm.human_review.toFixed(4)}</span></div>
        <div className="ctm-row"><span>Validator pass</span><span>${ctm.validator_pass.toFixed(4)}</span></div>
        <div className="ctm-row"><span>Storage</span><span>${ctm.storage.toFixed(4)}</span></div>
        <div className="ctm-row"><span>Energy</span><span>${ctm.energy.toFixed(4)}</span></div>
        <div className="ctm-row"><span>Retries</span><span>${ctm.retries.toFixed(4)}</span></div>
        <div className="ctm-row"><span>Repair</span><span>${ctm.repair.toFixed(4)}</span></div>
        <div className="ctm-row"><span>Deed issuance</span><span>${ctm.deed_issuance.toFixed(4)}</span></div>
      </div>

      <div className="border-t border-gold-700 pt-2 ctm-row">
        <span className="text-cream-50 font-bold">Total</span>
        <span className="text-gold-300 font-bold">${ctm.total.toFixed(4)} per minted artifact</span>
      </div>

      <div className="mt-4 pt-3 border-t border-ink-700">
        <div className="ring-ring mb-2">Comparison</div>
        <div className="ctm-row"><span>Hyperscaler equivalent</span><span>${ctm.hyperscaler_equivalent.toFixed(4)} ({hyperscalerMultiple}× ours)</span></div>
        <div className="ctm-row"><span>Human-only equivalent</span><span>${ctm.human_only_equivalent.toFixed(4)} ({humanMultiple}× ours)</span></div>
      </div>
    </div>
  );
}
