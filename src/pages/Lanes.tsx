import { Link } from 'react-router-dom';
import { LANES } from '../data/lanes';

export default function Lanes() {
  return (
    <div className="container-narrow">
      <div className="ring-ring mb-3">Lanes</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">The 8 episode lanes</h1>
      <p className="text-cream-200 text-lg max-w-2xl mb-10 leading-relaxed">
        Every episode runs in one of these lanes. Each lane is a real operator
        question we answer with receipts.
      </p>

      <div className="space-y-4">
        {LANES.map(l => (
          <Link key={l.slug} to={`/lanes/${l.slug}`} className="block group border border-ink-700 rounded-lg p-5 hover:border-gold-700 transition-colors">
            <div className="ring-ring mb-2">lane {String(l.num).padStart(2, '0')}</div>
            <h2 className="font-serif text-2xl text-cream-50 mb-1 group-hover:text-gold-300 transition-colors">{l.title}</h2>
            <p className="text-gold-400 italic mb-2 text-sm">{l.one_liner}</p>
            <p className="text-cream-200 text-sm leading-relaxed">{l.description}</p>
          </Link>
        ))}
      </div>

      <p className="signature text-center mt-16">To the shed.</p>
    </div>
  );
}
