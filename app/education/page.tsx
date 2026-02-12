import type { Metadata } from "next";
import GradientText from "@/components/GradientText/GradientText";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import SectionBlock from "@/components/SectionBlock/SectionBlock";
import { EducationShaderCards } from "./EducationShaderCards";
import { EducationTopoHero } from "./EducationTopoHero";
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
        <EducationTopoHero />
      </SectionBlock>

      <SectionBlock title="Skills">
        <EducationShaderCards />
      </SectionBlock>

      <SectionBlock title="Campus Engagement">
        <div className={styles.engagementList}>
          <div className={styles.engagementItem}>
            Polynesian Heritage Association
          </div>
          <div className={styles.engagementItem}>D1 Rugby</div>
        </div>
      </SectionBlock>
    </PageWrapper>
  );
}
