import Link from 'next/link';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import styles from './Hero.module.scss';

const BARS = [3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 1, 4, 2, 1, 3, 1, 2, 4, 1, 1, 3, 2, 1, 4, 1];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.grid}>
        <div className={styles.text}>
          <Reveal>
            <p className={styles.eyebrow}>Full Stack Developer · Bengaluru</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={styles.title}>
              Oviya D<span className={styles.dot}>.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.subtitle}>{profile.tagline}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className={styles.actions}>
              <Link href="/projects" className={styles.primaryBtn}>
                View Work
              </Link>
              <a href="/resume.pdf" download className={styles.secondaryBtn}>
                Download Résumé <span aria-hidden="true">↓</span>
              </a>
              <Link href="/contact" className={styles.tertiaryBtn}>
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className={styles.tagWrap}>
          <div className={styles.tag}>
            <span className={styles.stamp}>Open to roles</span>

            <div className={styles.tagHoleRow}>
              <div className={styles.tagHole} />
            </div>

            <div className={styles.photoFrame}>
              <Image
                src="/images/profile.jpg"
                alt={profile.name}
                fill
                className={styles.photo}
                sizes="180px"
                priority
              />
            </div>

            <p className={styles.tagLabel}>Developer Profile</p>
            <h2 className={styles.tagName}>{profile.name}</h2>
            <p className={styles.tagRole}>{profile.title}</p>

            <div className={styles.tagDivider} />

            <dl className={styles.specs}>
              <div className={styles.spec}>
                <dt>Ref. No.</dt>
                <dd>FSD—2022—BLR</dd>
              </div>
              <div className={styles.spec}>
                <dt>Experience</dt>
                <dd>4+ Years</dd>
              </div>
              <div className={styles.spec}>
                <dt>Stack</dt>
                <dd>React · Next.js · Node</dd>
              </div>
              <div className={styles.spec}>
                <dt>Status</dt>
                <dd className={styles.statusOpen}>
                  <span className={styles.statusDot} /> Available
                </dd>
              </div>
            </dl>

            <div className={styles.barcode} aria-hidden="true">
              {BARS.map((width, index) => (
                <span key={index} style={{ width: `${width}px` }} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
