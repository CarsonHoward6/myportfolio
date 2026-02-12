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

        <SectionBlock title="Objective">
          <p className={styles.objective}>
            Driven Computer Science student at Southern Virginia University with
            a strong foundation in full-stack development and cloud services.
            Passionate about building scalable web applications and delivering
            clean, user-focused solutions. Seeking opportunities to apply
            technical skills in a collaborative, fast-paced environment.
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

        <SectionBlock title="Campus Engagement">
          <div className={styles.engagementList}>
            <div className={styles.engagementItem}>
              Polynesian Heritage Association
            </div>
            <div className={styles.engagementItem}>D1 Rugby</div>
          </div>
        </SectionBlock>
      </div>
    </PageWrapper>
  );
}
