import { Reveal } from '@/components/ui/Reveal/Reveal';
import styles from './Experience.module.scss';

export function ExperienceItem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemHead}>
        <div>
          <h3 className={styles.role}>{item.role}</h3>
          <p className={styles.company}>
            {item.company} · {item.location}
          </p>
        </div>
        <span className={styles.period}>{item.period}</span>
      </div>
      <ul className={styles.highlights}>
        {item.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export function Experience({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <Reveal key={item.company} delay={index * 90}>
          <ExperienceItem item={item} />
        </Reveal>
      ))}
    </div>
  );
}
