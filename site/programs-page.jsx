// Programs page — full detail for each program.

function ProgramsPageHero() {
  const isMobile = window.useBreakpoint(768);
  return (
    <section style={{ padding: isMobile ? '64px 0 48px' : '96px 0 72px', borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 32 : 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 04 — What We Build</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>05 programs</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? 24 : 80, alignItems: 'flex-end' }}>
          <h1 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 52 : 80, fontWeight: 500, lineHeight: 0.92, letterSpacing: '-0.03em', margin: 0, color: window.CL.ink }}>
            One mission,<br /><em style={{ color: window.CL.signal }}>five doses.</em>
          </h1>
          <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 17 : 20, lineHeight: 1.55, color: window.CL.ink, margin: 0 }}>
            CAPSuLe ships documentaries, courses, essays, and a podcast that compound into durable infrastructure for the people raising kids. Every program shares one shape: take the best science, dose it, and deliver it where it can do real work.
          </p>
        </div>
      </div>
    </section>
  );
}

// PRX-DOSE — Prescribed Dose blog
function PrescribedDoseSection() {
  const isMobile = window.useBreakpoint(768);
  return (
    <section id="prescribed-dose" style={{ padding: isMobile ? '64px 0' : '100px 0', borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 32 : 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-DOSE · Research Blog</div>
          <span style={{ display: 'inline-block', padding: '5px 10px', border: `1px solid ${window.CL.ink}`, fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: window.CL.ink }}>Weekly</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr', gap: isMobile ? 28 : 80 }}>
          <div>
            <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: '0 0 16px', color: window.CL.ink }}>
              Prescribed<br /><em style={{ color: window.CL.signal }}>Dose</em>
            </h2>
            <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 17, color: window.CL.signal, margin: '0 0 28px', lineHeight: 1.4 }}>
              Research, written like advice from a friend.
            </p>
            <a href="https://www.thecapsl.org/blog"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 24px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}
              onMouseEnter={e => e.currentTarget.style.background = window.CL.signal}
              onMouseLeave={e => e.currentTarget.style.background = window.CL.ink}
            >
              Read the Blog →
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 17 : 19, lineHeight: 1.6, color: window.CL.ink, margin: 0 }}>
              Prescribed Dose is our weekly research blog — short, structured pieces that translate one principle from the literature into two or three things a parent, teacher, or coach can do today, with the science behind why it works.
            </p>
            <p style={{ fontFamily: window.CL.serif, fontSize: 16, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0 }}>
              Each post is written to be read in under five minutes and acted on the same day. We strip the jargon, keep the rigor, and write to the person who needs it — not the person who already knows it.
            </p>
            <div style={{ padding: '20px 24px', background: window.CL.paperWarm, border: `1px solid ${window.CL.rule}`, display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontFamily: window.CL.display, fontSize: 36, fontWeight: 500, color: window.CL.signal, letterSpacing: '-0.025em' }}>∞</span>
              <div>
                <div style={{ fontFamily: window.CL.serif, fontSize: 15, color: window.CL.ink }}>Articles published and growing</div>
                <div className="cl-mono" style={{ color: window.CL.inkSoft, marginTop: 4 }}>New post every week · Free to read</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// PRX-MICRO — MicroDose courses
