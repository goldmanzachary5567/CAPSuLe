// Donate page — full sponsorship and giving experience.

function DonatePartnerBanner() {
  return (
    <section style={{ padding: '80px 0', background: window.CL.ink, color: window.CL.paper, position: 'relative', overflow: 'hidden', borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ position: 'absolute', right: -100, bottom: -40, opacity: .08 }}>
        <div style={{ width: 500, height: 190, borderRadius: 190, background: window.CL.signal, transform: 'rotate(-18deg)' }} />
      </div>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px', position: 'relative', textAlign: 'center' }}>
        <Seal size={100} color={window.CL.signal} year="2024" />
        <h2 style={{ fontFamily: window.CL.display, fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 500, lineHeight: 0.92, letterSpacing: '-0.04em', margin: '32px 0 20px', textWrap: 'balance' }}>
          Every piece of evidence<br />we ship started<br />with a <em style={{ color: window.CL.signal }}>partner like you.</em>
        </h2>
        <p style={{ fontFamily: window.CL.serif, fontSize: 18, lineHeight: 1.55, color: 'rgba(245,239,226,.75)', maxWidth: 580, margin: '0 auto 36px', textWrap: 'pretty' }}>
          Every piece of content we publish is free to access because donors fund the production — and every partner who makes it possible is recognized by name.
        </p>
        <a href="#tiers" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 32px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase' }}>
          See how to give →
        </a>
      </div>
    </section>
  );
}

