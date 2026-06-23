// About page — mission statement, founding story, team, board.

function AboutMission() {
  const isMobile = window.useBreakpoint(768);

  return (
    <section style={{ padding: isMobile ? '64px 0 56px' : '100px 0 80px', borderBottom: `1.5px solid ${window.CL.ink}` }}>
      <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 36 : 56 }}>
          <div className="cl-mono" style={{ color: window.CL.signal }}>§ 01 — Mission</div>
          <div className="cl-mono" style={{ color: window.CL.inkSoft }}>501(c)(3) · Est. 2024</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr', gap: isMobile ? 36 : 80, alignItems: 'flex-start' }}>
          <div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft, marginBottom: 14 }}>MISSION STATEMENT</div>
            <h1 style={{ fontFamily: window.CL.display, fontSize: isMobile ? 32 : 48, fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.025em', color: window.CL.ink, margin: 0 }}>
              To equip those who shape adolescent development with <em style={{ color: window.CL.signal }}>actionable insights</em> grounded in science.
            </h1>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 17 : 20, lineHeight: 1.6, color: window.CL.ink, margin: 0 }}>
              We bring together researchers, clinicians, and community leaders to bridge disciplines and translate developmental research into meaningful practice. Together, we form a working alliance committed to advancing child and adolescent well-being through research, education, and public engagement.
            </p>
            <p style={{ fontFamily: window.CL.serif, fontSize: isMobile ? 16 : 18, lineHeight: 1.6, color: window.CL.inkSoft, margin: 0 }}>
              Our work spans documentary film, podcast, micro-courses, and a weekly research blog. Every format serves one goal: get the science to the people who can use it.
            </p>

            {/* Founding story */}
            <div style={{ borderTop: `1.5px solid ${window.CL.ink}`, paddingTop: 32, marginTop: 4 }}>
              <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 24 }}>§ 02 — FOUNDING STORY</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p style={{ fontFamily: window.CL.display, fontSize: isMobile ? 22 : 28, fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.015em', color: window.CL.ink, margin: 0, fontStyle: 'italic' }}>
                  "Youth developmental trajectories are drowning in information, and starving for understanding."
                </p>
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
                  — Nate Roy, Founder & Vision Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual team member card
function TeamCard({ name, title, institution, bio, missionStatement, photo, placeholder = false }) {
  const isMobile = window.useBreakpoint(768);
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {/* Photo */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', background: window.CL.paperWarm, overflow: 'hidden', marginBottom: 16 }}>
        {placeholder ? (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontFamily: window.CL.display, fontSize: 32, fontWeight: 500, color: window.CL.inkSoft }}>{initials}</div>
            <div className="cl-mono" style={{ color: 'rgba(11,27,38,.3)', fontSize: 9 }}>PHOTO COMING SOON</div>
          </div>
        ) : (
          <>
            <img
              src={photo}
              alt={name}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              onError={function(e) {
                e.target.style.display = 'none';
                e.target.parentNode.querySelector('.cl-photo-placeholder').style.display = 'flex';
              }}
            />
            <div className="cl-photo-placeholder" style={{ display: 'none', position: 'absolute', inset: 0, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8, background: window.CL.paperWarm }}>
              <div style={{ fontFamily: window.CL.display, fontSize: 32, fontWeight: 500, color: window.CL.inkSoft }}>{initials}</div>
              <div className="cl-mono" style={{ color: 'rgba(11,27,38,.3)', fontSize: 9 }}>PHOTO COMING SOON</div>
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="cl-mono" style={{ color: window.CL.signal, marginBottom: 4, fontSize: 9 }}>{title}</div>
      <div style={{ fontFamily: window.CL.display, fontSize: 20, fontWeight: 500, letterSpacing: '-0.015em', color: window.CL.ink, marginBottom: 8 }}>{name}</div>
      <p style={{ fontFamily: window.CL.serif, fontSize: 14, lineHeight: 1.55, color: window.CL.inkSoft, margin: 0 }}>{bio}</p>
    </div>
  );
}

function AboutTeam() {
  const isMobile = window.useBreakpoint(600);

  const team = [
    {
      name: 'Nate Roy M.S.',
      title: 'Founder & Vision Director',
      photo: 'site/assets/Nate%20headshot.png',
      bio: 'Nate is a PhD student in neuroscience and Team USA Bobsled athlete at McGill University. His mission is to translate neuroscience into practical tools for clinics and communities around the world.',
    },
    {
      name: 'Keton Johnson',
      title: 'President & Community Connection Director',
      photo: 'site/assets/keton%20headshot.jpg',
      bio: 'Keton is a pre-med graduate at Seattle Pacific University. She is driven to provide thoughtful, compassionate, patient-centered care.',
    },
    {
      name: 'Emily Smith Ph.D',
      title: 'Director of Narrative Translation',
      photo: 'site/assets/emily%20headshot.jpg',
      bio: 'Emily is a postdoctoral research fellow at the Centre for Addiction and Mental Health. She is passionate about applying her expertise in the brain–body connection to support mental and physical well-being across the lifespan.',
    },
    {
      name: 'Gabriella Cha',
      title: 'Director of Digital Product Design',
      photo: 'site/assets/gabrielle%20headshot.jpg',
      bio: 'Gabriella is an undergraduate student in biochemistry and neuroscience at McGill University. She is passionate about exploring the neuroscience of addiction and aspires to pursue a medical career with a focus in neuroscience.',
    },
    {
      name: 'Matt Shumway',
      title: 'Director of Clinical Integration',
      photo: 'site/assets/Matt%20bio%20pic.jpg',
      bio: 'Matt is a medical student at LECOM. He is dedicated to bridging the gap between complex clinical research and everyday wellness.',
    },
    {
      name: 'Nicole Ahsan',
      title: 'Director of Visual Narrative',
      photo: 'site/assets/nicole%20headshot.JPG',
      bio: 'Nicole is a pre-med student in Film and Media Studies at Yale University. She strives to bridge the worlds of science and storytelling to make health information more accessible to diverse communities.',
    },
    {
      name: 'Lyra Tiffin',
      title: 'Director of Narrative Dissemination',
      photo: 'site/assets/lyra%20headshot.jpg',
      bio: 'Lyra is a pre-med student in Nutrition and Health Sciences at Pepperdine University. She hopes to integrate nutrition and medicine as a physician to improve health outcomes and support patient longevity.',
    },
    {
      name: 'Curtis Roy',
      title: 'Growth Engineer',
      photo: 'site/assets/curtis%20headshot.jpg',
      bio: 'Curtis is an undergraduate student in neuroscience at the University of Rochester. He is passionate about applying neuroscience to enhance human performance and better understand how the brain drives physical and mental potential.',
    },
    {
      name: 'Zachary Goldman',
      title: 'Director of Implementation Strategy',
      photo: 'site/assets/Zach%20Goldman%20headshot%20%281%29.jpg',
      bio: 'Zachary is a senior at the University of Alabama studying physics and conducting biophysics research through their Randall Research Scholars Program. As a founder of multiple nonprofits, he is passionate about bringing a quantitative, research-driven perspective to scientific engagement and community development.',
    },
    {
      name: 'Avery Kirchmann',
      title: 'Director of Operations & Production Logistics',
      photo: 'site/assets/avery%20headshot.jpg',
      bio: 'Avery leads operations and production logistics for CAPSuLe, ensuring every program runs with precision and purpose.',
    },
    {
      name: 'Johanna Kunz',
      title: 'Creative Visual Associate',
      photo: '',
      placeholder: true,
      bio: 'Johanna brings creative visual expertise to CAPSuLe\'s storytelling and design work.',
    },
    {
      name: 'Miller Kiser',
      title: 'Film & Media Associate',
      photo: '',
      placeholder: true,
      bio: 'Miller contributes film and media production skills to CAPSuLe\'s documentary and video projects.',
    },
  ];

  const board = [
    {
      name: 'Kevin Wisniewski',
      title: 'Board Member',
      photo: 'site/assets/Kevin%20Wisniewski_edited.jpg',
      bio: 'Kevin is a medical student at LECOM. He combines scientific insight with a commitment to service in health and athletics.',
    },
    {
      name: 'Danielle Vitelle, MD',
      title: 'Board Member',
      photo: 'site/assets/Danielle_edited_edited.png',
      bio: 'Danielle is a Resident Physician at the University of Pennsylvania. She is committed to advancing patient-centered care and bringing scientific rigor to clinical practice.',
    },
    {
      name: 'Maya Haykal, MD',
      title: 'Board Member',
      photo: 'site/assets/maya_edited.jpg',
      bio: 'Maya is a PM&R resident at Johns Hopkins University. She brings a holistic, community-centered approach to promoting health and well-being through research, sports medicine, and athlete mentorship.',
    },
    {
      name: 'Yael Ihejirika, MD',
      title: 'Board Member',
      photo: 'site/assets/Yael_edited.jpg',
      bio: 'Yael is a PM&R resident at Jefferson Moss. He is dedicated to patient-centered rehabilitation and lifelong learning, with clinical interests in sports medicine and prosthetics.',
    },
  ];

  return (
    <>
      {/* Team */}
      <section style={{ padding: isMobile ? '64px 0' : '100px 0', borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 36 : 56 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>§ 03 — The Team</div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft }}>{team.length} members</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? '36px 20px' : '48px 32px' }}>
            {team.map(m => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section style={{ padding: isMobile ? '64px 0' : '100px 0', background: window.CL.paperWarm, borderBottom: `1.5px solid ${window.CL.ink}` }}>
        <div style={{ maxWidth: window.CL.maxw, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px solid ${window.CL.ink}`, paddingBottom: 16, marginBottom: isMobile ? 36 : 56 }}>
            <div className="cl-mono" style={{ color: window.CL.signal }}>§ 04 — Board of Advisors</div>
            <div className="cl-mono" style={{ color: window.CL.inkSoft }}>{board.length} advisors</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? '36px 20px' : '48px 32px' }}>
            {board.map(m => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

window.AboutMission = AboutMission;
window.AboutTeam    = AboutTeam;
