import { profile } from '@/data/profile';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import styles from './page.module.scss';

export const metadata = {
  title: 'Contact | Oviya D',
};

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      <Reveal>
        <h1 className={styles.title}>Get in Touch</h1>
      </Reveal>
      <Reveal delay={60}>
        <p className={styles.subtitle}>
          Have a role, project, or collaboration in mind? I&apos;d love to hear from you.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <div className={styles.links}>
          <a href={profile.social.email} className={styles.link}>
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className={styles.link}>
            {profile.phone}
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a href="/resume.pdf" download className={styles.link}>
            Download Resume ↓
          </a>
        </div>
      </Reveal>
      <p className={styles.location}>{profile.location}</p>
    </section>
  );
}
