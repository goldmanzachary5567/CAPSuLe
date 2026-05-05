// NavBar and Footer shared across all pages.
// Pages: index / index.html, About.html, Programs.html,
//        Episodes.html, Blog.html, Network.html, Donate.html

const CL_PAGES = {
  home:     'index.html',
  about:    'About.html',
  programs: 'Programs.html',
  episodes: 'Episodes.html',
  blog:     'Blog.html',
  network:  'Network.html',
  donate:   'Donate.html',
};

function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { label: 'About',    href: CL_PAGES.about    },
    { label: 'Programs', href: CL_PAGES.programs  },
    { label: 'Episodes', href: CL_PAGES.episodes  },
    { label: 'Blog',     href: CL_PAGES.blog      },
    { label: 'Network',  href: CL_PAGES.network   },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(232,226,209,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(140%) blur(8px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(140%) blur(8px)' : 'none',
      borderBottom: scrolled ? `1px solid ${window.CL.rule}` : '1px solid transparent',
      transition: 'background .25s, border-color .25s',
    }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '18px 32px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 24 }}>
        <a href={CL_PAGES.home} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <BrandCapsule size={32} color={window.CL.signal} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Wordmark size={22} />
            <span className="cl-mono" style={{ fontSize: 9, color: window.CL.inkSoft, letterSpacing: '.22em' }}>
              <Tagline size={10} weight={500} color={window.CL.inkSoft} accent={window.CL.signal} font={window.CL.mono} italic={false} before="LAB → " after=" ROOM" />
            </span>
          </div>
        </a>

        <nav style={{ display: 'flex', gap: 28, justifyContent: 'center' }}>
          {items.map(it => (
            <a key={it.href} href={it.href} className="cl-link" style={{ fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.ink }}>{it.label}</a>
          ))}
        </nav>

        <a href={CL_PAGES.donate}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 16px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', border: `1px solid ${window.CL.ink}`, transition: 'background .15s, color .15s' }}
          onMouseEnter={e => { e.currentTarget.style.background = window.CL.signal; e.currentTarget.style.borderColor = window.CL.signal; }}
          onMouseLeave={e => { e.currentTarget.style.background = window.CL.ink; e.currentTarget.style.borderColor = window.CL.ink; }}
        >
          <span style={{ width: 6, height: 6, borderRadius: 6, background: window.CL.signal, display: 'inline-block' }} />
          Donate
        </a>
      </div>
    </header>
  );
}

function Footer() {
  const cols = [
    { title: 'Explore',      items: [
        { label: 'About',    href: CL_PAGES.about    },
        { label: 'Programs', href: CL_PAGES.programs  },
        { label: 'Episodes', href: CL_PAGES.episodes  },
        { label: 'Blog',     href: CL_PAGES.blog      },
        { label: 'Network',  href: CL_PAGES.network   },
    ]},
    { title: 'Get involved', items: [
        { label: 'Donate',        href: CL_PAGES.donate },
        { label: 'Volunteer',     href: CL_PAGES.donate },
        { label: 'Newsletter',    href: CL_PAGES.donate },
        { label: 'Partner with us', href: CL_PAGES.donate },
    ]},
    { title: 'Connect', items: [
        { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/the-capsl-' },
        { label: 'Instagram', href: 'https://www.instagram.com/the.capsl/' },
        { label: 'YouTube',   href: 'https://www.youtube.com/@Effective-Dose' },
        { label: 'Spotify',   href: 'https://open.spotify.com/show/6sfUU9Upubmm1TCRt6O2d0' },
        { label: 'contact@thecapsl.org', href: 'mailto:contact@thecapsl.org' },
    ]},
  ];

  return (
    <footer style={{ borderTop: `1.5px solid ${window.CL.ink}`, marginTop: 100, background: window.CL.paperWarm }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '64px 32px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48, paddingBottom: 56 }}>
          <div>
            <Wordmark size={48} />
            <div style={{ marginTop: 14 }}>
              <Tagline size={16} weight={500} color={window.CL.ink} accent={window.CL.signal} font={window.CL.display} />
            </div>
            <p style={{ fontFamily: window.CL.serif, fontSize: 14, lineHeight: 1.55, color: window.CL.inkSoft, marginTop: 18, maxWidth: 360 }}>
              The Child and Adolescent Performance Science Laboratory is a 501(c)(3) nonprofit that translates youth development research into real-world guidance for parents, educators, and coaches.
            </p>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 14 }}>
                {String(i + 1).padStart(2, '0')} — {c.title}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(it => (
                  <li key={it.label}>
                    <a href={it.href} target={it.href.startsWith('http') ? '_blank' : undefined} rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="cl-link" style={{ fontFamily: window.CL.serif, fontSize: 16, color: window.CL.ink }}>
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${window.CL.rule}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span className="cl-mono" style={{ color: window.CL.inkSoft }}>CAPSuLe © 2026 · 501(c)(3) Nonprofit · File CAPSL/2026/03</span>
          <span className="cl-mono" style={{ color: window.CL.inkSoft }}>Cat. № 240-80-22</span>
        </div>
      </div>
    </footer>
  );
}

window.NavBar = NavBar;
window.Footer = Footer;
