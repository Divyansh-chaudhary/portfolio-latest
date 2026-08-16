import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="section__head">
        <p className="section__eyebrow">Toolkit</p>
        <h2 id="skills-title" className="section__title">
          Skills
        </h2>
        <p className="section__lede">
          Languages, frameworks, and practices used across shipped products.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.label} className="skills-group">
            <h3 className="skills-group__label">{group.label}</h3>
            <p className="skills-group__items">{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
