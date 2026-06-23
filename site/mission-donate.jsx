// Mission — § 03 About
// DonateCTA — § 09 Support the Lab  (bottom of every page)

function Mission({ preview = false }) {
  const isMobile = useIsMobile();

  const partnerLogos = [
    { name: 'Arizona State University',           src: 'site/assets/asu.webp' },
    { name: 'University of Pennsylvania',         src: 'site/assets/penn.png' },
    { name: 'CAMH',                               src: 'site/assets/camh_edited.png' },
    { name: 'Cornell University',                 src: 'site/assets/cornell.png' },
    { name: 'Harvard University',                 src: 'site/assets/harvard.png' },
    { name: 'Johns Hopkins University',           src: 'site/assets/johns.png' },
    { name: 'Mississippi State University',       src: 'site/assets/missisipi state.png' },
    { name: 'McGill University',                  src: 'site/assets/mcgill.png' },
    { name: 'University of Pittsburgh',           src: 'site/assets/up.png' },
    { name: 'UPMC',                               src: 'site/assets/upmc.png' },
    { name: 'LECOM',                              src: 'site/assets/lecom.png' },
    { name: 'University of Toronto',              src: 'site/assets/unit.png' },
  ];
  // duplicate for seamless marquee loop
  const logoTrack = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section id="about" style={{ padding: isMobile ? '72px 0' : '120px 0', borderBottom: `1px solid ${window.CL.rule}`, position: 'relative' }} className="cl-page-grid">
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 03 — Our Mission</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>501(c)(3) Nonprofit · Est. 2024</div>
        </div>

        {/* 1 — Big mission statement */}
        <div style={{ marginBottom: isMobile ? 36 : 52 }}>
          <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 16 }}>OUR MISSION</div>
          <p style={{ fontFamily: window.CL.display, fontSize: isMobile ? 32 : 'clamp(36px,4vw,52px)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.025em', color: window.CL.ink, margin: 0, textWrap: 'pretty' }}>
            To equip those who shape adolescent development with <em style={{ color: window.CL.signal }}>actionable insights</em> grounded in science.
          </p>
        </div>

        {/* 2 — Partner logo carousel */}
        <div style={{ borderTop: `1.5px solid ${window.CL.ink}`, borderBottom: `1.5px solid ${window.CL.ink}`, overflow: 'hidden', position: 'relative', marginBottom: isMobile ? 36 : 52 }}>
          <div className="cl-mono" style={{ color: window.CL.inkSoft, padding: '10px 0', marginBottom: 4, fontSize: 10 }}>PARTNER INSTITUTIONS</div>
          <div style={{ overflow: 'hidden', paddingBottom: 20 }}>
            <div className="cl-carousel-track" style={{ display: 'flex', gap: 52, width: 'max-content', alignItems: 'center' }}>
              {logoTrack.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  style={{ height: 38, width: 'auto', display: 'block', flexShrink: 0, filter: 'grayscale(100%) opacity(55%)', transition: 'filter .2s', maxWidth: 140 }}
                  onMouseEnter={function(e) { e.currentTarget.style.filter = 'grayscale(0%) opacity(100%)'; }}
                  onMouseLeave={function(e) { e.currentTarget.style.filter = 'grayscale(100%) opacity(55%)'; }}
                  onError={function(e) { e.currentTarget.style.display = 'none'; }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3 — Body text */}
        <div style={{ maxWidth: 820 }}>
          <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 17 : 19, lineHeight: 1.65, color: window.CL.ink, margin: 0, textWrap: 'pretty' }}>
            We bring together researchers, clinicians, and community leaders to bridge disciplines and translate developmental research into meaningful practice. Together, we form a working alliance committed to advancing child and adolescent well-being through research, education, and public engagement.
          </p>

          {!preview && (
            <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: window.CL.inkSoft, margin: '20px 0 0', textWrap: 'pretty' }}>
              Our work spans documentary film, podcast, micro-courses, and a weekly research blog. Every format serves one goal: get the science to the people who can use it.
            </p>
          )}

          {preview && (
            <a href="About.html" className="cl-link cl-mono" style={{ color: window.CL.ink, display: 'inline-block', marginTop: 24 }}>LEARN MORE ABOUT US →</a>
          )}
        </div>
      </div>
    </section>
  );
}

