const person = {
  firstName: 'Pranchai',
  lastName: 'Himakoon',
  role: 'Software Engineer',
  phone: '065-4956198',
  email: 'programmer_ubon@hotmail.com',
  tags: ['React', 'Next.js', 'Python', 'C# .NET Core', 'Docker', 'CI/CD'],
  imageUrl:
    'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg',
  personalData: [
    { label: 'Nationality', value: 'Thai' },
    { label: 'Status', value: 'Married' },
    { label: 'DOB', value: '10 April 1991' },
  ],
}

function Avatar() {
  return (
    <section className="hero">
      <div className="hero-glass glass">
        <div className="hero-layout">
          <div className="hero-avatar-wrap">
            <div className="hero-avatar">
              <img src={person.imageUrl} alt={`${person.firstName} ${person.lastName}`} />
            </div>
          </div>
          <div className="hero-text">
            <p className="hero-tag">Available for opportunities</p>
            <h1 className="hero-name">
              {person.firstName}<br />
              <span className="accent">{person.lastName}</span>
            </h1>
            <p className="hero-role">
              <span className="caret">&#9646;</span> {person.role}
            </p>
            <div className="hero-contact">
              <a href={`tel:${person.phone}`} className="contact-link">{person.phone}</a>
              <span className="contact-sep">|</span>
              <a href={`mailto:${person.email}`} className="contact-link">{person.email}</a>
            </div>
            <div className="hero-badges">
              {person.tags.map((tag) => (
                <span key={tag} className="badge-3d">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="personal-data-row">
          {person.personalData.map((d) => (
            <div key={d.label} className="personal-data-item">
              <span className="pd-label">{d.label}</span>
              <span className="pd-value">{d.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Avatar
