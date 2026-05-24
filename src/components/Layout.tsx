import { type ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV = [
  { to: '/episodes', label: 'Episodes' },
  { to: '/lanes', label: 'Lanes' },
  { to: '/cost-to-mint', label: 'Cost to Mint' },
  { to: '/subscribe', label: 'Subscribe' },
  { to: '/about', label: 'About' },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-ink-900 text-cream-100">
      <header className="border-b border-ink-700 sticky top-0 bg-ink-900/95 backdrop-blur z-50">
        <div className="container-wide py-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="ring-ring">pain in the</span>
            <span className="font-serif text-xl text-cream-50 group-hover:text-gold-300 transition-colors">
              Shed
            </span>
          </Link>
          <nav className="ml-auto flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
            {NAV.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? 'text-gold-400' : 'text-cream-200 hover:text-gold-300'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 py-10">{children}</main>

      <footer className="border-t border-ink-700 mt-16">
        <div className="container-wide py-8 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-serif text-base text-cream-50 mb-2">Pain in the Shed</div>
            <p className="text-ink-500 leading-relaxed">
              The cost-of-intelligence podcast. Every episode answers one
              question: what did it cost to mint this truth?
            </p>
          </div>
          <div>
            <div className="ring-ring mb-2">8 Lanes</div>
            <ul className="space-y-1 text-cream-200 text-xs">
              <li><Link to="/lanes/cost-to-mint" className="hover:text-gold-300">Cost to Mint</Link></li>
              <li><Link to="/lanes/hyperscaler-pain" className="hover:text-gold-300">Hyperscaler Pain</Link></li>
              <li><Link to="/lanes/gpu-street-prices" className="hover:text-gold-300">GPU Street Prices</Link></li>
              <li><Link to="/lanes/vast-ai-field-notes" className="hover:text-gold-300">Vast.ai Field Notes</Link></li>
              <li><Link to="/lanes/edge-appliance-economics" className="hover:text-gold-300">Edge Appliance Economics</Link></li>
              <li><Link to="/lanes/energy-is-the-receipt" className="hover:text-gold-300">Energy Is The Receipt</Link></li>
              <li><Link to="/lanes/false-honey" className="hover:text-gold-300">False Honey</Link></li>
              <li><Link to="/lanes/repair-lift" className="hover:text-gold-300">Repair Lift</Link></li>
            </ul>
          </div>
          <div>
            <div className="ring-ring mb-2">Defense Stack</div>
            <ul className="space-y-1 text-cream-200">
              <li><a href="https://mrdefendable.com" className="hover:text-gold-300">mrdefendable.com</a></li>
              <li><a href="https://defendableos.com" className="hover:text-gold-300">defendableos.com</a></li>
              <li><a href="https://ledger.mrdefendable.com" className="hover:text-gold-300">ledger.mrdefendable.com</a></li>
              <li><a href="https://chat.mrdefendable.com" className="hover:text-gold-300">chat.mrdefendable.com</a></li>
              <li><a href="https://offensetotheshed.com" className="hover:text-gold-300">offensetotheshed.com</a></li>
              <li><a href="https://defendabledocs.com" className="hover:text-gold-300">defendabledocs.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ink-700">
          <div className="container-wide py-3 flex flex-wrap items-center justify-between text-xs text-ink-500">
            <span>© 2026 Swarm and Bee LLC · DefendableOS</span>
            <span className="signature">What did it cost to mint this truth? 🐝</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
