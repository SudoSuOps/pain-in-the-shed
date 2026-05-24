import { Link } from 'react-router-dom';
import { EPISODES } from '../data/episodes';

export default function Episodes() {
  return (
    <div className="container-narrow">
      <div className="ring-ring mb-3">Episodes</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">All episodes</h1>
      <p className="text-cream-200 text-lg max-w-2xl mb-10 leading-relaxed">
        Every episode deeded as <span className="font-mono text-gold-300">DDEED-MEDIA-POD-*</span> on
        Hedera HCS topic <span className="font-mono text-gold-300">0.0.10291838</span>.
        Cost-to-Mint readout closes every show.
      </p>

      <div className="space-y-4">
        {EPISODES.map(ep => (
          <Link key={ep.slug} to={`/episodes/${ep.slug}`} className="block group border border-ink-700 rounded-lg p-5 hover:border-gold-700 transition-colors">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="font-mono text-xs text-gold-400">Episode {String(ep.num).padStart(3, '0')}</span>
              <span className="font-mono text-xs uppercase tracking-wider text-ink-500">{ep.status}</span>
              <span className="ring-ring">{ep.lane.replace(/-/g, ' ')}</span>
            </div>
            <h2 className="font-serif text-2xl text-cream-50 mb-2 group-hover:text-gold-300 transition-colors">{ep.title}</h2>
            <p className="text-cream-200 text-sm leading-relaxed mb-3">{ep.hook}</p>
            {ep.cost_to_mint && (
              <div className="text-xs font-mono text-ink-500">
                Cost to mint: <span className="text-gold-300">${ep.cost_to_mint.total.toFixed(4)}</span>
              </div>
            )}
          </Link>
        ))}
      </div>

      <p className="signature text-center mt-16">To the shed.</p>
    </div>
  );
}
