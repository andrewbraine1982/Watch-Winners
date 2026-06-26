import Image from 'next/image'
import { ArrowRight, CheckCircle, PlayCircle, ShieldCheck, Star } from 'lucide-react'
import { competitions, currentDraw, site, winners } from '../data/site'

function imageFallback(src: string) {
  return src
}

export default function Home() {
  const featuredWinner = winners[0]
  return (
    <main className="min-h-screen bg-ivory text-graphite">
      <header className="absolute left-0 right-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white">
        <div className="font-display text-2xl tracking-wide">{site.brand}</div>
        <nav className="hidden gap-8 text-sm text-white/80 md:flex">
          <a href="#competitions">Competitions</a>
          <a href="#winners">Winners</a>
          <a href="#trust">Trust</a>
        </nav>
        <a className="rounded-full border border-gold/50 px-5 py-2 text-sm text-gold" href="#competitions">Enter Now</a>
      </header>

      <section className="hero-glow relative overflow-hidden px-6 pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-2 text-sm text-gold backdrop-blur">
              <Star size={16} /> {site.trustpilot}
            </div>
            <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">Win Your Dream Rolex</h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">{currentDraw.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#competitions" className="group rounded-full bg-gold px-7 py-4 font-semibold text-black transition hover:scale-[1.02]">
                Enter from {currentDraw.ticketPrice} <ArrowRight className="ml-2 inline" size={18} />
              </a>
              <span className="text-sm text-white/65">Draw closes soon · {currentDraw.retailValue} value</span>
            </div>
          </div>
          <div className="relative mx-auto h-[420px] w-full max-w-xl rounded-[2rem] border border-white/10 bg-black/25 p-4 shadow-2xl">
            <div className="flex h-full items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-white/10 to-transparent text-center">
              <div>
                <div className="text-gold">Add image:</div>
                <div className="mt-2 font-mono text-sm text-white/70">public{currentDraw.image}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-3">
        {site.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-5xl text-green">{stat.value}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.25em] text-graphite/50">{stat.label}</div>
          </div>
        ))}
      </section>

      <section id="winners" className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="aspect-[4/5] rounded-[2rem] bg-stoneSoft p-8 shadow-sm">
            <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-black/5 text-center text-graphite/50">
              Add winner photo:<br />public{featuredWinner.image}
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Winner Story</p>
            <h2 className="font-display text-5xl leading-tight md:text-7xl">Meet {featuredWinner.name}</h2>
            <blockquote className="mt-8 border-l-2 border-gold pl-6 text-2xl leading-relaxed text-graphite/80">
              “{featuredWinner.quote}”
            </blockquote>
            <div className="mt-8 text-lg text-graphite/60">{featuredWinner.location} · {featuredWinner.prize}</div>
            <button className="mt-8 inline-flex items-center gap-3 rounded-full border border-green px-6 py-3 text-green">
              <PlayCircle size={20} /> Watch Bradley's story
            </button>
          </div>
        </div>
      </section>

      <section id="competitions" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Live Competitions</p>
              <h2 className="mt-3 font-display text-5xl md:text-6xl">Choose Your Watch</h2>
            </div>
            <p className="max-w-md text-graphite/60">Every draw is independently verified and streamed live.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {competitions.map((item) => (
              <article key={item.title} className="rounded-[2rem] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-square rounded-[1.5rem] bg-stoneSoft flex items-center justify-center text-center text-graphite/45">
                  Add image:<br />public{item.image}
                </div>
                <div className="p-3">
                  <h3 className="mt-4 font-display text-3xl">{item.title}</h3>
                  <div className="mt-3 flex justify-between text-sm text-graphite/60">
                    <span>Value {item.value}</span><span>{item.sold}% sold</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-stoneSoft"><div className="h-2 rounded-full bg-green" style={{ width: `${item.sold}%` }} /></div>
                  <button className="mt-6 w-full rounded-full bg-green px-5 py-3 font-semibold text-white">Enter from {item.ticketPrice}</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="bg-green px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <ShieldCheck className="mx-auto mb-8 text-gold" size={44} />
          <h2 className="font-display text-6xl leading-tight md:text-8xl">Fair.<br />Transparent.<br />Trusted.</h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-white/70">By 8,700+ winners. Every draw is live streamed, recorded, and independently verified.</p>
        </div>
      </section>

      <section className="bg-graphite px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Community</p>
          <h2 className="mt-3 font-display text-5xl">Real People. Real Watches.</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {winners.concat(winners).slice(0, 4).map((winner, i) => (
              <div key={i} className="aspect-[4/5] rounded-2xl bg-white/10 flex items-center justify-center text-white/40">Photo</div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black px-6 py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {site.brand}. Play responsibly. Terms apply.
      </footer>
    </main>
  )
}
