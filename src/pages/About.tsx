export default function About() {
  return (
    <div className="container-narrow">
      <div className="ring-ring mb-3">About</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">The cost-of-intelligence podcast.</h1>

      <div className="space-y-6 text-cream-200 leading-relaxed">
        <p>
          Pain in the Shed is the <strong className="text-cream-50">MEDIA</strong> layer of the
          DefendableOS ecosystem. It is the operator-grade economics show for AI infrastructure.
          No other show is in this lane.
        </p>

        <p>
          The show thesis is one line: <em className="text-gold-400 not-italic">everybody
          talks about intelligence · nobody talks about what it costs to mint.</em>
        </p>

        <p>
          Every episode answers some version of: <em className="text-gold-400 not-italic">what
          did it cost to mint this truth?</em> The signature segment that closes every show is the
          <strong className="text-cream-50"> Cost to Mint readout</strong> · a standardized 8-line
          breakdown (compute · human review · validator · storage · energy · retries · repair ·
          deed issuance) plus hyperscaler-equivalent and human-only-equivalent comparisons.
        </p>

        <h2 className="font-serif text-2xl text-cream-50 mt-8 mb-3">The 8 episode lanes</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong className="text-cream-50">Cost to Mint</strong> · what one trusted AI artifact actually costs</li>
          <li><strong className="text-cream-50">Hyperscaler Pain</strong> · why big AI is expensive · fragile · power-hungry</li>
          <li><strong className="text-cream-50">GPU Street Prices</strong> · 5090s · 3090s · RTX 6000s · Blackwell · used compute</li>
          <li><strong className="text-cream-50">Vast.ai Field Notes</strong> · what renters do · what breaks · what earns</li>
          <li><strong className="text-cream-50">Edge Appliance Economics</strong> · why not every job needs a hyperscaler</li>
          <li><strong className="text-cream-50">Energy Is The Receipt</strong> · power draw · thermal · cost per deed</li>
          <li><strong className="text-cream-50">False Honey</strong> · when AI looks smart but fails the assignment</li>
          <li><strong className="text-cream-50">Repair Lift</strong> · the economics of fixing AI</li>
        </ul>

        <h2 className="font-serif text-2xl text-cream-50 mt-8 mb-3">Production discipline</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Don't overproduce. <strong className="text-cream-50">Authenticity IS the moat.</strong></li>
          <li>Shed energy · founder energy · NO music-bed marketing podcast tropes</li>
          <li>Real conversations · live debugging · board-room style calls</li>
          <li>Real assignments · real stress · real recovery</li>
          <li>NO sponsorships · NO paywalls · NO platform exclusives</li>
          <li>NO "subscribe and like" outro · the sign-off is "to the shed"</li>
        </ul>

        <h2 className="font-serif text-2xl text-cream-50 mt-8 mb-3">Why this show exists</h2>
        <p>
          Most AI shows talk about benchmarks · model leaderboards · influencer takes ·
          VC narratives. Few talk about what the work actually <em>costs</em>. We do. With receipts.
        </p>
        <p>
          The meta-quality: <strong className="text-cream-50">this is the only podcast on the
          internet that produces a Hedera-anchored books-and-records trail of itself.</strong> The
          product and the medium are the same thing. That is the moat.
        </p>

        <h2 className="font-serif text-2xl text-cream-50 mt-8 mb-3">The brand stack</h2>
        <p>
          Pain in the Shed sits alongside{' '}
          <a href="https://mrdefendable.com" className="text-gold-400 hover:text-gold-300">mrdefendable.com</a> (FACE),{' '}
          <a href="https://defendableos.com" className="text-gold-400 hover:text-gold-300">defendableos.com</a> (SYSTEM),{' '}
          <a href="https://ledger.mrdefendable.com" className="text-gold-400 hover:text-gold-300">ledger.mrdefendable.com</a> (LEDGER),{' '}
          <a href="https://chat.mrdefendable.com" className="text-gold-400 hover:text-gold-300">chat.mrdefendable.com</a> (CHAT),{' '}
          <a href="https://offensetotheshed.com" className="text-gold-400 hover:text-gold-300">offensetotheshed.com</a> (CULTURE), and{' '}
          <a href="https://defendabledocs.com" className="text-gold-400 hover:text-gold-300">defendabledocs.com</a> (DOCS).
        </p>
      </div>

      <p className="signature text-center mt-16">Ring ring · Mr. Defendable speaking · to the shed.</p>
    </div>
  );
}
