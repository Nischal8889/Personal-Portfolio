const projects = [
  {
    name: "Conclave — Live Classroom Platform",
    type: "CS4760 Capstone · Team project",
    description:
      "A classroom platform where teachers start sessions and students join, chat, and follow live activity. My work focuses on the session messaging seam: saving events before pushing updates to connected users.",
    tools: "React · Spring Boot · PostgreSQL · WebSocket · Docker",
    url: "https://github.com/WeberCS4760/cs4760-team2-telemetry",
    label: "View team repository",
  },
  {
    name: "COVID-19 Patient Outcome Prediction Model",
    type: "Machine learning · Team project",
    description:
      "Built and validated a logistic regression model in Python with a team of three. I worked on data preprocessing and exploratory analysis, then evaluated results using ROC curves and statistical analysis.",
    tools: "Python · Logistic regression · Data analysis · ROC curves",
  },
  {
    name: "rvPARK",
    type: "Team web application",
    description:
      "An RV park management application with customer accounts and reservations, plus staff pages for managing sites, pricing, reservations, and reports. The project includes payment flows and database backed records.",
    tools: "C# · ASP.NET Core Razor Pages · Entity Framework Core · SQLite · Stripe",
  },
];

export default function Work() {
  return (
    <>
      <section id="projects" className="container work-section" aria-labelledby="projects-heading">
        <p className="section-label">SELECTED WORK</p>
        <h2 id="projects-heading">Projects</h2>
        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.name}>
              <p className="work-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="work-tools">{project.tools}</p>
              {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">{project.label} ↗</a>}
            </article>
          ))}
        </div>
      </section>

      <section id="coursework" className="container work-section" aria-labelledby="coursework-heading">
        <p className="section-label">ACADEMIC FOUNDATION</p>
        <h2 id="coursework-heading">Coursework & achievements</h2>
        <div className="work-grid">
          <article className="work-card">
            <h3>Data science coursework</h3>
            <p>Statistical Learning and Math for Data Science sparked my interest in using Python, statistics, visualization, and machine learning to answer real questions.</p>
          </article>
          <article className="work-card">
            <h3>Computer science coursework</h3>
            <p>Course projects in software engineering, networking, automata, and programming have given me practice designing, building, and explaining working systems.</p>
          </article>
          <article className="work-card">
            <h3>Campus involvement</h3>
            <p>WSUSA senator and former academic peer coach. I have supported fellow students and worked with campus peers to bring student perspectives into discussions.</p>
          </article>
        </div>
      </section>
    </>
  );
}
