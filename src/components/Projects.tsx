const projects = [
  {
    name: 'A2S (Audit System)',
    client: 'Government Housing Bank (GHB)',
    description: 'Audit document management system enabling secure storage, tracking, and retrieval of internal audit documents.',
  },
  {
    name: 'Thai eVisa',
    client: 'Ministry of Foreign Affairs',
    description: 'E-Government system allowing users to apply for visas online with digital documentation, streamlining visa processing for international applicants.',
  },
  {
    name: 'BKI Application',
    client: 'Bangkok Insurance PCL.',
    description: 'Web-based and mobile-friendly online insurance claims system with real-time tracking and status updates for policyholders.',
  },
  {
    name: 'SST (Sales Smart Tool)',
    client: 'Insurance Sales Platform',
    description: 'Internal sales platform for insurance agents providing tools for policy quotations, client profiling, sales tracking, and real-time data synchronization.',
  },
  {
    name: 'Palo Alto Firewall Implementation',
    client: 'Thai Rotary Engineering',
    description: 'Implemented and configured Palo Alto firewall for company network security, including testing and validation with vendor.',
  },
]

function Projects() {
  return (
    <section className="section">
      <p className="section-label">06 — Portfolio</p>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="project-name">{project.name}</h3>
            </div>
            <p className="project-client">{project.client}</p>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
