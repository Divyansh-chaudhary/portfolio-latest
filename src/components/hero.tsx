import { DynamicSummary } from "@/components/experience-years";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="hero__atmosphere" aria-hidden />
      <div className="hero__grid" aria-hidden />

      <div className="hero__content">
        <p className="hero__meta reveal" style={{ animationDelay: "0.05s" }}>
          {profile.role} · {profile.location}
        </p>

        <p className="hero__status reveal" style={{ animationDelay: "0.08s" }}>
          {profile.availability}
        </p>

        <h1 id="hero-name" className="hero__name reveal" style={{ animationDelay: "0.12s" }}>
          {profile.name}
        </h1>

        <p className="hero__lede reveal" style={{ animationDelay: "0.22s" }}>
          <DynamicSummary />
        </p>

        <div className="hero__actions reveal" style={{ animationDelay: "0.32s" }}>
          <a href="#contact" className="btn btn--primary">
            Get in touch
          </a>
          <a
            href={profile.links.resumeDrive}
            className="btn btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume
          </a>
        </div>

        <ul className="hero__links reveal" style={{ animationDelay: "0.42s" }}>
          <li>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
