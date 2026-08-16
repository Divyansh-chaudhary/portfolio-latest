import { RichText } from "@/components/rich-text";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="section__head">
        <p className="section__eyebrow">Career</p>
        <h2 id="experience-title" className="section__title">
          Experience
        </h2>
        <p className="section__lede">
          Product-facing frontend work across telecom platforms and consumer apps.
        </p>
      </div>

      <div className="timeline">
        {experience.map((job) => (
          <article key={job.company} className="timeline__item">
            <div className="timeline__meta">
              <p className="timeline__period">{job.period}</p>
              <p className="timeline__location">{job.location}</p>
            </div>
            <div className="timeline__body">
              <h3 className="timeline__role">{job.role}</h3>
              <p className="timeline__company">{job.company}</p>
              <ul className="timeline__list">
                {job.highlights.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
