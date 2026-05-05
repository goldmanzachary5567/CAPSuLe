// Blog — § 08 Latest Writing

function Blog({ preview = false }) {
  const posts = [
    {
      no: '014', cat: 'Essay',      date: 'Apr 22, 2026',
      title: 'What resilience actually means in a 12-year-old\'s brain.',
      author: 'Anna Brandt', minutes: '6 min read',
      href: 'https://www.thecapsl.org/blog',
    },
    {
      no: '013', cat: 'Field Note', date: 'Apr 14, 2026',
      title: 'Five questions every coach should ask before the first practice.',
      author: 'Dr. Jonathan Jenkins', minutes: '4 min read',
      href: 'https://www.thecapsl.org/blog',
    },
    {
      no: '012', cat: 'Interview',  date: 'Apr 03, 2026',
      title: 'Why magnesium matters as much as protein for growing athletes.',
      author: 'Dr. Mary Balliett', minutes: '8 min read',
      href: 'https://www.thecapsl.org/blog',
    },
  ];

  return (
    <section id="blog" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 40 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 08 — Latest Writing</div>
          <a href="https://www.thecapsl.org/blog" target="_blank" rel="noopener noreferrer" className="cl-link cl-mono" style={{ color: window.CL.ink }}>
            READ THE BLOG →
          </a>
        </div>

        <h2 style={{ fontFamily: window.CL.display, fontSize: 64, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: '0 0 56px', color: window.CL.ink, maxWidth: 900, textWrap: 'balance' }}>
          Notes from the <em style={{ color: window.CL.signal }}>laboratory</em> of growing up.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1.5px solid ${window.CL.ink}` }}>
          {posts.map((p, i) => (
            <a key={p.no} href={p.href} target="_blank" rel="noopener noreferrer"
              style={{ padding: '32px 28px 28px', borderRight: i < 2 ? `1px solid ${window.CL.rule}` : 'none', borderBottom: `1.5px solid ${window.CL.ink}`, display: 'flex', flexDirection: 'column', gap: 18, minHeight: 360, color: window.CL.ink, transition: 'background .15s', background: 'transparent' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(11,27,38,.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="cl-mono" style={{ color: window.CL.signal }}>NO. {p.no} · {p.cat}</span>
                <span className="cl-mono" style={{ color: window.CL.inkSoft }}>{p.date}</span>
              </div>

              <div style={{
                height: 120, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: i === 0 ? window.CL.paperWarm : i === 1 ? window.CL.blueprint : window.CL.signal,
                border: `1px solid ${window.CL.ink}`, overflow: 'hidden',
              }}>
                <div style={{ fontFamily: window.CL.display, fontSize: 96, fontWeight: 500, fontStyle: 'italic', color: i === 0 ? window.CL.signal : window.CL.cream, opacity: 0.85, lineHeight: 1, letterSpacing: '-0.04em' }}>
                  {p.no}
                </div>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: i === 0 ? `linear-gradient(${window.CL.rule} 1px, transparent 1px), linear-gradient(90deg, ${window.CL.rule} 1px, transparent 1px)` : 'radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)', backgroundSize: i === 0 ? '16px 16px' : '8px 8px', pointerEvents: 'none' }} />
              </div>

              <h3 style={{ fontFamily: window.CL.display, fontSize: 24, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.015em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
                {p.title}
              </h3>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 14, color: window.CL.inkSoft }}>{p.author}</span>
                <span className="cl-mono" style={{ color: window.CL.inkSoft }}>{p.minutes}</span>
              </div>
            </a>
          ))}
        </div>

        {preview && (
          <div style={{ marginTop: 32, textAlign: 'right' }}>
            <a href="https://www.thecapsl.org/blog" target="_blank" rel="noopener noreferrer" className="cl-link cl-mono" style={{ color: window.CL.ink }}>SEE ALL POSTS →</a>
          </div>
        )}
      </div>
    </section>
  );
}

window.Blog = Blog;
