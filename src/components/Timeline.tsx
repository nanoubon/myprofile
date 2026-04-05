const jobs = [
  {
    company: 'Stream I.T. Consulting Ltd.',
    location: 'Bangkok',
    position: 'Software Engineer',
    year: 'Feb 2023 – Present',
    highlights: [
      'Designed and implemented web applications using React, Next.js, Python, Flutter and C# .NET Core (API & Razor Pages)',
      'Developed responsive UIs with HTML5, Bootstrap, and Tailwind CSS with mobile-first approach',
      'Built and managed CI/CD pipelines using GitLab and GitLab Runner for automated workflows',
      'Containerized applications and microservices with Docker for consistent deployments',
      'Integrated SonarQube for static code analysis and technical debt tracking',
      'Created dynamic business reports using RDL (Report Definition Language)',
      'Collaborated in cross-functional Agile teams to resolve technical issues and reduce latency',
    ],
  },
  {
    company: 'Thai Rotary Engineering PCL.',
    location: 'Rayong',
    position: 'Network Engineer & Acting IT Manager',
    year: '2015 – 2022',
    highlights: [
      'Led IT project planning and development for network, server, and application infrastructure',
      'Analyzed user requirements, designed and developed in-house business applications',
      'Installed, designed, and improved company network including firewall configuration and security monitoring',
      'Managed server operations (AD, DHCP, DNS), data security, and backup/recovery systems',
      'Managed user access rights and implemented security policies to prevent unauthorized access',
      'Coordinated database and information security prevention and resolution plans',
      'Continuously updated technical knowledge through training and self-study',
    ],
  },
  {
    company: 'Golden City Rayong Hotel',
    location: 'Rayong',
    position: 'IT Support',
    year: '2015',
    highlights: [
      'Maintained domain controller, Active Directory, and biometric systems',
      'Managed Internet server (SMTP, POP3) and CCTV infrastructure',
      'Designed and installed LAN/WIFI networks',
      'Rolled out end-user devices and resolved hardware/software issues',
    ],
  },
]

function Timeline() {
  return (
    <section className="section">
      <p className="section-label">05 — Career</p>
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {jobs.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <p className="timeline-year">{job.year}</p>
            <h3 className="timeline-company">
              {job.company}&nbsp;
              <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 400, fontSize: '0.85rem', textTransform: 'none', letterSpacing: 0 }}>
                — {job.location}
              </span>
            </h3>
            <p className="timeline-position">{job.position}</p>
            <ul className="timeline-highlights">
              {job.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
