import { Reveal } from '@/components/ui/Reveal/Reveal';
import styles from './Skills.module.scss';

export function Skills({ groups }) {
  return (
    <div className={styles.grid}>
      {groups.map((group, index) => (
        <Reveal key={group.category} delay={index * 60}>
          <div className={styles.group}>
            <h3 className={styles.category}>{group.category}</h3>
            <div className={styles.chips}>
              {group.skills.map((skill) => (
                <span key={skill} className={styles.chip}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