function Thermometer({ label, raised = '$xx,xxx', goal = '$20,000', pct = 0, note = '' }) {
  return (
    <div style={{ border: `1px solid rgba(245,239,226,.3)`, padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
        <span className="cl-mono" style={{ color: window.CL.signal }}>{label}</span>
        {note && <span className="cl-mono" style={{ color: 'rgba(245,239,226,.45)' }}>{note}</span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: window.CL.display, fontSize: 36, fontWeight: 500, letterSpacing: '-0.025em', color: window.CL.paper }}>{raised}</span>
        <span style={{ fontFamily: window.CL.mono, fontSize: 10, color: 'rgba(245,239,226,.5)' }}>RAISED OF {goal} GOAL</span>
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
  const isMobile = useIsMobile();

  const tiers = [
    { amt: '$250',   label: 'Sponsor a Prescribed Dose article' },
    { amt: '$500',   label: 'Fund one Effective Dose episode'    },
    { amt: '$1,000', label: 'Present a community lecture'        },
  ];

  return (
    <section id="donate-cta" style={{ padding: isMobile ? '72px 0' : '120px 0', background: window.CL.ink, color: window.CL.paper, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -120, top: 80, opacity: .10 }}>
        <div style={{ width: 500, height: 200, borderRadius: 200, background: window.CL.signal, transform: 'rotate(-22deg)' }} />
      </div>

      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.paper}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 09 — Support the Lab</div>
          <div className="cl-mono" style={{ color: 'rgba(245,239,226,.6)' }}>100% tax-deductible</div>
        </div>

        <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 64, alignItems: 'flex-end' }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: 'clamp(40px, 6vw, 88px)', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.03em', margin: 0, textWrap: 'balance' }}>
            Help us put research<br />
            in the <em style={{ color: window.CL.signal }}>right hands.</em>
          </h2>
          <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.55, color: 'rgba(245,239,226,.8)', margin: 0, textWrap: 'pretty' }}>
            Every episode, essay, and course we publish is donor-funded. We do not sell ads or put research behind a paywall. We translate the science and deliver it to the people raising the next generation.
          </p>
        </div>

        {/* Tiers */}
        {isMobile ? (
          <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 0, border: `1.5px solid ${window.CL.paper}` }}>
            {tiers.map((t, i) => (
              <div key={t.amt} style={{ background: 'transparent', color: window.CL.paper, padding: '24px 20px', borderBottom: `1px solid rgba(245,239,226,.25)`, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontFamily: window.CL.display, fontSize: 40, fontWeight: 500, letterSpacing: '-0.025em' }}>{t.amt}</div>
                <div style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 14, color: 'rgba(245,239,226,.75)', lineHeight: 1.4 }}>{t.label}</div>
              </div>
            ))}
            <a href="Donate.html" style={{ background: window.CL.signal, color: window.CL.paper, padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase' }}>
              Donate →
            </a>
          </div>
        ) : (
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr) auto', gap: 0, border: `1.5px solid ${window.CL.paper}` }}>
            {tiers.map((t, i) => (
              <button key={t.amt}
                style={{ background: 'transparent', color: window.CL.paper, padding: '28px 24px', borderRight: `1px solid rgba(245,239,226,.25)`, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', cursor: 'pointer', textAlign: 'left', transition: 'background .15s', fontFamily: window.CL.sans }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,239,226,.06)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ fontFamily: window.CL.display, fontSize: 44, fontWeight: 500, letterSpacing: '-0.025em' }}>{t.amt}</div>
                <div style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 14, color: 'rgba(245,239,226,.75)', lineHeight: 1.4 }}>{t.label}</div>
              </button>
            ))}
            <a href="Donate.html" style={{ background: window.CL.signal, color: window.CL.paper, padding: '0 36px', display: 'flex', alignItems: 'center', gap: 12, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', minWidth: 200 }}>
              Donate →
            </a>
          </div>
        )}

        <div style={{ marginTop: 36 }}>
          <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)', marginBottom: 16 }}>ACTIVE PRODUCTION FUND</div>
          <Thermometer label="WORDRX — DOCUMENTARY FILM" raised="$xx,xxx" goal="$16,000" pct={0} note="FILMING DEC 2026 · BELLEAIR, FL" />
        </div>

        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)' }}>Recurring giving · Employer match · Memorial gifts</div>
          <a href="Donate.html" style={{ fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: window.CL.signal, borderBottom: `1px solid ${window.CL.signal}`, paddingBottom: 3 }}>
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
