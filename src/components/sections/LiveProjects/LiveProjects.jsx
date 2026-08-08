import { Reveal } from '@/components/ui/Reveal/Reveal';
import styles from './LiveProjects.module.scss';

export function LiveProjects({ projects }) {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <Reveal key={project.name} delay={index * 70}>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.head}>
              <span className={styles.badge}>Live Demo</span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </div>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
