import { Link } from 'react-router-dom';
import { EPISODES } from '../data/episodes';
import { LANES } from '../data/lanes';

export default function Home() {
  const latest = EPISODES.slice(0, 3);

  return (
    <div>
      <section className="border-b border-ink-700 pb-14 mb-12">
        <div className="container-wide">
          <div className="ring-ring mb-4">painintheshed.com · MEDIA</div>
          <h1 className="font-serif text-5xl md:text-6xl text-cream-50 mb-6 leading-tight">
            Everybody talks about intelligence.
          </h1>
          <p className="text-xl text-gold-400 italic mb-6">
            Nobody talks about what it costs to mint.
          </p>
          <p className="text-lg text-cream-200 max-w-3xl mb-4">
            The cost-of-intelligence podcast. Every episode answers one question:
            <em className="text-gold-400 not-italic"> what did it cost to mint this truth?</em>
          </p>
          <p className="text-cream-200 max-w-3xl mb-8">
            Hyperscaler pain · GPU street prices · Vast.ai field notes · edge appliance economics ·
            energy as receipt · False Honey · repair lift. Operator-grade. From the shed.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/episodes" className="px-5 py-3 bg-gold-500 text-ink-900 font-medium rounded hover:bg-gold-400 transition-colors">
              Browse Episodes
            </Link>
            <Link to="/cost-to-mint" className="px-5 py-3 border border-gold-700 text-gold-400 rounded hover:bg-gold-900/30 transition-colors">
              Cumulative Cost-to-Mint
            </Link>
            <Link to="/subscribe" className="px-5 py-3 border border-ink-600 text-cream-200 rounded hover:border-gold-700 transition-colors">
              Subscribe
            </Link>
          </div>
        </div>
      </section>

      <section className="container-wide mb-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-serif text-3xl text-cream-50">Episode queue</h2>
          <Link to="/episodes" className="text-gold-400 hover:text-gold-300 text-sm">All episodes →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {latest.map(ep => (
            <Link key={ep.slug} to={`/episodes/${ep.slug}`} className="block group border border-ink-700 rounded-lg p-5 hover:border-gold-700 transition-colors">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="font-mono text-xs text-gold-400">Episode {String(ep.num).padStart(3, '0')}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-500">{ep.status}</span>
              </div>
              <h3 className="font-serif text-xl text-cream-50 mb-2 group-hover:text-gold-300 transition-colors">{ep.title}</h3>
              <p className="text-cream-200 text-sm leading-relaxed mb-3">{ep.hook}</p>
              <span className="ring-ring">{ep.lane.replace(/-/g, ' ')}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-wide mb-12">
        <h2 className="font-serif text-3xl text-cream-50 mb-6">The 8 Lanes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {LANES.map(l => (
            <Link key={l.slug} to={`/lanes/${l.slug}`} className="block border border-ink-700 rounded-lg p-4 hover:border-gold-700 transition-colors">
              <div className="ring-ring mb-1">lane {String(l.num).padStart(2, '0')}</div>
              <div className="font-serif text-lg text-cream-50 mb-1">{l.title}</div>
              <div className="text-xs text-cream-200">{l.one_liner}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-wide mb-12">
        <div className="border border-ink-700 rounded-lg p-6 bg-ink-800/50">
          <h2 className="font-serif text-2xl text-cream-50 mb-4">The signature segment</h2>
          <p className="text-cream-200 mb-3 leading-relaxed">
            Every episode closes with the <strong className="text-cream-50">Cost to Mint</strong> readout:
            compute · human review · validator · storage · energy · retries · repair · deed issuance.
            Plus hyperscaler-equivalent and human-only-equivalent comparisons.
          </p>
          <p className="text-cream-200 mb-4 leading-relaxed">
            We track it. We publish it. The cumulative ledger lives at{' '}
            <Link to="/cost-to-mint" className="text-gold-400 hover:text-gold-300">/cost-to-mint</Link>.
          </p>
          <p className="signature">Operator-grade economics for AI infrastructure.</p>
        </div>
      </section>

      <section className="container-wide mb-16">
        <div className="border-l-4 border-gold-700 pl-6 max-w-3xl">
          <p className="text-2xl font-serif text-cream-50 mb-2">
            Pain in the Shed.
          </p>
          <p className="text-xl font-serif text-cream-50 mb-2">
            Where offense meets reality.
          </p>
          <p className="text-cream-200">
            Books and records from the builder floor. To the shed.
          </p>
        </div>
      </section>
    </div>
  );
}
