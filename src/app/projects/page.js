import { ProjectGrid } from '@/components/sections/ProjectCard/ProjectCard';
import { LiveProjects } from '@/components/sections/LiveProjects/LiveProjects';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import { projects, liveProjects } from '@/data/projects';
import styles from './page.module.scss';

export const metadata = {
  title: 'Projects | Oviya D',
};

export default function ProjectsPage() {
  return (
    <section>
      <Reveal>
        <h1 className={styles.title}>Projects</h1>
      </Reveal>
      <Reveal delay={60}>
        <p className={styles.subtitle}>
          Production work from my professional experience, building platforms used by millions of people.
        </p>
      </Reveal>
      <ProjectGrid projects={projects} />

      <Reveal>
        <h2 className={styles.sectionTitle}>Personal Projects</h2>
      </Reveal>
      <Reveal delay={40}>
        <p className={styles.sectionSubtitle}>
          Interactive algorithm visualizers, built to sharpen my data structures &amp; algorithms fundamentals.
        </p>
      </Reveal>
      <div className={styles.sectionInner}>
        <LiveProjects projects={liveProjects} />
      </div>
    </section>
  );
}
