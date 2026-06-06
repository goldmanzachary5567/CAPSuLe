// Join Us — professional collaborators and team applicants forms.

function JoinUsForm({ title, description, fields, subject, submitLabel }) {
  var isMobile = useIsMobile();
  var [form, setForm] = React.useState({});
  var [sent, setSent] = React.useState(false);

  function handleChange(e) {
    var f = Object.assign({}, form);
    f[e.target.name] = e.target.value;
    setForm(f);
  }

  function handleSubmit(e) {
    e.preventDefault();
    var lines = fields.map(function(f) {
      return (f.label || f.name) + ': ' + (form[f.name] || '');
    });
    var body = lines.join('\n\n');
    window.location.href = 'mailto:keton@thecapsl.org?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setSent(true);
  }

  if (sent) {
    return (
      <div style={{ padding: '40px 32px', background: window.CL.paperWarm, border: `1.5px solid ${window.CL.ink}`, textAlign: 'center' }}>
        <div style={{ fontFamily: window.CL.display, fontSize: 28, fontWeight: 500, color: window.CL.signal, marginBottom: 12 }}>Your email is ready.</div>
        <p style={{ fontFamily: window.CL.serif, fontSize: 16, color: window.CL.inkSoft, margin: 0 }}>
          Your email client should have opened with a pre-filled message to keton@thecapsl.org. Please send it to complete your submission.
        </p>
        <button onClick={function(){ setSent(false); setForm({}); }}
          style={{ marginTop: 20, padding: '12px 24px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', cursor: 'pointer', border: 'none' }}>
          Submit another →
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: window.CL.paper, border: `1.5px solid ${window.CL.ink}`, padding: isMobile ? '28px 20px' : '40px 36px' }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: window.CL.display, fontSize: isMobile ? 28 : 36, fontWeight: 500, letterSpacing: '-0.02em', color: window.CL.ink, marginBottom: 12 }}>{title}</div>
        <p style={{ fontFamily: window.CL.serif, fontSize: 16, lineHeight: 1.55, color: window.CL.inkSoft, margin: 0 }}>{description}</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {fields.map(function(f) {
          return (
            <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.inkSoft }}>{f.label}</label>
              {f.type === 'textarea' ? (
                <textarea
                  name={f.name}
                  value={form[f.name] || ''}
                  onChange={handleChange}
                  placeholder={f.placeholder || ''}
                  required={f.required !== false}
                  className="cl-input"
                  rows={4}
                />
              ) : f.type === 'select' ? (
                <select name={f.name} value={form[f.name] || ''} onChange={handleChange} required={f.required !== false} className="cl-input">
                  <option value="">Select…</option>
                  {f.options.map(function(o){ return <option key={o} value={o}>{o}</option>; })}
                </select>
              ) : (
                <input
                  type={f.type || 'text'}
                  name={f.name}
                  value={form[f.name] || ''}
                  onChange={handleChange}
                  placeholder={f.placeholder || ''}
                  required={f.required !== false}
                  className="cl-input"
                />
              )}
            </div>
          );
        })}

        <button type="submit"
          style={{ marginTop: 8, padding: '16px 28px', background: window.CL.signal, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', cursor: 'pointer', border: 'none', alignSelf: 'flex-start', transition: 'background .15s' }}
          onMouseEnter={function(e){ e.currentTarget.style.background = window.CL.ink; }}
          onMouseLeave={function(e){ e.currentTarget.style.background = window.CL.signal; }}
        >
          {submitLabel || 'Send application →'}
        </button>
      </form>
    </div>
  );
}

