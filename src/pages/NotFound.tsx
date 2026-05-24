import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-narrow text-center py-16">
      <div className="ring-ring mb-3">404</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-3">No audio at that timestamp.</h1>
      <p className="text-cream-200 mb-8">Back to the show.</p>
      <Link to="/" className="px-5 py-3 bg-gold-500 text-ink-900 font-medium rounded hover:bg-gold-400 transition-colors">
        Home
      </Link>
      <div className="text-gold-400 mt-8">To the shed.</div>
    </div>
  );
}
