import { profile } from '@/data/profile';
import styles from './Footer.module.scss';

const SOCIAL_LINKS = [
  { href: profile.social.github, label: 'GitHub' },
  { href: profile.social.linkedin, label: 'LinkedIn' },
  { href: profile.social.email, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {year} {profile.name}. All rights reserved.</p>
        <div className={styles.links}>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
