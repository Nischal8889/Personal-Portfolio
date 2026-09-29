import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="education-section"
      aria-labelledby="education-heading"
    >
      <div className="container education-inner">
        <div className="education-school">
          <GraduationCap
            className="education-icon"
            size={30}
            aria-hidden="true"
          />

          <div>
            <h2 id="education-heading">Education</h2>
            <p>Weber State University</p>
          </div>
        </div>

        <div className="education-details">
          <p className="education-degree">
            Bachelor of Science in Computer Science
          </p>

          <p className="education-date">
            Expected graduation: December 2026
          </p>
        </div>
      </div>
    </section>
  );
}