# painintheshed.com

> *Everybody talks about intelligence. Nobody talks about what it costs to mint.* 🐝

MEDIA layer of the DefendableOS ecosystem · the cost-of-intelligence podcast.

## Stack

Vite 5.4 + React 18.3 + TypeScript 5.5 + Tailwind 3.4 + react-router-dom 6
(Same stack as mrdefendable / ledger / chat / offensetotheshed for cross-surface consistency.)

## Quick start

```bash
npm install
npm run dev        # http://localhost:5177
npm run build      # → dist/
npm run preview
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Home · show thesis · queued episodes · 8 lanes overview |
| `/episodes` | Episode index (chronological) |
| `/episodes/:slug` | Episode detail · outline · Cost-to-Mint readout · DDEED tag |
| `/lanes` | 8 episode lanes overview |
| `/lanes/:slug` | Lane detail · description · episodes in lane · sample titles |
| `/cost-to-mint` | Cumulative public ledger · per-episode cost-to-mint table · default baselines |
| `/subscribe` | RSS · Apple · Spotify · Pocketcasts · Overcast · YouTube · Hugging Face |
| `/about` | What this show is · production discipline · cross-link to defense stack |
| `*` | 404 |

## 8 Lanes (per `brand/painintheshed/README.md` spec)

1. **Cost to Mint** — signature lane · what one artifact actually costs
2. **Hyperscaler Pain** — why big AI is expensive · fragile · power-hungry
3. **GPU Street Prices** — 5090s · 3090s · RTX 6000s · Blackwell · used compute
4. **Vast.ai Field Notes** — what renters do · what breaks · what earns
5. **Edge Appliance Economics** — why not every job needs a hyperscaler
6. **Energy Is The Receipt** — power draw · thermal · cost per deed
7. **False Honey** — when AI looks smart but fails the assignment
8. **Repair Lift** — the economics of fixing AI

## Episode queue (4 outlines shipped)

- Episode 001 — *False Honey* (lane: false-honey) · cost-to-mint computed
- Episode 002 — *117GB Reclaimed* (lane: vast-ai-field-notes)
- Episode 003 — *Probability of Close* (lane: cost-to-mint)
- Episode 004 — *Offense Goes Dark* (lane: cost-to-mint)

All in `queued` status pending record-and-deed. Episode 001 has the
Cost-to-Mint readout pre-computed from the StreetChat sample run.

## The signature segment · Cost-to-Mint

Every episode closes with the standardized 8-line readout:

```
COST TO MINT · Episode N
─────────────────────────
Compute           $X.XX
Human review      $X.XX
Validator pass    $X.XX
Storage           $X.XX
Energy            $X.XX
Retries           $X.XX
Repair            $X.XX
Deed issuance     $X.XX
─────────────────
Total             $X.XX per minted artifact

Hyperscaler equivalent      $X.XX  (X.X× ours)
Human-only equivalent       $X.XX  (X.X× ours)
```

Cumulative ledger lives at `/cost-to-mint`. Every published episode contributes one row.

## RSS feed

- Canonical: `painintheshed.com/rss.xml`
- Pre-launch placeholder · activates with Episode 001 record-and-deed
- All platforms (Apple · Spotify · Pocketcasts · Overcast) pull from this single endpoint
- Single source of truth · books-and-records discipline applied to distribution

## Deploy (CF Pages)

```
Framework preset:  None (Vite)
Build command:     npm run build
Build output:      dist
Root directory:    /
Environment:       NODE_VERSION = 20
```

Custom domain: `painintheshed.com` (DNS auto-provisions if on Cloudflare).

## Production discipline

**Don't overproduce. Authenticity IS the moat.**

- Shed energy · founder energy · NO music-bed marketing podcast tropes
- Real conversations · live debugging · board-room style calls
- Real assignments · real stress · real recovery
- NO sponsorships · NO paywalls · NO platform exclusives · NO DRM
- NO "subscribe and like" outros · the sign-off is "to the shed"

## Cross-references

- [mrdefendable.com](https://mrdefendable.com) — the FACE
- [defendableos.com](https://defendableos.com) — the SYSTEM
- [ledger.mrdefendable.com](https://ledger.mrdefendable.com) — the LEDGER
- [chat.mrdefendable.com](https://chat.mrdefendable.com) — the CHAT (capture rail)
- [offensetotheshed.com](https://offensetotheshed.com) — the CULTURE (written sibling)
- [defendabledocs.com](https://defendabledocs.com) — the DOCS

---

🐝 *What did it cost to mint this truth? To the shed.*
