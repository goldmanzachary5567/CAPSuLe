// Hero — homepage opening section.

function Hero() {
  const isMobile = useIsMobile();

  return (
    <section id="top" style={{ position: 'relative', paddingTop: 60, paddingBottom: 80, borderBottom: `1.5px solid ${window.CL.ink}` }} className="cl-page-grid">
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 18, borderBottom: `1px solid ${window.CL.rule}`, flexWrap: 'wrap', gap: 8 }}>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>
            No. 001 · The Child and Adolescent Performance Science Laboratory
          </div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft, textAlign: 'right' }}>
            File · CAPSL/2026/03<br />Edition · Spring 2026
          </div>
        </div>

        <div className="cl-grid-hero" style={{ paddingTop: 56, paddingBottom: 32, gap: isMobile ? 40 : 48 }}>
          <div>
            <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 20 }}>
              § 01 — Premise
            </div>
            <h1 style={{
              fontFamily: window.CL.display,
              fontSize: 'clamp(48px, 7.2vw, 116px)',
              fontWeight: 500, lineHeight: 0.92, letterSpacing: '-0.035em',
              margin: 0, color: window.CL.ink, textWrap: 'balance',
            }}>
              From the lab<br />
              to the{' '}
              <span style={{ color: window.CL.signal }}>
                <SlotWord
                  words={['living', 'training', 'class']}
                  color={window.CL.signal}
                  font={window.CL.display}
                  weight={500}
                  size={Math.min(116, Math.max(48, window.innerWidth * 0.072))}
                  italic={true}
                />
              </span>
              <br />
              room.
            </h1>

            <div style={{ marginTop: 40, maxWidth: 560 }}>
              <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 12 }}>
                § 02 — Mission
              </div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 18, lineHeight: 1.55, color: window.CL.ink, margin: 0, fontWeight: 400, textWrap: 'pretty' }}>
                CAPSuLe is a 501(c)(3) nonprofit that turns youth development research into real-world guidance for parents, educators, coaches, and anyone committed to helping young people thrive.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                <a href="Programs.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 22px', border: `1.5px solid ${window.CL.ink}`, background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}>
                  <span style={{ width: 6, height: 6, borderRadius: 6, background: window.CL.signal }} />
                  Our Programs
                </a>
                <a href="Donate.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 22px', border: `1.5px solid ${window.CL.ink}`, background: 'transparent', color: window.CL.ink, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}>
                  Donate →
                </a>
              </div>
            </div>
          </div>

          {/* CAPSuLe logo replacing the pill diagram */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center', justifyContent: 'center', position: 'relative', paddingTop: isMobile ? 0 : 24 }}>
            <img
              src="site/assets/capsule-logo.png"
              alt="CAPSuLe — Child and Adolescent Performance Science Laboratory"
              style={{ width: '100%', maxWidth: isMobile ? 280 : 420, height: 'auto', objectFit: 'contain' }}
              onError={e => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback if logo image missing */}
            <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <SpecimenCapsule size={isMobile ? 240 : 320} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <Seal size={88} year="2024" />
                <div style={{ flex: 1 }}>
                  <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 6 }}>SPECIMEN A · ORIGINAL</div>
                  <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 13, lineHeight: 1.45, color: window.CL.inkSoft, margin: 0 }}>
                    A capsule. Two payloads. One delivered to the body of evidence; one released into the rooms where kids actually grow up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

window.Hero = Hero;
