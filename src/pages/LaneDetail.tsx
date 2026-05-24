import { Link, useParams } from 'react-router-dom';
import { getLaneBySlug } from '../data/lanes';
import { EPISODES } from '../data/episodes';

export default function LaneDetail() {
  const { slug } = useParams<{ slug: string }>();
  const lane = getLaneBySlug(slug);

  if (!lane) {
    return (
      <div className="container-narrow">
        <p className="text-cream-200">Lane not found.</p>
        <Link to="/lanes" className="text-gold-400">← All lanes</Link>
      </div>
    );
  }

  const inLane = EPISODES.filter(e => e.lane === lane.slug);

  return (
    <div className="container-narrow">
      <Link to="/lanes" className="text-gold-400 text-sm">← All lanes</Link>

      <header className="mt-6 mb-10 pb-6 border-b border-ink-700">
        <div className="ring-ring mb-3">Lane {String(lane.num).padStart(2, '0')}</div>
        <h1 className="font-serif text-5xl text-cream-50 mb-3">{lane.title}</h1>
        <p className="text-xl text-gold-400 italic mb-4">{lane.one_liner}</p>
        <p className="text-cream-200 leading-relaxed max-w-2xl">{lane.description}</p>
      </header>

      {inLane.length > 0 && (
        <section className="mb-12">
          <h2 className="font-serif text-2xl text-cream-50 mb-6">Episodes in this lane</h2>
          <div className="space-y-3">
            {inLane.map(ep => (
              <Link key={ep.slug} to={`/episodes/${ep.slug}`} className="block group border border-ink-700 rounded-lg p-5 hover:border-gold-700 transition-colors">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="font-mono text-xs text-gold-400">Episode {String(ep.num).padStart(3, '0')}</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-500">{ep.status}</span>
                </div>
                <h3 className="font-serif text-xl text-cream-50 mb-2 group-hover:text-gold-300 transition-colors">{ep.title}</h3>
                <p className="text-cream-200 text-sm">{ep.hook}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-serif text-2xl text-cream-50 mb-4">Sample titles in this lane</h2>
        <ul className="space-y-2 text-cream-200">
          {lane.sample_titles.map((title, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-gold-400 font-mono text-xs mt-1">{String(i + 1).padStart(2, '0')}</span>
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="signature text-center mt-16">To the shed.</p>
    </div>
  );
}
