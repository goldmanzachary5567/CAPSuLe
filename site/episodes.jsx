// Episodes — § 07 Episode archive with real YouTube links.

const EP_YT = {
  '001': 'https://www.youtube.com/watch?v=4rEC33XY6Jg',
  '002': 'https://www.youtube.com/watch?v=kvaKftvPjBw',
  '003': 'https://www.youtube.com/watch?v=dg4BcDrOFQQ',
  '004': 'https://www.youtube.com/watch?v=ofJQXvdeBN4',
  '005': 'https://www.youtube.com/watch?v=2JsgKUFkpy0',
  '006': 'https://www.youtube.com/watch?v=nT2Ihtlqop0',
  '007': 'https://www.youtube.com/watch?v=vfoXX4na5Ek',
  '008': 'https://www.youtube.com/watch?v=dcOqvhIQw3M',
};

function Episodes({ preview = false }) {
  const featured = {
    no: '008',
    title: 'Sport as a Laboratory for Learning Confidence in Youth',
    guest: 'Dr. Jonathan Jenkins',
    role:  'Clinical Psychologist · New England Patriots, Red Sox, Harvard Med',
    duration: '27:37',
    date:  'Apr · 2026',
    blurb: 'Dr. Jonathan Jenkins breaks down how youth sport shapes confidence, resilience, and identity, and why developing the mind is inseparable from long-term performance and well-being.',
    tag:   'COACHING',
  };

  const episodes = [
    { no: '007', title: 'More Than a Diagnosis: The Brain-Body Connection in Mental Health',          guest: 'Dr. Emily Smith',       duration: '26:17', date: 'Mar · 2026', tag: 'CLINICAL'     },
    { no: '006', title: 'Developmental Reversals and the Surprising Strengths of Childhood',          guest: 'Bailey Agard',          duration: '25:55', date: 'Feb · 2026', tag: 'COGNITION'    },
    { no: '005', title: 'Nutrition, Performance, and the Power of Clean Fuel',                        guest: 'Dr. Mary Balliett',     duration: '26:44', date: 'Jan · 2026', tag: 'NUTRITION'    },
    { no: '004', title: 'Motivation, Mindset, and Mental Health in Elite Sport',                      guest: 'Claudia Zeppetelli',    duration: '23:44', date: 'Dec · 2025', tag: 'PERFORMANCE'  },
    { no: '003', title: 'Supporting Youth Through Life Transitions',                                  guest: 'Anna Brandt',           duration: '32:57', date: 'Nov · 2025', tag: 'EDUCATION'    },
    { no: '002', title: 'From Strivers to Thrivers: Redesigning Childhood for REAL Growth',           guest: 'Dr. Michele Borba',     duration: '31:58', date: 'Oct · 2025', tag: 'PARENTING'    },
    { no: '001', title: 'How Parents and Educators Can Lead Socio-Emotional Skill Development',       guest: 'Dr. Christy Wise',      duration: '26:59', date: 'Sep · 2025', tag: 'EDUCATION'    },
  ];

  const list = preview ? episodes.slice(0, 3) : episodes;

  return (
    <section id="episodes" style={{ padding: '96px 0', background: window.CL.paperWarm, borderTop: `1.5px solid ${window.CL.ink}`, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 40 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 07 — Episode Archive</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>08 entries · Updated regularly</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, alignItems: 'flex-end', marginBottom: 36 }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: 64, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink }}>
            Explore<br /><em style={{ color: window.CL.signal }}>our CAPSuLe.</em>
          </h2>
          <div style={{ textAlign: 'right' }}>
            {preview
              ? <a href="Episodes.html" className="cl-link cl-mono" style={{ color: window.CL.ink }}>VIEW FULL ARCHIVE →</a>
              : <a href="https://open.spotify.com/show/6sfUU9Upubmm1TCRt6O2d0" target="_blank" rel="noopener noreferrer" className="cl-link cl-mono" style={{ color: window.CL.ink }}>LISTEN ON SPOTIFY →</a>
            }
          </div>
        </div>

        {/* Featured episode card */}
        {!preview && (
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0, border: `1.5px solid ${window.CL.ink}`, marginBottom: 56, background: window.CL.paper }}>
            <div style={{ position: 'relative', aspectRatio: '16/10', background: `linear-gradient(135deg, ${window.CL.blueprint} 0%, #2A4F73 60%, ${window.CL.signal} 140%)`, borderRight: `1.5px solid ${window.CL.ink}`, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
              <div style={{ position: 'absolute', left: 28, top: 24, color: window.CL.cream }}>
                <div className="cl-mono" style={{ color: 'rgba(245,239,226,.7)', marginBottom: 6 }}>FEATURED · NO. {featured.no}</div>
                <div style={{ fontFamily: window.CL.display, fontStyle: 'italic', fontSize: 22, fontWeight: 400 }}>Now playing</div>
              </div>
              <div style={{ position: 'absolute', left: 28, bottom: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
                <a href={EP_YT['008']} target="_blank" rel="noopener noreferrer"
                  style={{ width: 64, height: 64, borderRadius: 64, background: window.CL.signal, color: window.CL.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,.3)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l14 8-14 8V4z" /></svg>
                </a>
                <div style={{ color: window.CL.cream, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.18em' }}>{featured.duration}</div>
              </div>
            </div>
            <div style={{ padding: '36px 36px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="cl-mono" style={{ color: window.CL.signal }}>NO. {featured.no} · {featured.tag}</div>
                <div className="cl-mono" style={{ color: window.CL.inkSoft }}>{featured.date}</div>
              </div>
              <h3 style={{ fontFamily: window.CL.display, fontSize: 36, fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>{featured.title}</h3>
              <div>
                <div style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 18, color: window.CL.ink }}>{featured.guest}</div>
                <div style={{ fontFamily: window.CL.mono, fontSize: 11, color: window.CL.inkSoft, marginTop: 4, letterSpacing: '.05em' }}>{featured.role}</div>
              </div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 16, lineHeight: 1.55, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>{featured.blurb}</p>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 12 }}>
                <a href={EP_YT['008']} target="_blank" rel="noopener noreferrer"
                  style={{ padding: '12px 18px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}>
                  Watch episode
                </a>
                <a href="https://open.spotify.com/show/6sfUU9Upubmm1TCRt6O2d0" target="_blank" rel="noopener noreferrer" className="cl-link cl-mono" style={{ alignSelf: 'center', color: window.CL.ink }}>
                  LISTEN ON SPOTIFY →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Archive index */}
        <div style={{ borderTop: `1.5px solid ${window.CL.ink}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 220px 120px 100px 24px', gap: 16, padding: '14px 0', borderBottom: `1px solid ${window.CL.ink}`, fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.inkSoft }}>
            <div>No.</div><div>Title</div><div>Guest</div><div>Subject</div><div style={{ textAlign: 'right' }}>Length</div><div />
          </div>
          {list.map((ep) => (
            <a key={ep.no} href={EP_YT[ep.no] || '#'} target="_blank" rel="noopener noreferrer"
              style={{ display: 'grid', gridTemplateColumns: '80px 1fr 220px 120px 100px 24px', gap: 16, padding: '22px 0', borderBottom: `1px solid ${window.CL.rule}`, alignItems: 'center', color: window.CL.ink, transition: 'background .15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(11,27,38,.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div className="cl-mono" style={{ color: window.CL.signal }}>NO. {ep.no}</div>
              <div style={{ fontFamily: window.CL.display, fontSize: 22, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.015em' }}>{ep.title}</div>
              <div style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 15, color: window.CL.inkSoft }}>{ep.guest}</div>
              <div className="cl-mono" style={{ color: window.CL.inkSoft, fontSize: 10 }}>{ep.tag}</div>
              <div className="cl-mono" style={{ color: window.CL.inkSoft, textAlign: 'right' }}>{ep.duration}</div>
              <div className="cl-mono" style={{ color: window.CL.inkSoft, textAlign: 'right' }}>→</div>
            </a>
          ))}
        </div>

        {preview && (
          <div style={{ marginTop: 32, textAlign: 'right' }}>
            <a href="Episodes.html" className="cl-link cl-mono" style={{ color: window.CL.ink }}>VIEW ALL EPISODES →</a>
          </div>
        )}
      </div>
    </section>
  );
}

window.Episodes = Episodes;