function MicroDoseSection() {
  const isMobile = window.useBreakpoint(768);
  return (
    <section id="microdose" style={{ padding: isMobile ? '64px 0' : '100px 0', background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 32 : 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-MICRO · Course Series</div>
          <span style={{ display: 'inline-block', padding: '5px 10px', border: `1px solid ${window.CL.ink}`, fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: window.CL.ink }}>Launching 2026</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr', gap: isMobile ? 28 : 80 }}>
          <div>
            <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: '0 0 16px', color: window.CL.ink }}>
              Micro<em style={{ color: window.CL.signal }}>Dose</em>
            </h2>
            <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 17, color: window.CL.signal, margin: '0 0 28px', lineHeight: 1.4 }}>
              Science-based courses for the people raising the next generation.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 17 : 19, lineHeight: 1.6, color: window.CL.ink, margin: 0 }}>
              MicroDose is a structured micro-course series for educators and parents. Each course takes less than two hours to complete and delivers evidence-based, practically framed guidance on a single theme.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 1, background: window.CL.ink, border: `1.5px solid ${window.CL.ink}` }}>
              {[
                { title: 'The Learning Environment', audience: 'For Educators', year: '2026' },
                { title: 'The Home Environment', audience: 'For Parents', year: '2026' },
              ].map((c, i) => (
                <div key={i} style={{ background: window.CL.paper, padding: '24px 20px' }}>
                  <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 10 }}>{c.audience} · {c.year}</div>
                  <div style={{ fontFamily: window.CL.display, fontSize: 22, fontWeight: 500, letterSpacing: '-0.015em', color: window.CL.ink }}>{c.title}</div>
                </div>
              ))}
            </div>

            {/* Placeholder */}
            <div style={{ padding: '24px', background: window.CL.paper, border: `1px dashed ${window.CL.inkSoft}`, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="cl-mono" style={{ color: window.CL.inkSoft }}>Course preview — Coming soon</div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0 }}>
                Distributed via Coursera alongside a formal book and e-book release. Course previews and enrollment will be available here when the program launches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Countdown — CAPSuLe acronym progress tracker
