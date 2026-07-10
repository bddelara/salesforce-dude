import './App.css'

function App() {
  const coreSkills = [
    {
      title: 'Python and SQL Development',
      description: 'Build practical scripts, queries, and automations for daily delivery needs.',
    },
    {
      title: 'Salesforce Ecosystem',
      description: 'Work across Salesforce Service Cloud, SOQL, and app-level configuration.',
    },
    {
      title: 'Frontend and App Foundations',
      description: 'Develop with HTML, CSS, JavaScript, React, and practical app structure patterns.',
    },
  ]

  const aiSkills = [
    'Generative AI',
    'AI Prompt Engineering',
    'AI Tool Literacy',
    'Automation and AI Awareness',
    'Large Language Models (LLM)',
    'Natural Language Processing',
    'Responsible AI Usage',
    'GitHub Copilot',
  ]

  const companies = [
    'Fujitsu (WeServ Systems International, Inc.)',
    'Scientific Biotech Specialties Inc',
    'Essilor Shared Services Philippines Inc',
    'WorldSource Inc',
    'Accenture Inc.',
  ]

  return (
    <div className="page">
      <header className="site-header reveal">
        <p className="brand">Bernard De Lara</p>
        <nav>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero reveal">
          <p className="eyebrow">Online CV</p>
          <h1>Application Developer Building Practical and AI-Aware Solutions</h1>
          <p className="hero-copy">
            Developer with experience in Python, SQL, PostgreSQL, MySQL, Salesforce Service
            Cloud, and web technologies including HTML, CSS, JavaScript, and React. Adaptable,
            collaborative, and focused on clean execution in cross-functional teams.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:bdelara28@gmail.com">
              Email Me
            </a>
            <a className="btn btn-ghost" href="#skills">
              View Skills
            </a>
          </div>
        </section>

        <section className="metrics reveal">
          <article className="metric-card">
            <h2>Location</h2>
            <p>Philippines (Las Pinas)</p>
          </article>
          <article className="metric-card">
            <h2>Domain</h2>
            <p>Application Development</p>
          </article>
          <article className="metric-card">
            <h2>Focus</h2>
            <p>Automation, Data, and AI-enabled workflows</p>
          </article>
        </section>

        <section id="skills" className="services reveal">
          <div className="section-head">
            <p className="eyebrow">Core Skills</p>
            <h2>Technical Strengths</h2>
          </div>

          <div className="service-grid">
            {coreSkills.map((skill) => (
              <article key={skill.title} className="service-card">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="spotlight reveal">
          <div>
            <p className="eyebrow">Experience Profile</p>
            <h2>Professional Experience Highlights</h2>
            <p>
              Hands-on development support across internal and client-facing delivery contexts,
              with exposure to application design, testing, and continuous improvement workflows.
            </p>
          </div>
          <ul>
            <li>Application development and maintenance support</li>
            <li>Database querying and data handling with SQL-based tools</li>
            <li>Salesforce platform-related support and configuration work</li>
            <li>AI-assisted productivity using prompt and tooling best practices</li>
          </ul>
        </section>

        <section className="services reveal">
          <div className="section-head">
            <p className="eyebrow">Career</p>
            <h2>Companies Worked With</h2>
          </div>

          <div className="pill-grid">
            {companies.map((company) => (
              <span className="pill" key={company}>
                {company}
              </span>
            ))}
          </div>
        </section>

        <section className="services reveal">
          <div className="section-head">
            <p className="eyebrow">AI and Modern Tooling</p>
            <h2>Current AI-related Skills</h2>
          </div>

          <div className="pill-grid">
            {aiSkills.map((skill) => (
              <span className="pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer reveal">
        <h2>Open to collaboration, learning, and new development opportunities.</h2>
        <div className="footer-links">
          <a className="btn btn-primary" href="mailto:bdelara28@gmail.com">
            Email
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
import './App.css'


function App() {
  const coreSkills = [
    {
      title: 'Python and SQL Development',
      description: 'Build practical scripts, queries, and automations for daily delivery needs.',
    },
    {
      title: 'Salesforce Ecosystem',
      description: 'Work across Salesforce Service Cloud, SOQL, and app-level configuration.',
    },
    {
      title: 'Frontend and App Foundations',
      description: 'Develop with HTML, CSS, JavaScript, React, and practical app structure patterns.',
    },
  ]


  const aiSkills = [
    'Generative AI',
    'AI Prompt Engineering',
    'AI Tool Literacy',
    'Automation and AI Awareness',
    'Large Language Models (LLM)',
    'Natural Language Processing',
    'Responsible AI Usage',
    'GitHub Copilot',
  ]


  const companies = [
    'Fujitsu (WeServ Systems International, Inc.)',
    'Scientific Biotech Specialties Inc',
    'Essilor Shared Services Philippines Inc',
    'WorldSource Inc',
    'Accenture Inc.',
  ]
