import type { Metadata } from "next";
import GradientText from "@/components/GradientText/GradientText";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import SectionBlock from "@/components/SectionBlock/SectionBlock";
import { EducationShaderCards } from "./EducationShaderCards";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <PageWrapper>
      <div className={styles.header}>
        <GradientText as="h1" className={styles.heading}>
          Education & Skills
        </GradientText>
      </div>

      <SectionBlock title="Education">
        <div className={styles.eduCard}>
          <h3 className={styles.school}>Southern Virginia University</h3>
          <p className={styles.degree}>
            Bachelor of Science in Computer Science
          </p>
          <p className={styles.date}>Expected May 2026</p>
        </div>
      </SectionBlock>

      <SectionBlock title="Skills">
        <EducationShaderCards />
      </SectionBlock>
    </PageWrapper>
  );
}
