import Image from 'next/image'

export function Opening() {
  return (
    <section id="top" className="opening" aria-labelledby="opening-title">
      <div className="opening-copy">
        <Image
          src="/nakshatra-logo.jpeg"
          alt="NAKSHATRA logo — a shield protecting a network of connected devices"
          width={360}
          height={360}
          priority
          className="opening-logo reveal reveal-1"
        />
        <h1 id="opening-title" className="opening-title reveal reveal-2">NAKSHATRA</h1>
        <p className="opening-tagline reveal reveal-3">Securing the Connected World</p>
      </div>
      <a className="scroll-indicator reveal reveal-4" href="#hero" aria-label="Scroll to explore">
        <span>Scroll</span>
        <span className="track" aria-hidden="true" />
      </a>
    </section>
  )
}
