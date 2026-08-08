import Image from 'next/image';
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { skillGroups } from '@/data/skills';
import { Experience } from '@/components/sections/Experience/Experience';
import { Skills } from '@/components/sections/Skills/Skills';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import styles from './page.module.scss';

export const metadata = {
  title: 'About | Oviya D',
};

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <Reveal>
        <div className={styles.introRow}>
          <div className={styles.avatarWrap}>
            <Image
              src="/images/profile.jpg"
              alt={profile.name}
              fill
              className={styles.avatar}
              sizes="96px"
            />
          </div>
          <div>
            <h1 className={styles.title}>About Me</h1>
            <a href="/resume.pdf" download className={styles.resumeLink}>
              Download Resume ↓
            </a>
          </div>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <p className={styles.paragraph}>{profile.summary}</p>
      </Reveal>

      <Reveal>
        <h2 className={styles.subtitle}>Education</h2>
      </Reveal>
      <Reveal delay={60}>
        <div className={styles.educationCard}>
          <div className={styles.educationHead}>
            <div>
              <p className={styles.school}>{profile.education.school}</p>
              <p className={styles.degree}>{profile.education.degree}</p>
            </div>
            <span className={styles.year}>Graduated {profile.education.graduated}</span>
          </div>
          <p className={styles.cgpa}>CGPA: {profile.education.cgpa}</p>
        </div>
      </Reveal>

      <Reveal>
        <h2 className={styles.subtitle}>Experience</h2>
      </Reveal>
      <Experience items={experience} />

      <Reveal>
        <h2 className={styles.subtitle}>Skills</h2>
      </Reveal>
      <Skills groups={skillGroups} />
    </section>
  );
}
