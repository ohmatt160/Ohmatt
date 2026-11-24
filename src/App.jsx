import { useEffect } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Building2, ShieldCheck } from "lucide-react";
import "../styles.css";

const productUrl = "https://ai.ohmatt.com";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Ohmatt AI Systems home">
            <img src="/ohmatt-logo.jpg" alt="" width="42" height="42" />
            <span>Ohmatt AI Systems</span>
          </a>
          <div className="nav-links">
            <a href="#company">Company</a>
            <a href="#trust">Trust</a>
            <a className="button button-small" href={productUrl}>Open Ohmatt AI <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero band">
          <div className="hero-inner wrap">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span className="signal" /> OHMATT AI SYSTEMS LTD</p>
              <h1>Practical AI for<br /><span>everyday financial life.</span></h1>
              <p className="hero-lede">We build useful technology that helps people make sense of their financial activity. Our first product is Ohmatt AI, a personal finance workspace with bank connection and AI chat.</p>
              <div className="hero-actions">
                <a className="button" href={productUrl}>Explore Ohmatt AI <ArrowUpRight aria-hidden="true" /></a>
                <a className="text-link" href="#trust">How we approach trust <ArrowDown aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-mark reveal" aria-label="Ohmatt AI Systems brand mark">
              <div className="mark-frame"><img src="/ohmatt-logo.jpg" alt="Ohmatt AI Systems logo" /></div>
              <div className="mark-caption"><span>01</span><span>Our first product</span><span>Ohmatt AI</span></div>
            </div>
          </div>
          <div className="hero-rule" aria-hidden="true"><span /></div>
        </section>

        <section className="product band" aria-labelledby="product-title">
          <div className="wrap product-grid">
            <div className="section-index"><span>01</span><span>PRODUCT</span></div>
            <div className="product-copy">
              <BrainCircuit className="section-icon" aria-hidden="true" />
              <h2 id="product-title">A clearer view of your money.</h2>
              <p>Ohmatt AI brings supported bank connections, available transaction activity and conversational AI into one workspace. Connect an account, review what has synced, then ask questions about those records.</p>
              <p className="quiet">Connection and data availability depend on the bank and provider. Ohmatt AI does not offer payment or money-transfer actions.</p>
              <a className="text-link" href={productUrl}>Go to ai.ohmatt.com <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="product-stamp" aria-hidden="true"><span>OHMATT</span><strong>AI</strong><i>PERSONAL FINANCE WORKSPACE</i></div>
          </div>
        </section>

        <section id="company" className="company band" aria-labelledby="company-title">
          <div className="wrap company-grid">
            <div className="section-index"><span>02</span><span>COMPANY</span></div>
            <div className="company-main">
              <Building2 className="section-icon" aria-hidden="true" />
              <p className="eyebrow">A technology company</p>
              <h2 id="company-title">Built to make complex tools feel understandable.</h2>
              <p>Ohmatt AI Systems Ltd builds the Ohmatt family of products. We are starting with a focused personal-finance product and will grow the family around practical, user-centred AI.</p>
              <dl className="company-facts">
                <div><dt>Legal name</dt><dd>Ohmatt AI Systems Ltd</dd></div>
                <div><dt>CAC registration</dt><dd>10026490</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="trust" className="trust band" aria-labelledby="trust-title">
          <div className="wrap trust-grid">
            <div className="section-index"><span>03</span><span>TRUST</span></div>
            <div className="trust-main">
              <ShieldCheck className="section-icon trust-icon" aria-hidden="true" />
              <p className="eyebrow">Your accounts. Your choice.</p>
              <h2 id="trust-title">We don’t move your money.</h2>
              <div className="trust-columns">
                <div>
                  <h3>Account connection</h3>
                  <p>Ohmatt AI is for viewing and understanding available account activity. It does not offer payment or money-transfer actions. Use the provider’s own connection flow. Never share your bank password, PIN or one-time code in AI chat or with support.</p>
                </div>
                <div>
                  <h3>NDPC registration</h3>
                  <p>NDPC registration <strong>NDPC/DCP/15020</strong> was issued to Ohmatt AI Systems as a data controller/processor of major importance. The certificate is valid through 13 November 2027. The company’s legal name has since changed to Ohmatt AI Systems Ltd, and we have requested an update from NDPC.</p>
                </div>
              </div>
              <p className="trust-note">Registration is not an endorsement of the product. Bank availability and the data returned depend on the provider and account.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer band">
        <div className="wrap footer-inner">
          <a className="brand" href="#top"><img src="/ohmatt-logo.jpg" alt="" width="34" height="34" /><span>Ohmatt AI Systems Ltd</span></a>
          <span className="footer-meta">CAC 10026490 <span aria-hidden="true">·</span> NDPC/DCP/15020</span>
          <a className="text-link" href={productUrl}>Ohmatt AI <ArrowRight aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  );
}
