import {
  Code,
  Monitor,
  Server,
  Database,
  Cpu,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "C#", "Bash"],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      "Node.js",
      "Spring Boot",
      "REST APIs",
      "JSON",
      "CRUD Operations",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Computer Science Foundations",
    icon: Cpu,
    skills: [
      "Object-Oriented Programming",
      "Operating Systems",
      "Networking",
      "Shell Scripting",
      "Authentication & Authorization",
    ],
  },
  {
    title: "Tools, Testing & Deployment",
    icon: Wrench,
    skills: [
      "Git",
      "Debugging",
      "Unit Testing",
      "Docker",
      "Vercel",
      "Netlify",
      "Render",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="container"
      aria-labelledby="skills-heading"
    >
      <p className="section-label">WHAT I WORK WITH</p>
      <h2 id="skills-heading">Technical Skills</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-heading">
                <span className="skill-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>

                <h3>{group.title}</h3>
              </div>

              <ul className="skill-tags">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}