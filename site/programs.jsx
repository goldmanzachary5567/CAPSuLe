// Programs page — full detailed view of all five programs.

// Interactive CAPSuLe acronym with letter tooltips.
function CAPSuLeAcronym({ size }) {
  var fontSize = size || 'clamp(40px, 8vw, 100px)';
  var letters = [
    { l: 'C', word: 'Child',       italic: false },
    { l: 'A', word: 'Adolescent',  italic: false },
    { l: 'P', word: 'Performance', italic: false },
    { l: 'S', word: 'Science',     italic: false },
    { l: 'u', word: '&',           italic: true  },
    { l: 'L', word: 'Laboratory',  italic: false },
    { l: 'e', word: '',            italic: true  },
  ];
  var [hov, setHov] = React.useState(null);

  return (
    <div style={{ display: 'inline-flex', gap: 1, alignItems: 'flex-end' }}>
      {letters.map(function(lt, i) {
        return (
          <div key={i} style={{ position: 'relative', cursor: lt.word ? 'help' : 'default' }}
            onMouseEnter={function(){ if (lt.word) setHov(i); }}
            onMouseLeave={function(){ setHov(null); }}
          >
            <span style={{
              fontFamily: window.CL.display,
              fontSize: fontSize,
              fontWeight: 500,
              fontStyle: lt.italic ? 'italic' : 'normal',
              lineHeight: 0.92,
              color: hov === i ? window.CL.signal : window.CL.ink,
              transition: 'color .15s',
              display: 'block',
            }}>
              {lt.l}
            </span>
            {hov === i && lt.word && (
              <div style={{
                position: 'absolute', bottom: '110%', left: '50%',
                transform: 'translateX(-50%)',
                background: window.CL.ink, color: window.CL.paper,
                padding: '5px 10px', fontFamily: window.CL.mono,
                fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase',
                whiteSpace: 'nowrap', zIndex: 20, marginBottom: 4,
                pointerEvents: 'none',
              }}>
                {lt.word}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Interactive donut chart for WordRx budget (dark-background variant).
function DonutChart({ budget, total }) {
  var isMobile = useIsMobile();
  var [hovered, setHovered] = React.useState(null);
  var r = 38, cx = 50, cy = 50, sw = 18;
  var circ = 2 * Math.PI * r;
  var offset = 0;
  var segments = budget.map(function(item) {
    var dash = (item.amount / total) * circ;
    var seg = { name: item.name, amount: item.amount, group: item.group, color: item.color, dash: dash, offset: offset };
    offset += dash;
    return seg;
  });
  var activeItem = hovered !== null ? budget[hovered] : null;

  return (
    <div style={{ display: 'flex', gap: isMobile ? 20 : 40, alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ position: 'relative', width: 180, height: 180, flexShrink: 0 }}>
        <svg width={180} height={180} viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', filter: 'drop-shadow(0 0 16px rgba(200,69,58,0.18))' }}>
          {segments.map(function(seg, i) {
            var gap = circ - seg.dash;
            return (
              <circle key={i} cx={cx} cy={cy} r={r} fill="none"
                stroke={seg.color}
                strokeWidth={hovered === i ? sw + 4 : sw - (hovered !== null ? 2 : 0)}
                strokeDasharray={seg.dash + ' ' + gap}
                strokeDashoffset={-seg.offset}
                style={{ cursor: 'pointer', transition: 'stroke-width 0.2s, opacity 0.2s', opacity: hovered !== null && hovered !== i ? 0.3 : 1 }}
                onMouseEnter={function() { setHovered(i); }}
                onMouseLeave={function() { setHovered(null); }}
              />
            );
          })}
        </svg>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', pointerEvents: 'none' }}>
          {activeItem ? (
            <div>
              <div style={{ fontFamily: window.CL.mono, fontSize: 8, color: 'rgba(245,239,226,.5)', letterSpacing: '.1em', marginBottom: 2 }}>{Math.round(activeItem.amount / total * 100)}%</div>
              <div style={{ fontFamily: window.CL.display, fontSize: 14, fontWeight: 500, color: 'rgba(245,239,226,.95)', lineHeight: 1.1 }}>${activeItem.amount.toLocaleString()}</div>
            </div>
          ) : (
            <div>
              <div style={{ fontFamily: window.CL.mono, fontSize: 7, color: 'rgba(245,239,226,.4)', marginBottom: 2 }}>TOTAL</div>
              <div style={{ fontFamily: window.CL.display, fontSize: 15, fontWeight: 500, color: 'rgba(245,239,226,.9)', lineHeight: 1 }}>${total.toLocaleString()}</div>
            </div>
          )}
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 200 }}>
        {['Production', 'Post-Production'].map(function(group) {
          var groupItems = budget.filter(function(b) { return b.group === group; });
          var groupTotal = groupItems.reduce(function(s, b) { return s + b.amount; }, 0);
          return (
            <div key={group} style={{ marginBottom: 14 }}>
              <div className="cl-mono" style={{ color: 'rgba(245,239,226,.4)', fontSize: 9, marginBottom: 6 }}>{group.toUpperCase()} · ${groupTotal.toLocaleString()}</div>
              {groupItems.map(function(item) {
                var i = budget.indexOf(item);
                return (
                  <div key={item.name}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 8px', cursor: 'pointer', transition: 'background .15s', background: hovered === i ? 'rgba(245,239,226,.08)' : 'transparent' }}
                    onMouseEnter={function() { setHovered(i); }}
                    onMouseLeave={function() { setHovered(null); }}
                  >
                    <span style={{ width: 10, height: 10, borderRadius: 2, background: item.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: window.CL.serif, fontSize: 13, color: 'rgba(245,239,226,.8)', flex: 1 }}>{item.name}</span>
                    <span style={{ fontFamily: window.CL.mono, fontSize: 9, color: 'rgba(245,239,226,.45)' }}>${item.amount.toLocaleString()} · {Math.round(item.amount / total * 100)}%</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// MicroDose course launch modal with live countdown.
function MicroDoseModal({ onClose }) {
  var isMobile = useIsMobile();
  var [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(function() {
    var launch = new Date('2026-09-18T00:00:00');
    function tick() {
      var diff = launch - new Date();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      });
    }
    tick();
    var id = setInterval(tick, 1000);
    return function() { clearInterval(id); };
  }, []);

  var modules = [
    { l: 'C', full: 'Child',         desc: 'Child-centered development — the science of how young people grow',                pct: 10 },
    { l: 'A', full: 'Adolescent',    desc: 'Adolescent neuroscience — brain development and behavioral implications',            pct: 10 },
    { l: 'P', full: 'Performance',   desc: 'Performance science — how environment shapes outcomes in school and sport',          pct: 10 },
    { l: 'S', full: 'Science',       desc: 'Science translation — turning research into practical, actionable guidance',         pct: 10 },
    { l: 'u', full: 'Understanding', desc: 'Understanding communication — language as a tool for connection and healing',        pct: 10 },
    { l: 'L', full: 'Laboratory',    desc: 'Lab to life — bringing clinical-grade rigor into everyday home and classroom use',   pct: 10 },
    { l: 'e', full: 'Evidence',      desc: 'Evidence-based outcomes — measuring what matters for children and families',         pct: 10 },
  ];

  return (
    <div
      onClick={function(e) { if (e.target === e.currentTarget) onClose(); }}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? 16 : 32, background: 'rgba(11,27,38,.84)', backdropFilter: 'blur(4px)' }}
    >
      <div style={{ background: window.CL.paper, maxWidth: 760, width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
        <button
          onClick={onClose}
          style={{ position: 'sticky', top: 0, float: 'right', zIndex: 10, padding: '12px 18px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', cursor: 'pointer', border: 'none' }}
        >CLOSE ×</button>

        <div style={{ padding: isMobile ? '28px 20px 40px' : '40px 40px 52px', clear: 'right' }}>
          <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 12 }}>PRX-MICRO · COURSE PREVIEW</div>
          <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 38 : 56, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', color: window.CL.ink, marginBottom: 10 }}>
            Micro<em style={{ color: window.CL.signal }}>Dose</em>
          </div>
          <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 17, color: window.CL.inkSoft, margin: '0 0 36px' }}>
            Science-based courses for the people raising the next generation.
          </p>

          {/* Live countdown */}
          <div style={{ background: window.CL.ink, color: window.CL.paper, padding: isMobile ? '24px 20px' : '28px 32px', marginBottom: 40 }}>
            <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 18 }}>COURSE LAUNCH — SEPTEMBER 18, 2026</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(245,239,226,.15)' }}>
              {[{ v: timeLeft.days, l: 'DAYS' }, { v: timeLeft.hours, l: 'HOURS' }, { v: timeLeft.minutes, l: 'MIN' }, { v: timeLeft.seconds, l: 'SEC' }].map(function(unit) {
                return (
                  <div key={unit.l} style={{ background: window.CL.ink, padding: isMobile ? '16px 8px' : '22px 16px', textAlign: 'center' }}>
                    <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 38 : 60, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1, color: window.CL.paper }}>
                      {String(unit.v).padStart(2, '0')}
                    </div>
                    <div className="cl-mono" style={{ color: 'rgba(245,239,226,.4)', marginTop: 8 }}>{unit.l}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Course modules — CAPSuLe acronym */}
          <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 20 }}>COURSE MODULES — CONTENT IN DEVELOPMENT</div>
          <div style={{ borderTop: `1.5px solid ${window.CL.ink}` }}>
            {modules.map(function(mod) {
              return (
                <div key={mod.l} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '210px 1fr', gap: isMobile ? 6 : 28, padding: '20px 0', borderBottom: `1px solid ${window.CL.rule}`, alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ fontFamily: window.CL.display, fontSize: isMobile ? 36 : 44, fontWeight: 500, color: window.CL.signal, lineHeight: 1, minWidth: 32 }}>{mod.l}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: window.CL.display, fontSize: 19, fontWeight: 500, letterSpacing: '-0.01em', color: window.CL.ink, marginBottom: 6 }}>{mod.full}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ flex: 1, height: 3, background: window.CL.rule, borderRadius: 3, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: mod.pct + '%', background: window.CL.signal, borderRadius: 3 }} />
                        </div>
                        <span className="cl-mono" style={{ color: window.CL.inkSoft, fontSize: 9 }}>{mod.pct}%</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 14, color: window.CL.inkSoft, margin: 0, lineHeight: 1.55 }}>{mod.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Distribution note */}
          <div style={{ marginTop: 32, padding: '20px 24px', background: window.CL.paperWarm, borderLeft: `3px solid ${window.CL.signal}` }}>
            <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 8 }}>DISTRIBUTION</div>
            <p style={{ fontFamily: window.CL.serif, fontSize: 15, color: window.CL.inkSoft, margin: 0, lineHeight: 1.55 }}>
              MicroDose will be distributed via <strong style={{ color: window.CL.ink }}>Coursera</strong> alongside a formal book and e-book. Enrollment opens September 18, 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Programs() {
  var isMobile = useIsMobile();
  var pad = isMobile ? '0 20px' : '0 32px';
  var secPad = isMobile ? '64px 0' : '100px 0';
  var [showMicroModal, setShowMicroModal] = React.useState(false);

  var partners = [
    { name: 'Harvard University',       dept: 'Medical School affiliations' },
    { name: 'Cornell University',       dept: 'Human Development' },
    { name: 'Columbia University',      dept: 'Teachers College' },
    { name: 'Johns Hopkins University', dept: 'School of Education' },
    { name: 'University of Toronto',    dept: 'Learning and Neural Development Lab' },
  ];

  var wordrxBudget = [
    { name: 'Gear + Insurance',        amount: 4000, group: 'Production',      color: '#c8453a' },
    { name: 'Crew Compensation',       amount: 3000, group: 'Production',      color: '#d9693e' },
    { name: 'Meals',                   amount: 2000, group: 'Production',      color: '#e8a060' },
    { name: 'Travel & Accommodations', amount: 1000, group: 'Production',      color: '#f2cab4' },
    { name: 'E&O Insurance',           amount: 3000, group: 'Post-Production', color: '#4a8a6a' },
    { name: 'Sound Mixing',            amount: 2000, group: 'Post-Production', color: '#72b890' },
    { name: 'Color Grading',           amount: 1000, group: 'Post-Production', color: '#a8d4b8' },
  ];
  var wordrxTotal = 16000;

  var featuredEps = [
    { no: '008', title: 'Sport as a Laboratory for Learning Confidence in Youth', guest: 'Dr. Jonathan Jenkins', tag: 'COACHING', yt: 'https://www.youtube.com/watch?v=dcOqvhIQw3M' },
    { no: '007', title: 'More Than a Diagnosis: The Brain-Body Connection in Mental Health', guest: 'Dr. Emily Smith', tag: 'CLINICAL', yt: 'https://www.youtube.com/watch?v=vfoXX4na5Ek' },
    { no: '005', title: 'Nutrition, Performance, and the Power of Clean Fuel', guest: 'Dr. Mary Balliett', tag: 'NUTRITION', yt: 'https://www.youtube.com/watch?v=2JsgKUFkpy0' },
  ];


  return (
    <React.Fragment>

      {/* Programs Hero */}
      <section style={{ padding: isMobile ? '64px 0' : '96px 0', borderBottom: `1.5px solid ${window.CL.ink}`, background: window.CL.paper }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 14, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>§ 04 — What We Build</div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft }}>05 programs · Compounding impact</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80, marginBottom: 64 }}>
            <h1 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 48 : 64, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
              One mission,<br /><em style={{ color: window.CL.signal }}>five doses.</em>
            </h1>
            <p style={{ fontFamily: window.CL.serif, fontSize: 18, lineHeight: 1.55, color: window.CL.ink, margin: 0, textWrap: 'pretty', alignSelf: 'flex-end' }}>
              CAPSuLe ships documentaries, courses, essays, and a podcast that compound into durable infrastructure for the people raising kids. Hover over each letter below to see what we stand for.
            </p>
          </div>

          {/* Interactive acronym */}
          <div style={{ marginBottom: 8 }}>
            <CAPSuLeAcronym />
          </div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 0, fontSize: 10 }}>Hover each letter · Child and Adolescent Performance Science Laboratory</div>
        </div>
      </section>

      {/* ── Prescribed Dose ────────────────────────────────── */}
      <section id="prescribed-dose" style={{ padding: secPad, background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-DOSE · Blog</div>
            <div style={{ display: 'inline-block', padding: '4px 10px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>WEEKLY</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80 }}>
            <div>
              <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.025em', color: window.CL.ink, marginBottom: 16 }}>Prescribed Dose</div>
              <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 18, color: window.CL.signal, margin: '0 0 20px', lineHeight: 1.4 }}>Research, written like advice from a friend.</p>
              <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>
                Short, structured pieces that translate one principle from the scientific literature into two or three things a parent, teacher, or coach can do today — with the science behind why it works. Each essay is around 600 words, rigorously sourced, and written to be shared.
              </p>
              <a href="https://www.thecapsl.org/blog"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 28, padding: '14px 22px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}
                onMouseEnter={function(e){ e.currentTarget.style.background = window.CL.signal; }}
                onMouseLeave={function(e){ e.currentTarget.style.background = window.CL.ink; }}
              >
                Read the blog →
              </a>
            </div>
            <div style={{ border: `1.5px solid ${window.CL.ink}`, padding: '28px 24px', background: window.CL.paper }}>
              <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 18 }}>ABOUT THIS PROGRAM</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { k: 'Format',       v: 'Written essay' },
                  { k: 'Cadence',      v: 'Weekly' },
                  { k: 'Audience',     v: 'Parents, educators, coaches, clinicians' },
                  { k: 'Platform',     v: 'thecapsl.org/blog + newsletter' },
                  { k: 'Length',       v: '~600 words per piece' },
                ].map(function(r) {
                  return (
                    <div key={r.k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, borderBottom: `1px solid ${window.CL.rule}`, paddingBottom: 10 }}>
                      <span className="cl-mono" style={{ color: window.CL.inkSoft }}>{r.k}</span>
                      <span style={{ fontFamily: window.CL.serif, fontSize: 15, color: window.CL.ink, textAlign: 'right' }}>{r.v}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MicroDose ──────────────────────────────────────── */}
      <section id="microdose" style={{ padding: secPad, background: window.CL.paper, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-MICRO · Course Series</div>
            <div style={{ display: 'inline-block', padding: '4px 10px', border: `1px solid ${window.CL.ink}`, color: window.CL.ink, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>LAUNCHING 2026</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80 }}>
            <div>
              <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.025em', color: window.CL.ink, marginBottom: 16 }}>MicroDose</div>
              <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 18, color: window.CL.signal, margin: '0 0 20px', lineHeight: 1.4 }}>Science-based courses for the people raising the next generation.</p>
              <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>
                A micro-course series designed for educators and parents. The 2026 installments are <strong>The Learning Environment</strong> — for educators — and <strong>The Home Environment</strong> — for parents. Distributed via Coursera, alongside a formal book and e-book release.
              </p>
            </div>

            {/* Course preview — opens modal */}
            <button
              onClick={function() { setShowMicroModal(true); }}
              style={{ border: `1.5px solid ${window.CL.ink}`, padding: '40px 28px', background: window.CL.paperWarm, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 16, cursor: 'pointer', width: '100%', transition: 'background .2s' }}
              onMouseEnter={function(e) { e.currentTarget.style.background = window.CL.paper; }}
              onMouseLeave={function(e) { e.currentTarget.style.background = window.CL.paperWarm; }}
            >
              <div className="cl-mono" style={{ color: window.CL.signal }}>COURSE PREVIEW</div>
              <div style={{ fontFamily: window.CL.display, fontSize: 22, fontWeight: 500, color: window.CL.ink, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                Preview the course<br />curriculum →
              </div>
              <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 15, color: window.CL.inkSoft, margin: 0 }}>
                Live countdown to launch · All 7 course modules · September 18, 2026
              </p>
              <div className="cl-mono" style={{ color: window.CL.inkSoft, marginTop: 8 }}>Distribution: Coursera · Book · E-book</div>
            </button>
            {showMicroModal && <MicroDoseModal onClose={function() { setShowMicroModal(false); }} />}
          </div>
        </div>
      </section>

      {/* ── Effective Dose ─────────────────────────────────── */}
      <section id="effective-dose" style={{ padding: secPad, background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-EFFECT · Podcast</div>
            <div style={{ display: 'inline-block', padding: '4px 10px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>ACTIVE</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80, marginBottom: 56 }}>
            <div>
              <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 56, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.025em', color: window.CL.ink, marginBottom: 16 }}>Effective Dose</div>
              <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 18, color: window.CL.signal, margin: '0 0 20px', lineHeight: 1.4 }}>Conversations with the people doing the science.</p>
              <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>
                Long-form interviews with researchers, clinicians, and practitioners. The archive that anchors everything we make. Eight episodes available on Spotify, Apple Podcasts, and YouTube.
              </p>
            </div>

            {/* Coming soon: in-person dinner */}
            <div style={{ border: `1.5px solid ${window.CL.ink}`, padding: '28px 24px', background: window.CL.paper }}>
              <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 16 }}>WHAT'S NEXT</div>
              <div style={{ fontFamily: window.CL.display, fontSize: 26, fontWeight: 500, letterSpacing: '-0.015em', color: window.CL.ink, marginBottom: 12 }}>The Effective Dose Dinner</div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.6, color: window.CL.inkSoft, margin: '0 0 16px', textWrap: 'pretty' }}>
                An intimate in-person dinner bringing together researchers, clinicians, and community builders for an evening of candid conversation. Seats are limited. Stay tuned for dates and locations.
              </p>
              <div style={{ display: 'inline-block', padding: '4px 10px', border: `1px solid ${window.CL.ink}`, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em', color: window.CL.ink }}>COMING SOON</div>
            </div>
          </div>

          {/* Featured episodes */}
          <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 20 }}>FEATURED EPISODES</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1.5px solid ${window.CL.ink}` }}>
            {featuredEps.map(function(ep) {
              return (
                <div key={ep.no} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '80px 1fr auto', gap: isMobile ? 8 : 24, alignItems: 'center', padding: '20px 0', borderBottom: `1px solid ${window.CL.rule}` }}>
                  <div className="cl-mono" style={{ color: window.CL.signal }}>No. {ep.no}</div>
                  <div>
                    <div style={{ fontFamily: window.CL.serif, fontSize: 17, fontWeight: 600, color: window.CL.ink, marginBottom: 4, lineHeight: 1.3 }}>{ep.title}</div>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 14, color: window.CL.inkSoft }}>{ep.guest}</span>
                      <span style={{ display: 'inline-block', padding: '2px 6px', border: `1px solid ${window.CL.rule}`, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em', color: window.CL.inkSoft }}>{ep.tag}</span>
                    </div>
                  </div>
                  <a href={ep.yt} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0, marginTop: isMobile ? 8 : 0 }}
                    onMouseEnter={function(e){ e.currentTarget.style.background = window.CL.signal; }}
                    onMouseLeave={function(e){ e.currentTarget.style.background = window.CL.ink; }}
                  >
                    Watch →
                  </a>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="https://www.youtube.com/@Effective-Dose" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', border: `1.5px solid ${window.CL.ink}`, background: 'transparent', color: window.CL.ink, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}>
              YouTube →
            </a>
            <a href="https://open.spotify.com/show/6sfUU9Upubmm1TCRt6O2d0" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', border: `1.5px solid ${window.CL.ink}`, background: 'transparent', color: window.CL.ink, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}>
              Spotify →
            </a>
          </div>
        </div>
      </section>

      {/* ── WordRx ─────────────────────────────────────────── */}
      <section id="wordrx" style={{ padding: secPad, background: window.CL.ink, color: window.CL.paper, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: pad }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid rgba(245,239,226,.3)`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>PRX-WORDRX · Documentary Film</div>
            <div style={{ display: 'inline-block', padding: '4px 10px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 9, letterSpacing: '.18em' }}>IN PRODUCTION</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80, marginBottom: 56 }}>
            <div>
              <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 40 : 64, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', marginBottom: 16 }}>WordRx</div>
              <p style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 18, color: window.CL.signal, margin: '0 0 20px', lineHeight: 1.4 }}>The hidden prescription behind healing.</p>
              <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: 'rgba(245,239,226,.8)', margin: 0, textWrap: 'pretty' }}>
                Our flagship feature documentary following four "word pharmacists" — a teacher, a parent, a clinician, a coach — making the case that language itself is a therapeutic tool. Filming December 2026 in Belleair, FL, with distribution via Amazon Prime Video.
              </p>
              <a href="Donate.html"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 28, padding: '14px 22px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}>
                Fund WordRx →
              </a>
            </div>

            {/* Funding thermometer */}
            <div>
              <Thermometer label="WORDRX PRODUCTION FUND" raised="$xx,xxx" goal="$16,000" pct={0} note="FILMING DEC 2026 · BELLEAIR, FL" />
            </div>
          </div>

          {/* Poster / elevator pitch placeholder + pie chart */}
          <div className="cl-grid-2" style={{ gap: isMobile ? 32 : 80, borderTop: `1px solid rgba(245,239,226,.2)`, paddingTop: 48 }}>
            {/* Poster placeholder */}
            <div>
              <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)', marginBottom: 16 }}>FILM POSTER & ELEVATOR PITCH</div>
              <div style={{ border: `1.5px dashed rgba(245,239,226,.3)`, padding: '48px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, textAlign: 'center', minHeight: 240, background: 'rgba(245,239,226,.04)' }}>
                <div className="cl-mono" style={{ color: 'rgba(245,239,226,.4)' }}>POSTER</div>
                <div style={{ fontFamily: window.CL.display, fontStyle: 'italic', fontSize: 20, color: 'rgba(245,239,226,.4)' }}>Coming soon</div>
                <p style={{ fontFamily: window.CL.serif, fontSize: 14, color: 'rgba(245,239,226,.4)', margin: 0, maxWidth: 280 }}>
                  "A film about the words that heal — and the people who prescribe them."
                </p>
              </div>
            </div>

            {/* Pie chart */}
            <div>
              <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)', marginBottom: 20 }}>PRODUCTION BUDGET ALLOCATION</div>
              <div style={{ background: 'rgba(245,239,226,.06)', border: `1px solid rgba(245,239,226,.15)`, padding: '28px 24px' }}>
                <DonutChart budget={wordrxBudget} total={wordrxTotal} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  );
}

window.Programs       = Programs;
window.CAPSuLeAcronym = CAPSuLeAcronym;
