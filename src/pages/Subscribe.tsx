export default function Subscribe() {
  const platforms = [
    { label: 'Apple Podcasts', url: '#', note: 'pulls from RSS' },
    { label: 'Spotify', url: '#', note: 'pulls from RSS' },
    { label: 'Pocketcasts', url: '#', note: 'pulls from RSS' },
    { label: 'Overcast', url: '#', note: 'pulls from RSS' },
    { label: 'YouTube', url: '#', note: 'video format only' },
    { label: 'RSS feed (canonical)', url: '/rss.xml', note: 'painintheshed.com/rss.xml' },
    { label: 'Hugging Face (transcripts)', url: '#', note: 'training-data dataset · per-episode' },
  ];

  return (
    <div className="container-narrow">
      <div className="ring-ring mb-3">Subscribe</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">Where to listen</h1>
      <p className="text-cream-200 text-lg max-w-2xl mb-10 leading-relaxed">
        Operator-grade distribution. Single canonical RSS at{' '}
        <span className="font-mono text-gold-300">painintheshed.com/rss.xml</span>.
        Every platform pulls from the same source.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {platforms.map(p => (
          <a key={p.label} href={p.url} className="block border border-ink-700 rounded-lg p-5 hover:border-gold-700 transition-colors">
            <div className="font-serif text-xl text-cream-50 mb-1">{p.label}</div>
            <div className="text-xs text-ink-500 font-mono">{p.note}</div>
          </a>
        ))}
      </div>

      <div className="border border-ink-700 rounded p-6 mb-10">
        <h2 className="font-serif text-2xl text-cream-50 mb-3">Distribution discipline</h2>
        <ul className="text-cream-200 space-y-2 text-sm">
          <li><strong className="text-cream-50">Single RSS endpoint.</strong> Every platform pulls from the same canonical feed. Single source of truth.</li>
          <li><strong className="text-cream-50">No sponsored episodes.</strong> Doctrine-grade. Authenticity IS the moat.</li>
          <li><strong className="text-cream-50">No paywalls.</strong> The doctrine is meant to be public.</li>
          <li><strong className="text-cream-50">No platform exclusives.</strong> Same audio · everywhere.</li>
          <li><strong className="text-cream-50">No DRM.</strong> Open formats · MP3 · M4A.</li>
          <li><strong className="text-cream-50">No "subscribe and like" outros.</strong> The sign-off is "to the shed."</li>
        </ul>
      </div>

      <div className="border border-gold-800 bg-gold-900/10 rounded p-6">
        <h2 className="font-serif text-xl text-cream-50 mb-2">Pre-launch · RSS coming soon</h2>
        <p className="text-cream-200 leading-relaxed text-sm">
          Episode 001 is in production. RSS feed and platform syndication go live on first publish.
          Until then · subscribe to <a href="https://mrdefendable.com/from-the-desk" className="text-gold-400 hover:text-gold-300">From the Desk of Mr. Defendable</a> for
          first-drop notification.
        </p>
      </div>

      <p className="signature text-center mt-16">Ring ring · standing by · to the shed.</p>
    </div>
  );
}
