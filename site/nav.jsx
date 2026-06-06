// NavBar and Footer shared across all pages.

const CL_PAGES = {
  home:     'index.html',
  about:    'About.html',
  programs: 'Programs.html',
  joinus:   'JoinUs.html',
  donate:   'Donate.html',
  blog:     'https://www.thecapsl.org/blog',
};

function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    if (!isMobile) setMenuOpen(false);
    document.body.style.overflow = (isMobile && menuOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobile, menuOpen]);

  const items = [
    { label: 'Home',     href: CL_PAGES.home     },
    { label: 'About',    href: CL_PAGES.about    },
    { label: 'Programs', href: CL_PAGES.programs  },
    { label: 'Join Us',  href: CL_PAGES.joinus    },
  ];

  const LogoImg = ({ height }) => (
    <span style={{ display: 'inline-block', position: 'relative', height, lineHeight: 0 }}>
      <img
        src="site/assets/Capsule logo for profile's.png"
        alt="CAPSuLe"
        style={{ height, width: 'auto', display: 'block' }}
        onError={function(e) {
          e.target.style.display = 'none';
          e.target.parentNode.querySelector('.cl-logo-fallback').style.display = 'flex';
        }}
      />
      <span className="cl-logo-fallback" style={{ display: 'none', alignItems: 'center', gap: 10, height }}>
        <BrandCapsule size={height * 0.7} color={window.CL.signal} />
        <Wordmark size={height * 0.5} />
      </span>
    </span>
  );

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(232,226,209,0.96)' : 'rgba(245,239,226,0.95)',
      backdropFilter: 'saturate(140%) blur(8px)',
      WebkitBackdropFilter: 'saturate(140%) blur(8px)',
      borderBottom: scrolled ? `1px solid ${window.CL.rule}` : '1px solid transparent',
      transition: 'background .25s, border-color .25s',
    }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '14px 32px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 24 }}>

        {/* Logo */}
        <a href={CL_PAGES.home} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="site/assets/capsule-logo.png" alt="CAPSuLe"
            style={{ height: 40, width: 'auto', objectFit: 'contain' }}
            onError={e => { e.currentTarget.style.display='none'; e.currentTarget.nextSibling.style.display='flex'; }}
          />
          <div style={{ display: 'none', alignItems: 'center', gap: 10 }}>
            <BrandCapsule size={30} color={window.CL.signal} />
            <Wordmark size={20} />
          </div>
        </div>
      </header>

        {/* Desktop nav */}
        <nav className="cl-nav-desktop">
          {items.map(it => (
            <a key={it.href} href={it.href} className="cl-link"
              style={{ fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.ink }}>
              {it.label}
            </a>
          ))}
        </nav>

        {/* Right: Donate CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href={CL_PAGES.donate}
            className="cl-hide-mobile"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', border: `1px solid ${window.CL.ink}`, transition: 'background .15s, color .15s' }}
            onMouseEnter={e => { e.currentTarget.style.background = window.CL.signal; e.currentTarget.style.borderColor = window.CL.signal; }}
            onMouseLeave={e => { e.currentTarget.style.background = window.CL.ink; e.currentTarget.style.borderColor = window.CL.ink; }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 6, background: window.CL.signal, display: 'inline-block' }} />
            Donate
          </a>

          {/* Hamburger */}
          <button className="cl-hamburger"
            style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8, cursor: 'pointer', background: 'none', border: 'none' }}
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle menu"
          >
            <span style={{ width: 22, height: 2, background: window.CL.ink, display: 'block', transition: 'transform .2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ width: 22, height: 2, background: window.CL.ink, display: 'block', opacity: menuOpen ? 0 : 1, transition: 'opacity .2s' }} />
            <span style={{ width: 22, height: 2, background: window.CL.ink, display: 'block', transition: 'transform .2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`cl-nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {items.map(it => (
          <a key={it.href} href={it.href}
            style={{ fontFamily: window.CL.mono, fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.ink, padding: '14px 0', borderBottom: `1px solid ${window.CL.rule}` }}
            onClick={() => setMenuOpen(false)}
          >
            {it.label}
          </a>
        ))}
        <a href={CL_PAGES.donate}
          style={{ display: 'block', marginTop: 16, padding: '14px 20px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', textAlign: 'center' }}
          onClick={() => setMenuOpen(false)}
        >
          Donate →
        </a>
      </div>
    </header>
  );
}

function Footer() {
  const isMobile = window.useBreakpoint(768);

  const cols = [
    { title: 'Explore', items: [
        { label: 'Home',     href: CL_PAGES.home     },
        { label: 'About',    href: CL_PAGES.about    },
        { label: 'Programs', href: CL_PAGES.programs  },
        { label: 'Join Us',  href: CL_PAGES.joinus   },
        { label: 'Blog',     href: CL_PAGES.blog, ext: true },
    ]},
    { title: 'Get involved', items: [
        { label: 'Donate',        href: CL_PAGES.donate },
        { label: 'Volunteer',     href: CL_PAGES.joinus },
        { label: 'Join the team', href: CL_PAGES.joinus },
        { label: 'Partner with us', href: CL_PAGES.joinus },
    ]},
    { title: 'Connect', items: [
        { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/the-capsl-', ext: true },
        { label: 'Instagram', href: 'https://www.instagram.com/the.capsl/', ext: true },
        { label: 'YouTube',   href: 'https://www.youtube.com/@Effective-Dose', ext: true },
        { label: 'Spotify',   href: 'https://open.spotify.com/show/6sfUU9Upubmm1TCRt6O2d0', ext: true },
        { label: 'contact@thecapsl.org', href: 'mailto:contact@thecapsl.org' },
    ]},
  ];

  return (
    <footer style={{ borderTop: `1.5px solid ${window.CL.ink}`, marginTop: 0, background: window.CL.paperWarm }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '56px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48 }} className="cl-grid-4">
          <div>
            <Wordmark size={40} />
            <div style={{ marginTop: 12 }}>
              <Tagline size={14} weight={500} color={window.CL.ink} accent={window.CL.signal} font={window.CL.display} />
            </div>
            <p style={{ fontFamily: window.CL.serif, fontSize: 14, lineHeight: 1.55, color: window.CL.inkSoft, marginTop: 14, maxWidth: 320 }}>
              The Child and Adolescent Performance Science Laboratory is a 501(c)(3) nonprofit that translates youth development research into real-world guidance.
            </p>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 12 }}>
                {String(i + 1).padStart(2, '0')} — {c.title}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {c.items.map(it => (
                  <li key={it.label}>
                    <a href={it.href}
                      target={it.ext ? '_blank' : undefined}
                      rel={it.ext ? 'noopener noreferrer' : undefined}
                      className="cl-link"
                      style={{ fontFamily: window.CL.serif, fontSize: 15, color: window.CL.ink }}>
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${window.CL.rule}`, paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span className="cl-mono" style={{ color: window.CL.inkSoft }}>CAPSuLe © 2026 · 501(c)(3) Nonprofit · File CAPSL/2026/03</span>
          <span className="cl-mono" style={{ color: window.CL.inkSoft }}>Cat. № 240-80-22</span>
        </div>
      </div>
    </footer>
  );
}

window.NavBar   = NavBar;
window.Footer   = Footer;
window.CL_PAGES = CL_PAGES;
