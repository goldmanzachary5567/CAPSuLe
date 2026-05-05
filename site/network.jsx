// Network — § 06 Partner institutions

function Network() {
  const partners = [
    { name: 'Harvard University',       dept: 'Medical School affiliations',          code: 'A-001' },
    { name: 'Cornell University',       dept: 'Human Development',                    code: 'A-002' },
    { name: 'Columbia University',      dept: 'Teachers College',                     code: 'A-003' },
    { name: 'Johns Hopkins University', dept: 'School of Education',                  code: 'A-004' },
    { name: 'University of Toronto',    dept: 'Learning and Neural Development Lab',  code: 'A-005' },
  ];

  return (
    <section id="network" style={{ padding: '96px 0', borderBottom: `1px solid ${window.CL.rule}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 32 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 06 — Network</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>05 institutions registered</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontFamily: window.CL.display, fontSize: 56, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink }}>
              An <em style={{ color: window.CL.signal }}>active alliance</em> of researchers, clinicians, and community leaders.
            </h2>
            <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.55, color: window.CL.inkSoft, marginTop: 24, maxWidth: 380 }}>
              We work across disciplines to translate developmental research into meaningful practice through episodes, writing, and direct partnership with the people who shape young lives.
            </p>
          </div>

          <div style={{ borderTop: `1px solid ${window.CL.ink}` }}>
            {partners.map((p) => (
              <div key={p.code} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr 220px 24px',
                alignItems: 'center', gap: 16, padding: '22px 0',
                borderBottom: `1px solid ${window.CL.rule}`, color: window.CL.ink,
              }}>
                <div className="cl-mono" style={{ color: window.CL.signal }}>{p.code}</div>
                <div style={{ fontFamily: window.CL.display, fontSize: 28, fontWeight: 500, letterSpacing: '-0.015em' }}>{p.name}</div>
                <div style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 15, color: window.CL.inkSoft }}>{p.dept}</div>
                <div className="cl-mono" style={{ color: window.CL.inkSoft, textAlign: 'right' }}>→</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Network = Network;
