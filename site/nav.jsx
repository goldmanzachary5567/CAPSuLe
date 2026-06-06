// NavBar and Footer shared across all pages.

function LogoImg({ height }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, lineHeight: 0 }}>
      <img
        src="site/assets/Capsule logo for profile's.png"
        alt="CAPSuLe"
        style={{ height, width: 'auto', display: 'block' }}
        onError={function(e) {
          e.target.style.display = 'none';
          e.target.parentNode.querySelector('.cl-logo-fallback').style.display = 'flex';
        }}
      />
      <span className="cl-logo-fallback" style={{ display: 'none', alignItems: 'center', gap: 10 }}>
        <BrandCapsule size={height * 0.7} color={window.CL.signal} />
        <Wordmark size={height * 0.5} />
      </span>
    </span>
  );
}

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
  const isMobile = window.useBreakpoint(900);

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

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(232,226,209,0.96)' : 'rgba(245,239,226,0.95)',
      backdropFilter: 'saturate(140%) blur(8px)',
      WebkitBackdropFilter: 'saturate(140%) blur(8px)',
      borderBottom: scrolled ? `1px solid ${window.CL.rule}` : '1px solid transparent',
      transition: 'background .25s, border-color .25s',
    }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '10px 20px' : '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>

        {/* Logo */}
        <a href={CL_PAGES.home} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <LogoImg height={isMobile ? 36 : 44} />
        </a>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: 28, flex: 1, justifyContent: 'center' }}>
            {items.map(it => (
              <a key={it.label} href={it.href} className="cl-link"
                style={{ fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.ink }}>
                {it.label}
              </a>
            ))}
          </nav>
        )}

        {/* Right: Donate CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href={CL_PAGES.donate}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: isMobile ? '8px 14px' : '10px 16px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', border: `1px solid ${window.CL.ink}`, transition: 'background .15s, border-color .15s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.background = window.CL.signal; e.currentTarget.style.borderColor = window.CL.signal; }}
            onMouseLeave={e => { e.currentTarget.style.background = window.CL.ink; e.currentTarget.style.borderColor = window.CL.ink; }}
          >
            <span style={{ width: 5, height: 5, borderRadius: 5, background: window.CL.signal, display: 'inline-block', flexShrink: 0 }} />
            Donate
          </a>

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{ width: 36, height: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, background: 'transparent', border: 'none', cursor: 'pointer', padding: 6, flexShrink: 0 }}>
              <span style={{ display: 'block', width: 20, height: 1.5, background: window.CL.ink, transition: 'transform .2s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: 20, height: 1.5, background: window.CL.ink, transition: 'opacity .2s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 20, height: 1.5, background: window.CL.ink, transition: 'transform .2s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile overlay menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: window.CL.paper, zIndex: 49,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 0, padding: '80px 32px 48px',
        }}>
          {items.map((it, i) => (
            <a key={it.label} href={it.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: window.CL.display, fontSize: 'clamp(36px, 10vw, 52px)', fontWeight: 500, color: window.CL.ink, letterSpacing: '-0.02em', padding: '16px 0', borderBottom: i < items.length - 1 ? `1px solid ${window.CL.rule}` : 'none', width: '100%', textAlign: 'center' }}>
              {it.label}
            </a>
          ))}
          <a href={CL_PAGES.donate} onClick={() => setMenuOpen(false)}
            style={{ marginTop: 32, padding: '16px 40px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase' }}>
            Donate →
          </a>
        </div>
      )}
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
        { label: 'Donate',          href: CL_PAGES.donate },
        { label: 'Volunteer',       href: CL_PAGES.joinus },
        { label: 'Join the team',   href: CL_PAGES.joinus },
        { label: 'Partner with us', href: 'mailto:keton@thecapsl.org' },
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
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '48px 20px 28px' : '56px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1.4fr 1fr 1fr 1fr', gap: isMobile ? 36 : 40, paddingBottom: 48 }}>
          <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
            <span style={{ display: 'inline-block', lineHeight: 0, marginBottom: 14 }}>
              <img src="site/assets/Capsule logo for profile's.png" alt="CAPSuLe" style={{ height: 52, width: 'auto' }}
                onError={function(e) { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <span style={{ display: 'none' }}><Wordmark size={40} /></span>
            </span>
            <p style={{ fontFamily: window.CL.serif, fontSize: 14, lineHeight: 1.55, color: window.CL.inkSoft, marginTop: 0, maxWidth: 320 }}>
              The Child and Adolescent Performance Science Laboratory is a 501(c)(3) nonprofit that translates youth development research into real-world guidance for parents, educators, and coaches.
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
          <span className="cl-mono" style={{ color: window.CL.inkSoft }}>CAPSuLe © 2026 · 501(c)(3) Nonprofit</span>
          <span className="cl-mono" style={{ color: window.CL.inkSoft }}>Cat. № 240-80-22</span>
        </div>
      </div>
    </footer>
  );
}

window.NavBar   = NavBar;
window.Footer   = Footer;
window.CL_PAGES = CL_PAGES;
