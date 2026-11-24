import { useEffect } from "react";
import { ArrowRight, ArrowUpRight, Building2, Cpu, UserRound } from "lucide-react";
import "../styles.css";

const productUrl = "https://ai.ohmatt.com";

export default function CompanyProfile() {
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
            <img src="/oh-mark.png" alt="" width="42" height="42" />
            <span>Ohmatt AI Systems Ltd</span>
          </a>
          <div className="nav-links">
            <a href="#company">Company</a>
            <a href="#founder">Founder</a>
            <a className="button button-small" href={productUrl}>Ohmatt AI <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero band">
          <div className="hero-inner wrap">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span className="signal" /> OHMATT AI SYSTEMS LTD</p>
              <h1>The intelligence layer<br /><span>for the individual.</span></h1>
              <p className="hero-lede">AI is powerful when it connects broad knowledge with the context of a real person. We’re building toward a personalized AI system shaped around the individual. We’re starting with finance through Ohmatt AI.</p>
              <div className="hero-actions">
                <a className="button" href="#company">About the company <ArrowRight aria-hidden="true" /></a>
                <a className="text-link" href={productUrl}>Visit Ohmatt AI <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-mark reveal" aria-label="Ohmatt AI Systems OH mark">
              <div className="mark-frame"><img src="/oh-mark.png" alt="OH mark" /></div>
              <div className="mark-caption"><span>01</span><span>Founded by</span><span>Matthew Hunyingan</span></div>
            </div>
          </div>
          <div className="hero-rule" aria-hidden="true"><span /></div>
        </section>

        <section id="company" className="company band" aria-labelledby="company-title">
          <div className="wrap company-grid">
            <div className="section-index"><span>01</span><span>COMPANY</span></div>
            <div className="company-main">
              <Building2 className="section-icon" aria-hidden="true" />
              <p className="eyebrow">Our company</p>
              <h2 id="company-title">Ohmatt AI Systems Ltd</h2>
              <p>Previously known as Ohmatt AI Systems, the company is now incorporated in Nigeria as a private company limited by shares. Our focus is building a personalized AI system that understands the context, preferences and goals a person chooses to share. We are developing that vision in stages, beginning with personal finance.</p>
              <dl className="company-facts">
                <div><dt>Legal name</dt><dd>Ohmatt AI Systems Ltd</dd></div>
                <div><dt>Former name</dt><dd>Ohmatt AI Systems</dd></div>
                <div><dt>CAC registration</dt><dd>10026490</dd></div>
                <div><dt>Incorporated</dt><dd>22 November 2026</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="founder" className="founder band" aria-labelledby="founder-title">
          <div className="wrap founder-grid">
            <div className="section-index"><span>02</span><span>FOUNDER</span></div>
            <div className="founder-main">
              <UserRound className="section-icon" aria-hidden="true" />
              <p className="eyebrow">Founder</p>
              <h2 id="founder-title">Matthew Hunyingan</h2>
              <p className="founder-byline">Known as <strong>Ohmatt</strong></p>
              <p>Matthew founded Ohmatt AI Systems to pursue a simple idea: AI that doesn’t just know about the world, but becomes more useful because it knows the individual.</p>
            </div>
          </div>
        </section>

        <section id="product" className="product band" aria-labelledby="product-title">
          <div className="wrap product-grid">
            <div className="section-index"><span>03</span><span>FIRST PRODUCT</span></div>
            <div className="product-copy">
              <Cpu className="section-icon" aria-hidden="true" />
              <p className="eyebrow">From Ohmatt AI Systems</p>
              <h2 id="product-title">Meet Ohmatt AI.</h2>
              <p>Ohmatt AI is our first step: a personal finance workspace bringing supported bank connections and AI chat together. Users can review available account activity and ask questions about synced records.</p>
              <a className="text-link" href={productUrl}>Go to ai.ohmatt.com <ArrowRight aria-hidden="true" /></a>
            </div>
            <div className="product-stamp" aria-hidden="true"><span>OUR FIRST PRODUCT</span><strong>AI</strong><i>OHMATT</i></div>
          </div>
        </section>
      </main>

      <footer className="footer band">
        <div className="wrap footer-inner">
          <a className="brand" href="#top"><img src="/oh-mark.png" alt="" width="34" height="34" /><span>Ohmatt AI Systems Ltd</span></a>
          <span className="footer-meta">CAC registration 10026490</span>
          <a className="text-link" href={productUrl}>Ohmatt AI <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  );
}
