import { Reveal } from '@/components/ui/Reveal/Reveal';
import styles from './FeaturedProjects.module.scss';

const GRID_COLS = 10;
const GRID_WALLS = new Set([5, 6, 25]);
const GRID_PATH = new Set([0, 1, 2, 3, 4, 14, 15, 16, 17, 18, 19, 29]);
const GRID_START = 0;
const GRID_END = 29;

function GridPreview() {
  const cells = Array.from({ length: GRID_COLS * 3 });
  return (
    <div className={styles.gridPreview}>
      {cells.map((_, i) => {
        const isWall = GRID_WALLS.has(i);
        const isPath = GRID_PATH.has(i);
        const isStart = i === GRID_START;
        const isEnd = i === GRID_END;
        return (
          <span
            key={i}
            className={styles.gridCell}
            data-wall={isWall || undefined}
            data-path={isPath || undefined}
            style={{ transitionDelay: `${(i % GRID_COLS) * 25}ms` }}
          >
            {isStart && <span className={styles.gridMarker} data-kind="start" />}
            {isEnd && <span className={styles.gridMarker} data-kind="end" />}
          </span>
        );
      })}
    </div>
  );
}

const ARRAY_VALUES = [12, 27, 35, 41, 58, 63, 71, 84, 90, 99];
const ARRAY_ACTIVE_INDEX = 5;

function ArrayPreview() {
  return (
    <div className={styles.arrayPreview}>
      {ARRAY_VALUES.map((value, i) => (
        <span
          key={value}
          className={styles.arrayCell}
          data-active={i === ARRAY_ACTIVE_INDEX || undefined}
          style={{ transitionDelay: `${i * 30}ms` }}
        >
          {value}
        </span>
      ))}
    </div>
  );
}

const BAR_HEIGHTS = [40, 70, 25, 90, 55, 18, 80, 35, 65, 48];

function BarsPreview() {
  return (
    <div className={styles.barsPreview}>
      {BAR_HEIGHTS.map((height, i) => (
        <span
          key={i}
          className={styles.bar}
          style={{ height: `${height}%`, transitionDelay: `${i * 40}ms` }}
        />
      ))}
    </div>
  );
}

function Preview({ type }) {
  if (type === 'grid') return <GridPreview />;
  if (type === 'array') return <ArrayPreview />;
  return <BarsPreview />;
}

export function FeaturedProjects({ projects }) {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <Reveal key={project.name} delay={index * 90}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.previewFrame}>
              <Preview type={project.type} />
            </div>

            <div className={styles.body}>
              <div className={styles.top}>
                <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.live}>
                  <span className={styles.liveDot} />
                  Live
                </span>
              </div>

              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.tagline}>{project.tagline}</p>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <span className={styles.cta}>
                View Live Demo <span aria-hidden="true">↗</span>
              </span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
