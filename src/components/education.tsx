import { education } from "@/lib/content";

export function Education() {
  return (
    <section className="section section--compact" id="education" aria-labelledby="education-title">
      <div className="section__head">
        <p className="section__eyebrow">Background</p>
        <h2 id="education-title" className="section__title">
          Education
        </h2>
      </div>

      <div className="education">
        <h3 className="education__degree">{education.degree}</h3>
        <p className="education__school">
          {education.school} · {education.location}
        </p>
        <p className="education__period">{education.period}</p>
      </div>
    </section>
  );
}
