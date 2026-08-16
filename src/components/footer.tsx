import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="site-footer__meta">Frontend Software Engineer · Gurugram</p>
    </footer>
  );
}