function DonateHero() {
  const isMobile = useIsMobile();
  return (
    <section id="top" className="cl-page-grid" style={{ padding: '80px 0 100px', borderBottom: `1.5px solid ${window.CL.ink}`, position: 'relative', overflow: 'hidden', background: window.CL.paper }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 14, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>Sponsorship Prospectus</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>
            File CAPSL/SPN/2026
          </div>
        </div>

        <div className="cl-grid-2" style={{ gap: isMobile ? 40 : 80 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <BrandCapsule size={36} color={window.CL.signal} />
              <div className="cl-mono" style={{ color: window.CL.inkSoft }}>For institutions, foundations, and individual donors</div>
            </div>
            <h1 style={{ fontFamily: window.CL.display, fontSize: 'clamp(56px, 9vw, 128px)', fontWeight: 500, lineHeight: 0.88, letterSpacing: '-0.04em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
              Underwrite the<br />
              <em style={{ color: window.CL.signal }}>science</em> our kids<br />
              are growing up in.
            </h1>
            <p style={{ fontFamily: window.CL.serif, fontSize: 20, lineHeight: 1.5, color: window.CL.inkSoft, marginTop: 32, maxWidth: 540, textWrap: 'pretty' }}>
              CAPSuLe translates developmental science into films, courses, and essays — and delivers all of it free. No ads. No subscriptions. No paywall. Producing it isn't free.
            </p>
          </div>

          <div style={{ border: `1.5px solid ${window.CL.ink}`, background: window.CL.cream, padding: 28 }}>
            <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 18, paddingBottom: 14, borderBottom: `1px solid ${window.CL.rule}` }}>At a glance</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { k: 'Status',          v: '501(c)(3) Nonprofit' },
                { k: 'EIN',             v: 'On request' },
                { k: 'Founded',         v: '2024' },
                { k: 'Programs',        v: 'Film · Course · Podcast · Blog' },
                { k: 'Tax-deductible',  v: '100% of contribution' },
                { k: 'Contact',         v: 'sponsor@thecapsl.org' },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, borderBottom: `1px solid ${window.CL.rule}`, paddingBottom: 10 }}>
                  <span className="cl-mono" style={{ color: window.CL.inkSoft }}>{r.k}</span>
                  <span style={{ fontFamily: window.CL.serif, fontSize: 14, color: window.CL.ink, textAlign: 'right' }}>{r.v}</span>
                </div>
              ))}
            </div>
            <a href="#tiers" style={{ display: 'block', marginTop: 24, padding: '14px 16px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', textAlign: 'center' }}>
              See sponsorship tiers →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DonateImpact() {
  const isMobile = useIsMobile();
  const urgencyStats = [
    { n: '17 yrs', label: 'Average lag between biomedical research publication and clinical adoption', note: 'Morris, Wooding & Grant, J R Soc Med, 2011.' },
    { n: '~50%',   label: 'Share of paywalled academic articles never cited — even by other researchers', note: 'Documented across multiple open-access citation studies.' },
  ];
  return (
    <section style={{ padding: '100px 0', background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>Why we need you</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>The translation gap</div>
        </div>

        <div className="cl-grid-2" style={{ gap: isMobile ? 40 : 80, marginBottom: 56 }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
            The research exists.<br />The <em style={{ color: window.CL.signal }}>translation</em> is missing.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontFamily: window.CL.serif, fontSize: 18, lineHeight: 1.55, color: window.CL.ink, margin: 0, textWrap: 'pretty' }}>
              Developmental research that could change how parents raise kids and how teachers run classrooms sits in academic journals that almost no one reads. CAPSuLe translates it — into films, courses, podcasts, and essays — and delivers it free. Films require crews, gear, and post-production. Courses require instructional design and platform licensing. None of it runs on goodwill.
            </p>
          </div>
        </div>

        {/* Urgency stats */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 1, background: window.CL.ink, border: `1.5px solid ${window.CL.ink}`, marginBottom: 56 }}>
          {urgencyStats.map((s, i) => (
            <div key={i} style={{ background: window.CL.paper, padding: '28px 24px' }}>
              <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 52, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1, color: window.CL.signal, marginBottom: 12 }}>{s.n}</div>
              <div style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.5, color: window.CL.ink, marginBottom: 8 }}>{s.label}</div>
              <div style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 13, color: window.CL.inkSoft }}>{s.note}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function DonateWordRxBudget() {
  const isMobile = useIsMobile();
  const budget = [
    { name: 'Gear + Insurance',        amount: 4000, group: 'Production',      color: '#c8453a', what: 'Cameras, lighting, audio rigs, and full production insurance for the Belleair shoot.' },
    { name: 'Crew Compensation',       amount: 3000, group: 'Production',      color: '#d9693e', what: 'Cinematographer, sound engineer, and on-set production coordinator.' },
    { name: 'Meals',                   amount: 2000, group: 'Production',      color: '#e8a060', what: 'On-location catering and meals for cast and crew across all shoot days.' },
    { name: 'Travel & Accommodations', amount: 1000, group: 'Production',      color: '#f2cab4', what: 'Travel and lodging for out-of-market crew members coming to Belleair, FL.' },
    { name: 'E&O Insurance',           amount: 3000, group: 'Post-Production', color: '#4a8a6a', what: 'Errors & omissions coverage required for Amazon Prime Video distribution.' },
    { name: 'Sound Mixing',            amount: 2000, group: 'Post-Production', color: '#72b890', what: 'Professional dialogue editing, music licensing clearance, and final mix.' },
    { name: 'Color Grading',           amount: 1000, group: 'Post-Production', color: '#a8d4b8', what: 'Cinematic color grade to bring the visual look of the film up to distribution standard.' },
  ];
  const total = 16000;

  return (
    <section style={{ padding: '100px 0', background: window.CL.ink, color: window.CL.paper, borderBottom: `1.5px solid rgba(245,239,226,.2)` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid rgba(245,239,226,.25)`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>Where WordRx money goes</div>
          <div className="cl-mono" style={{ color: 'rgba(245,239,226,.45)' }}>Full budget breakdown · $16,000 goal</div>
        </div>

        <div className="cl-grid-2" style={{ gap: isMobile ? 40 : 80, marginBottom: 48 }}>
          <div>
            <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: '0 0 20px', textWrap: 'balance' }}>
              Every dollar<br />has a <em style={{ color: window.CL.signal }}>job.</em>
            </h2>
            <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: 'rgba(245,239,226,.75)', margin: 0, textWrap: 'pretty' }}>
              100% of WordRx donations go directly to production costs. No administrative overhead is taken from designated gifts. Here is exactly where each dollar goes.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Production', 'Post-Production'].map(group => {
              const gTotal = budget.filter(b => b.group === group).reduce((s, b) => s + b.amount, 0);
              return (
                <div key={group}>
                  <div className="cl-mono" style={{ color: 'rgba(245,239,226,.4)', marginBottom: 8, marginTop: 4 }}>{group.toUpperCase()} — ${gTotal.toLocaleString()}</div>
                  {budget.filter(b => b.group === group).map(item => (
                    <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: `1px solid rgba(245,239,226,.1)` }}>
                      <span style={{ width: 10, height: 10, borderRadius: 2, background: item.color, flexShrink: 0 }} />
                      <span style={{ fontFamily: window.CL.serif, fontSize: 14, color: 'rgba(245,239,226,.85)', flex: 1 }}>{item.name}</span>
                      <span style={{ fontFamily: window.CL.display, fontSize: 18, fontWeight: 500, color: window.CL.paper, letterSpacing: '-0.01em' }}>${item.amount.toLocaleString()}</span>
                      <span className="cl-mono" style={{ color: 'rgba(245,239,226,.4)', width: 36 }}>{Math.round(item.amount/total*100)}%</span>
                    </div>
                  ))}
                </div>
              );
            })}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 16, borderTop: `1.5px solid rgba(245,239,226,.3)`, marginTop: 8 }}>
              <span className="cl-mono" style={{ color: 'rgba(245,239,226,.5)' }}>TOTAL GOAL</span>
              <span style={{ fontFamily: window.CL.display, fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', color: window.CL.paper }}>${total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Line-item descriptions */}
        <div style={{ borderTop: `1px solid rgba(245,239,226,.18)`, paddingTop: 40 }}>
          <div className="cl-mono" style={{ color: 'rgba(245,239,226,.4)', marginBottom: 24 }}>LINE ITEM DETAIL</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 1, background: 'rgba(245,239,226,.12)' }}>
            {budget.map((item, i) => (
              <div key={item.name} style={{ background: window.CL.ink, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: item.color, flexShrink: 0 }} />
                  <span style={{ fontFamily: window.CL.display, fontSize: 16, fontWeight: 500, color: window.CL.paper }}>{item.name}</span>
                  <span style={{ marginLeft: 'auto', fontFamily: window.CL.display, fontSize: 20, fontWeight: 500, color: window.CL.signal, letterSpacing: '-0.01em' }}>${item.amount.toLocaleString()}</span>
                </div>
                <p style={{ fontFamily: window.CL.serif, fontSize: 14, lineHeight: 1.5, color: 'rgba(245,239,226,.55)', margin: 0 }}>{item.what}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 40, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
          <p style={{ fontFamily: window.CL.serif, fontSize: 16, color: 'rgba(245,239,226,.7)', margin: 0, flex: 1, textWrap: 'pretty' }}>
            Ready to put a dollar to work? Every amount closes the gap.
          </p>
          <a href="mailto:sponsor@thecapsl.org"
            style={{ flexShrink: 0, padding: '14px 28px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase' }}>
            Fund WordRx →
          </a>
        </div>
      </div>
    </section>
  );
}

function DonateTiers() {
  const isMobile = useIsMobile();
  const tiers = [
    {
      code: 'TIER 01', name: 'Blog Post', amount: '$250',
      cadence: 'Per article',
      what: 'A single Prescribed Dose article — ~600 words, evidence-based, with concrete takeaways.',
      includes: ['Named credit on the published article', 'Listing on the Sponsors page'],
      audience: 'Educators, parents, clinicians, and coaches via newsletter and direct readership.',
    },
    {
      code: 'TIER 02', name: 'Podcast Episode', amount: '$500',
      cadence: 'Per episode',
      what: 'A single Effective Dose episode: a long-form interview with a researcher, clinician, or practitioner.',
      includes: ['Verbal credit in the episode', 'Logo and credit in show notes', 'Listing on the Sponsors page'],
      audience: 'Subscribers across major podcast platforms and the CAPSuLe website.',
    },
    {
      code: 'TIER 03', name: 'Public Lecture', amount: '$1,000',
      cadence: 'Per lecture',
      what: 'A single CAPSuLe community lecture bringing one researcher\'s work directly to an audience.',
      includes: ['Verbal credit at the event', 'Logo on the slideshow', 'Credit on printed and digital materials'],
      note: 'Suited for local sponsors with a community-engagement focus.',
      audience: 'In-person attendees, plus recorded distribution.',
      recommended: true,
    },
    {
      code: 'TIER 04', name: 'Endowed Lecture Series', amount: '$5,000+',
      cadence: 'Annual',
      what: 'A named multi-event series — e.g., "The [Sponsor] Lecture Series on Adolescent Mental Health."',
      includes: ['Named series with sponsor recognition in the title', 'Logo on all event materials', 'Verbal credit at every event', 'Annual stewardship report'],
      note: 'Best fit for foundations and institutional sponsors seeking sustained, named presence.',
      audience: 'Aggregated audience across the full year of events.',
      flagship: true,
    },
  ];

  return (
    <section id="tiers" style={{ padding: '100px 0', background: window.CL.paper, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>Sponsorship Tiers</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>04 giving levels</div>
        </div>

        <div style={{ marginBottom: 48, padding: '28px 32px', background: window.CL.cream, border: `1.5px solid ${window.CL.ink}` }}>
          <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 10 }}>Every sponsorship is named.</div>
          <p style={{ fontFamily: window.CL.serif, fontSize: 16, lineHeight: 1.65, color: window.CL.ink, margin: 0, textWrap: 'pretty' }}>
            Whether you fund a single article or an entire lecture series, your contribution is publicly credited — on the content itself, in the show notes, on the event slide deck, or in the series title. We maintain a permanent Sponsors page. Endowed partners receive an annual stewardship report.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1.5px solid ${window.CL.ink}` }}>
          {tiers.map((t) => (
            <div key={t.code} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '180px 1fr 1fr', gap: isMobile ? 16 : 36, padding: isMobile ? '28px 0' : '36px 0', borderBottom: `1px solid ${window.CL.rule}`, alignItems: 'flex-start', background: t.flagship ? window.CL.paperWarm : 'transparent' }}>
              <div style={{ paddingLeft: t.flagship && !isMobile ? 16 : 0 }}>
                <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 6 }}>{t.code}</div>
                <div style={{ fontFamily: window.CL.display, fontSize: 44, fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 0.95, color: window.CL.ink }}>{t.amount}</div>
                <div className="cl-mono" style={{ color: window.CL.inkSoft, marginTop: 6 }}>{t.cadence}</div>
                {t.recommended && <div style={{ marginTop: 10, display: 'inline-block', padding: '4px 8px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>POPULAR</div>}
                {t.flagship    && <div style={{ marginTop: 10, display: 'inline-block', padding: '4px 8px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>FLAGSHIP</div>}
              </div>
              <div>
                <div style={{ fontFamily: window.CL.display, fontSize: 26, fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.015em', color: window.CL.ink, marginBottom: 10 }}>{t.name}</div>
                <p style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.55, color: window.CL.inkSoft, margin: '0 0 12px', textWrap: 'pretty' }}>{t.what}</p>
                {t.note && <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 13, color: window.CL.inkSoft, margin: 0 }}>{t.note}</p>}
              </div>
              <div>
                <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 10 }}>INCLUDES</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {t.includes.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ width: 4, height: 4, borderRadius: 4, background: window.CL.signal, marginTop: 6, flexShrink: 0 }} />
                      <span style={{ fontFamily: window.CL.serif, fontSize: 14, color: window.CL.ink, lineHeight: 1.45 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 4 }}>AUDIENCE</div>
                <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 13, color: window.CL.inkSoft, margin: 0 }}>{t.audience}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, padding: '28px', background: window.CL.ink, color: window.CL.paper, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: window.CL.display, fontSize: 26, fontWeight: 500, letterSpacing: '-0.015em' }}>Ready to support CAPSuLe?</div>
            <p style={{ fontFamily: window.CL.serif, fontSize: 15, color: 'rgba(245,239,226,.7)', margin: '6px 0 0', lineHeight: 1.5 }}>Reach out and we'll put together a giving plan that fits your goals.</p>
          </div>
          <a href="mailto:sponsor@thecapsl.org" style={{ flexShrink: 0, padding: '14px 24px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}

function DonateProjects() {
  const isMobile = useIsMobile();
  const projects = [
    {
      code: 'PRX-WORDRX', name: 'WordRx', kind: 'Documentary Film',
      status: 'In production', goal: '$16,000', raised: '$xx,xxx', pct: 0,
      note: 'Filming Dec 2026 · Belleair, FL',
      desc: 'Our flagship documentary following four "word pharmacists." Distribution via Amazon Prime Video.',
    },
    {
      code: 'PRX-EXR', name: 'Extended Release', kind: 'Documentary Film',
      status: 'In development', goal: '$xx,xxx', raised: '$xx,xxx', pct: 0,
      note: 'Development phase',
      desc: 'A second documentary examining what real patient-clinician relationships look like.',
    },
    {
      code: 'PRX-MICRO', name: 'MicroDose', kind: 'Course Series',
      status: 'Launching 2026', goal: '$xx,xxx', raised: '$xx,xxx', pct: 0,
      note: 'Coursera distribution',
      desc: 'Micro-courses for educators and parents launching in 2026 on Coursera.',
    },
  ];

  return (
    <section id="projects" style={{ padding: '100px 0', background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>Active Production Funds</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>Designate your gift</div>
        </div>

        <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 64, marginBottom: 40 }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 52, fontWeight: 500, lineHeight: 0.96, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
            Fund the work<br />you believe in<br /><em style={{ color: window.CL.signal }}>most.</em>
          </h2>
          <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty', alignSelf: 'flex-end' }}>
            Give to the general fund or designate your contribution to a specific production.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1.5px solid ${window.CL.ink}` }}>
          {projects.map((p) => (
            <div key={p.code} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: isMobile ? 20 : 40, padding: '36px 0', borderBottom: `1px solid ${window.CL.rule}`, alignItems: 'flex-start' }}>
              <div>
                <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 8 }}>{p.code} · {p.kind}</div>
                <div style={{ fontFamily: window.CL.display, fontSize: 36, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', color: window.CL.ink, marginBottom: 10 }}>{p.name}</div>
                <p style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.55, color: window.CL.inkSoft, margin: 0 }}>{p.desc}</p>
                <div style={{ marginTop: 14, display: 'inline-block', padding: '5px 9px', border: `1px solid ${window.CL.ink}`, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em', color: window.CL.ink }}>{p.status}</div>
              </div>
              <div style={{ border: `1.5px solid ${window.CL.ink}`, padding: '24px 20px', background: window.CL.paper, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: window.CL.display, fontSize: 40, fontWeight: 500, letterSpacing: '-0.03em', color: window.CL.ink }}>{p.raised}</span>
                  <span className="cl-mono" style={{ color: window.CL.inkSoft }}>OF {p.goal}</span>
                </div>
                <div>
                  <div style={{ position: 'relative', height: 10, background: window.CL.rule, borderRadius: 10, overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${Math.max(2, p.pct)}%`, background: window.CL.signal, borderRadius: 10 }} />
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
  const isMobile = useIsMobile();
  const faqs = [
    { q: 'Is my donation tax-deductible?', a: 'Yes. CAPSuLe is a registered 501(c)(3) nonprofit. All contributions are tax-deductible to the full extent permitted by law. You will receive a written acknowledgment for your records.' },
    { q: 'Can I designate my gift?', a: 'Yes. You can designate your contribution to any active production fund (WordRx, Extended Release, MicroDose) or to the general operating fund. Please note your preference when you reach out.' },
    { q: 'Donation vs. sponsorship?', a: 'Sponsorships are designated to a specific program and include named public recognition. Donations to the general fund support overall operations and do not carry specific recognition benefits.' },
    { q: 'Does my employer match?', a: 'Many employers match employee charitable contributions. Check with your HR department to see whether your company participates, and we will provide the documentation you need.' },
    { q: 'How will I be updated?', a: 'Sponsors at the Endowed Lecture Series level receive an annual stewardship report. Other sponsors receive program updates as productions reach key milestones.' },
    { q: 'Do you accept recurring gifts?', a: 'Yes. Recurring giving is especially helpful for sustained productions. Reach out to discuss a monthly or annual giving arrangement.' },
  ];

  return (
    <section id="faq" style={{ padding: '100px 0', background: window.CL.paper, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 40, flexWrap: 'wrap', gap: 8 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>Common Questions</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>contact@thecapsl.org</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ padding: isMobile ? '24px 0' : '28px 24px', borderBottom: `1px solid ${window.CL.rule}`, borderRight: (!isMobile && i % 2 === 0) ? `1px solid ${window.CL.rule}` : 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontFamily: window.CL.display, fontSize: 20, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.015em', color: window.CL.ink }}>{f.q}</div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.DonatePartnerBanner  = DonatePartnerBanner;
window.DonateHero           = DonateHero;
window.DonateImpact         = DonateImpact;
window.DonateWordRxBudget   = DonateWordRxBudget;
window.DonateTiers          = DonateTiers;
window.DonateProjects       = DonateProjects;
window.DonateFAQ            = DonateFAQ;
