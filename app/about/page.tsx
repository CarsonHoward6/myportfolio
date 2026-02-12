import type { Metadata } from "next";
import GradientText from "@/components/GradientText/GradientText";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import SectionBlock from "@/components/SectionBlock/SectionBlock";
import { AboutSparkles } from "./AboutSparkles";
import { AboutProfileCard } from "./AboutProfileCard";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className={styles.sparklesBg}>
        <AboutSparkles />
      </div>

      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.cardWrapper}>
            <AboutProfileCard />
          </div>
        </div>

        <SectionBlock title="About Me">
          <p className={styles.objective}>
            I&apos;m Carson Howard, a Computer Science student originally from
            Queen Creek, Arizona, graduating in May 2026. I focus on full-stack
            development and enjoy building efficient, user-centered applications
            that solve real-world problems. I&apos;m passionate about learning
            modern technologies, improving system performance, and writing clean,
            maintainable code. As a husband and father, I value responsibility,
            discipline, and long-term growth—qualities I bring into both my
            academic work and development projects. I&apos;m eager to contribute
            to a collaborative team where I can continue expanding my technical
            skills and deliver meaningful software solutions.
          </p>
        </SectionBlock>

        <SectionBlock title="Contact">
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone</span>
              <a href="tel:+14806883949" className={styles.contactValue}>
                (480) 688-3949
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <a
                href="mailto:carsonhoward6@gmail.com"
                className={styles.contactValue}
              >
                carsonhoward6@gmail.com
              </a>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock title="Links">
          <div className={styles.linksList}>
            <a
              href="https://linkedin.com/in/carsonhoward6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/CarsonHoward6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
            >
              GitHub
            </a>
          </div>
        </SectionBlock>
      </div>
    </PageWrapper>
  );
}
