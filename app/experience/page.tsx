import type { Metadata } from "next";
import GradientText from "@/components/GradientText/GradientText";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Experience" };

const experiences = [
  {
    company: "TaxHawk",
    subtitle: "FreeTaxUSA",
    role: "Customer Support Specialist",
    period: "Sep 2025 - Present",
    duties: [
      "Provide expert customer support for tax preparation software, resolving complex user inquiries",
      "Assist customers with account issues, filing processes, and technical troubleshooting",
      "Collaborate with development team to identify and report software bugs",
    ],
  },
  {
    company: "Sodexo at SVU",
    subtitle: "Southern Virginia University",
    role: "Back-of-House Team Member",
    period: "Sep 2023 - Oct 2025",
    duties: [
      "Managed kitchen operations including food preparation and quality control",
      "Maintained health and safety standards in a fast-paced dining environment",
      "Coordinated with team members to ensure efficient service during peak hours",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <div className={styles.header}>
        <GradientText as="h1" className={styles.heading}>
          Experience
        </GradientText>
      </div>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={exp.company} className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <h3 className={styles.company}>{exp.company}</h3>
            {exp.subtitle && (
              <p className={styles.companySubtitle}>{exp.subtitle}</p>
            )}
            <p className={styles.role}>{exp.role}</p>
            <p className={styles.period}>{exp.period}</p>
            <div className={styles.duties}>
              {exp.duties.map((duty, i) => (
                <p key={i} className={styles.duty}>
                  {duty}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
