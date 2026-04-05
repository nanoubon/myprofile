const jobs = [
  {
    company: 'GC Maintenance and Engineering Company Limited',
    location: 'Rayong',
    position: 'Software Developer',
    year: 'Feb 2026 – Present',
    highlights: [
      'Design, implement, and iterate machine-learning or deep-learning models that meet defined business objectives',
      'Develop feature-engineering pipelines, assess feature importance, and validate engineered features',
      'Prepare, cleanse, transform, and label datasets to support training and evaluation',
      'Select suitable modelling techniques, design systematic experiments, and tune hyper-parameters',
      'Evaluate model performance using appropriate metrics, validation strategies, and benchmarking',
      'Optimize models for inference efficiency, latency, and resource consumption in production',
      'Build and maintain reproducible training pipelines; version-control code, data, and model artefacts',
      'Implement monitoring, alerting, and logging for model accuracy, drift, latency, and other operational metrics',
      'Collaborate with engineering, product, and data teams to integrate models into services, APIs, and applications',
      'Perform root-cause analysis and debug production incidents that affect model output',
      'Ensure data quality and apply data-governance rules throughout model development',
      'Designed and implemented web applications using React, Next.js, Python, Flutter and C# .NET Core (API & Razor Pages)',
      'Developed responsive UIs with HTML5, Bootstrap, and Tailwind CSS with mobile-first approach',
      'Built and managed CI/CD pipelines using GitLab and GitLab Runner for automated workflows',
      'Containerized applications and microservices with Docker for consistent deployments',
      'Integrated SonarQube for static code analysis and technical debt tracking',
      'Created dynamic business reports using RDL (Report Definition Language)',
      'Collaborated in cross-functional Agile teams to resolve technical issues and reduce latency',
      'Contribute to code reviews and knowledge-sharing activities',
      'Communicate technical results, limitations, and trade-offs to non-technical stakeholders',
      'Package models with all required artefacts and documentation for seamless deployment',
    ],
  },
  {
    company: 'Stream I.T. Consulting Ltd.',
    location: 'Bangkok',
    position: 'Software Engineer',
    year: 'Feb 2023 – Feb 2026',
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
    <section className="section-3d">
      <p className="section-label">05 — Career</p>
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {jobs.map((job, index) => (
          <div key={index} className="timeline-card">
            <div className="timeline-dot" />
            <div className="timeline-card-inner glass">
              <p className="timeline-year">{job.year}</p>
              <h3 className="timeline-company">
                {job.company}&nbsp;
                <span className="timeline-location">— {job.location}</span>
              </h3>
              <p className="timeline-position">{job.position}</p>
              <ul className="timeline-highlights">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
