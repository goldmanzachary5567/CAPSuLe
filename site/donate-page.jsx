// Donate page — full sponsorship and giving experience.
// "Acknowledgement not advertising" language removed throughout.

function DonateHero() {
  return (
    <section id="top" className="cl-page-grid" style={{ padding: '80px 0 100px', borderBottom: `1.5px solid ${window.CL.ink}`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 14, marginBottom: 56 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>Sponsorship Prospectus</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>
            <a href="CAPSuLe_Homepage.html" style={{ borderBottom: `1px solid ${window.CL.inkSoft}`, paddingBottom: 2 }}>Back to home</a>
            <span style={{ margin: '0 14px', opacity: .4 }}>/</span>
            File CAPSL/SPN/2026
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <BrandCapsule size={40} color={window.CL.signal} />
              <div className="cl-mono" style={{ color: window.CL.inkSoft }}>For institutions, foundations, and individual donors</div>
            </div>
            <h1 style={{ fontFamily: window.CL.display, fontSize: 'clamp(72px, 9vw, 144px)', fontWeight: 500, lineHeight: 0.88, letterSpacing: '-0.04em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
              Underwrite the<br />
              <em style={{ color: window.CL.signal }}>science</em> our kids<br />
              are growing up in.
            </h1>
            <p style={{ fontFamily: window.CL.serif, fontSize: 22, lineHeight: 1.5, color: window.CL.inkSoft, marginTop: 36, maxWidth: 560, textWrap: 'pretty' }}>
              CAPSuLe does not sell ads, put findings behind a paywall, or chase engagement metrics. We translate developmental science into films, courses, and essays for the people raising the next generation, and that work is entirely funded by partners like you.
            </p>
          </div>

          <div style={{ border: `1.5px solid ${window.CL.ink}`, background: window.CL.cream, padding: 32, position: 'relative' }}>
            <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 18, paddingBottom: 14, borderBottom: `1px solid ${window.CL.rule}` }}>At a glance</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { k: 'Status',            v: '501(c)(3) Nonprofit' },
                { k: 'EIN',               v: 'On request'          },
                { k: 'Founded',           v: '2024'                },
                { k: 'Programs',          v: 'Film · Course · Podcast · Blog · Curriculum' },
                { k: 'Tax-deductible',    v: '100% of contribution' },
                { k: 'Contact',           v: 'sponsor@thecapsl.org' },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
                  <span className="cl-mono" style={{ color: window.CL.inkSoft }}>{r.k}</span>
                  <span style={{ fontFamily: window.CL.serif, fontSize: 15, color: window.CL.ink, textAlign: 'right' }}>{r.v}</span>
                </div>
              ))}
            </div>
            <a href="#tiers" style={{ display: 'block', marginTop: 28, padding: '16px 18px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', textAlign: 'center' }}>
              See sponsorship tiers →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DonateImpact() {
  return (
    <section style={{ padding: '110px 0', background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>Why now</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>The translation gap</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-start' }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: 56, fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
            The research exists. The <em style={{ color: window.CL.signal }}>translation</em> is missing.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <p style={{ fontFamily: window.CL.serif, fontSize: 19, lineHeight: 1.55, color: window.CL.ink, margin: 0, textWrap: 'pretty' }}>
              Every year, developmental neuroscience and clinical psychology produce findings that could meaningfully improve the lives of children, adolescents, and the adults raising them. Very little of it reaches the parents, teachers, clinicians, and coaches who need it most.
            </p>
            <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.55, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>
              CAPSuLe is the bridge. We work in the formats each audience already trusts: long-form film, structured courses, peer-reviewed-but-readable essays, and conversational podcasts. Our sponsors fund the bridge.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: `1.5px solid ${window.CL.ink}` }}>
          {[
            { n: '01', h: 'Sustained, not seasonal', b: 'Sponsors fund a continuous translation pipeline. Your support compounds across every program we ship, not just one campaign.' },
            { n: '02', h: 'Trusted distribution',    b: 'Films land on Amazon Prime Video. Courses go to Coursera. Essays sit in the inboxes of educators who opted in. We meet audiences where they already are.' },
          ].map((c, i) => (
            <div key={i} style={{ padding: '32px 28px', borderRight: i < 1 ? `1px solid ${window.CL.ink}` : 'none', background: window.CL.paper }}>
              <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 14 }}>{c.n}</div>
              <div style={{ fontFamily: window.CL.display, fontSize: 26, fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.015em', color: window.CL.ink, marginBottom: 12 }}>{c.h}</div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.55, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>{c.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DonateTiers() {
  const tiers = [
    {
      code: 'TIER 01', name: 'Blog Post',             amount: '$250',
      cadence: 'Per article',
      what: 'A single Prescribed Dose article. Around 600 words, evidence-based, with concrete takeaways readers can apply today.',
      includes: ['Named credit on the published article', 'Listing on the Sponsors page of the CAPSuLe website'],
      audience: 'Educators, parents, clinicians, and coaches via newsletter and direct readership.',
    },
    {
      code: 'TIER 02', name: 'Podcast Episode',       amount: '$500',
      cadence: 'Per episode',
      what: 'A single Effective Dose episode: a long-form interview with a researcher, clinician, or practitioner.',
      includes: ['Verbal credit in the episode', 'Logo and credit in show notes', 'Listing on the Sponsors page of the CAPSuLe website'],
      audience: 'Subscribers across major podcast platforms and the CAPSuLe website.',
    },
    {
      code: 'TIER 03', name: 'Public Lecture',        amount: '$1,000',
      cadence: 'Per lecture',
      what: 'A single CAPSuLe community lecture: a local talk bringing one researcher\'s work directly to an audience.',
      includes: ['Verbal credit at the event', 'Logo on the slideshow', 'Credit on printed and digital materials'],
      note: 'Suited for local sponsors with a community-engagement focus.',
      audience: 'In-person attendees, plus recorded distribution after the event.',
      recommended: true,
    },
    {
      code: 'TIER 04', name: 'Endowed Lecture Series', amount: '$5,000+',
      cadence: 'Annual',
      what: 'A named multi-event series, for example, "The [Sponsor] Lecture Series on Adolescent Mental Health." Long-term presence across an entire programmatic theme.',
      includes: ['Named series with sponsor recognition in the title', 'Logo on all event materials and digital promotion', 'Verbal credit at every event in the series', 'Annual stewardship report'],
      note: 'Best fit for foundations and institutional sponsors seeking sustained, named presence.',
      audience: 'Aggregated audience across the full year of events.',
      flagship: true,
    },
  ];

  return (
    <section id="tiers" style={{ padding: '120px 0', background: window.CL.paper, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>Sponsorship Tiers</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>04 giving levels</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1.5px solid ${window.CL.ink}` }}>
          {tiers.map((t) => (
            <div key={t.code} style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 40, padding: '40px 0', borderBottom: `1px solid ${window.CL.rule}`, alignItems: 'flex-start', background: t.flagship ? window.CL.paperWarm : 'transparent' }}>
              <div style={{ paddingLeft: t.flagship ? 20 : 0 }}>
                <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 8 }}>{t.code}</div>
                <div style={{ fontFamily: window.CL.display, fontSize: 48, fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 0.95, color: window.CL.ink }}>{t.amount}</div>
                <div className="cl-mono" style={{ color: window.CL.inkSoft, marginTop: 8 }}>{t.cadence}</div>
                {t.recommended && <div style={{ marginTop: 12, display: 'inline-block', padding: '4px 8px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>POPULAR</div>}
                {t.flagship    && <div style={{ marginTop: 12, display: 'inline-block', padding: '4px 8px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>FLAGSHIP</div>}
              </div>
              <div>
                <div style={{ fontFamily: window.CL.display, fontSize: 28, fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.015em', color: window.CL.ink, marginBottom: 12 }}>{t.name}</div>
                <p style={{ fontFamily: window.CL.serif, fontSize: 16, lineHeight: 1.55, color: window.CL.inkSoft, margin: '0 0 16px', textWrap: 'pretty' }}>{t.what}</p>
                {t.note && <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 14, color: window.CL.inkSoft, margin: 0 }}>{t.note}</p>}
              </div>
              <div>
                <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 12 }}>INCLUDES</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {t.includes.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ width: 4, height: 4, borderRadius: 4, background: window.CL.signal, marginTop: 7, flexShrink: 0 }} />
                      <span style={{ fontFamily: window.CL.serif, fontSize: 15, color: window.CL.ink, lineHeight: 1.45 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 6 }}>AUDIENCE</div>
                <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 14, color: window.CL.inkSoft, margin: 0 }}>{t.audience}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: '32px', background: window.CL.ink, color: window.CL.paper, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32 }}>
          <div>
            <div style={{ fontFamily: window.CL.display, fontSize: 28, fontWeight: 500, letterSpacing: '-0.015em' }}>Ready to support CAPSuLe?</div>
            <p style={{ fontFamily: window.CL.serif, fontSize: 16, color: 'rgba(245,239,226,.7)', margin: '8px 0 0', lineHeight: 1.5 }}>Reach out and we will put together a giving plan that fits your goals and budget.</p>
          </div>
          <a href="mailto:sponsor@thecapsl.org" style={{ flexShrink: 0, padding: '16px 28px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}

function DonateProjects() {
  const projects = [
    {
      code: 'PRX-WORDRX', name: 'WordRx', kind: 'Documentary Film',
      status: 'In production', goal: '$20,000',
      raised: '$xx,xxx', pct: 0,
      note: 'Filming Dec 2026 · Belleair, FL',
      desc: 'Our flagship documentary following four "word pharmacists" to prove that language is a therapeutic tool. Distribution via Amazon Prime Video.',
    },
    {
      code: 'PRX-EXR', name: 'Extended Release', kind: 'Documentary Film',
      status: 'In development', goal: '$xx,xxx',
      raised: '$xx,xxx', pct: 0,
      note: 'Development phase',
      desc: 'A second documentary examining what real patient-clinician relationships look like and how to build them.',
    },
    {
      code: 'PRX-MICRO', name: 'MicroDose', kind: 'Course Series',
      status: 'Launching 2026', goal: '$xx,xxx',
      raised: '$xx,xxx', pct: 0,
      note: 'Coursera distribution',
      desc: 'Micro-courses for educators and parents. Two installments launching in 2026: The Learning Environment and The Home Environment.',
    },
  ];

  return (
    <section id="projects" style={{ padding: '120px 0', background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>Active Production Funds</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>Designate your gift to a specific program</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, marginBottom: 48 }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: 52, fontWeight: 500, lineHeight: 0.96, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
            Fund the work<br />you believe in<br /><em style={{ color: window.CL.signal }}>most.</em>
          </h2>
          <p style={{ fontFamily: window.CL.serif, fontSize: 18, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty', alignSelf: 'flex-end' }}>
            Every CAPSuLe program runs on donor support. You can give to the general fund or designate your contribution to a specific production. Each project below is an active or upcoming fund with a defined goal.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1.5px solid ${window.CL.ink}` }}>
          {projects.map((p) => (
            <div key={p.code} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, padding: '40px 0', borderBottom: `1px solid ${window.CL.rule}`, alignItems: 'flex-start' }}>
              <div>
                <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 8 }}>{p.code} · {p.kind}</div>
                <div style={{ fontFamily: window.CL.display, fontSize: 40, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', color: window.CL.ink, marginBottom: 12 }}>{p.name}</div>
                <p style={{ fontFamily: window.CL.serif, fontSize: 16, lineHeight: 1.55, color: window.CL.inkSoft, margin: 0 }}>{p.desc}</p>
                <div style={{ marginTop: 16, display: 'inline-block', padding: '6px 10px', border: `1px solid ${window.CL.ink}`, fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.ink }}>{p.status}</div>
              </div>

              <div style={{ border: `1.5px solid ${window.CL.ink}`, padding: '28px 24px', background: window.CL.paper, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: window.CL.display, fontSize: 44, fontWeight: 500, letterSpacing: '-0.03em', color: window.CL.ink }}>{p.raised}</span>
                  <span className="cl-mono" style={{ color: window.CL.inkSoft }}>OF {p.goal}</span>
                </div>
                {/* Thermometer track */}
                <div>
                  <div style={{ position: 'relative', height: 12, background: window.CL.rule, border: `1px solid ${window.CL.rule}`, borderRadius: 12, overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${Math.max(2, p.pct)}%`, background: window.CL.signal, borderRadius: 12 }} />
                    {[25, 50, 75].map(t => (
                      <div key={t} style={{ position: 'absolute', left: `${t}%`, top: 0, width: 1, height: '100%', background: 'rgba(11,27,38,.1)' }} />
                    ))}
                  </div>
                  <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
                    {['0%','25%','50%','75%','100%'].map(l => (
                      <span key={l} className="cl-mono" style={{ color: window.CL.inkSoft, fontSize: 9 }}>{l}</span>
                    ))}
                  </div>
                </div>
                <div className="cl-mono" style={{ color: window.CL.inkSoft }}>{p.note}</div>
                <a href="mailto:sponsor@thecapsl.org" style={{ display: 'block', padding: '12px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', textAlign: 'center' }}>
                  Give to {p.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DonateFAQ() {
  const faqs = [
    { q: 'Is my donation tax-deductible?', a: 'Yes. CAPSuLe is a registered 501(c)(3) nonprofit organization. All contributions are tax-deductible to the full extent permitted by law. You will receive a written acknowledgment for your records.' },
    { q: 'Can I designate my gift to a specific program?', a: 'Yes. You can designate your contribution to any active production fund (WordRx, Extended Release, MicroDose) or to the general operating fund. Please note your preference when you reach out.' },
    { q: 'What is the difference between a donation and a sponsorship?', a: 'Sponsorships are designated to a specific program or event and include named public recognition. Donations to the general fund support overall operations and do not carry specific recognition benefits, though we are grateful for all support.' },
    { q: 'Does my employer match charitable gifts?', a: 'Many employers match employee charitable contributions. Check with your HR department to see whether your company participates, and we will provide the documentation you need.' },
    { q: 'How will I be updated on how my contribution was used?', a: 'Sponsors at the Endowed Lecture Series level receive an annual stewardship report. For other giving levels, we publish program updates on our website and newsletter as productions reach key milestones.' },
    { q: 'Do you accept recurring gifts?', a: 'Yes. Recurring giving is especially helpful for sustained productions. Reach out to discuss a monthly or annual giving arrangement that works for you.' },
  ];

  return (
    <section id="faq" style={{ padding: '120px 0', background: window.CL.paper, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>Common Questions</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>More at contact@thecapsl.org</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ padding: '32px 28px', borderBottom: `1px solid ${window.CL.rule}`, borderRight: i % 2 === 0 ? `1px solid ${window.CL.rule}` : 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ fontFamily: window.CL.display, fontSize: 22, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.015em', color: window.CL.ink }}>{f.q}</div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 16, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DonateClose() {
  return (
    <section style={{ padding: '120px 0', background: window.CL.ink, color: window.CL.paper, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -100, bottom: -60, opacity: .08 }}>
        <div style={{ width: 500, height: 190, borderRadius: 190, background: window.CL.signal, transform: 'rotate(-18deg)' }} />
      </div>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px', position: 'relative', textAlign: 'center' }}>
        <Seal size={120} color={window.CL.signal} year="2024" />
        <h2 style={{ fontFamily: window.CL.display, fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 500, lineHeight: 0.9, letterSpacing: '-0.04em', margin: '40px 0 24px', textWrap: 'balance' }}>
          Every piece of evidence<br />we ship started<br />with a <em style={{ color: window.CL.signal }}>partner like you.</em>
        </h2>
        <p style={{ fontFamily: window.CL.serif, fontSize: 20, lineHeight: 1.55, color: 'rgba(245,239,226,.75)', maxWidth: 640, margin: '0 auto 48px', textWrap: 'pretty' }}>
          The research exists. Getting it to the right room, in the right format, at the right time takes infrastructure — and donors who believe the translation is worth funding.
        </p>
        <a href="mailto:sponsor@thecapsl.org" style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '18px 36px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase' }}>
          Contact us to give →
        </a>
      </div>
    </section>
  );
}

window.DonateHero     = DonateHero;
window.DonateImpact   = DonateImpact;
window.DonateTiers    = DonateTiers;
window.DonateProjects = DonateProjects;
window.DonateFAQ      = DonateFAQ;
window.DonateClose    = DonateClose;
