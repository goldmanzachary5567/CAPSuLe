// Team and Board components for the About page.

function TeamPhoto({ name, src, objPos }) {
  var [err, setErr] = React.useState(false);
  var initials = name.split(' ').slice(0,2).map(function(w){ return w[0]; }).join('').toUpperCase();
  var pos = objPos || '50% 15%';
  if (err || !src) {
    return (
      <div style={{
        width: '100%', aspectRatio: '1/1', borderRadius: 4,
        background: window.CL.blueprint,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, overflow: 'hidden',
      }}>
        <span style={{ fontFamily: window.CL.display, fontSize: '2rem', fontWeight: 500, color: window.CL.paper, opacity: 0.55 }}>
          {initials}
        </span>
      </div>
    );
  }
  return (
    <img src={src} alt={name}
      style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', objectPosition: pos, borderRadius: 4, flexShrink: 0, display: 'block' }}
      onError={function(){ setErr(true); }}
    />
  );
}

function FoundingStory() {
  var isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '64px 0' : '96px 0', background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 01 — Founding Story</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>Est. 2024</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? 36 : 80, alignItems: 'flex-start' }}>
          <h2 style={{ fontFamily: window.CL.display, fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0, color: window.CL.ink, fontStyle: 'italic' }}>
            "Youth developmental trajectories are drowning in information, and starving for understanding."
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 16 : 17, lineHeight: 1.7, color: window.CL.ink, margin: 0 }}>
              In college, I spent my time between two worlds that rarely spoke to each other: the football field and the neuroscience lab. What I kept noticing was the lack of cross talk. Everything we were uncovering about how the adolescent brain develops, how stress shapes it, and how specific experiences can actually armor the brain to adversity — none of it was being funneled into the lived experiences of the youth who desperately needed it.
            </p>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 16 : 17, lineHeight: 1.7, color: window.CL.ink, margin: 0 }}>
              That gap is why I founded Cortex Flex, a neuropsychological performance company built to give adolescents the mental and physical tools to thrive in every endeavor and through every trial. The deeper I got into that work, the more clearly I heard another signal. In nearly every conversation with a parent, coach, or school administrator about our program, there was the same vulnerable confession underneath their questions: <em>I want to do right by this kid. I just don't know where to start.</em>
            </p>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 16 : 17, lineHeight: 1.7, color: window.CL.ink, margin: 0 }}>
              They weren't uninformed. If anything, they were overwhelmed, awash in headlines and hot takes and contradictory advice. They cared deeply. They wanted to learn and apply. The problem was that the developmental science they needed — translated honestly, accessibly, and practically — had never been handed to them.
            </p>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 16 : 17, lineHeight: 1.7, color: window.CL.ink, margin: 0 }}>
              CAPSuLe exists because of that moment of recognition. The adults in a young person's life are not peripheral to their development. They are the environment. And when those adults feel confident, grounded, and equipped, the kids in front of them feel it too.
            </p>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 16 : 17, lineHeight: 1.7, color: window.CL.signal, margin: 0, fontStyle: 'italic', fontWeight: 500 }}>
              By educating adults, we change the path every young person walks along and the destinations they find.
            </p>
            <p style={{ fontFamily: window.CL.mono, fontSize: isMobile ? 12 : 13, color: window.CL.inkSoft, margin: 0, letterSpacing: '.05em' }}>
              — Nate Roy, Founder &amp; Vision Director
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  var isMobile = useIsMobile();

  var team = [
    {
      name: 'Nate Roy M.S.',
      role: 'Founder & Vision Director',
      bio: 'Nate is a PhD student in neuroscience and Team USA Bobsled athlete at McGill University. His mission is to translate neuroscience into practical tools for clinics and communities around the world.',
      photo: 'site/assets/Nate%20headshot.png',
      objPos: '50% 10%',
    },
    {
      name: 'Keton Johnson',
      role: 'President & Community Connection Director',
      bio: 'Keton is a pre-med graduate at Seattle Pacific University. She is driven to provide thoughtful, compassionate, patient-centered care.',
      photo: 'site/assets/keton%20headshot.jpg',
      objPos: '50% 10%',
    },
    {
      name: 'Emily Smith Ph.D',
      role: 'Director of Narrative Translation',
      bio: 'Emily is a postdoctoral research fellow at the Centre for Addiction and Mental Health. She is passionate about applying her expertise in the brain–body connection to support mental and physical well-being across the lifespan.',
      photo: 'site/assets/emily%20headshot.jpg',
      objPos: '50% 10%',
    },
    {
      name: 'Gabriella Cha',
      role: 'Director of Digital Product Design',
      bio: 'Gabriella is an undergraduate student in biochemistry and neuroscience at McGill University. She is passionate about exploring the neuroscience of addiction and aspires to pursue a medical career with a focus in neuroscience.',
      photo: 'site/assets/gabrielle%20headshot.jpg',
      objPos: '50% 10%',
    },
    {
      name: 'Matt Shumway',
      role: 'Director of Clinical Integration',
      bio: 'Matt is a medical student at LECOM. He is dedicated to bridging the gap between complex clinical research and everyday wellness.',
      photo: 'site/assets/Matt%20bio%20pic.jpg',
      objPos: '50% 5%',
    },
    {
      name: 'Nicole Ahsan',
      role: 'Director of Visual Narrative',
      bio: 'Nicole is a pre-med student in Film and Media Studies at Yale University. She strives to bridge the worlds of science and storytelling to make health information more accessible to diverse communities.',
      photo: 'site/assets/nicole%20headshot.JPG',
      objPos: '50% 10%',
    },
    {
      name: 'Lyra Tiffin',
      role: 'Director of Narrative Dissemination',
      bio: 'Lyra is a pre-med student in Nutrition and Health Sciences at Pepperdine University. She hopes to integrate nutrition and medicine as a physician to improve health outcomes and support patient longevity.',
      photo: 'site/assets/lyra%20headshot.jpg',
      objPos: '50% 55%',
    },
    {
      name: 'Curtis Roy',
      role: 'Growth Engineer',
      bio: 'Curtis is an undergraduate student in neuroscience at the University of Rochester. He is passionate about applying neuroscience to enhance human performance and better understand how the brain drives physical and mental potential.',
      photo: 'site/assets/curtis%20headshot.jpg',
      objPos: '50% 10%',
    },
    {
      name: 'Zachary Goldman',
      role: 'Director of Implementation Strategy',
      bio: 'Zachary is a senior at the University of Alabama studying physics and conducting biophysics research through their Randall Research Scholars Program. As a founder of multiple nonprofits, he is passionate about bringing a quantitative, research-driven perspective to scientific engagement and community development.',
      photo: 'site/assets/Zach%20Goldman%20headshot%20%281%29.jpg',
      objPos: '50% 10%',
    },
    {
      name: 'Avery Kirchmann',
      role: 'Director of Operations and Production Logistics',
      bio: 'Avery leads operations and production logistics for CAPSuLe, ensuring every program runs with precision and purpose.',
      photo: 'site/assets/avery%20headshot.jpg',
      objPos: '50% 10%',
    },
    {
      name: 'Johanna Kunz',
      role: 'Creative Visual Associate',
      bio: "Johanna brings creative visual expertise to CAPSuLe's storytelling and design work.",
      photo: null,
      photoComingSoon: true,
    },
    {
      name: 'Miller Kiser',
      role: 'Film & Media Associate',
      bio: "Miller contributes film and media production skills to CAPSuLe's documentary and video projects.",
      photo: null,
      photoComingSoon: true,
    },
  ];

  var board = [
    {
      name: 'Kevin Wisniewski',
      role: 'Advisory Board',
      bio: 'Kevin is a medical student at LECOM. He combines scientific insight with a commitment to service in health and athletics.',
      photo: 'site/assets/Kevin%20Wisniewski_edited.jpg',
    },
    {
      name: 'Danielle Vitelle, MD',
      role: 'Advisory Board',
      bio: 'Danielle is a Resident Physician at the University of Pennsylvania. She is committed to advancing patient-centered care and bringing scientific rigor to clinical practice.',
      photo: 'site/assets/Danielle_edited_edited.png',
    },
    {
      name: 'Maya Haykal, MD',
      role: 'Advisory Board',
      bio: 'Maya is a PM&R resident at Johns Hopkins University. She brings a holistic, community-centered approach to promoting health and well-being through research, sports medicine, and athlete mentorship.',
      photo: 'site/assets/maya_edited.jpg',
    },
    {
      name: 'Yael Ihejirika, MD',
      role: 'Advisory Board',
      bio: 'Yael is a PM&R resident at Jefferson Moss. He is dedicated to patient-centered rehabilitation and lifelong learning, with clinical interests in sports medicine and prosthetics.',
      photo: 'site/assets/Yael_edited.jpg',
    },
  ];

  return (
    <React.Fragment>
      {/* Team */}
      <section style={{ padding: isMobile ? '72px 0' : '100px 0', background: window.CL.paper, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>§ 02 — The Team</div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft }}>{team.length} members</div>
          </div>

          <div className="cl-grid-team">
            {team.map(function(m) {
              return (
                <div key={m.name} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {m.photoComingSoon ? (
                    <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: 4, background: window.CL.paperWarm, border: `1.5px dashed ${window.CL.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
                      <div className="cl-mono" style={{ color: window.CL.inkSoft }}>Photo</div>
                      <div className="cl-mono" style={{ color: window.CL.signal }}>Coming Soon</div>
                    </div>
                  ) : (
                    <TeamPhoto name={m.name} src={m.photo} objPos={m.objPos} />
                  )}
                  <div>
                    <div style={{ fontFamily: window.CL.display, fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em', color: window.CL.ink, marginBottom: 4 }}>{m.name}</div>
                    <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 8, fontSize: 10 }}>{m.role}</div>
                    {m.bio && <p style={{ fontFamily: window.CL.serif, fontSize: 14, lineHeight: 1.55, color: window.CL.inkSoft, margin: 0 }}>{m.bio}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Board */}
      <section style={{ padding: isMobile ? '72px 0' : '100px 0', background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: 48, flexWrap: 'wrap', gap: 8 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>§ 03 — Advisory Board</div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft }}>{board.length} members</div>
          </div>

          <div className="cl-grid-board">
            {board.map(function(m) {
              return (
                <div key={m.name} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <TeamPhoto name={m.name} src={m.photo} objPos={m.objPos} />
                  <div>
                    <div style={{ fontFamily: window.CL.display, fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em', color: window.CL.ink, marginBottom: 4 }}>{m.name}</div>
                    <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 8, fontSize: 10 }}>{m.role}</div>
                    {m.bio && <p style={{ fontFamily: window.CL.serif, fontSize: 14, lineHeight: 1.55, color: window.CL.inkSoft, margin: 0 }}>{m.bio}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.FoundingStory = FoundingStory;
window.TeamSection   = TeamSection;
