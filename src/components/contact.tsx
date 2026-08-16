import { profile } from "@/lib/content";

export function Contact() {
  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="section__head">
        <p className="section__eyebrow">Contact</p>
        <h2 id="contact-title" className="section__title">
          Let’s build something solid
        </h2>
        <p className="section__lede">
          {profile.availability}. Reach out by email or phone.
        </p>
      </div>

      <div className="contact-panel">
        <a href={profile.emailHref} className="contact-link">
          <span className="contact-link__label">Email</span>
          <span className="contact-link__value">{profile.email}</span>
        </a>
        <a href={profile.phoneHref} className="contact-link">
          <span className="contact-link__label">Phone</span>
          <span className="contact-link__value">{profile.phone}</span>
        </a>
        <a
          href={profile.links.resumeDrive}
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-link__label">Resume</span>
          <span className="contact-link__value">View on Drive</span>
        </a>
      </div>
    </section>
  );
}
