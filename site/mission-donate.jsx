// Mission — § 03 About
// DonateCTA — § 09 Support the Lab  (updated tiers + WordRx thermometer)

function Mission({ preview = false }) {
  return (
    <section id="about" style={{ padding: '120px 0', borderBottom: `1px solid ${window.CL.rule}`, position: 'relative' }} className="cl-page-grid">
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 56 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 03 — About</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>501(c)(3) Nonprofit · Est. 2024</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-start' }}>
          <div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 14 }}>OUR MISSION</div>
            <p style={{ fontFamily: window.CL.display, fontSize: 36, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: window.CL.ink, margin: 0, textWrap: 'pretty' }}>
              To equip those who shape adolescent development with <em style={{ color: window.CL.signal }}>actionable insights</em> grounded in science.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <p style={{ fontFamily: window.CL.serif, fontSize: 19, lineHeight: 1.6, color: window.CL.ink, margin: 0, textWrap: 'pretty' }}>
              We bring together researchers, clinicians, and community leaders to bridge disciplines and translate developmental research into meaningful practice. Together, we form a working alliance committed to advancing child and adolescent well-being through research, education, and public engagement.
            </p>

            {!preview && (
              <p style={{ fontFamily: window.CL.serif, fontSize: 19, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>
                Our work spans documentary film, podcast, micro-courses, and a weekly research blog. Every format serves one goal: get the science to the people who can use it.
              </p>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginTop: 24, borderTop: `1.5px solid ${window.CL.ink}`, borderBottom: `1.5px solid ${window.CL.ink}` }}>
              {[
                { n: '14', l: 'Episodes published' },
                { n: '05', l: 'Partner institutions' },
                { n: '∞',  l: 'Rooms reached'       },
              ].map((s, i) => (
                <div key={i} style={{ padding: '24px 20px', borderRight: i < 2 ? `1px solid ${window.CL.rule}` : 'none' }}>
                  <div style={{ fontFamily: window.CL.display, fontSize: 56, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.03em', color: window.CL.ink }}>{s.n}</div>
                  <div className="cl-mono" style={{ color: window.CL.inkSoft, marginTop: 8 }}>{s.l}</div>
                </div>
              ))}
            </div>

            {preview && (
              <a href="About.html" className="cl-link cl-mono" style={{ color: window.CL.ink, alignSelf: 'flex-start' }}>LEARN MORE ABOUT US →</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Specimen-tube thermometer showing fundraising progress for a single project.
function Thermometer({ label, raised = '$xx,xxx', goal = '$20,000', pct = 0, note = '' }) {
  return (
    <div style={{ border: `1px solid rgba(245,239,226,.3)`, padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span className="cl-mono" style={{ color: window.CL.signal }}>{label}</span>
        {note && <span className="cl-mono" style={{ color: 'rgba(245,239,226,.45)' }}>{note}</span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span style={{ fontFamily: window.CL.display, fontSize: 40, fontWeight: 500, letterSpacing: '-0.025em', color: window.CL.paper }}>{raised}</span>
        <span style={{ fontFamily: window.CL.mono, fontSize: 11, color: 'rgba(245,239,226,.5)' }}>RAISED OF {goal} GOAL</span>
      </div>
      {/* Specimen tube track */}
      <div style={{ position: 'relative', height: 12, background: 'rgba(245,239,226,.12)', border: `1px solid rgba(245,239,226,.2)`, borderRadius: 12, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, height: '100%',
          width: `${Math.min(100, Math.max(2, pct))}%`,
          background: window.CL.signal,
          borderRadius: 12,
          transition: 'width .6s ease',
        }} />
        {/* Tick marks */}
        {[25, 50, 75].map(t => (
          <div key={t} style={{ position: 'absolute', left: `${t}%`, top: 0, width: 1, height: '100%', background: 'rgba(245,239,226,.2)' }} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {['0%','25%','50%','75%','100%'].map(t => (
          <span key={t} className="cl-mono" style={{ color: 'rgba(245,239,226,.35)', fontSize: 9 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function DonateCTA() {
  const tiers = [
    { amt: '$250',    label: 'Sponsor a single Prescribed Dose article' },
    { amt: '$500',    label: 'Fund one Effective Dose podcast episode' },
    { amt: '$1,000',  label: 'Present a community public lecture' },
  ];

  return (
    <section id="donate" style={{ padding: '120px 0', background: window.CL.ink, color: window.CL.paper, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -120, top: 80, opacity: .12 }}>
        <div style={{ width: 600, height: 220, borderRadius: 220, background: window.CL.signal, transform: 'rotate(-22deg)' }} />
      </div>

      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.paper}`, paddingBottom: 16, marginBottom: 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 09 — Support the Lab</div>
          <div className="cl-mono" style={{ color: 'rgba(245,239,226,.6)' }}>100% tax-deductible</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'flex-end' }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.03em', margin: 0, textWrap: 'balance' }}>
            Help us put research<br />
            in the <em style={{ color: window.CL.signal }}>right hands.</em>
          </h2>
          <p style={{ fontFamily: window.CL.serif, fontSize: 18, lineHeight: 1.55, color: 'rgba(245,239,226,.8)', margin: 0, textWrap: 'pretty' }}>
            Every episode, essay, and course we publish is donor-funded. We do not sell ads or put research behind a paywall. We translate the science and deliver it to the people raising the next generation.
          </p>
        </div>

        {/* Tiers */}
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr) auto', gap: 0, border: `1.5px solid ${window.CL.paper}` }}>
          {tiers.map((t, i) => (
            <button key={t.amt}
              style={{ background: 'transparent', color: window.CL.paper, padding: '32px 24px', borderRight: i < 2 ? `1px solid rgba(245,239,226,.25)` : 'none', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', cursor: 'pointer', textAlign: 'left', transition: 'background .15s', fontFamily: window.CL.sans }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,239,226,.06)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ fontFamily: window.CL.display, fontSize: 48, fontWeight: 500, letterSpacing: '-0.025em', color: window.CL.paper }}>{t.amt}</div>
              <div style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 15, color: 'rgba(245,239,226,.75)', lineHeight: 1.4 }}>{t.label}</div>
            </button>
          ))}
          <a href="Donate.html" style={{ background: window.CL.signal, color: window.CL.paper, padding: '0 40px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', minWidth: 220 }}>
            Donate <span>→</span>
          </a>
        </div>

        {/* WordRx thermometer */}
        <div style={{ marginTop: 40 }}>
          <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)', marginBottom: 16 }}>ACTIVE PRODUCTION FUND</div>
          <Thermometer
            label="WORDRX — DOCUMENTARY FILM"
            raised="$xx,xxx"
            goal="$20,000"
            pct={0}
            note="FILMING DEC 2026 · BELLEAIR, FL"
          />
        </div>

        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)' }}>
            Recurring giving · Employer match · Memorial gifts
          </div>
          <a href="Donate.html" style={{ fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: window.CL.signal, borderBottom: `1px solid ${window.CL.signal}`, paddingBottom: 4 }}>
            See all sponsorship tiers →
          </a>
        </div>
      </div>
    </section>
  );
}

window.Mission    = Mission;
window.DonateCTA  = DonateCTA;
window.Thermometer = Thermometer;
