import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <header>
        <nav className="container">
          <Link href="/" className="logo">
            <span className="logo-icon">RF</span>
            ReelFarm
          </Link>
          <div className="nav-links">
            <Link href="/product">Product</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/login">Login</Link>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="container">
            <h1>Automate TikToks that drive traffic to your website</h1>
            <p>it's like a gen z marketing team, but way cheaper</p>
            <div className="cta-buttons">
              <Link href="/start" className="button button-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v18M3 12h18" />
                </svg>
                Start Now
              </Link>
              <Link href="/demo" className="button button-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Demo
              </Link>
            </div>
          </div>
        </section>
        <section className="showcase">
          <div className="tiktok-container">
            <div className="tiktok-video">
              <img src="/placeholder.svg?height=380&width=220" alt="TikTok video preview" />
            </div>
            <div className="tiktok-video">
              <img src="/placeholder.svg?height=380&width=220" alt="TikTok video preview" />
            </div>
            <div className="tiktok-video">
              <img src="/placeholder.svg?height=380&width=220" alt="TikTok video preview" />
            </div>
            <div className="tiktok-video">
              <img src="/placeholder.svg?height=380&width=220" alt="TikTok video preview" />
            </div>
            <div className="tiktok-video">
              <img src="/placeholder.svg?height=380&width=220" alt="TikTok video preview" />
            </div>
          </div>
        </section>
        <section className="alternatives">
          <div className="container">
            <h2>Alternatives are expensive.</h2>
            <div className="alternatives-grid">
              <div className="alternative-card negative">
                <h3>UGC Agencies</h3>
                <p>Expensive: $60-120 per video, anywhere between $4000 to $6000 a month</p>
              </div>
              <div className="alternative-card negative">
                <h3>Doing it yourself</h3>
                <p>Researching, planning, iterating, recording, editing, publishing, re-purposing</p>
              </div>
              <div className="alternative-card positive">
                <h3>ReelFarm</h3>
                <p>Automatically creating & publishing videos to all platforms, for a monthly subscription</p>
              </div>
            </div>
          </div>
        </section>
        <div className="section-gap"></div>
        <section className="features">
          <div className="container">
            <h2>Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Create UGC videos</h3>
                <p>Create & publish UGC videos promoting your product demo</p>
              </div>
              <div className="feature-card">
                <span className="badge">Not Available Yet</span>
                <h3>Create slideshow videos</h3>
                <p>Create & publish image slideshow videos to TikTok</p>
              </div>
              <div className="feature-card">
                <h3>Automated Campaigns</h3>
                <p>Automatically create & auto-publish UGC videos to your TikTok account</p>
              </div>
              <div className="feature-card">
                <span className="badge">Not Available Yet</span>
                <h3>UGC Avatar Generator</h3>
                <p>Auto-magically generate and save viral hooks for your videos</p>
              </div>
              <div className="feature-card">
                <h3>Hook Generator</h3>
                <p>Auto-magically generate and save viral hooks for your videos</p>
              </div>
            </div>
          </div>
        </section>
        <div className="section-gap"></div>
        <section className="pricing">
          <div className="container">
            <h2>Choose your plan</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Starter</h3>
                <div className="price">$19</div>
                <div className="period">/month</div>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    10 videos per month
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    5 UGC avatars
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Generate unlimited viral hooks
                  </li>
                </ul>
                <button className="button button-secondary">Buy Now</button>
              </div>
              <div className="pricing-card popular">
                <span className="popular-badge">Most Popular</span>
                <h3>Growth</h3>
                <div className="price">$49</div>
                <div className="period">/month</div>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    50 videos per month
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    All 50+ UGC avatars
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Generate unlimited viral hooks
                  </li>
                </ul>
                <button className="button button-primary">Buy Now</button>
              </div>
              <div className="pricing-card">
                <h3>Scale</h3>
                <div className="price">$95</div>
                <div className="period">/month</div>
                <ul>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    150 videos per month
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    All 50+ UGC avatars
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Generate unlimited viral hooks
                  </li>
                </ul>
                <button className="button button-secondary">Buy Now</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <Link href="/" className="logo">
                <span className="logo-icon">RF</span>
              </Link>
            </div>
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            © 2023 ReelFarm. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
