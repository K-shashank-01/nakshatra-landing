function SectionLabel({ children }: { children: string }) {
  return (
    <p className="section-label">
      <span aria-hidden="true" />
      {children}
    </p>
  )
}

const features = [
  { name: 'Unique Device Identity', desc: 'Every device gets its own digital identity.' },
  { name: 'Automated Onboarding', desc: 'Secure devices without manual provisioning.' },
  { name: 'Strong Authentication', desc: 'Verify devices before allowing communication.' },
  { name: 'Secure Communication', desc: 'Protect device-to-server communication with encryption.' },
  { name: 'Access Control', desc: 'Allow devices to perform only authorized operations.' },
  { name: 'Device Lifecycle', desc: 'Manage credentials, renewal and revocation.' },
]

const flow = ['Device', 'Identity', 'Authentication', 'Credential', 'Secure Connection', 'Access Control', 'Secure Data']

const architecture = [
  { name: 'IoT Devices', sub: 'Resource-constrained endpoints' },
  { name: 'Authentication & Provisioning Server', sub: 'Identity issuance / verification' },
  { name: 'MQTT / Mosquitto', sub: 'Encrypted message broker' },
  { name: 'Backend / Services', sub: 'Application logic & data' },
]

const primitives = [
  { name: 'ECC', note: 'Keys' },
  { name: 'TLS', note: 'Transport' },
  { name: 'OpenSSL', note: 'Crypto' },
  { name: 'Python', note: 'Runtime' },
  { name: 'Docker', note: 'Deploy' },
]

const technologies = ['Python', 'ECC', 'OpenSSL', 'MQTT', 'Mosquitto', 'TLS', 'Docker', 'Linux']

const builtFor = ['IoT', 'Industrial', 'Healthcare', 'Smart Cities', 'Agriculture']

const pricing = [
  { tier: 'Starter', amount: '$—', for: 'For small IoT deployments getting started with secure device identity.' },
  { tier: 'Enterprise', amount: '$—', for: 'For large-scale deployments needing full lifecycle management.' },
  { tier: 'Custom', amount: "Let's talk", for: 'For specialized deployments with tailored requirements.' },
]

export function ProductHero() {
  return (
    <section id="hero" className="section product-hero">
      <div className="shell">
        <SectionLabel>The product</SectionLabel>
        <h1>SECURE EVERY DEVICE.</h1>
        <p>Lightweight security infrastructure for connected devices.</p>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section id="features" className="section" aria-labelledby="features-title">
      <div className="shell">
        <SectionLabel>Capabilities</SectionLabel>
        <h2 id="features-title" className="sr-only">Features</h2>
        <div className="feature-grid">
          {features.map((f, i) => (
            <article className="feature-cell" key={f.name}>
              <span className="feature-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="feature-name">{f.name}</h3>
              <p className="feature-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="how" className="section" aria-labelledby="how-title">
      <div className="shell">
        <SectionLabel>How it works</SectionLabel>
        <h2 id="how-title" className="sr-only">How it works</h2>
        <div className="flow">
          {flow.map((step, i) => (
            <div key={step} style={{ display: 'contents' }}>
              <div className="flow-node">
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="name">{step}</span>
              </div>
              {i < flow.length - 1 && <span className="flow-connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Architecture() {
  return (
    <section id="architecture" className="section" aria-labelledby="arch-title">
      <div className="shell">
        <SectionLabel>Architecture</SectionLabel>
        <h2 id="arch-title" className="sr-only">Architecture</h2>
        <div className="arch">
          <div className="arch-stack">
            {architecture.map((layer, i) => (
              <div key={layer.name} style={{ display: 'contents' }}>
                <div className="arch-layer">
                  <span className="layer-name">{layer.name}</span>
                  <span className="layer-sub">{layer.sub}</span>
                </div>
                {i < architecture.length - 1 && <span className="arch-link" aria-hidden="true" />}
              </div>
            ))}
          </div>
          <div className="arch-primitives">
            <h3>Secured by</h3>
            {primitives.map((p) => (
              <div className="arch-chip" key={p.name}>
                {p.name}
                <span>{p.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Technology() {
  return (
    <section id="technology" className="section" aria-labelledby="tech-title">
      <div className="shell">
        <SectionLabel>Technology</SectionLabel>
        <h2 id="tech-title" className="sr-only">Technology stack</h2>
        <div className="tech-grid">
          {technologies.map((t, i) => (
            <div className="tech-cell" key={t}>
              <span className="t-name">{t}</span>
              <span className="t-idx">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BuiltFor() {
  return (
    <section id="built-for" className="section" aria-labelledby="built-title">
      <div className="shell">
        <SectionLabel>Built for</SectionLabel>
        <h2 id="built-title" className="sr-only">Built for</h2>
        <div className="builtfor">
          {builtFor.map((label, i) => (
            <span key={label}>
              {label}
              {i < builtFor.length - 1 && <span className="sep" aria-hidden="true">/</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="section" aria-labelledby="pricing-title">
      <div className="shell">
        <SectionLabel>Pricing</SectionLabel>
        <h2 id="pricing-title" className="sr-only">Pricing</h2>
        <div className="price-grid">
          {pricing.map((p) => (
            <div className="price-cell" key={p.tier}>
              <span className="p-tier">{p.tier}</span>
              <span className="p-amount">
                {p.amount}
                <small>Placeholder — pricing TBD</small>
              </span>
              <p className="p-for">{p.for}</p>
              <a className="p-cta" href="#contact">
                Get Started <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Legal() {
  return (
    <>
      <section id="terms" className="section" aria-labelledby="terms-title">
        <div className="shell legal-grid">
          <div className="legal-block">
            <SectionLabel>Terms</SectionLabel>
            <h3 id="terms-title">Terms of Service</h3>
            <p>This is placeholder text describing the terms under which Nakshatra services are provided. It outlines acceptable use, responsibilities and limitations at a high level.</p>
            <p>Final legal content will be added later.</p>
            <span className="placeholder-tag">Placeholder</span>
          </div>
          <div className="legal-block" id="privacy">
            <SectionLabel>Privacy</SectionLabel>
            <h3>Privacy Policy</h3>
            <p>This is placeholder text describing how device and account data is handled, stored and protected across the Nakshatra platform.</p>
            <p>Final legal content will be added later.</p>
            <span className="placeholder-tag">Placeholder</span>
          </div>
        </div>
      </section>
    </>
  )
}

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="shell">
        <h2 id="contact-title">SECURE YOUR CONNECTED WORLD.</h2>
        <p>Talk to us about securing your IoT deployment.</p>
        <a className="btn-primary" href="mailto:hello@nakshatra.dev">Get Started</a>
      </div>
    </section>
  )
}

export function SiteFooter() {
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Terms', href: '#terms' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Contact', href: '#contact' },
  ]
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="f-word">
              <span className="brand-mark" aria-hidden="true" />
              NAKSHATRA
            </span>
            <p>IoT security infrastructure.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Nakshatra</span>
          <span>Secure device authentication framework</span>
        </div>
      </div>
    </footer>
  )
}
