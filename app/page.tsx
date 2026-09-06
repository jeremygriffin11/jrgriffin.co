import Image from "next/image";
import Nav from "./components/Nav";

export default function Page() {
  return (
    <>
      <Nav />

      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="hero-label settle">Advise &nbsp;·&nbsp; Build &nbsp;·&nbsp; Invest</p>
          <h1 className="settle settle-2">
            Marine Street solves complexity for companies that touch real estate.
          </h1>
          <p className="hero-sub settle settle-3">
            Real estate strategy, technology, and capital, for firms working out what a
            changing market means for how they operate.
          </p>
          <a href="#contact" className="hero-cta settle settle-4">Let&apos;s Connect</a>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="container">
          <p className="section-label">The Approach</p>
          <div className="approach-grid">
            <p>
              We work in the middle market, with companies and firms that carry real
              complexity without the scale to hire a team against it. Consultants consult,
              and off-the-shelf software doesn&apos;t know the business well enough. We
              advise and then build what the advice actually requires.
            </p>
            <p>
              We start with real estate domain expertise. Often the answer also involves
              building something, a solution to the problem in front of us that scales past
              it and becomes a framework the business can use again.
            </p>
          </div>
        </div>
      </section>

      <section className="execute" id="execute">
        <div className="container">
          <p className="section-label">How We Execute</p>
          <h2 className="section-title">Advice, technology, and capital, connected.</h2>
          <div className="execute-grid">
            <div className="execute-card">
              <h3>Advise</h3>
              <p>
                Strategic partnership for companies, investors, and platforms navigating
                real estate complexity, and working out what technology changes about how
                they operate. Outsourced CIO and head of real estate roles, board support,
                capital markets strategy and execution, and hands-on technology
                implementation for firms that know they need to move and aren&apos;t sure
                where to start.
              </p>
            </div>
            <div className="execute-card">
              <h3>Build</h3>
              <p>
                Build is a continuation of the advisory work. Every firm operates
                differently, so we build around how a business actually works: purpose-built
                tools paired with 20+ years of domain experience that cuts through noise and
                positions you for what&apos;s ahead.
              </p>
            </div>
            <div className="execute-card">
              <h3>Invest</h3>
              <p>
                Our focus is where real estate and technology intersect, in companies and
                products building for this industry, where our own operating experience
                makes us a useful partner. We also invest alongside operators and investors
                when a capital structure needs a creative answer, and only when the
                alignment is real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="audience" id="audience">
        <div className="container">
          <p className="section-label">Who It&apos;s For</p>
          <h2 className="section-title">
            Built for principals who need a different kind of partner.
          </h2>
          <p className="audience-intro">
            We act as outsourced leadership and build the systems that help a business scale
            and run more efficiently. Platform growth, leadership transition, technology
            modernization, recapitalization: the work arrives in different forms, for
            owners, operators, investors, lenders, advisors and brokers across the real
            estate ecosystem.
          </p>
          <div className="audience-grid">
            <div className="audience-card">
              <h3>Companies with Real Estate Exposure</h3>
              <p>
                Your company has real estate complexity and needs a senior partner who
                combines institutional investment experience with purpose-built solutions,
                and can operate across capital, strategy, and execution without adding
                overhead.
              </p>
            </div>
            <div className="audience-card">
              <h3>Owners &amp; Operators</h3>
              <p>
                You&apos;re executing business plans and navigating a market that demands
                more creativity and efficiency than ever. Whether the challenge is capital,
                strategy, or operational efficiency, we can help resolve what&apos;s behind
                and position for what&apos;s ahead.
              </p>
            </div>
            <div className="audience-card">
              <h3>Investors &amp; Capital Partners</h3>
              <p>
                You&apos;re making allocation decisions in a market where information and
                execution create alpha. We work alongside you on strategy, underwriting and
                execution, and we co-invest where our own capital belongs next to yours.
                Institutional discipline, market intelligence, and the credibility to sit
                across from your board and your partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="principals" id="principals">
        <div className="container">
          <p className="section-label">Principals</p>
          <p className="principals-lede">
            Twenty years of institutional real estate experience, paired with the
            engineering discipline to turn it into something a whole team can use.
          </p>
          <div className="principals-grid">
            <div>
              <div className="principal-head">
                <Image src="/jeremy.webp" alt="Jeremy Griffin" width={84} height={104} />
                <div>
                  <h3>Jeremy Griffin</h3>
                  <p className="principal-role">CEO</p>
                  <p className="principal-link">
                    <a href="https://www.linkedin.com/in/jeremy-griffin-a01b491/" target="_blank" rel="noopener noreferrer">
                      LinkedIn &#8599;
                    </a>
                  </p>
                </div>
              </div>
              <p className="principal-bio">
                Jeremy spent twenty years inside institutional real estate before building
                outside it. Managing Director at Rialto Capital Management, leading West
                Coast investment strategy as the firm scaled past $20B in assets under
                management, with more than $3 billion of transaction volume across debt and
                equity. Earlier, J.P. Morgan and Macerich. He now works on what a company
                should do about its real estate and how it actually gets done.
              </p>
              <p className="principal-meta">
                Capital markets, portfolio strategy, and operating execution.{" "}
                <strong>MBA, Columbia Business School.</strong>
              </p>
            </div>
            <div>
              <div className="principal-head">
                <Image src="/matt.webp" alt="Matt Fitzgerald" width={84} height={104} />
                <div>
                  <h3>Matt Fitzgerald</h3>
                  <p className="principal-role">CTO</p>
                  <p className="principal-link">
                    <a href="https://www.linkedin.com/in/matthewmaguirefitzgerald/" target="_blank" rel="noopener noreferrer">
                      LinkedIn &#8599;
                    </a>
                  </p>
                </div>
              </div>
              <p className="principal-bio">
                Matt builds the systems that actually change the way teams work — reliable,
                intuitive, and intelligent. He led system architecture for platforms used
                across numerous products, at the nexus of software and hardware. After years
                in the smart-hardware startup space, Matt now works on embedding industry
                expertise into scalable, intelligent software platforms that can plug into
                any business.
              </p>
              <p className="principal-meta">
                <strong>MS, Columbia School of Engineering and Applied Sciences.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <p className="section-label">Connect</p>
          <h2 className="section-title">Let&apos;s talk.</h2>
          <p className="contact-body">
            Whether it&apos;s a capital decision, an operation that needs rethinking, or a
            read on where the market is going, we&apos;re glad to hear from you.
          </p>
          <a href="mailto:connect@marine-street.com" className="contact-email">
            connect@marine-street.com
          </a>
          <p className="contact-place">Los Angeles, California</p>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <p>&copy; 2026 Marine Street</p>
          <p>Not an offer to sell or the solicitation of an offer to buy securities.</p>
        </div>
      </footer>
    </>
  );
}
