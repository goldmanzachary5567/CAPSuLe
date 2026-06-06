// Mission — § 03 Our Mission
// DonateCTA — § 09 Support the Lab  (appears at bottom of every page)

const PARTNER_INSTITUTIONS = [
  'Harvard University',
  'Cornell University',
  'Columbia University',
  'Johns Hopkins University',
  'University of Toronto',
];

function InstitutionCarousel() {
  // Duplicate for seamless loop
  const items = [...PARTNER_INSTITUTIONS, ...PARTNER_INSTITUTIONS,
                 ...PARTNER_INSTITUTIONS, ...PARTNER_INSTITUTIONS];
  return (
    <div style={{ borderTop: `1.5px solid ${window.CL.ink}`, borderBottom: `1.5px solid ${window.CL.ink}`, padding: '20px 0', overflow: 'hidden' }}>
      <div className="cl-marquee-track" style={{ gap: 0 }}>
        {items.map((p, i) => (
          <span key={i} style={{ fontFamily: window.CL.display, fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em', color: window.CL.ink, whiteSpace: 'nowrap', paddingRight: 16 }}>
            {p}
            <span style={{ color: window.CL.signal, margin: '0 24px' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Mission({ preview = false }) {
  const isMobile = window.useBreakpoint(768);

  return (
    <section id="about" style={{ padding: isMobile ? '72px 0' : '120px 0', borderBottom: `1px solid ${window.CL.rule}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 36 : 56 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 03 — Our Mission</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>501(c)(3) · Est. 2024</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? 36 : 80, alignItems: 'flex-start' }}>
          <div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 14 }}>OUR MISSION</div>
            <p style={{ fontFamily: window.CL.display, fontSize: isMobile ? 26 : 36, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: window.CL.ink, margin: 0 }}>
              To equip those who shape adolescent development with <em style={{ color: window.CL.signal }}>actionable insights</em> grounded in science.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 17 : 19, lineHeight: 1.6, color: window.CL.ink, margin: 0 }}>
              We bring together researchers, clinicians, and community leaders to bridge disciplines and translate developmental research into meaningful practice. Together, we form a working alliance committed to advancing child and adolescent well-being through research, education, and public engagement.
            </p>

            {!preview && (
              <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 16 : 19, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0 }}>
                Our work spans documentary film, podcast, micro-courses, and a weekly research blog. Every format serves one goal: get the science to the people who can use it.
              </p>
            )}

            {/* Partner institution carousel */}
            <div>
              <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 12 }}>PARTNER INSTITUTIONS</div>
              <InstitutionCarousel />
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

// Specimen-tube thermometer showing fundraising progress.
function Thermometer({ label, raised = '$xx,xxx', goal = '$20,000', pct = 0, note = '' }) {
  return (
    <div style={{ border: `1px solid rgba(245,239,226,.3)`, padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span className="cl-mono" style={{ color: window.CL.signal }}>{label}</span>
        {note && <span className="cl-mono" style={{ color: 'rgba(245,239,226,.45)' }}>{note}</span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: window.CL.display, fontSize: 40, fontWeight: 500, letterSpacing: '-0.025em', color: window.CL.paper }}>{raised}</span>
        <span style={{ fontFamily: window.CL.mono, fontSize: 11, color: 'rgba(245,239,226,.5)' }}>RAISED OF {goal} GOAL</span>
      </div>
      <div style={{ position: 'relative', height: 12, background: 'rgba(245,239,226,.12)', border: `1px solid rgba(245,239,226,.2)`, borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${Math.min(100, Math.max(2, pct))}%`, background: window.CL.signal, borderRadius: 12, transition: 'width .6s ease' }} />
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
  const isMobile = window.useBreakpoint(768);
  const tiers = [
    { amt: '$250',   label: 'Sponsor a single Prescribed Dose article' },
    { amt: '$500',   label: 'Fund one Effective Dose podcast episode' },
    { amt: '$1,000', label: 'Present a community public lecture' },
  ];

  return (
    <section id="donate" style={{ padding: isMobile ? '72px 0' : '120px 0', background: window.CL.ink, color: window.CL.paper, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -120, top: 80, opacity: .12 }}>
        <div style={{ width: 600, height: 220, borderRadius: 220, background: window.CL.signal, transform: 'rotate(-22deg)' }} />
      </div>

      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.paper}`, paddingBottom: 16, marginBottom: 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 09 — Support the Lab</div>
          <div className="cl-mono" style={{ color: 'rgba(245,239,226,.6)' }}>100% tax-deductible</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: isMobile ? 28 : 64, alignItems: 'flex-end' }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: 'clamp(40px, 6vw, 88px)', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.03em', margin: 0 }}>
            Help us put research<br />
            in the <em style={{ color: window.CL.signal }}>right hands.</em>
          </h2>
          <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 16 : 18, lineHeight: 1.55, color: 'rgba(245,239,226,.8)', margin: 0 }}>
            Every episode, essay, and course we publish is donor-funded. We do not sell ads or put research behind a paywall. We translate the science and deliver it to the people raising the next generation.
          </p>
        </div>

        {/* Tiers */}
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr) auto', gap: 0, border: `1.5px solid ${window.CL.paper}` }}>
          {tiers.map((t, i) => (
            <button key={t.amt}
              style={{ background: 'transparent', color: window.CL.paper, padding: '28px 20px', borderRight: (!isMobile && i < 2) ? `1px solid rgba(245,239,226,.25)` : 'none', borderBottom: (isMobile && i < 2) ? `1px solid rgba(245,239,226,.25)` : 'none', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', cursor: 'pointer', textAlign: 'left', transition: 'background .15s', fontFamily: window.CL.sans, border: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,239,226,.06)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 48, fontWeight: 500, letterSpacing: '-0.025em', color: window.CL.paper }}>{t.amt}</div>
              <div style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 15, color: 'rgba(245,239,226,.75)', lineHeight: 1.4 }}>{t.label}</div>
            </button>
          ))}
          {!isMobile && (
            <a href="Donate.html" style={{ background: window.CL.signal, color: window.CL.paper, padding: '0 36px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', minWidth: 200, whiteSpace: 'nowrap' }}>
              Donate <span>→</span>
            </a>
          )}
          {isMobile && (
            <a href="Donate.html" style={{ background: window.CL.signal, color: window.CL.paper, padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase' }}>
              Donate →
            </a>
          )}
        </div>

        {/* WordRx thermometer */}
        <div style={{ marginTop: 40 }}>
          <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)', marginBottom: 16 }}>ACTIVE PRODUCTION FUND</div>
          <Thermometer label="WORDRX — DOCUMENTARY FILM" raised="$xx,xxx" goal="$20,000" pct={0} note="FILMING DEC 2026 · BELLEAIR, FL" />
        </div>

        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
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
