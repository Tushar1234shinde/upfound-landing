const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <header className="topbar">
          <a className="brand" href="#" aria-label="UpFound home">
            <span className="brand-mark">
              <i />
              <i />
              <i />
            </span>
            <span>UpFound</span>
          </a>

          <nav className="nav-pill" aria-label="Primary navigation">
            <a className="active" href="#home">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#services">
              Services <span className="chevron">⌄</span>
            </a>
            <a href="#pricing">Pricing</a>
            <a href="#solution">Solution</a>
            <button className="language" type="button">
              <span>◎</span> English <span className="chevron">⌄</span>
            </button>
          </nav>

          <a className="login" href="#login">
            Login / Register
          </a>
        </header>

        <div className="display-title" aria-hidden="true">
          Legacy Bank
        </div>

        <div className="art-glow" />
        <img
          className="hero-art"
          src="/assets/hero-art"
          alt="Futuristic emerald bank card floating above a metallic pedestal"
        />

        <div className="hero-copy" id="home">
          <p className="eyebrow">FUEL FOR</p>
          <h1>STARTUPS</h1>
          <p className="intro">
            Strategic guidance, funding support,
            <br />
            and growth acceleration for early-
            <br />
            stage ventures.
          </p>
          <div className="actions">
            <a className="button primary" href="#start">
              Get Started
            </a>
            <a className="button secondary" href="#contact">
              Contact Us
            </a>
          </div>
        </div>

        <aside className="socials" aria-label="Social media">
          <a href="#instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="5" />
              <circle cx="12" cy="12" r="3.4" />
              <circle className="fill" cx="17.4" cy="6.8" r="1" />
            </svg>
          </a>
          <a className="facebook" href="#facebook" aria-label="Facebook">
            f
          </a>
          <a href="#x" aria-label="X">
            𝕏
          </a>
        </aside>

        <aside className="stats-card">
          <div className="stats-heading">
            <span>Launching Startups</span>
            <ArrowUpRight />
          </div>
          <div className="stats-body">
            <div className="stats-list">
              <p>
                <strong>83%</strong> Success Rate
              </p>
              <p>
                <strong>17%</strong> Failure Rate
              </p>
            </div>
            <div className="score">
              <div>
                <strong>86</strong>
                <sup>%</sup>
              </div>
              <small>▲ 4.52%</small>
            </div>
          </div>
        </aside>

        <a className="scroll-cue" href="#about">
          <span>↓</span>
          Scroll to
          <br />
          explore more
        </a>
      </section>
    </main>
  )
}
