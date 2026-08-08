import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import styles from './ProjectCard.module.scss';

export function ProjectCard({ project, index = 0 }) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.top}>
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      {project.summary && <p className={styles.summary}>{project.summary}</p>}

      <div className={styles.divider}>
        <span className={styles.notch} data-side="left" />
        <span className={styles.notch} data-side="right" />
      </div>

      <div className={styles.tags}>
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function ProjectGrid({ projects }) {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 70}>
          <ProjectCard project={project} index={index} />
        </Reveal>
      ))}
    </div>
  );
}