function CountdownSection() {
  const isMobile = window.useBreakpoint(768);
  const [hovered, setHovered] = React.useState(null);

  const letters = [
    { l: 'C', full: 'Child', desc: 'Child-centered science and outcomes', pct: 80 },
    { l: 'A', full: 'Adolescent', desc: 'Adolescent development focus across all programs', pct: 75 },
    { l: 'P', full: 'Performance', desc: 'Performance science methodology and rigour', pct: 60 },
    { l: 'S', full: 'Science', desc: 'Science-backed translation at every step', pct: 65 },
    { l: 'u', full: 'Understanding', desc: 'Universal accessibility of research findings', pct: 55 },
    { l: 'L', full: 'Laboratory', desc: 'Laboratory rigor brought into real-world practice', pct: 70 },
    { l: 'e', full: 'Evidence', desc: 'Evidence-based outcomes in every room we reach', pct: 50 },
  ];

  const upcomingTopics = [
    'Sleep and adolescent cognitive performance',
    'Nutrition timing for youth athletes',
    'Stress inoculation in competitive sport',
    'Language development through reading aloud',
    'Screen time and executive function',
    'The mentor effect in early adolescence',
    'Movement as medicine for learning difficulties',
  ];

  const partners = [
    'Harvard University', 'Cornell University', 'Columbia University',
    'Johns Hopkins University', 'University of Toronto',
  ];

  return (
    <section id="countdown" style={{ padding: isMobile ? '64px 0' : '100px 0', borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 32 : 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>CAPSuLe — Progress Tracker</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>Countdown</div>
        </div>

        {/* CAPSuLe letter progress */}
        <div style={{ marginBottom: isMobile ? 48 : 72 }}>
          <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 20 }}>HOVER EACH LETTER · MISSION PROGRESS</div>
          <div style={{ display: 'flex', gap: isMobile ? 8 : 16, flexWrap: 'wrap' }}>
            {letters.map((lt) => (
              <div key={lt.l}
                onMouseEnter={() => setHovered(lt.l)}
                onMouseLeave={() => setHovered(null)}
                style={{ flex: '0 0 auto', cursor: 'default', position: 'relative', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
                {/* Letter with fill effect */}
                <div style={{ position: 'relative', lineHeight: 1 }}>
                  {/* Background letter (unfilled) */}
                  <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 48 : 80, fontWeight: 500, letterSpacing: '-0.02em', color: window.CL.rule, userSelect: 'none' }}>{lt.l}</div>
                  {/* Filled portion */}
                  <div style={{ position: 'absolute', top: 0, left: 0, overflow: 'hidden', width: '100%', height: `${lt.pct}%` }}>
                    <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 48 : 80, fontWeight: 500, letterSpacing: '-0.02em', color: hovered === lt.l ? window.CL.signal : window.CL.ink, transition: 'color .2s', userSelect: 'none' }}>{lt.l}</div>
                  </div>
                </div>
                {/* Progress bar under letter */}
                <div style={{ width: '100%', height: 3, background: window.CL.rule, borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${lt.pct}%`, background: hovered === lt.l ? window.CL.signal : window.CL.ink, transition: 'background .2s, width .4s' }} />
                </div>
                <div className="cl-mono" style={{ fontSize: 9, color: window.CL.inkSoft }}>{lt.pct}%</div>
              </div>
            ))}
          </div>

          {/* Hover tooltip */}
          {hovered && (
            <div style={{ marginTop: 20, padding: '14px 20px', background: window.CL.ink, color: window.CL.paper, display: 'inline-flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: window.CL.display, fontSize: 20, fontWeight: 500, letterSpacing: '-0.01em' }}>{letters.find(l => l.l === hovered)?.full}</span>
              <span style={{ fontFamily: window.CL.serif, fontSize: 14, color: 'rgba(245,239,226,.7)' }}>{letters.find(l => l.l === hovered)?.desc}</span>
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80 }}>
          {/* Upcoming topics */}
          <div>
            <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 20 }}>UPCOMING TOPICS</div>
            <div style={{ borderTop: `1.5px solid ${window.CL.ink}` }}>
              {upcomingTopics.map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '14px 0', borderBottom: `1px solid ${window.CL.rule}` }}>
                  <span className="cl-mono" style={{ color: window.CL.signal, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.4, color: window.CL.ink }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partner institutions + donate */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 16 }}>PARTNER INSTITUTIONS</div>
              <div style={{ borderTop: `1.5px solid ${window.CL.ink}` }}>
                {partners.map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '14px 0', borderBottom: `1px solid ${window.CL.rule}` }}>
                    <span style={{ width: 6, height: 6, borderRadius: 6, background: window.CL.signal, flexShrink: 0 }} />
                    <span style={{ fontFamily: window.CL.display, fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em', color: window.CL.ink }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '28px', background: window.CL.ink, color: window.CL.paper, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontFamily: window.CL.display, fontSize: 26, fontWeight: 500, letterSpacing: '-0.015em' }}>Support the countdown.</div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.5, color: 'rgba(245,239,226,.75)', margin: 0 }}>
                Every letter of CAPSuLe represents a commitment. Help us fill them all.
              </p>
              <a href="Donate.html"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 24px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', alignSelf: 'flex-start' }}>
                Donate →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// PRX-EFFECT — Effective Dose podcast
function EffectiveDoseSection() {
  const isMobile = window.useBreakpoint(768);

  const featuredEpisodes = [
    {
      no: 'EP 01',
      title: 'The neuroscience of motivation in young athletes',
      guest: 'Dr. Jane Example, Harvard Medical School',
      youtube: 'https://www.youtube.com/@Effective-Dose',
      spotify: 'https://open.spotify.com/show/6sfUU9Upubmm1TCRt6O2d0',
    },
    {
      no: 'EP 02',
      title: 'Language as a clinical tool: what every coach should know',
      guest: 'Prof. Example Name, Cornell University',
      youtube: 'https://www.youtube.com/@Effective-Dose',
      spotify: 'https://open.spotify.com/show/6sfUU9Upubmm1TCRt6O2d0',
    },
    {
      no: 'EP 03',
      title: 'Sleep architecture and adolescent decision-making',
      guest: 'Dr. Research Name, Johns Hopkins',
      youtube: 'https://www.youtube.com/@Effective-Dose',
      spotify: 'https://open.spotify.com/show/6sfUU9Upubmm1TCRt6O2d0',
    },
  ];

  return (
    <section id="effective-dose" style={{ padding: isMobile ? '64px 0' : '100px 0', background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 32 : 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-EFFECT · Podcast</div>
          <span style={{ display: 'inline-block', padding: '5px 10px', border: `1px solid ${window.CL.ink}`, fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: window.CL.ink }}>Active</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr', gap: isMobile ? 28 : 80, marginBottom: isMobile ? 40 : 64 }}>
          <div>
            <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: '0 0 16px', color: window.CL.ink }}>
              Effective<br /><em style={{ color: window.CL.signal }}>Dose</em>
            </h2>
            <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 17, color: window.CL.signal, margin: '0 0 24px', lineHeight: 1.4 }}>
              Conversations with the people doing the science.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://www.youtube.com/@Effective-Dose" target="_blank" rel="noopener noreferrer"
                style={{ padding: '10px 18px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}>
                YouTube
              </a>
              <a href="https://open.spotify.com/show/6sfUU9Upubmm1TCRt6O2d0" target="_blank" rel="noopener noreferrer"
                style={{ padding: '10px 18px', border: `1px solid ${window.CL.ink}`, color: window.CL.ink, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}>
                Spotify
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 17 : 19, lineHeight: 1.6, color: window.CL.ink, margin: 0 }}>
              Long-form interviews with researchers, clinicians, and practitioners. The archive that anchors everything we make. Eight episodes and counting, available on Spotify, Apple Podcasts, and YouTube.
            </p>
            {/* Coming soon: in-person dinner */}
            <div style={{ padding: '24px', background: window.CL.paper, border: `1.5px solid ${window.CL.ink}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div className="cl-mono" style={{ color: window.CL.signal }}>COMING SOON — IN-PERSON DINNER SERIES</div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.55, color: window.CL.inkSoft, margin: 0 }}>
                We are planning an intimate dinner series bringing researchers, clinicians, practitioners, and community members together around a table to continue the conversations started on the podcast. Details to follow — express your interest via the Join Us page.
              </p>
              <a href="JoinUs.html" style={{ fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.signal, borderBottom: `1px solid ${window.CL.signal}`, paddingBottom: 2, alignSelf: 'flex-start' }}>
                Express interest →
              </a>
            </div>
          </div>
        </div>

        {/* Featured episodes */}
        <div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 20 }}>FEATURED EPISODES</div>
          <div style={{ borderTop: `1.5px solid ${window.CL.ink}` }}>
            {featuredEpisodes.map((ep) => (
              <div key={ep.no} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '80px 1fr auto', gap: isMobile ? 8 : 24, alignItems: 'center', padding: '24px 0', borderBottom: `1px solid ${window.CL.rule}` }}>
                <div className="cl-mono" style={{ color: window.CL.signal }}>{ep.no}</div>
                <div>
                  <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 18 : 22, fontWeight: 500, letterSpacing: '-0.01em', color: window.CL.ink, marginBottom: 4 }}>{ep.title}</div>
                  <div style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 14, color: window.CL.inkSoft }}>{ep.guest}</div>
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: isMobile ? 8 : 0 }}>
                  <a href={ep.youtube} target="_blank" rel="noopener noreferrer"
                    style={{ padding: '8px 14px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase' }}>
                    YT
                  </a>
                  <a href={ep.spotify} target="_blank" rel="noopener noreferrer"
                    style={{ padding: '8px 14px', border: `1px solid ${window.CL.ink}`, color: window.CL.ink, fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase' }}>
                    SP
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// PRX-WORDRX — WordRx documentary
function WordRxSection() {
  const isMobile = window.useBreakpoint(768);

  // Simple SVG pie chart for WordRx budget
  const PieChart = () => {
    const segments = [
      { label: 'Production', pct: 45, color: window.CL.signal },
      { label: 'Distribution', pct: 20, color: window.CL.blueprint },
      { label: 'Post-production', pct: 25, color: '#3A6B35' },
      { label: 'Operations', pct: 10, color: window.CL.inkSoft },
    ];
    const r = 70, cx = 90, cy = 90, total = 360;
    let cumPct = 0;
    const paths = segments.map(s => {
      const start = cumPct / 100 * total;
      const sweep = s.pct / 100 * total;
      cumPct += s.pct;
      const toRad = deg => deg * Math.PI / 180;
      const x1 = cx + r * Math.cos(toRad(start - 90));
      const y1 = cy + r * Math.sin(toRad(start - 90));
      const x2 = cx + r * Math.cos(toRad(start + sweep - 90));
      const y2 = cy + r * Math.sin(toRad(start + sweep - 90));
      const large = sweep > 180 ? 1 : 0;
      return { ...s, d: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z` };
    });

    return (
      <div style={{ display: 'flex', gap: isMobile ? 20 : 40, alignItems: 'center', flexWrap: 'wrap' }}>
        <svg width={180} height={180} viewBox="0 0 180 180">
          {paths.map(p => <path key={p.label} d={p.d} fill={p.color} />)}
          <circle cx={cx} cy={cy} r={r * 0.45} fill={window.CL.paperWarm} />
          <text x={cx} y={cy - 4} textAnchor="middle" fontFamily={window.CL.mono} fontSize="9" fill={window.CL.inkSoft}>BUDGET</text>
          <text x={cx} y={cy + 10} textAnchor="middle" fontFamily={window.CL.mono} fontSize="8" fill={window.CL.inkSoft}>ALLOCATION</text>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {segments.map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: s.color, flexShrink: 0 }} />
              <span style={{ fontFamily: window.CL.serif, fontSize: 14, color: window.CL.ink }}>{s.label}</span>
              <span className="cl-mono" style={{ color: window.CL.inkSoft, marginLeft: 'auto', paddingLeft: 16 }}>{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="wordrx" style={{ padding: isMobile ? '64px 0' : '100px 0', background: window.CL.ink, color: window.CL.paper, borderBottom: `1.5px solid ${window.CL.paper}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid rgba(245,239,226,.4)`, paddingBottom: 16, marginBottom: isMobile ? 32 : 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-WORDRX · Documentary Film</div>
          <span style={{ display: 'inline-block', padding: '5px 10px', border: `1px solid rgba(245,239,226,.4)`, fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: window.CL.paper }}>In Production</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr', gap: isMobile ? 28 : 80, marginBottom: isMobile ? 40 : 64 }}>
          <div>
            <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 52 : 72, fontWeight: 500, lineHeight: 0.9, letterSpacing: '-0.03em', margin: '0 0 16px', color: window.CL.paper }}>
              Word<em style={{ color: window.CL.signal }}>Rx</em>
            </h2>
            <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 17, color: window.CL.signal, margin: '0 0 28px', lineHeight: 1.4 }}>
              The hidden prescription behind healing.
            </p>
            <div className="cl-mono" style={{ color: 'rgba(245,239,226,.6)', lineHeight: 1.8 }}>
              Filming · December 2026<br />
              Location · Belleair, FL<br />
              Distribution · Amazon Prime Video
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 17 : 19, lineHeight: 1.6, color: 'rgba(245,239,226,.85)', margin: 0 }}>
              Our flagship feature documentary. Following four "word pharmacists" — a teacher, a parent, a clinician, a coach — making the case that language itself is a therapeutic tool. This is not a film about reading. It is a film about what the right words, at the right time, in the right hands, can actually do.
            </p>

            {/* Poster / elevator pitch placeholder */}
            <div style={{ border: `1px dashed rgba(245,239,226,.35)`, padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, minHeight: 180, textAlign: 'center' }}>
              <div style={{ fontFamily: window.CL.display, fontSize: 20, fontWeight: 500, color: 'rgba(245,239,226,.5)' }}>Film Poster &amp; Elevator Pitch</div>
              <div className="cl-mono" style={{ color: 'rgba(245,239,226,.3)' }}>Coming soon — Production 2026</div>
            </div>
          </div>
        </div>

        {/* Funding + Pie chart */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 36 : 64, borderTop: `1px solid rgba(245,239,226,.2)`, paddingTop: isMobile ? 36 : 56 }}>
          <div>
            <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 20 }}>PRODUCTION FUNDING</div>
            <Thermometer label="WORDRX PRODUCTION FUND" raised="$xx,xxx" goal="$20,000" pct={0} note="FILMING DEC 2026" />
            <a href="Donate.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 20, padding: '12px 24px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}>
              Fund WordRx →
            </a>
          </div>

          <div>
            <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 20 }}>BUDGET ALLOCATION</div>
            <div style={{ background: 'rgba(245,239,226,.06)', border: `1px solid rgba(245,239,226,.15)`, padding: '28px 24px' }}>
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ProgramsPageHero    = ProgramsPageHero;
window.PrescribedDoseSection = PrescribedDoseSection;
window.MicroDoseSection    = MicroDoseSection;
window.CountdownSection    = CountdownSection;
window.EffectiveDoseSection = EffectiveDoseSection;
window.WordRxSection       = WordRxSection;