function JoinUs() {
  var isMobile = useIsMobile();

  var collabFields = [
    { name: 'fullName',     label: 'Full Name',        type: 'text',     placeholder: 'Dr. Jane Smith' },
    { name: 'institution',  label: 'Institution',      type: 'text',     placeholder: 'University or organization' },
    { name: 'role',         label: 'Current Role',     type: 'text',     placeholder: 'e.g. Assistant Professor, Clinician' },
    { name: 'email',        label: 'Email',            type: 'email',    placeholder: 'you@institution.edu' },
    { name: 'area',         label: 'Area of Expertise',type: 'text',     placeholder: 'e.g. Developmental neuroscience, Pediatric PT' },
    { name: 'collab',       label: 'How you\'d like to collaborate', type: 'textarea', placeholder: 'Tell us about the type of partnership you have in mind…' },
  ];

  var teamFields = [
    { name: 'fullName',     label: 'Full Name',        type: 'text',     placeholder: 'Your name' },
    { name: 'email',        label: 'Email',            type: 'email',    placeholder: 'your@email.com' },
    { name: 'school',       label: 'School / Institution', type: 'text', placeholder: 'Where are you currently studying or working?' },
    { name: 'role',         label: 'Desired Role',     type: 'select',   options: [
      'Content & Writing', 'Video & Media Production', 'Digital Design',
      'Research & Science', 'Operations & Logistics', 'Clinical Integration',
      'Community Outreach', 'Other',
    ]},
    { name: 'why',          label: 'Why CAPSuLe?',     type: 'textarea', placeholder: 'What draws you to this mission and what would you bring to the team?' },
    { name: 'links',        label: 'Portfolio / LinkedIn (optional)', type: 'text', placeholder: 'URL or LinkedIn profile', required: false },
  ];

  return (
    <React.Fragment>
      {/* Hero */}
      <section style={{ padding: isMobile ? '64px 0 56px' : '96px 0 80px', borderBottom: `1.5px solid ${window.CL.ink}`, background: window.CL.paper }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 14, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>Join Us</div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft }}>Open applications</div>
          </div>

          <div className="cl-grid-2">
            <div>
              <h1 style={{ fontFamily: window.CL.display, fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 500, lineHeight: 0.92, letterSpacing: '-0.035em', margin: 0, color: window.CL.ink, textWrap: 'balance' }}>
                Build the bridge<br />with <em style={{ color: window.CL.signal }}>us.</em>
              </h1>
            </div>
            <div style={{ alignSelf: 'flex-end' }}>
              <p style={{ fontFamily: window.CL.serif, fontSize: 19, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>
                Whether you're a researcher, clinician, student, or creator — if you believe developmental science should reach every classroom, clinic, and living room, we want to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section id="collaborate" style={{ padding: isMobile ? '64px 0' : '100px 0', background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>§ 01 — Professional Collaborators</div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft }}>Researchers · Clinicians · Institutions</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 40 : 72, alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 36 : 48, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink, textWrap: 'balance', marginBottom: 24 }}>
                Partner with our research network.
              </h2>
              <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>
                We work with researchers, clinicians, educators, and institutions who want their work to reach beyond journal pages. If you have findings, expertise, or a platform that aligns with our mission, let's talk.
              </p>
              <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Podcast guest or co-production', 'Research collaboration or consultation', 'Institutional partnership', 'Course or content development'].map(function(item) {
                  return (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 5, height: 5, borderRadius: 5, background: window.CL.signal, flexShrink: 0 }} />
                      <span style={{ fontFamily: window.CL.serif, fontSize: 15, color: window.CL.ink }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <JoinUsForm
              title="Reach out"
              description="Tell us about yourself and how you'd like to get involved. We'll follow up within a few days."
              fields={collabFields}
              subject="CAPSuLe — Professional Collaboration Inquiry"
              submitLabel="Send inquiry →"
            />
          </div>
        </div>
      </section>

      {/* Team applications */}
      <section id="apply" style={{ padding: isMobile ? '64px 0' : '100px 0', background: window.CL.paper, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>§ 02 — Join the Team</div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft }}>Students · Creators · Builders</div>
          </div>

          <div className="cl-grid-2" style={{ gap: isMobile ? 40 : 72, alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 36 : 48, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink, textWrap: 'balance', marginBottom: 24 }}>
                Translate science for a living.
              </h2>
              <p style={{ fontFamily: window.CL.serif, fontSize: 17, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0, textWrap: 'pretty' }}>
                Our team is made up of students, researchers, and creators who believe science belongs in every room. We're a volunteer-driven organization that offers real responsibility, mentorship, and the chance to build something that matters.
              </p>
              <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Remote, flexible commitment', 'Gain production and research experience', 'Work alongside researchers and clinicians', 'Build something with impact'].map(function(item) {
                  return (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 5, height: 5, borderRadius: 5, background: window.CL.signal, flexShrink: 0 }} />
                      <span style={{ fontFamily: window.CL.serif, fontSize: 15, color: window.CL.ink }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <JoinUsForm
              title="Apply to join"
              description="Tell us who you are and how you'd like to contribute. No experience is too niche — we have roles across writing, production, design, research, and operations."
              fields={teamFields}
              subject="CAPSuLe — Team Application"
              submitLabel="Send application →"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.JoinUs = JoinUs;
