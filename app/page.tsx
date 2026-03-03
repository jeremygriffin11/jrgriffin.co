import Image from "next/image";
import Nav from "./components/Nav";
import RevealOnScroll from "./components/RevealOnScroll";

export default function Page() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="hero-label">
            Investment &nbsp;&middot;&nbsp; Advisory &nbsp;&middot;&nbsp;
            Solutions
          </p>
          <h1>Solving real problems for companies that touch real estate.</h1>
          <p className="hero-sub">
            Capital solutions. Strategic expertise. High impact, built on 20+
            years of institutional real estate experience.
          </p>
          <a href="#contact" className="hero-cta">
            Let&apos;s Connect
          </a>
        </div>
      </section>

      {/* Approach */}
      <section className="approach" id="approach">
        <div className="container">
          <RevealOnScroll>
            <p className="section-label">The Approach</p>
            <h2 className="section-title">
              The starting point is always the problem.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll className="approach-text">
            <p>
              Sometimes the answer is capital: a flexible, well-structured
              solution through{" "}
              <span className="entity">Marine Street Partners</span> that
              addresses a real need in the capital stack. Sometimes it&apos;s
              expertise: an outsourced strategic perspective through{" "}
              <span className="entity">Marine Street Advisory</span> that
              brings institutional rigor without the overhead. And sometimes
              it&apos;s building something new: a tailored workflow or tool
              designed specifically around your core business and investment
              model that gives your team better answers, faster, with less
              friction.
            </p>
            <p>
              <span className="emphasis">
                Most of the time, it&apos;s some combination of all three.
              </span>{" "}
              These aren&apos;t separate businesses. They&apos;re connected
              capabilities, deployed based on what actually solves the problem.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Solutions */}
      <section className="solutions" id="solutions">
        <div className="container">
          <RevealOnScroll>
            <p className="section-label">What I Solve For</p>
            <h2 className="section-title">
              Capital, expertise, and tailored solutions, connected.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="solutions-grid">
              <div className="solution-card">
                <div className="solution-number">01</div>
                <h3>Capital Structure &amp; Investment Solutions</h3>
                <p>
                  Through Marine Street Partners, I invest alongside operators
                  and investors in situations where capital structures need
                  creative solutions, basis has reset, where speed and certainty
                  of execution matter. The focus is always on alignment.
                </p>
                <div className="detail">
                  $5-20M+ equity &nbsp;&middot;&nbsp; LP, GP/co-GP and
                  structured solutions &nbsp;&middot;&nbsp; Assets / portfolios
                  / platforms
                </div>
              </div>
              <div className="solution-card">
                <div className="solution-number">02</div>
                <h3>Strategic Advisory &amp; Outsourced Leadership</h3>
                <p>
                  Through Marine Street Advisory, I work as a strategic partner
                  with companies, investors, and platforms navigating real estate
                  complexity. Outsourced CIO and head of real estate roles. Board
                  support. Capital markets strategy, execution, and
                  restructuring. Interim leadership during transitions,
                  fundraises, or platform builds.
                </p>
                <div className="detail">
                  Institutional framework scoped to practical implementation
                  &nbsp;&middot;&nbsp; Built across market cycles and the capital
                  stack
                </div>
              </div>
              <div className="solution-card">
                <div className="solution-number">03</div>
                <h3>Tailored Solutions &amp; Tools</h3>
                <p>
                  Every firm operates differently. I build solutions around how
                  your business actually works. The value is in the combination
                  of purpose-built tools and 20+ years of domain experience that
                  cuts through noise and positions you for what&apos;s ahead.
                </p>
                <div className="detail">
                  Purpose-built tools &nbsp;&middot;&nbsp; Low friction,
                  integrated into existing systems
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Audience */}
      <section className="audience" id="audience">
        <div className="container">
          <RevealOnScroll>
            <p className="section-label">Who This Is For</p>
            <h2 className="section-title">
              Built for principals who need a different kind of partner.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="audience-intro">
              Recapitalization. Platform scale. Leadership transition. Technology
              modernization. If you&apos;re at a moment that requires
              experienced, senior-level partnership delivered quickly,
              that&apos;s where I add the most value.
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="audience-grid">
              <div className="audience-card">
                <h3>Owners &amp; Operators</h3>
                <p>
                  You&apos;re executing business plans and navigating a market
                  that demands more creativity and efficiency than ever. Whether
                  the challenge is capital, strategy, or operational efficiency,
                  I can help resolve what&apos;s behind and position for
                  what&apos;s ahead.
                </p>
              </div>
              <div className="audience-card">
                <h3>Investors &amp; Capital Partners</h3>
                <p>
                  You&apos;re making allocation decisions in a market where
                  information &amp; execution create alpha. I bring institutional
                  discipline, deep market intelligence, and co-investment
                  opportunities through Marine Street Partners. For those
                  building real estate exposure, I serve as an outsourced
                  perspective with the credibility to sit across from your board
                  and your partners.
                </p>
              </div>
              <div className="audience-card">
                <h3>Companies &amp; Firms with Real Estate Exposure</h3>
                <p>
                  Your company has real estate complexity and needs a senior
                  partner who combines institutional investment experience with
                  purpose-built solutions&mdash;and can operate across capital,
                  strategy, and execution without adding overhead.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Experience */}
      <section className="experience" id="experience">
        <div className="container">
          <RevealOnScroll>
            <p className="section-label">Experience</p>
            <h2 className="section-title">
              20+ years. Multiple cycles. Every layer of the capital stack.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="exp-layout">
              <div className="exp-sidebar">
                <div className="stat">
                  <div className="stat-number">$2B+</div>
                  <div className="stat-label">Direct equity acquisitions</div>
                </div>
                <div className="stat">
                  <div className="stat-number">$2B+</div>
                  <div className="stat-label">
                    Asset / Portfolio financings
                  </div>
                </div>
                <div className="stat">
                  <div className="stat-number">14+</div>
                  <div className="stat-label">Years at Rialto Capital</div>
                </div>
              </div>
              <div className="exp-content">
                <p>
                  Most recently Managing Director at Rialto Capital Management,
                  where I led West Coast investment strategy and executed
                  nationally across debt, equity, and structured products as the
                  firm scaled to $20B+ AUM. Prior experience in real estate
                  investment banking at J.P. Morgan and Macerich (NYSE: MAC).
                </p>
                <div className="exp-earlier">
                  <div>
                    <h4>Rialto Capital Management</h4>
                    <p>Managing Director, Investment Management</p>
                  </div>
                  <div>
                    <h4>Macerich</h4>
                    <p>Leasing &amp; Operations</p>
                  </div>
                  <div>
                    <h4>Columbia Business School</h4>
                    <p>MBA, Real Estate &amp; Finance</p>
                  </div>
                  <div>
                    <h4>UCLA</h4>
                    <p>Bachelor of Arts</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="container">
          <RevealOnScroll>
            <p className="section-label">Let&apos;s Connect</p>
            <h2 className="section-title">
              The best partnerships start with a conversation.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="contact-layout">
              <div className="contact-text">
                <p>
                  Whether you&apos;re seeking a capital solution,
                  thinking about how to modernize your operations, or just want
                  to exchange perspectives on where the market is headed,
                  I&apos;d welcome the chance to connect.
                </p>
                <a
                  href="mailto:jeremy@jrgriffin.co"
                  className="contact-email"
                >
                  jeremy@jrgriffin.co
                </a>
                <div className="contact-links">
                  <a
                    href="https://www.linkedin.com/in/jeremy-griffin-a01b491/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn &#8599;
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ fontSize: "0.85rem", color: "var(--stone)" }}>
                    Los Angeles, CA
                  </span>
                </div>
              </div>
              <div className="contact-photo">
                <Image
                  src="/headshot.png"
                  alt="Jeremy Griffin"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2026 Jeremy Griffin</p>
          <p className="disclaimer">
            Not an offer to sell or the solicitation of an offer to buy
            securities. Additional information available upon request.
          </p>
        </div>
      </footer>
    </>
  );
}
