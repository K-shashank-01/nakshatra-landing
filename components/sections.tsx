'use client'

import { useEffect, useRef, useState } from 'react'

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

type IconProps = { className?: string }
const svgBase = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function IconDevice(props: IconProps) {
  return (
    <svg {...svgBase} {...props} aria-hidden="true">
      <rect x="3" y="7" width="13" height="10" rx="1" />
      <circle cx="9.5" cy="12" r="2.4" />
      <path d="M16 10.2l5-2.2v8l-5-2.2" />
    </svg>
  )
}

function IconIdentity(props: IconProps) {
  return (
    <svg {...svgBase} {...props} aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M8 7h8M8 10h5" />
      <path d="M9 16a3 3 0 0 1 6 0" />
      <path d="M11 16a1 1 0 0 1 2 0v1.4" />
    </svg>
  )
}

function IconVerify(props: IconProps) {
  return (
    <svg {...svgBase} {...props} aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.4-3 7-7 8-4-1-7-3.6-7-8V6z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  )
}

function IconConnect(props: IconProps) {
  return (
    <svg {...svgBase} {...props} aria-hidden="true">
      <rect x="5" y="10" width="14" height="9" rx="1" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="14.4" r="1" />
      <path d="M12 15.4v1.6" />
    </svg>
  )
}

function IconControl(props: IconProps) {
  return (
    <svg {...svgBase} {...props} aria-hidden="true">
      <rect x="4" y="4" width="16" height="6" rx="1" />
      <rect x="4" y="14" width="16" height="6" rx="1" />
      <path d="M7.5 7h.01M7.5 17h.01" />
      <path d="M12 7h4M12 17h4" />
    </svg>
  )
}

function IconTrusted(props: IconProps) {
  return (
    <svg {...svgBase} {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="8" strokeDasharray="2.5 3" opacity="0.55" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M10.6 12l1 1 1.9-2.1" />
    </svg>
  )
}

const flowStages = [
  { id: 'DEVICE', label: 'Device', Icon: IconDevice },
  { id: 'IDENTITY', label: 'Identity', Icon: IconIdentity },
  { id: 'VERIFY', label: 'Verify', Icon: IconVerify },
  { id: 'CONNECT', label: 'Connect', Icon: IconConnect },
  { id: 'CONTROL', label: 'Control', Icon: IconControl },
  { id: 'TRUSTED', label: 'Trusted', Icon: IconTrusted },
] as const

function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const total = rect.height - window.innerHeight
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1))
        setProgress(total > 0 ? scrolled / total : 0)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      cancelAnimationFrame(raf)
    }
  }, [])

  return { ref, progress }
}

export function ProductHero() {
  const { ref, progress } = useScrollProgress()
  const n = flowStages.length
  const t = progress * n
  const active = Math.min(Math.floor(t), n - 1)

  return (
    <section id="hero" className="product-flow" aria-labelledby="product-title">
      <div className="flow-intro">
        <SectionLabel>The product</SectionLabel>
        <h2 id="product-title" className="flow-headline">
          Trust is built,
          <br />
          not assumed.
        </h2>
        <p className="flow-sub">
          From device to defense, NAKSHATRA establishes verifiable trust for every connection.
        </p>
      </div>

      <div className="flow-scroll" ref={ref}>
        <div className="flow-sticky">
          <div className="flow-diagram">
            <div className="flow-bg" aria-hidden="true">
              <svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice">
                <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7">
                  <path d="M120 90L300 200L180 320" />
                  <path d="M300 200L520 120L760 180" />
                  <path d="M520 120L640 300L900 340" />
                  <path d="M760 180L980 100L1080 260" />
                  <path d="M640 300L900 340L1080 260" />
                  <path d="M180 320L420 380L640 300" />
                </g>
                <g fill="currentColor">
                  {[
                    [120, 90],
                    [300, 200],
                    [180, 320],
                    [520, 120],
                    [760, 180],
                    [640, 300],
                    [900, 340],
                    [980, 100],
                    [1080, 260],
                    [420, 380],
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="3" />
                  ))}
                </g>
              </svg>
            </div>

            <ol className="flow-nodes" aria-label="NAKSHATRA security flow">
              {flowStages.map((stage, i) => {
                const isActive = i <= active
                const isCurrent = i === active
                const isTrusted = i === n - 1 && active === n - 1
                const { Icon } = stage
                return (
                  <li key={stage.id} style={{ display: 'contents' }}>
                    <div
                      className={`flow-node${isActive ? ' is-active' : ''}${isCurrent ? ' is-current' : ''}${
                        isTrusted ? ' is-trusted' : ''
                      }`}
                    >
                      <div className="node-frame">
                        <Icon />
                      </div>
                      <div className="node-meta">
                        <span className="node-num">{String(i + 1).padStart(2, '0')}</span>
                        <span className="node-name">{stage.label}</span>
                      </div>
                    </div>
                    {i < n - 1 && (() => {
                      const fill = Math.min(Math.max(t - i, 0), 1)
                      const particle = fill > 0.02 && fill < 0.98 ? 1 : 0
                      return (
                        <span
                          className="flow-link"
                          aria-hidden="true"
                          style={{ ['--fill' as string]: fill, ['--particle' as string]: particle } as React.CSSProperties}
                        >
                          <span className="link-fill" />
                          <span className="link-particle" />
                        </span>
                      )
                    })()}
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
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
