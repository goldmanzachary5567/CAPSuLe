// Programs — § 04 What We Build

function Programs({ preview = false }) {
  const programs = [
    {
      no: '01', code: 'PRX-WORDRX',  name: 'WordRx',           kind: 'Documentary Film',
      tagline: 'The hidden prescription behind healing.',
      blurb: 'Our flagship feature documentary. Following four "word pharmacists" — a teacher, a parent, a clinician, a coach — making the case that language itself is a therapeutic tool. Filming December 2026 in Belleair, FL, with distribution via Amazon Prime Video.',
      status: 'In production',
    },
    {
      no: '02', code: 'PRX-EXR',     name: 'Extended Release', kind: 'Documentary Film',
      tagline: 'Healthcare is often a translation problem.',
      blurb: 'A second documentary in development. The film follows patients before and after clinical visits, paired with clinicians and a medical-anthropology expert. The goal is to show what real care relationships look like and how to build them.',
      status: 'In development',
    },
    {
      no: '03', code: 'PRX-MICRO',   name: 'MicroDose',        kind: 'Course Series',
      tagline: 'Science-based courses for the people raising the next generation.',
      blurb: 'A micro-course series for educators and parents. The 2026 installments are The Learning Environment (for educators) and The Home Environment (for parents). Distributed via Coursera, alongside a formal book and e-book release.',
      status: 'Launching 2026',
    },
    {
      no: '04', code: 'PRX-DOSE',    name: 'Prescribed Dose',  kind: 'Blog',
      tagline: 'Research, written like advice from a friend.',
      blurb: 'Short, structured pieces that translate one principle from the literature into two or three things a parent, teacher, or coach can do today, with the science behind why it works.',
      status: 'Weekly',
    },
    {
      no: '05', code: 'PRX-EFFECT',  name: 'Effective Dose',   kind: 'Podcast',
      tagline: 'Conversations with the people doing the science.',
      blurb: 'Long-form interviews with researchers, clinicians, and practitioners. The archive that anchors everything we make. Eight episodes and counting, available on Spotify, Apple Podcasts, and YouTube.',
      status: 'Active',
    },
  ];

  const list = preview ? programs.slice(0, 3) : programs;

  return (
    <section id="programs" style={{ padding: '120px 0', background: window.CL.paperWarm, borderTop: `1.5px solid ${window.CL.ink}`, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 04 — What We Build</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>05 programs · Compounding impact</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 56 }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: 64, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
            One mission,<br /><em style={{ color: window.CL.signal }}>five doses.</em>
          </h2>
          <p style={{ fontFamily: window.CL.serif, fontSize: 19, lineHeight: 1.55, color: window.CL.ink, margin: 0, fontWeight: 400, textWrap: 'pretty', alignSelf: 'flex-end' }}>
            CAPSuLe ships documentaries, courses, essays, and a podcast that compound into durable infrastructure for the people raising kids. Every program shares one shape: take the best science, dose it, and deliver it where it can do real work.
          </p>
        </div>

        <div style={{ borderTop: `1.5px solid ${window.CL.ink}` }}>
          {list.map((p) => (
            <div key={p.no} style={{ display: 'grid', gridTemplateColumns: '60px 1.5fr 2fr 160px', gap: 24, alignItems: 'flex-start', padding: '32px 0', borderBottom: `1px solid ${window.CL.rule}` }}>
              <div className="cl-mono" style={{ color: window.CL.signal, paddingTop: 8 }}>No. {p.no}</div>
              <div>
                <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 8 }}>{p.code} · {p.kind}</div>
                <div style={{ fontFamily: window.CL.display, fontSize: 40, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', color: window.CL.ink }}>{p.name}</div>
                <div style={{ fontFamily: window.CL.serif, fontStyle: 'italic', fontSize: 16, color: window.CL.signal, marginTop: 10 }}>{p.tagline}</div>
              </div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 16, lineHeight: 1.55, color: window.CL.inkSoft, margin: 0, paddingTop: 4, textWrap: 'pretty' }}>{p.blurb}</p>
              <div style={{ paddingTop: 8, textAlign: 'right' }}>
                <span style={{ display: 'inline-block', padding: '6px 10px', border: `1px solid ${window.CL.ink}`, fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.ink }}>{p.status}</span>
              </div>
            </div>
          ))}
        </div>

        {preview && (
          <div style={{ marginTop: 32, textAlign: 'right' }}>
            <a href="Programs.html" className="cl-link cl-mono" style={{ color: window.CL.ink }}>SEE ALL PROGRAMS →</a>
          </div>
        )}
      </div>
    </section>
  );
}

window.Programs = Programs;
