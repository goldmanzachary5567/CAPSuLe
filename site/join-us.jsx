// Join Us page — professional collaborators and team applicants.

function JoinUsHero() {
  const isMobile = window.useBreakpoint(768);
  return (
    <section style={{ padding: isMobile ? '64px 0 48px' : '96px 0 72px', borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 32 : 56 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 05 — Join Us</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>Open to researchers, clinicians & students</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? 24 : 80, alignItems: 'flex-end' }}>
          <h1 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 52 : 88, fontWeight: 500, lineHeight: 0.9, letterSpacing: '-0.035em', margin: 0, color: window.CL.ink }}>
            Join the<br /><em style={{ color: window.CL.signal }}>alliance.</em>
          </h1>
          <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 17 : 20, lineHeight: 1.55, color: window.CL.ink, margin: 0 }}>
            CAPSuLe is built by researchers, clinicians, educators, storytellers, and students who believe science belongs in the rooms where kids actually grow up. Whether you want to collaborate on a project or join the team, we want to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}

// Reusable contact form that opens a mailto on submit
function ContactForm({ id, title, subtitle, fields, emailTo, subject }) {
  const isMobile = window.useBreakpoint(768);
  const [values, setValues] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const set = (k, v) => setValues(prev => ({ ...prev, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = fields.map(f => `${f.label}: ${values[f.name] || ''}`).join('\n\n');
    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSent(true);
  };

  const inputStyle = {
    width: '100%', padding: '12px 14px', border: `1.5px solid ${window.CL.ink}`,
    background: window.CL.paper, fontFamily: window.CL.serif, fontSize: 15,
    color: window.CL.ink, outline: 'none', display: 'block',
    boxSizing: 'border-box',
  };

  return (
    <section id={id} style={{ padding: isMobile ? '64px 0' : '100px 0', borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 32 : 56 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>{title}</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>Forwarded to keton@thecapsl.org</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr', gap: isMobile ? 28 : 80 }}>
          <div>
            <h2 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 36 : 52, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.025em', margin: '0 0 20px', color: window.CL.ink }}>
              {title}
            </h2>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 16 : 18, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0 }}>{subtitle}</p>
          </div>

          {sent ? (
            <div style={{ padding: '40px', background: window.CL.paperWarm, border: `1.5px solid ${window.CL.ink}`, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ fontFamily: window.CL.display, fontSize: 28, fontWeight: 500, color: window.CL.ink }}>Your email client is opening.</div>
              <p style={{ fontFamily: window.CL.serif, fontSize: 16, color: window.CL.inkSoft, margin: 0, lineHeight: 1.5 }}>
                We have pre-filled your message. Please send it from your email client to complete your submission. If nothing opened, email us directly at <a href={`mailto:${emailTo}`} style={{ color: window.CL.signal }}>{emailTo}</a>.
              </p>
              <button onClick={() => setSent(false)} style={{ fontFamily: window.CL.mono, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.inkSoft, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, marginTop: 8 }}>
                Fill out again ↩
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                {fields.filter(f => f.type !== 'textarea').map(f => (
                  <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.inkSoft }}>
                      {f.label}{f.required && ' *'}
                    </label>
                    <input
                      type={f.type || 'text'}
                      required={f.required}
                      placeholder={f.placeholder || ''}
                      value={values[f.name] || ''}
                      onChange={e => set(f.name, e.target.value)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = window.CL.signal}
                      onBlur={e => e.target.style.borderColor = window.CL.ink}
                    />
                  </div>
                ))}
              </div>
              {fields.filter(f => f.type === 'textarea').map(f => (
                <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontFamily: window.CL.mono, fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: window.CL.inkSoft }}>
                    {f.label}{f.required && ' *'}
                  </label>
                  <textarea
                    required={f.required}
                    placeholder={f.placeholder || ''}
                    rows={f.rows || 5}
                    value={values[f.name] || ''}
                    onChange={e => set(f.name, e.target.value)}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                    onFocus={e => e.target.style.borderColor = window.CL.signal}
                    onBlur={e => e.target.style.borderColor = window.CL.ink}
                  />
                </div>
              ))}
              <button type="submit"
                style={{ alignSelf: 'flex-start', padding: '14px 32px', background: window.CL.ink, color: window.CL.paper, fontFamily: window.CL.mono, fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', border: `1px solid ${window.CL.ink}`, cursor: 'pointer', transition: 'background .15s' }}
                onMouseEnter={e => e.currentTarget.style.background = window.CL.signal}
                onMouseLeave={e => e.currentTarget.style.background = window.CL.ink}
              >
                Submit via Email →
              </button>
              <p style={{ fontFamily: window.CL.serif, fontSize: 13, color: window.CL.inkSoft, margin: 0, lineHeight: 1.5 }}>
                Clicking submit will open your email client with a pre-filled message. Alternatively, email us directly at <a href={`mailto:${emailTo}`} style={{ color: window.CL.signal }}>{emailTo}</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ProfessionalCollaboratorForm() {
  return (
    <ContactForm
      id="collaborate"
      title="Professional Collaboration"
      subtitle="Are you a researcher, clinician, educator, or practitioner interested in partnering with CAPSuLe? We work with professionals across disciplines to build programs that translate science into practice."
      emailTo="keton@thecapsl.org"
      subject="Professional Collaboration — CAPSuLe"
      fields={[
        { name: 'name',        label: 'Full name',      required: true },
        { name: 'email',       label: 'Email address',  required: true, type: 'email' },
        { name: 'title',       label: 'Title / Role',   required: true },
        { name: 'institution', label: 'Institution / Organization', required: true },
        { name: 'website',     label: 'Website or LinkedIn', required: false, placeholder: 'Optional' },
        { name: 'area',        label: 'Area of expertise', required: true },
        { name: 'interest',    label: 'How would you like to collaborate?', required: true, type: 'textarea', rows: 5,
          placeholder: 'Tell us about your research, your goals, and how you see a collaboration working...' },
      ]}
    />
  );
}

function TeamApplicationForm() {
  return (
    <ContactForm
      id="join-team"
      title="Join the Team"
      subtitle="CAPSuLe is built by passionate students, researchers, and storytellers committed to translating science into practice. We are always looking for people who share that mission. Tell us about yourself."
      emailTo="keton@thecapsl.org"
      subject="Team Application — CAPSuLe"
      fields={[
        { name: 'name',       label: 'Full name',        required: true },
        { name: 'email',      label: 'Email address',    required: true, type: 'email' },
        { name: 'role',       label: 'Current role / status', required: true, placeholder: 'e.g. Undergraduate student, PhD candidate, Physician...' },
        { name: 'school',     label: 'School or institution', required: false, placeholder: 'Optional' },
        { name: 'skills',     label: 'Skills / background', required: true, placeholder: 'e.g. Neuroscience, Film production, Graphic design...' },
        { name: 'interest',   label: 'What interests you about CAPSuLe?', required: true, type: 'textarea', rows: 4 },
        { name: 'contribute', label: 'What would you like to contribute?', required: true, type: 'textarea', rows: 4,
          placeholder: 'Tell us about any ideas you have or roles you are interested in...' },
      ]}
    />
  );
}

window.JoinUsHero                 = JoinUsHero;
window.ProfessionalCollaboratorForm = ProfessionalCollaboratorForm;
window.TeamApplicationForm         = TeamApplicationForm;
