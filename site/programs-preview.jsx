// Programs Preview — combined section for homepage replacing separate WordRx/Episodes/Blog sections.

function ProgramsPreview() {
  const isMobile = useIsMobile();

  const programs = [
    {
      code: 'PRX-DOSE',
      name: 'Prescribed Dose',
      kind: 'Blog',
      tagline: 'Research, written like advice from a friend.',
      blurb: 'Short, structured pieces that translate one principle from the literature into things a parent, teacher, or coach can do today.',
      status: 'Weekly',
      icon: '✍',
      logo: null,
      color: window.CL.signal,
      href: 'https://www.thecapsl.org/blog',
      ext: true,
    },
    {
      code: 'PRX-EFFECT',
      name: 'Effective Dose',
      kind: 'Podcast',
      tagline: 'Conversations with the people doing the science.',
      blurb: 'Long-form interviews with researchers, clinicians, and practitioners. Eight episodes on Spotify, Apple Podcasts, and YouTube.',
      status: 'Active',
      icon: '🎙',
      logo: 'site/assets/EffectiveDose_logo.png',
      color: window.CL.blueprint,
      href: 'Programs.html',
    },
    {
      code: 'PRX-MICRO',
      name: 'MicroDose',
      kind: 'Course Series',
      tagline: 'Science-based courses for the people raising the next generation.',
      blurb: 'Micro-courses for educators and parents launching on Coursera in 2026.',
      status: 'Launching 2026',
      icon: '📚',
      logo: 'site/assets/MicroDose_logo.png',
      color: window.CL.ink,
      href: 'Programs.html',
    },
    {
      code: 'PRX-WORDRX',
      name: 'WordRx',
      kind: 'Documentary Film',
      tagline: 'The hidden prescription behind healing.',
      blurb: 'Our flagship feature documentary following four "word pharmacists" — in production for Amazon Prime Video.',
      status: 'In Production',
      icon: '🎬',
      logo: 'site/assets/WordRX_logio.jpg',
      color: '#8B2FC9',
      href: 'Programs.html',
    },
    {
      code: 'PRX-EXR',
      name: 'Extended Release',
      kind: 'Documentary Film',
      tagline: 'Healthcare is often a translation problem.',
      blurb: 'A second documentary in development examining what real patient-clinician relationships look like.',
      status: 'In Development',
      icon: '🎥',
      logo: 'site/assets/ExtendedRelease_logo.png',
      color: '#2E7D5E',
      href: 'Programs.html',
    },
  ];

  return (
    <section id="programs-preview" style={{ padding: isMobile ? '72px 0' : '120px 0', background: window.CL.paperWarm, borderTop: `1.5px solid ${window.CL.ink}`, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 04 — What We Build</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>05 programs · One mission</div>
        </div>

        <div className="cl-grid-2" style={{ marginBottom: 56, gap: isMobile ? 32 : 80 }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 48 : 64, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
            One mission,<br /><em style={{ color: window.CL.signal }}>five doses.</em>
          </h2>
          <p style={{ fontFamily: window.CL.serif, fontSize: 18, lineHeight: 1.55, color: window.CL.ink, margin: 0, textWrap: 'pretty', alignSelf: 'flex-end' }}>
            CAPSuLe ships documentaries, courses, essays, and a podcast — every program designed to take the best science, dose it, and deliver it where it can do real work.
          </p>
        </div>

        <div className="cl-grid-prog" style={{ gap: isMobile ? 16 : 24 }}>
          {programs.map((p) => (
            <ProgramCard key={p.code} program={p} />
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a href="Programs.html"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', border: `1.5px solid ${window.CL.ink}`, background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}
            onMouseEnter={e => { e.currentTarget.style.background = window.CL.signal; e.currentTarget.style.borderColor = window.CL.signal; }}
            onMouseLeave={e => { e.currentTarget.style.background = window.CL.ink; e.currentTarget.style.borderColor = window.CL.ink; }}
          >
            Explore all programs →
          </a>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program: p }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a href={p.href}
      target={p.ext ? '_blank' : undefined}
      rel={p.ext ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        border: `1.5px solid ${hovered ? p.color : window.CL.ink}`,
        background: hovered ? window.CL.paper : 'transparent',
        padding: '28px 24px',
        transition: 'border-color .2s, background .2s',
        cursor: 'pointer',
      }}
    >
      {/* Program logo */}
      <div style={{
        width: 52, height: 52, borderRadius: 4, marginBottom: 18,
        background: p.logo ? 'transparent' : (hovered ? p.color : window.CL.paperWarm),
        border: p.logo ? 'none' : `1.5px solid ${window.CL.rule}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background .2s',
        overflow: 'hidden',
      }}>
        {p.logo
          ? <img src={p.logo} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          : <span style={{ fontSize: 24 }}>{p.icon}</span>
        }
      </div>

      <div className="cl-mono" style={{ color: hovered ? p.color : window.CL.inkSoft, marginBottom: 8, transition: 'color .2s' }}>{p.kind}</div>
      <div style={{ fontFamily: window.CL.display, fontSize: 26, fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.015em', color: window.CL.ink, marginBottom: 10 }}>{p.name}</div>
      <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 14, color: window.CL.signal, margin: '0 0 12px', lineHeight: 1.4 }}>{p.tagline}</p>
      <p style={{ fontFamily: window.CL.serif, fontSize: 14, lineHeight: 1.5, color: window.CL.inkSoft, margin: 0, flex: 1 }}>{p.blurb}</p>

      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ display: 'inline-block', padding: '4px 8px', border: `1px solid ${window.CL.rule}`, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.inkSoft }}>{p.status}</span>
        <span style={{ fontFamily: window.CL.mono, fontSize: 11, color: hovered ? p.color : window.CL.ink, transition: 'color .2s' }}>→</span>
      </div>
    </a>
  );
}

window.ProgramsPreview = ProgramsPreview;
