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

// MicroDose course framework tracker — embedded inline, no modal.
function MicroDoseTracker() {
  var isMobile = useIsMobile();
  var [hovered, setHovered] = React.useState(null);
  var [fillIndices, setFillIndices] = React.useState([]);

  var chapters = [
    { letter: 'C', color: '#00c8f8', progress: 7,  name: 'Cognition & Learning',   tagline: 'How children think, remember, focus, and build knowledge',
      breakdown: [{ name: 'Expert Wishlist', val: 'Being built — 3 rows/member/week' }, { name: 'Module Topics', val: 'Memory, attention, executive function, language, metacognition' }, { name: 'Target Audience', val: 'Parents, Teachers, Coaches' }, { name: 'Status', val: 'Outreach launching — LinkedIn & email' }, { name: 'Goal', val: '15 expert clips × 3 course versions = 45 doses' }, { name: 'Course Format', val: '60s Expert + 60s Translation + 3min Recipe' }] },
    { letter: 'A', color: '#e8412a', progress: 5,  name: 'Athleticism & Movement',  tagline: 'Physical literacy, motor development, and the science of sport',
      breakdown: [{ name: 'Expert Wishlist', val: 'Being built — 3 rows/member/week' }, { name: 'Module Topics', val: 'Motor milestones, sports specialization, physical literacy, recovery' }, { name: 'Target Audience', val: 'Coaches & youth sport staff (primary), Parents' }, { name: 'Status', val: 'Wishlist seeding in progress' }, { name: 'Goal', val: 'Ideal expert: published clinician/scientist + public presence' }, { name: 'Course Format', val: '60s Expert + 60s Translation + 3min Recipe' }] },
    { letter: 'P', color: '#e8197a', progress: 4,  name: 'Physical Existence',       tagline: 'Nutrition, sleep, puberty, and the biology of a growing body',
      breakdown: [{ name: 'Expert Wishlist', val: 'Being built — 3 rows/member/week' }, { name: 'Module Topics', val: 'Puberty, nutrition, gut health, sleep science, chronic illness' }, { name: 'Target Audience', val: 'Parents & Caregivers (primary), Teachers' }, { name: 'Status', val: 'Outreach begins as spreadsheet fills' }, { name: 'Goal', val: 'Close 33% of wishlist → 105 experts total across all chapters' }, { name: 'Course Format', val: '60s Expert + 60s Translation + 3min Recipe' }] },
    { letter: 'S', color: '#9b3fd4', progress: 3,  name: 'Spiritual Existence',      tagline: 'Purpose, meaning, identity formation, and values in youth',
      breakdown: [{ name: 'Expert Wishlist', val: 'Being built — 3 rows/member/week' }, { name: 'Module Topics', val: 'Identity development, moral reasoning, meaning-making, awe' }, { name: 'Target Audience', val: 'Parents, Teachers, Coaches' }, { name: 'Status', val: 'Early planning — expert wishlist being seeded' }, { name: 'Goal', val: 'Most underrepresented domain in conventional child dev curricula' }, { name: 'Course Format', val: '60s Expert + 60s Translation + 3min Recipe' }] },
    { letter: 'U', color: '#2d5be8', progress: 6,  name: 'Universal Needs',         tagline: "What every child requires to thrive — safety, belonging, autonomy",
      breakdown: [{ name: 'Expert Wishlist', val: 'Being built — 3 rows/member/week' }, { name: 'Module Topics', val: 'Self-determination theory, poverty & adversity, trauma-informed care' }, { name: 'Target Audience', val: 'Teachers & school staff (primary), Coaches' }, { name: 'Status', val: 'Active wishlist — outreach launching in parallel' }, { name: 'Goal', val: 'TEDx preview Sept 18 — 2 letters fully LIVE' }, { name: 'Course Format', val: '60s Expert + 60s Translation + 3min Recipe' }] },
    { letter: 'L', color: '#f5c800', progress: 9,  name: 'Love & Attachment',       tagline: 'Bonding, secure base theory, and the relational roots of resilience',
      breakdown: [{ name: 'Expert Wishlist', val: 'Being built — furthest along of all 7 chapters' }, { name: 'Module Topics', val: 'Attachment styles, co-regulation, parenting warmth, peer relationships' }, { name: 'Target Audience', val: 'Parents & Caregivers (primary), Teachers' }, { name: 'Status', val: 'Video translations begin Aug 23 (Nate & Keton)' }, { name: 'Goal', val: 'Narrative translations (Emily, Avery, Zach) begin Aug 30' }, { name: 'Course Format', val: '60s Expert + 60s Translation + 3min Recipe' }] },
    { letter: 'E', color: '#f07800', progress: 5,  name: 'Emotion & Stress',        tagline: 'Emotional regulation, anxiety, dysregulation, and stress science',
      breakdown: [{ name: 'Expert Wishlist', val: 'Being built — 3 rows/member/week' }, { name: 'Module Topics', val: 'Polyvagal theory, co-regulation, anxiety in youth, emotion coaching' }, { name: 'Target Audience', val: 'Parents, Teachers, Coaches' }, { name: 'Status', val: 'Outreach launching — LinkedIn primary channel' }, { name: 'Goal', val: 'Full MicroDose course goes LIVE December 1, 2026' }, { name: 'Course Format', val: '60s Expert + 60s Translation + 3min Recipe' }] },
  ];

  // Inject fonts + wave CSS keyframes once
  React.useEffect(function() {
    var styleId = 'md-modal-css';
    if (!document.getElementById(styleId)) {
      var s = document.createElement('style');
      s.id = styleId;
      s.textContent = '@keyframes md-sl1{0%,100%{transform:translateX(0)}50%{transform:translateX(-25%)}} @keyframes md-sl2{0%,100%{transform:translateX(-20%)}50%{transform:translateX(0)}} .md-w1{animation:md-sl1 3s ease-in-out infinite;position:absolute;top:-7px;left:0;width:200%;height:14px} .md-w2{animation:md-sl2 3.6s ease-in-out infinite;opacity:0.5;position:absolute;top:-4px;left:0;width:200%;height:10px}';
      document.head.appendChild(s);
    }
    var linkId = 'md-fonts';
    if (!document.getElementById(linkId)) {
      var l = document.createElement('link');
      l.id = linkId; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap';
      document.head.appendChild(l);
    }
    chapters.forEach(function(ch, i) {
      setTimeout(function() { setFillIndices(function(prev) { return prev.concat([i]); }); }, 350 + i * 140);
    });
  }, []);

  var CARD_W = 82, CARD_H = 100, GAP_X = 14, STEP_Y = 18;
  var N = chapters.length;
  var stageNativeW = N * CARD_W + (N - 1) * GAP_X; // 658
  var stageH = CARD_H + (N - 1) * STEP_Y;           // 208
  var activeChapter = hovered !== null ? chapters[hovered] : null;

  // Scale stair to fit available content width
  var contentW = isMobile ? Math.max(280, window.innerWidth - 64) : Math.min(720, window.innerWidth - 160);
  var scale = Math.min(1, contentW / stageNativeW);

  return (
    <div style={{ background: '#0d1b3e', borderRadius: 14, border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', width: '100%' }}>
        <div style={{ padding: isMobile ? '28px 16px 40px' : '36px 40px 52px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8197a', display: 'block', marginBottom: 8 }}>
              MicroDose Series · CAPSuLe
            </span>
            <div style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: 'clamp(1.8rem,4.5vw,2.8rem)', letterSpacing: '0.05em', color: '#fff', lineHeight: 1, marginBottom: 6 }}>
              The <span style={{ color: '#5ba8c4' }}>Framework</span>
            </div>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: '0.9rem', color: '#7a9ab8', fontWeight: 400, margin: 0 }}>
              7 chapters · 15 modules each · 3 courses · Hover any letter to explore
            </p>
          </div>

          {/* Stair stage */}
          <div style={{ position: 'relative', width: stageNativeW * scale, height: stageH * scale, margin: '0 auto 32px', transformOrigin: 'top left' }}>
            {chapters.map(function(ch, i) {
              var isHov = hovered === i;
              var isFilled = fillIndices.indexOf(i) !== -1;
              return (
                <div key={ch.letter}
                  onMouseEnter={function() { setHovered(i); }}
                  onMouseLeave={function() { setHovered(null); }}
                  style={{
                    position: 'absolute',
                    left: i * (CARD_W + GAP_X) * scale,
                    top:  i * STEP_Y * scale,
                    width: CARD_W * scale,
                    height: CARD_H * scale,
                    cursor: 'pointer', borderRadius: 11, overflow: 'hidden',
                    border: '2px solid ' + ch.color + (isHov ? 'cc' : '38'),
                    boxShadow: isHov ? '0 0 22px 4px '+ch.color+'55,0 8px 30px rgba(0,0,0,.5)' : '0 0 8px 0 '+ch.color+'22',
                    transform: isHov ? 'scale(1.1) translateY(-5px)' : 'scale(1)',
                    transition: 'box-shadow .22s,border-color .22s,transform .25s cubic-bezier(.34,1.56,.64,1)',
                    zIndex: isHov ? 10 : 1,
                  }}>
                  <div style={{ position: 'absolute', inset: 0, background: '#0b1630' }} />
                  {/* Water fill */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderRadius: '0 0 9px 9px', height: isFilled ? ch.progress + '%' : '0%', background: ch.color + '28', transition: 'height 1.3s cubic-bezier(.22,1,.36,1)', overflow: 'hidden' }}>
                    <svg className="md-w1" viewBox="0 0 200 14" preserveAspectRatio="none">
                      <path d="M0,7 C25,0 50,14 75,7 C100,0 125,14 150,7 C175,0 200,14 200,7 L200,14 L0,14 Z" fill={ch.color + 'bb'} />
                    </svg>
                    <svg className="md-w2" viewBox="0 0 200 10" preserveAspectRatio="none">
                      <path d="M0,5 C30,0 60,10 90,5 C120,0 150,10 180,5 C190,2 200,8 200,5 L200,10 L0,10 Z" fill={ch.color + 'cc'} />
                    </svg>
                  </div>
                  {/* Glyph */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 3, gap: 2 }}>
                    <span style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: 3.4 * scale + 'rem', lineHeight: 1, color: ch.color, textShadow: '0 2px 10px rgba(0,0,0,.6)' }}>{ch.letter}</span>
                    <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: '0.66rem', fontWeight: 600, color: 'rgba(255,255,255,.75)', letterSpacing: '.05em' }}>{ch.progress}%</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Panel zone */}
          <div style={{ position: 'relative', minHeight: 220 }}>
            {/* Default description */}
            <div style={{ opacity: activeChapter ? 0 : 1, transition: 'opacity .22s', pointerEvents: activeChapter ? 'none' : 'auto', padding: '4px 0' }}>
              <div style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.35rem', letterSpacing: '0.1em', color: '#e0eaf5', marginBottom: 10 }}>What is MicroDose?</div>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: '0.93rem', color: '#a8c4dc', fontWeight: 600, lineHeight: 1.75, maxWidth: 520, marginBottom: 14 }}>
                MicroDose is CAPSuLe's flagship course — <strong style={{ color: '#d0e8f8', fontWeight: 700 }}>developmental science delivered in 5 minutes or less.</strong> Each module pairs a 60-second expert clip with a plain-language translation and a ready-to-use protocol. Three parallel courses serve: <strong style={{ color: '#d0e8f8', fontWeight: 700 }}>parents, teachers, and coaches.</strong>
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                {['315 Modules','3 Courses','7 Chapters','105 Experts','Live Dec 1, 2026'].map(function(p) {
                  return <span key={p} style={{ fontFamily: '"DM Sans",sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100, border: '1px solid rgba(255,255,255,.15)', color: '#7a9ab8' }}>{p}</span>;
                })}
              </div>
              <a href="mailto:microdose@thecapsl.org"
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 24px', background: 'linear-gradient(135deg,#1a2f5a,#16264d)', border: '2px solid rgba(255,255,255,.15)', borderRadius: 14, color: '#fff', textDecoration: 'none', transition: 'all .2s' }}
                onMouseEnter={function(e){ e.currentTarget.style.background='linear-gradient(135deg,#e8197a,#c8127a)'; e.currentTarget.style.borderColor='#e8197a'; }}
                onMouseLeave={function(e){ e.currentTarget.style.background='linear-gradient(135deg,#1a2f5a,#16264d)'; e.currentTarget.style.borderColor='rgba(255,255,255,.15)'; }}
              >
                <span style={{ fontSize: '1.6rem' }}>🎙️</span>
                <span style={{ flex: 1 }}>
                  <span style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.25rem', letterSpacing: '.06em', display: 'block', lineHeight: 1 }}>Are you — or do you know — a true expert?</span>
                  <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,.6)' }}>We're looking for leading scientists & clinicians to contribute to MicroDose</span>
                </span>
                <span style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,.5)' }}>→</span>
              </a>
            </div>

            {/* Hover panel */}
            {activeChapter && (
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', background: '#0b172f', border: '1px solid ' + activeChapter.color + '30', borderRadius: 14, padding: '20px 24px', boxShadow: '0 0 35px ' + activeChapter.color + '18,0 4px 24px rgba(0,0,0,.4)', transition: 'all .22s' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: '2.8rem', lineHeight: 1, color: activeChapter.color, flexShrink: 0, width: 48, textAlign: 'center' }}>{activeChapter.letter}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.45rem', letterSpacing: '.06em', color: '#fff', lineHeight: 1.1 }}>{activeChapter.name}</div>
                    <div style={{ fontFamily: '"DM Sans",sans-serif', fontSize: '0.88rem', color: '#7a9ab8', marginTop: 3 }}>{activeChapter.tagline}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                      <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,.08)', borderRadius: 100, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: activeChapter.progress + '%', borderRadius: 100, background: 'linear-gradient(90deg,' + activeChapter.color + '88,' + activeChapter.color + ')', transition: 'width .9s cubic-bezier(.22,1,.36,1)' }} />
                      </div>
                      <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: '0.72rem', color: '#7a9ab8', whiteSpace: 'nowrap' }}>{activeChapter.progress}% underway</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '8px 20px' }}>
                  {activeChapter.breakdown.map(function(b) {
                    return (
                      <div key={b.name} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>{b.name}</span>
                        <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: '0.88rem', color: '#d0dff0', lineHeight: 1.45 }}>{b.val}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}

function Programs() {
  var isMobile = useIsMobile();
  var pad = isMobile ? '0 20px' : '0 32px';
  var secPad = isMobile ? '64px 0' : '100px 0';

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

            {/* Course info card */}
            <div style={{ border: `1.5px solid ${window.CL.ink}`, padding: '28px 24px', background: window.CL.paperWarm }}>
              <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 18 }}>ABOUT THIS COURSE</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { k: 'Format',       v: '5-min micro-modules' },
                  { k: 'Chapters',     v: '7 · C A P S u L e' },
                  { k: 'Modules',      v: '315 total · 45 per chapter' },
                  { k: 'Courses',      v: 'Parents · Teachers · Coaches' },
                  { k: 'Distribution', v: 'Coursera · Book · E-book' },
                  { k: 'Launch',       v: 'December 1, 2026' },
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

          {/* Inline framework tracker */}
          <div style={{ marginTop: 48 }}>
            <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 16 }}>COURSE FRAMEWORK · HOVER ANY LETTER TO EXPLORE</div>
            <MicroDoseTracker />
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
            {/* Film poster + elevator pitch */}
            <div>
              <div className="cl-mono" style={{ color: 'rgba(245,239,226,.5)', marginBottom: 16 }}>FILM POSTER & ELEVATOR PITCH</div>
              {/* Poster cropped to remove pill pile at bottom */}
              <div style={{ overflow: 'hidden', borderRadius: 4, border: '1px solid rgba(245,239,226,.15)', marginBottom: 24 }}>
                <img
                  src="site/assets/WORDRX%20POSTER.png"
                  alt="WordRx — Film Poster"
                  style={{ width: '100%', display: 'block', marginBottom: '-36%' }}
                />
              </div>
              {/* Elevator pitch */}
              <p style={{ fontFamily: window.CL.serif, fontSize: 15, lineHeight: 1.7, color: 'rgba(245,239,226,.72)', margin: 0, textWrap: 'pretty' }}>
                Every single one of us carries a prescription in our pocket: our words. In WordRx, we'll prove that language is a potent therapeutic lever by exploring how words interact with individual minds to shape physiological change. Just like a clinician considers prescription and dosage based on individual factors, we must orient words toward the characteristics of the receiver, because what heals one soul can harm another. By blending raw stories and insights from behavioral neuroscience, we'll show that we're all practitioners of health. Viewers will walk away as newly trained linguistic pharmacists, understanding how we can shape prescriptions for the people in front of us to prompt more resilient health, whether we don a white coat or not.
              </p>
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
