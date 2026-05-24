import { Link } from 'react-router-dom';
import { EPISODES, cumulativeCostToMint } from '../data/episodes';

export default function CostToMintLedger() {
  const c = cumulativeCostToMint();
  const avg = c.episodes_published > 0 ? c.total_spend / c.episodes_published : 0;

  return (
    <div className="container-narrow">
      <div className="ring-ring mb-3">Cumulative Cost-to-Mint Ledger</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">The signature segment · public</h1>
      <p className="text-cream-200 text-lg max-w-2xl mb-10 leading-relaxed">
        Books-and-records-grade transparency on the show's own economics.
        Every episode contributes one Cost-to-Mint readout. Cumulative running
        totals live here.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <Stat label="Episodes published" v={String(c.episodes_published)} />
        <Stat label="Artifacts minted" v={String(c.total_artifacts_minted)} />
        <Stat label="Total spend (real)" v={`$${c.total_spend.toFixed(4)}`} />
        <Stat label="Hyperscaler equivalent" v={`$${c.hyperscaler_equivalent.toFixed(4)}`} />
        <Stat label="Human-only equivalent" v={`$${c.human_only_equivalent.toFixed(4)}`} />
        <Stat label="Average per artifact" v={`$${avg.toFixed(4)}`} />
      </div>

      <h2 className="font-serif text-2xl text-cream-50 mb-4">Per-episode readout</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-ink-700 rounded">
          <thead>
            <tr className="bg-ink-800">
              <th className="px-3 py-2 text-left font-mono text-xs uppercase tracking-wider text-gold-400 border-b border-ink-700">#</th>
              <th className="px-3 py-2 text-left font-mono text-xs uppercase tracking-wider text-gold-400 border-b border-ink-700">Episode</th>
              <th className="px-3 py-2 text-right font-mono text-xs uppercase tracking-wider text-gold-400 border-b border-ink-700">Total</th>
              <th className="px-3 py-2 text-right font-mono text-xs uppercase tracking-wider text-gold-400 border-b border-ink-700">Hyperscaler</th>
              <th className="px-3 py-2 text-right font-mono text-xs uppercase tracking-wider text-gold-400 border-b border-ink-700">Human-only</th>
            </tr>
          </thead>
          <tbody>
            {EPISODES.map(ep => (
              <tr key={ep.slug} className="border-b border-ink-700">
                <td className="px-3 py-2 font-mono text-xs text-cream-200">{String(ep.num).padStart(3, '0')}</td>
                <td className="px-3 py-2">
                  <Link to={`/episodes/${ep.slug}`} className="text-gold-400 hover:text-gold-300">{ep.title}</Link>
                </td>
                <td className="px-3 py-2 text-right font-mono text-gold-300">
                  {ep.cost_to_mint ? `$${ep.cost_to_mint.total.toFixed(4)}` : '—'}
                </td>
                <td className="px-3 py-2 text-right font-mono text-cream-200">
                  {ep.cost_to_mint ? `$${ep.cost_to_mint.hyperscaler_equivalent.toFixed(4)}` : '—'}
                </td>
                <td className="px-3 py-2 text-right font-mono text-cream-200">
                  {ep.cost_to_mint ? `$${ep.cost_to_mint.human_only_equivalent.toFixed(4)}` : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 border border-ink-700 rounded p-6">
        <h2 className="font-serif text-2xl text-cream-50 mb-3">Default baselines (operator-tunable)</h2>
        <ul className="text-cream-200 text-sm space-y-1 font-mono">
          <li>Electricity: $0.10 / kWh (US avg)</li>
          <li>Owned RTX 6000 amortized: $0.80 / hour</li>
          <li>Validator pass (Qwen-9B equivalent): $0.0001 / pass</li>
          <li>Storage (Tigris-equivalent): $0.023 / GB / month</li>
          <li>Hedera HCS message: $0.0001 / msg</li>
          <li>Hyperscaler comparison (AWS p4d.24xlarge): $32.77 / hour</li>
          <li>Human-only analyst: $200 / hour</li>
        </ul>
        <p className="text-ink-500 text-xs mt-4 font-mono">
          Cost-to-Mint CLI lives in the StreetChat repo · regenerate any episode readout via{' '}
          <span className="text-gold-400">streetchat cost-to-mint --episode N</span>.
        </p>
      </div>

      <p className="signature text-center mt-16">What did it cost to mint this truth? To the shed.</p>
    </div>
  );
}

function Stat({ label, v }: { label: string; v: string }) {
  return (
    <div className="border border-ink-700 rounded p-4 text-center">
      <div className="font-serif text-2xl text-gold-300">{v}</div>
      <div className="text-xs text-cream-200 mt-1">{label}</div>
    </div>
  );
}
