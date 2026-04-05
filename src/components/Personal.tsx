const summary = [
  'Over 9 years of experience in the IT field with diverse roles including IT Support, System Engineer, Network Engineer, and Software Developer.',
  'Proven ability to manage and lead teams, handle multiple concurrent projects, and drive process improvement with a strategic and analytical mindset.',
  'Strong background in developing and maintaining both network/server infrastructure and software solutions for Windows and web-based environments.',
  'A dependable team player with excellent collaboration skills and a passion for continuous learning.',
]

const education = {
  school: 'Ubon Ratchathani Rajabhat University',
  degree: 'Bachelor of Computer Science',
  year: '2014',
  gpa: '2.8',
}

const training = [
  'How to Become a Better Programmer — Skooldio',
  'OOP The Right Way — Skooldio',
  'GitLab CI/CD Pipeline, CI/CD and DevOps for Beginners — Udemy',
  'Super AI Engineer SE 3 — AI Association of Thailand',
  'Windows Server 2012 & 2016 Administrator Workshop — ITC Training Center',
  'ASP.NET MVC 5 Web Development — ITC Training Center',
  'MikroTik Router Level 1, 2 — EZ-ADMIN',
]

const skillGroups = [
  {
    category: 'Programming',
    items: ['Python', 'Next.js', 'React', 'C# .NET Core', 'API', 'Microservice', 'ASP.NET', 'HTML5', 'CSS / Bootstrap / Tailwind', 'WordPress'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'GitLab CI/CD', 'SonarQube', 'Hyper-V', 'VMware'],
  },
  {
    category: 'Network & Security',
    items: ['Palo Alto Firewall', 'Sophos Intercept X', 'Cisco Switch', 'MikroTik Router', 'Ubiquiti / Unifi', 'Nmap', 'Wireshark', 'Nessus'],
  },
  {
    category: 'OS & Platform',
    items: ['Windows Server', 'Linux', 'macOS', 'Kali OS'],
  },
  {
    category: 'Office & Media',
    items: ['Microsoft 365 Admin', 'SharePoint', 'SAP', 'Adobe Premiere Pro', 'Photoshop'],
  },
]

function Personal() {
  return (
    <section className="section-3d">
      {/* Summary */}
      <p className="section-label">01 — Profile</p>
      <h2 className="section-title">Summary</h2>
      <div className="summary-glass glass">
        {summary.map((s, i) => (
          <p key={i} className="summary-text">{s}</p>
        ))}
      </div>

      {/* Education */}
      <div className="subsection">
        <p className="section-label">02 — Education</p>
        <div className="edu-glass glass">
          <h3 className="edu-school">{education.school}</h3>
          <p className="edu-detail">
            {education.degree} <span className="edu-meta">· GPA {education.gpa} · {education.year}</span>
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="subsection">
        <p className="section-label">03 — Skills &amp; Technologies</p>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group-glass glass">
              <h4 className="skill-group-label">{group.category}</h4>
              <div className="skills-grid">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag-3d">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training */}
      <div className="subsection">
        <p className="section-label">04 — Training &amp; Certificates</p>
        <ul className="training-list">
          {training.map((t, i) => (
            <li key={i} className="training-item">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Personal
