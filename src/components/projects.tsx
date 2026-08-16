import { RichText } from "@/components/rich-text";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="section__head">
        <p className="section__eyebrow">Selected work</p>
        <h2 id="projects-title" className="section__title">
          Projects
        </h2>
        <p className="section__lede">
          Telecom agent tooling, customer self-care web, marketplaces, and crypto UX.
        </p>
      </div>

      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.name} className="project-row">
            <div className="project-row__top">
              <div>
                <h3 className="project-row__name">{project.name}</h3>
                <p className="project-row__tagline">{project.tagline}</p>
              </div>
              <ul className="project-row__stack" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <p className="project-row__desc">
              <RichText text={project.description} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
