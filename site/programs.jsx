// Programs page — full detailed view of all five programs.

// Interactive CAPSuLe acronym with letter tooltips.
function CAPSuLeAcronym({ size }) {
  var fontSize = size || 'clamp(40px, 8vw, 100px)';
  var letters = [
    { l: 'C', word: 'Child',       italic: false },
    { l: 'A', word: 'Adolescent',  italic: false },
    { l: 'P', word: 'Performance', italic: false },
    { l: 'S', word: 'Science',     italic: false },
    { l: 'u', word: '&',           italic: true  },
    { l: 'L', word: 'Laboratory',  italic: false },
    { l: 'e', word: '',            italic: true  },
  ];
  var [hov, setHov] = React.useState(null);

  return (
    <div style={{ display: 'inline-flex', gap: 1, alignItems: 'flex-end' }}>
      {letters.map(function(lt, i) {
        return (
          <div key={i} style={{ position: 'relative', cursor: lt.word ? 'help' : 'default' }}
            onMouseEnter={function(){ if (lt.word) setHov(i); }}
            onMouseLeave={function(){ setHov(null); }}
          >
            <span style={{
              fontFamily: window.CL.display,
              fontSize: fontSize,
              fontWeight: 500,
              fontStyle: lt.italic ? 'italic' : 'normal',
              lineHeight: 0.92,
              color: hov === i ? window.CL.signal : window.CL.ink,
              transition: 'color .15s',
              display: 'block',
            }}>
              {lt.l}
            </span>
            {hov === i && lt.word && (
              <div style={{
                position: 'absolute', bottom: '110%', left: '50%',
                transform: 'translateX(-50%)',
                background: window.CL.ink, color: window.CL.paper,
                padding: '5px 10px', fontFamily: window.CL.mono,
                fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase',
                whiteSpace: 'nowrap', zIndex: 20, marginBottom: 4,
                pointerEvents: 'none',
              }}>
                {lt.word}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Simple SVG pie chart for WordRx budget.
function PieChart({ slices, size }) {
  var r = (size || 140) / 2;
  var total = slices.reduce(function(s, sl) { return s + sl.value; }, 0);
  var paths = [];
  var angle = -Math.PI / 2;
  slices.forEach(function(sl, i) {
    var sweep = (sl.value / total) * 2 * Math.PI;
    var x1 = r + r * Math.cos(angle);
    var y1 = r + r * Math.sin(angle);
    angle += sweep;
    var x2 = r + r * Math.cos(angle);
    var y2 = r + r * Math.sin(angle);
    var large = sweep > Math.PI ? 1 : 0;
    paths.push({ d: 'M'+r+' '+r+' L'+x1+' '+y1+' A'+r+' '+r+' 0 '+large+' 1 '+x2+' '+y2+' Z', fill: sl.color, label: sl.label, value: sl.value, pct: Math.round(sl.value/total*100) });
  });
  return (
    <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
      <svg width={size || 140} height={size || 140} viewBox={'0 0 '+(size||140)+' '+(size||140)} style={{ flexShrink: 0 }}>
        {paths.map(function(p, i) { return <path key={i} d={p.d} fill={p.fill} stroke={window.CL.paper} strokeWidth="2" />; })}
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {paths.map(function(p, i) {
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 12, height: 12, borderRadius: 2, background: p.fill, flexShrink: 0 }} />
              <span style={{ fontFamily: window.CL.serif, fontSize: 14, color: window.CL.ink }}>{p.label}</span>
              <span className="cl-mono" style={{ color: window.CL.inkSoft, marginLeft: 'auto', paddingLeft: 16 }}>{p.pct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Programs() {
  var isMobile = useIsMobile();
  var pad = isMobile ? '0 20px' : '0 32px';
  var secPad = isMobile ? '64px 0' : '100px 0';

  var partners = [
    { name: 'Harvard University',       dept: 'Medical School affiliations' },
    { name: 'Cornell University',       dept: 'Human Development' },
    { name: 'Columbia University',      dept: 'Teachers College' },
    { name: 'Johns Hopkins University', dept: 'School of Education' },
    { name: 'University of Toronto',    dept: 'Learning and Neural Development Lab' },
  ];

  var wordrxPie = [
    { label: 'Pre-production & development', value: 25, color: '#C84B32' },
    { label: 'Production / filming',         value: 40, color: '#1B4066' },
    { label: 'Post-production & editing',    value: 20, color: '#0B1B26' },
    { label: 'Distribution & marketing',     value: 15, color: '#8B2FC9' },
  ];

  var featuredEps = [
    { no: '008', title: 'Sport as a Laboratory for Learning Confidence in Youth', guest: 'Dr. Jonathan Jenkins', tag: 'COACHING', yt: 'https://www.youtube.com/watch?v=dcOqvhIQw3M' },
    { no: '007', title: 'More Than a Diagnosis: The Brain-Body Connection in Mental Health', guest: 'Dr. Emily Smith', tag: 'CLINICAL', yt: 'https://www.youtube.com/watch?v=vfoXX4na5Ek' },
    { no: '005', title: 'Nutrition, Performance, and the Power of Clean Fuel', guest: 'Dr. Mary Balliett', tag: 'NUTRITION', yt: 'https://www.youtube.com/watch?v=2JsgKUFkpy0' },
  ];

  var countdownTopics = [
    'Confidence & Identity in Youth Sport',
    'The Science of Motivation',
    'Sleep, Learning & Adolescent Brain',
    'Nutrition and Cognitive Performance',
    'Stress, Resilience & Post-traumatic Growth',
    'Parent-Child Communication in High-Stakes Environments',
  ];

  var letterProgress = [
    { l: 'C', word: 'Child',       pct: 100 },
    { l: 'A', word: 'Adolescent',  pct: 100 },
    { l: 'P', word: 'Performance', pct: 75  },
    { l: 'S', word: 'Science',     pct: 80  },
    { l: 'u', word: '&',           pct: 90  },
    { l: 'L', word: 'Laboratory',  pct: 60  },
    { l: 'e', word: '',            pct: 45  },
  ];

  return (
    <React.Fragment>

      {/* Programs Hero */}
      <section style={{ padding: isMobile ? '64px 0' : '96px 0', borderBottom: `1.5px solid ${window.CL.ink}`, background: window.CL.paper }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 14, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>§ 04 — What We Build</div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft }}>05 programs · Compounding impact</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80, marginBottom: 64 }}>
            <h1 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 48 : 64, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
              One mission,<br /><em style={{ color: window.CL.signal }}>five doses.</em>
            </h1>
            <p style={{ fontFamily: window.CL.serif, fontSize: 18, lineHeight: 1.55, color: window.CL.ink, margin: 0, textWrap: 'pretty', alignSelf: 'flex-end' }}>
              CAPSuLe ships documentaries, courses, essays, and a podcast that compound into durable infrastructure for the people raising kids. Hover over each letter below to see what we stand for.
            </p>
          </div>

          {/* Interactive acronym */}
          <div style={{ marginBottom: 8 }}>
            <CAPSuLeAcronym />
          </div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 0, fontSize: 10 }}>Hover each letter · Child and Adolescent Performance Science Laboratory</div>
        </div>
      </section>

      {/* ── Prescribed Dose ────────────────────────────────── */}
      <section id="prescribed-dose" style={{ padding: secPad, background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-DOSE · Blog</div>
            <div style={{ display: 'inline-block', padding: '4px 10px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>WEEKLY</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80 }}>
            <div>
              <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.025em', color: window.CL.ink, marginBottom: 16 }}>Prescribed Dose</div>
              <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 18, color: window.CL.signal, margin: '0 0 20px', lineHeight: 1.4 }}>Research, written like advice from a friend.</p>
              <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>
                Short, structured pieces that translate one principle from the scientific literature into two or three things a parent, teacher, or coach can do today — with the science behind why it works. Each essay is around 600 words, rigorously sourced, and written to be shared.
              </p>
              <a href="https://www.thecapsl.org/blog"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 28, padding: '14px 22px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}
                onMouseEnter={function(e){ e.currentTarget.style.background = window.CL.signal; }}
                onMouseLeave={function(e){ e.currentTarget.style.background = window.CL.ink; }}
              >
                Read the blog →
              </a>
            </div>
            <div style={{ border: `1.5px solid ${window.CL.ink}`, padding: '28px 24px', background: window.CL.paper }}>
              <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 18 }}>ABOUT THIS PROGRAM</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { k: 'Format',       v: 'Written essay' },
                  { k: 'Cadence',      v: 'Weekly' },
                  { k: 'Audience',     v: 'Parents, educators, coaches, clinicians' },
                  { k: 'Platform',     v: 'thecapsl.org/blog + newsletter' },
                  { k: 'Length',       v: '~600 words per piece' },
                ].map(function(r) {
                  return (
                    <div key={r.k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, borderBottom: `1px solid ${window.CL.rule}`, paddingBottom: 10 }}>
                      <span className="cl-mono" style={{ color: window.CL.inkSoft }}>{r.k}</span>
                      <span style={{ fontFamily: window.CL.serif, fontSize: 15, color: window.CL.ink, textAlign: 'right' }}>{r.v}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MicroDose ──────────────────────────────────────── */}
      <section id="microdose" style={{ padding: secPad, background: window.CL.paper, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-MICRO · Course Series</div>
            <div style={{ display: 'inline-block', padding: '4px 10px', border: `1px solid ${window.CL.ink}`, color: window.CL.ink, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>LAUNCHING 2026</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80 }}>
            <div>
              <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.025em', color: window.CL.ink, marginBottom: 16 }}>MicroDose</div>
              <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 18, color: window.CL.signal, margin: '0 0 20px', lineHeight: 1.4 }}>Science-based courses for the people raising the next generation.</p>
              <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>
                A micro-course series designed for educators and parents. The 2026 installments are <strong>The Learning Environment</strong> — for educators — and <strong>The Home Environment</strong> — for parents. Distributed via Coursera, alongside a formal book and e-book release.
              </p>
            </div>

            {/* Placeholder card */}
            <div style={{ border: `1.5px dashed ${window.CL.ink}`, padding: '40px 28px', background: window.CL.paperWarm, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 16 }}>
              <div className="cl-mono" style={{ color: window.CL.signal }}>COURSE PREVIEW</div>
              <div style={{ fontFamily: window.CL.display, fontSize: 22, fontWeight: 500, color: window.CL.inkSoft, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                Full course details<br />coming soon
              </div>
              <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 15, color: window.CL.inkSoft, margin: 0 }}>
                We'll have curriculum previews, instructor bios, and enrollment info here before launch.
              </p>
              <div className="cl-mono" style={{ color: window.CL.inkSoft, marginTop: 8 }}>Distribution: Coursera · Book · E-book</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Countdown ──────────────────────────────────────── */}
      <section id="countdown" style={{ padding: secPad, background: window.CL.blueprint, color: window.CL.paper, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid rgba(245,239,226,.4)`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>§ — Countdown</div>
            <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)' }}>What's building</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 40 : 80, marginBottom: 64 }}>
            <div>
              <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, textWrap: 'balance' }}>
                Every letter,<br /><em style={{ color: window.CL.signal }}>in motion.</em>
              </h2>
              <p style={{ fontFamily: window.CL.serif, fontSize: 16, lineHeight: 1.6, color: 'rgba(245,239,226,.75)', marginTop: 20, textWrap: 'pretty' }}>
                Track the progress of each dimension of our mission. Hover the letters to see what they stand for.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {letterProgress.map(function(lt) {
                return (
                  <div key={lt.l} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div className="cl-tooltip-wrap" style={{ width: 28, flexShrink: 0, textAlign: 'center' }}>
                      <span style={{ fontFamily: window.CL.display, fontSize: 22, fontWeight: 500, color: window.CL.paper }}>{lt.l}</span>
                      {lt.word && <div className="cl-tooltip">{lt.word}</div>}
                    </div>
                    <div style={{ flex: 1, height: 8, background: 'rgba(245,239,226,.15)', borderRadius: 8, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: lt.pct+'%', background: window.CL.signal, borderRadius: 8 }} />
                    </div>
                    <span className="cl-mono" style={{ color: 'rgba(245,239,226,.5)', width: 36, textAlign: 'right', fontSize: 10 }}>{lt.pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Topics */}
          <div style={{ borderTop: `1px solid rgba(245,239,226,.2)`, paddingTop: 40, marginBottom: 48 }}>
            <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)', marginBottom: 24 }}>UPCOMING TOPICS</div>
            <div className="cl-grid-3" style={{ gap: isMobile ? 16 : 20 }}>
              {countdownTopics.map(function(t, i) {
                return (
                  <div key={i} style={{ border: `1px solid rgba(245,239,226,.2)`, padding: '18px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span className="cl-mono" style={{ color: window.CL.signal, flexShrink: 0 }}>{String(i+1).padStart(2,'0')}</span>
                    <span style={{ fontFamily: window.CL.serif, fontSize: 15, color: 'rgba(245,239,226,.85)', lineHeight: 1.4 }}>{t}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Partner logos */}
          <div style={{ borderTop: `1px solid rgba(245,239,226,.2)`, paddingTop: 40, marginBottom: 48 }}>
            <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)', marginBottom: 24 }}>PARTNER INSTITUTIONS</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              {partners.map(function(p) {
                return (
                  <div key={p.name} style={{ border: `1px solid rgba(245,239,226,.25)`, padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ fontFamily: window.CL.display, fontSize: 16, fontWeight: 500, color: window.CL.paper }}>{p.name}</span>
                    <span style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 12, color: 'rgba(245,239,226,.5)' }}>{p.dept}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Donate CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <p style={{ fontFamily: window.CL.serif, fontSize: 16, color: 'rgba(245,239,226,.75)', margin: 0, flex: 1, textWrap: 'pretty' }}>
              Every program runs on donor support. Help us build the bridge.
            </p>
            <a href="Donate.html"
              style={{ flexShrink: 0, padding: '14px 28px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase' }}>
              Donate →
            </a>
          </div>
        </div>
      </section>

      {/* ── Effective Dose ─────────────────────────────────── */}
      <section id="effective-dose" style={{ padding: secPad, background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-EFFECT · Podcast</div>
            <div style={{ display: 'inline-block', padding: '4px 10px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>ACTIVE</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80, marginBottom: 56 }}>
            <div>
              <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.025em', color: window.CL.ink, marginBottom: 16 }}>Effective Dose</div>
              <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 18, color: window.CL.signal, margin: '0 0 20px', lineHeight: 1.4 }}>Conversations with the people doing the science.</p>
              <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>
                Long-form interviews with researchers, clinicians, and practitioners. The archive that anchors everything we make. Eight episodes available on Spotify, Apple Podcasts, and YouTube.
              </p>
            </div>

            {/* Coming soon: in-person dinner */}
            <div style={{ border: `1.5px solid ${window.CL.ink}`, padding: '28px 24px', background: window.CL.paper }}>
              <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 16 }}>WHAT'S NEXT</div>
              <div style={{ fontFamily: window.CL.display, fontSize: 26, fontWeight: 500, letterSpacing: '-0.015em', color: window.CL.ink, marginBottom: 12 }}>The Effective Dose Dinner</div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.6, color: window.CL.inkSoft, margin: '0 0 16px', textWrap: 'pretty' }}>
                An intimate in-person dinner bringing together researchers, clinicians, and community builders for an evening of candid conversation. Seats are limited. Stay tuned for dates and locations.
              </p>
              <div style={{ display: 'inline-block', padding: '4px 10px', border: `1px solid ${window.CL.ink}`, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em', color: window.CL.ink }}>COMING SOON</div>
            </div>
          </div>

          {/* Featured episodes */}
          <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 20 }}>FEATURED EPISODES</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1.5px solid ${window.CL.ink}` }}>
            {featuredEps.map(function(ep) {
              return (
                <div key={ep.no} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '80px 1fr auto', gap: isMobile ? 8 : 24, alignItems: 'center', padding: '20px 0', borderBottom: `1px solid ${window.CL.rule}` }}>
                  <div className="cl-mono" style={{ color: window.CL.signal }}>No. {ep.no}</div>
                  <div>
                    <div style={{ fontFamily: window.CL.serif, fontSize: 17, fontWeight: 600, color: window.CL.ink, marginBottom: 4, lineHeight: 1.3 }}>{ep.title}</div>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 14, color: window.CL.inkSoft }}>{ep.guest}</span>
                      <span style={{ display: 'inline-block', padding: '2px 6px', border: `1px solid ${window.CL.rule}`, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em', color: window.CL.inkSoft }}>{ep.tag}</span>
                    </div>
                  </div>
                  <a href={ep.yt} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0, marginTop: isMobile ? 8 : 0 }}
                    onMouseEnter={function(e){ e.currentTarget.style.background = window.CL.signal; }}
                    onMouseLeave={function(e){ e.currentTarget.style.background = window.CL.ink; }}
                  >
                    Watch →
                  </a>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="https://www.youtube.com/@Effective-Dose" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', border: `1.5px solid ${window.CL.ink}`, background: 'transparent', color: window.CL.ink, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}>
              YouTube →
            </a>
            <a href="https://open.spotify.com/show/6sfUU9Upubmm1TCRt6O2d0" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', border: `1.5px solid ${window.CL.ink}`, background: 'transparent', color: window.CL.ink, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}>
              Spotify →
            </a>
          </div>
        </div>
      </section>

      {/* ── WordRx ─────────────────────────────────────────── */}
      <section id="wordrx" style={{ padding: secPad, background: window.CL.ink, color: window.CL.paper, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid rgba(245,239,226,.3)`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-WORDRX · Documentary Film</div>
            <div style={{ display: 'inline-block', padding: '4px 10px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>IN PRODUCTION</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80, marginBottom: 56 }}>
            <div>
              <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 64, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', marginBottom: 16 }}>WordRx</div>
              <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 18, color: window.CL.signal, margin: '0 0 20px', lineHeight: 1.4 }}>The hidden prescription behind healing.</p>
              <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: 'rgba(245,239,226,.8)', margin: 0, textWrap: 'pretty' }}>
                Our flagship feature documentary following four "word pharmacists" — a teacher, a parent, a clinician, a coach — making the case that language itself is a therapeutic tool. Filming December 2026 in Belleair, FL, with distribution via Amazon Prime Video.
              </p>
              <a href="Donate.html"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 28, padding: '14px 22px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}>
                Fund WordRx →
              </a>
            </div>

            {/* Funding thermometer */}
            <div>
              <Thermometer label="WORDRX PRODUCTION FUND" raised="$xx,xxx" goal="$20,000" pct={0} note="FILMING DEC 2026 · BELLEAIR, FL" />
            </div>
          </div>

          {/* Poster / elevator pitch placeholder + pie chart */}
          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80, borderTop: `1px solid rgba(245,239,226,.2)`, paddingTop: 48 }}>
            {/* Poster placeholder */}
            <div>
              <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)', marginBottom: 16 }}>FILM POSTER & ELEVATOR PITCH</div>
              <div style={{ border: `1.5px dashed rgba(245,239,226,.3)`, padding: '48px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, textAlign: 'center', minHeight: 240, background: 'rgba(245,239,226,.04)' }}>
                <div className="cl-mono" style={{ color: 'rgba(245,239,226,.4)' }}>POSTER</div>
                <div style={{ fontFamily: window.CL.display, fontStyle: 'italic', fontSize: 20, color: 'rgba(245,239,226,.4)' }}>Coming soon</div>
                <p style={{ fontFamily: window.CL.serif, fontSize: 14, color: 'rgba(245,239,226,.4)', margin: 0, maxWidth: 280 }}>
                  "A film about the words that heal — and the people who prescribe them."
                </p>
              </div>
            </div>

            {/* Pie chart */}
            <div>
              <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)', marginBottom: 20 }}>PRODUCTION BUDGET ALLOCATION</div>
              <div style={{ background: 'rgba(245,239,226,.06)', border: `1px solid rgba(245,239,226,.15)`, padding: '28px 24px' }}>
                <PieChart slices={wordrxPie} size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  );
}

window.Programs       = Programs;
window.CAPSuLeAcronym = CAPSuLeAcronym;
