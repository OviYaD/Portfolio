import Hero from '@/components/sections/Hero/Hero';
import { ProjectGrid } from '@/components/sections/ProjectCard/ProjectCard';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects/FeaturedProjects';
import { Skills } from '@/components/sections/Skills/Skills';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import { projects, liveProjects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Hero />

      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionTitle}>Featured Work</h2>
        </Reveal>
        <ProjectGrid projects={projects} />
      </section>

      <section className={styles.section}>
        <Reveal>
          <p className={styles.sectionEyebrow}>Side Projects</p>
        </Reveal>
        <Reveal delay={40}>
          <h2 className={styles.sectionTitle}>Algorithms, Visualized</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className={styles.sectionSubtitle}>
            Interactive visualizers built to sharpen my data structures &amp; algorithms fundamentals — click any line to open the live app.
          </p>
        </Reveal>
        <div className={styles.sectionInner}>
          <FeaturedProjects projects={liveProjects} />
        </div>
      </section>

      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionTitle}>Skills</h2>
        </Reveal>
        <div className={styles.sectionInner}>
          <Skills groups={skillGroups} />
        </div>
      </section>
    </>
  );
}
