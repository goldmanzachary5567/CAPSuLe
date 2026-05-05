// WordRx — § 05 Flagship documentary spotlight with production thermometer.

function WordRx() {
  return (
    <section id="wordrx" style={{ padding: '120px 0', background: window.CL.ink, color: window.CL.paper, position: 'relative', overflow: 'hidden', borderTop: `1.5px solid rgba(245,239,226,.15)` }}>
      {/* Decorative capsule shape */}
      <div style={{ position: 'absolute', left: -80, bottom: -40, opacity: .08 }}>
        <div style={{ width: 480, height: 180, borderRadius: 180, background: window.CL.signal, transform: 'rotate(15deg)' }} />
      </div>
      <div style={{ position: 'absolute', right: -60, top: 60, opacity: .06 }}>
        <div style={{ width: 340, height: 130, borderRadius: 130, border: `2px solid ${window.CL.paper}`, transform: 'rotate(-10deg)' }} />
      </div>

      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid rgba(245,239,226,.2)`, paddingBottom: 16, marginBottom: 56 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 05 — WordRx</div>
          <div className="cl-mono" style={{ color: 'rgba(245,239,226,.45)' }}>PRX-WORDRX · Documentary Film · In Production</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'flex-start' }}>
          {/* Left: film details */}
          <div>
            <div className="cl-mono" style={{ color: 'rgba(245,239,226,.4)', marginBottom: 14 }}>FLAGSHIP PRODUCTION</div>
            <h2 style={{
              fontFamily: window.CL.display,
              fontSize: 'clamp(56px, 7vw, 104px)',
              fontWeight: 500, lineHeight: 0.9, letterSpacing: '-0.04em',
              margin: '0 0 32px', textWrap: 'balance',
            }}>
              Word<em style={{ color: window.CL.signal }}>Rx</em>
            </h2>
            <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, color: 'rgba(245,239,226,.75)', margin: '0 0 28px', textWrap: 'pretty' }}>
              The hidden prescription behind healing.
            </p>
            <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.65, color: 'rgba(245,239,226,.65)', margin: 0, textWrap: 'pretty' }}>
              Our flagship feature documentary follows four "word pharmacists" — a teacher, a parent, a clinician, and a coach — to make the case that language itself is a therapeutic tool. Filming takes place in December 2026 in Belleair, Florida, with distribution via Amazon Prime Video.
            </p>

            <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1px solid rgba(245,239,226,.15)`, borderBottom: `1px solid rgba(245,239,226,.15)` }}>
              {[
                { k: 'Format',      v: 'Feature Documentary' },
                { k: 'Filming',     v: 'Dec 2026 · Belleair, FL' },
                { k: 'Distribution',v: 'Amazon Prime Video' },
              ].map((r, i) => (
                <div key={r.k} style={{ padding: '20px 16px', borderRight: i < 2 ? `1px solid rgba(245,239,226,.1)` : 'none' }}>
                  <div className="cl-mono" style={{ color: 'rgba(245,239,226,.4)', marginBottom: 6 }}>{r.k}</div>
                  <div style={{ fontFamily: window.CL.serif, fontSize: 14, color: window.CL.paper, lineHeight: 1.35 }}>{r.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: production fund thermometer */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div className="cl-mono" style={{ color: 'rgba(245,239,226,.45)', marginBottom: 20 }}>PRODUCTION FUND</div>

            <div style={{ border: `1.5px solid rgba(245,239,226,.2)`, padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Amount raised */}
              <div>
                <div style={{ fontFamily: window.CL.display, fontSize: 72, fontWeight: 500, lineHeight: 0.9, letterSpacing: '-0.04em', color: window.CL.paper }}>$xx,xxx</div>
                <div className="cl-mono" style={{ color: 'rgba(245,239,226,.45)', marginTop: 10 }}>RAISED OF $20,000 GOAL</div>
              </div>

              {/* Tube thermometer */}
              <div>
                {/* Scale labels */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  {['$0','$5k','$10k','$15k','$20k'].map(l => (
                    <span key={l} className="cl-mono" style={{ color: 'rgba(245,239,226,.3)', fontSize: 9 }}>{l}</span>
                  ))}
                </div>
                {/* Track */}
                <div style={{ position: 'relative', height: 16, background: 'rgba(245,239,226,.08)', border: `1px solid rgba(245,239,226,.18)`, borderRadius: 16, overflow: 'hidden' }}>
                  {/* Fill — set to 0% until real data is wired */}
                  <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '2%', background: window.CL.signal, borderRadius: 16 }} />
                  {/* Tick marks at 25%, 50%, 75% */}
                  {[25, 50, 75].map(t => (
                    <div key={t} style={{ position: 'absolute', left: `${t}%`, top: 0, width: 1, height: '100%', background: 'rgba(245,239,226,.15)' }} />
                  ))}
                </div>
                {/* Bulb label */}
                <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 10, background: window.CL.signal }} />
                  <span className="cl-mono" style={{ color: 'rgba(245,239,226,.45)' }}>$xx,xxx RAISED · UPDATED REGULARLY</span>
                </div>
              </div>

              {/* What funds do */}
              <div style={{ borderTop: `1px solid rgba(245,239,226,.12)`, paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  '$1,000 · Covers one full day of principal photography',
                  '$2,500 · Funds post-production editing for one sequence',
                  '$5,000 · Sponsors the Belleair filming location',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ width: 4, height: 4, borderRadius: 4, background: window.CL.signal, marginTop: 7, flexShrink: 0 }} />
                    <span style={{ fontFamily: window.CL.serif, fontSize: 14, color: 'rgba(245,239,226,.6)', lineHeight: 1.45 }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="Donate.html" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, padding: '16px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', marginTop: 4 }}>
                Support WordRx →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.WordRx = WordRx;
