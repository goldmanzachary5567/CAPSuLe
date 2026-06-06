// ProgramsPreview — home page section combining all programs into one grid of cards.

function ProgramsPreview() {
  const isMobile = window.useBreakpoint(768);

  const programs = [
    {
      icon: '◈',
      name: 'WordRx',
      kind: 'Documentary Film',
      tagline: 'The hidden prescription behind healing.',
      blurb: 'Our flagship documentary following four "word pharmacists" making the case that language itself is a therapeutic tool.',
      status: 'In production',
      color: window.CL.signal,
    },
    {
      icon: '⬡',
      name: 'MicroDose',
      kind: 'Course Series',
      tagline: 'Science-based courses for the people raising the next generation.',
      blurb: 'Structured micro-courses for educators and parents launching via Coursera in 2026.',
      status: 'Launching 2026',
      color: window.CL.blueprint,
    },
    {
      icon: '◎',
      name: 'Prescribed Dose',
      kind: 'Research Blog',
      tagline: 'Research, written like advice from a friend.',
      blurb: 'Short, structured pieces that translate one principle from the literature into practical takeaways — weekly.',
      status: 'Weekly',
      color: '#3A6B35',
    },
    {
      icon: '◉',
      name: 'Effective Dose',
      kind: 'Podcast',
      tagline: 'Conversations with the people doing the science.',
      blurb: 'Long-form interviews with researchers, clinicians, and practitioners across Spotify, Apple, and YouTube.',
      status: 'Active',
      color: '#6B4C3A',
    },
    {
      icon: '◐',
      name: 'Extended Release',
      kind: 'Documentary Film',
      tagline: 'Healthcare is often a translation problem.',
      blurb: 'A second documentary in development examining what real patient–clinician relationships look like.',
      status: 'In development',
      color: window.CL.inkSoft,
    },
  ];

  return (
    <section id="programs-preview" style={{ padding: isMobile ? '72px 0' : '120px 0', background: window.CL.paperWarm, borderTop: `1.5px solid ${window.CL.ink}`, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 36 : 56 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 04 — What We Build</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>05 programs · Compounding impact</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? 28 : 80, marginBottom: isMobile ? 40 : 56 }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 48 : 64, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink }}>
            One mission,<br /><em style={{ color: window.CL.signal }}>five doses.</em>
          </h2>
          <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 17 : 19, lineHeight: 1.55, color: window.CL.ink, margin: 0, alignSelf: 'flex-end' }}>
            CAPSuLe ships documentaries, courses, essays, and a podcast that compound into durable infrastructure for the people raising kids. Every program shares one shape: take the best science, dose it, and deliver it where it can do real work.
          </p>
        </div>

        {/* Program cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(5, 1fr)', gap: 1, background: window.CL.ink, border: `1.5px solid ${window.CL.ink}` }}>
          {programs.map((p) => (
            <a key={p.name} href="Programs.html"
              style={{ display: 'flex', flexDirection: 'column', gap: 0, background: window.CL.paper, padding: isMobile ? '24px 18px' : '32px 24px', transition: 'background .15s', textDecoration: 'none', cursor: 'pointer', aspectRatio: isMobile ? 'auto' : '1 / 1.1' }}
              onMouseEnter={e => { e.currentTarget.style.background = window.CL.paperWarm; }}
              onMouseLeave={e => { e.currentTarget.style.background = window.CL.paper; }}
            >
              <div style={{ fontSize: isMobile ? 24 : 28, color: p.color, marginBottom: 16, lineHeight: 1 }}>{p.icon}</div>
              <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 10, fontSize: 10 }}>{p.kind}</div>
              <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 22 : 26, fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.018em', color: window.CL.ink, marginBottom: 12 }}>{p.name}</div>
              <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: isMobile ? 13 : 14, lineHeight: 1.5, color: window.CL.signal, margin: '0 0 auto', flexGrow: 1 }}>{p.tagline}</p>
              <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 13 : 14, lineHeight: 1.5, color: window.CL.inkSoft, margin: '16px 0 0' }}>{p.blurb}</p>
              <div style={{ marginTop: 20, display: 'inline-block', padding: '5px 9px', border: `1px solid ${window.CL.rule}`, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: window.CL.inkSoft, alignSelf: 'flex-start' }}>{p.status}</div>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 28, textAlign: 'right' }}>
          <a href="Programs.html" className="cl-link cl-mono" style={{ color: window.CL.ink }}>SEE ALL PROGRAMS →</a>
        </div>
      </div>
    </section>
  );
}

window.ProgramsPreview = ProgramsPreview;
