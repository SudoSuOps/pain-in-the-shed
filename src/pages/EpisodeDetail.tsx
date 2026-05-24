import { Link, useParams } from 'react-router-dom';
import { getEpisodeBySlug } from '../data/episodes';
import { getLaneBySlug } from '../data/lanes';
import CostToMintReadout from '../components/CostToMintReadout';

export default function EpisodeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const ep = getEpisodeBySlug(slug);

  if (!ep) {
    return (
      <div className="container-narrow">
        <p className="text-cream-200">Episode not found.</p>
        <Link to="/episodes" className="text-gold-400">← All episodes</Link>
      </div>
    );
  }

  const lane = getLaneBySlug(ep.lane);

  return (
    <article className="container-narrow">
      <Link to="/episodes" className="text-gold-400 text-sm">← All episodes</Link>

      <header className="mt-6 mb-10 pb-6 border-b border-ink-700">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-gold-400">Episode {String(ep.num).padStart(3, '0')}</span>
          <span className="font-mono text-xs uppercase tracking-wider text-ink-500">{ep.status}</span>
          {lane && (
            <Link to={`/lanes/${lane.slug}`} className="ring-ring hover:text-gold-300">
              Lane {String(lane.num).padStart(2, '0')} · {lane.title}
            </Link>
          )}
        </div>
        <h1 className="font-serif text-5xl text-cream-50 mb-3">{ep.title}</h1>
        <p className="text-xl text-cream-200 italic">{ep.hook}</p>
      </header>

      {ep.status === 'queued' && (
        <div className="border border-gold-800 bg-gold-900/10 rounded-lg p-5 mb-8">
          <div className="ring-ring mb-2">queued for recording</div>
          <p className="text-cream-200">
            Episode {String(ep.num).padStart(3, '0')} is in the queue. The outline ships here ·
            audio publishes on record-and-deed. Subscribe to be notified.
          </p>
        </div>
      )}

      {ep.notes && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-cream-50 mb-4">Show outline</h2>
          <ol className="list-decimal list-inside space-y-2 text-cream-200">
            {ep.notes.map((n, i) => <li key={i}>{n}</li>)}
          </ol>
        </section>
      )}

      {ep.cost_to_mint && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-cream-50 mb-4">Cost-to-Mint segment</h2>
          <CostToMintReadout
            ctm={ep.cost_to_mint}
            episodeNum={ep.num}
            topic={ep.topic}
            runScope={ep.run_scope}
          />
          <p className="text-ink-500 text-xs mt-3 font-mono">
            Human review dominates the cost in this run. Honest output. Not every artifact beats
            hyperscaler on raw cost. Some beat them on PROVENANCE · which is the real moat.
          </p>
        </section>
      )}

      <footer className="mt-12 pt-8 border-t border-ink-700">
        {ep.ddeed && <div className="mb-4"><span className="deed-tag">{ep.ddeed}</span></div>}
        <p className="signature mb-2">— Mr. Defendable speaking out.</p>
        <p className="text-ink-500 text-xs font-mono">
          DDEED-anchored on Hedera HCS topic 0.0.10291838 ·{' '}
          <span className="text-gold-300">streetledger.eth/media/pod/{String(ep.num).padStart(3, '0')}-{ep.slug}/</span>
        </p>
      </footer>
    </article>
  );
}
