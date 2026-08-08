import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import styles from './page.module.scss';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  return { title: project ? `${project.title} | Oviya` : 'Project | Oviya' };
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className={styles.article}>
      {/* Swap for a real screenshot in public/projects/ when ready */}
      <Reveal>
        <div className={styles.imageWrap}>
          <span className={styles.imageFallback}>{project.title}</span>
        </div>
      </Reveal>
      <div className={styles.content}>
        <Reveal delay={60}>
          <h1 className={styles.title}>{project.title}</h1>
        </Reveal>
        <Reveal delay={100}>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={140}>
          <p className={styles.description}>{project.description}</p>
        </Reveal>

        {project.highlights && (
          <Reveal delay={180}>
            <ul className={styles.highlights}>
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </article>
  );
}
