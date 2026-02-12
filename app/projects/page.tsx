import type { Metadata } from "next";
import GradientText from "@/components/GradientText/GradientText";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Projects" };

const projects = [
  {
    name: "Campus Clash",
    period: "Current - Senior Capstone",
    current: true,
    description:
      "A real-time multiplayer game built for the senior capstone project. Features competitive gameplay with persistent player data, matchmaking, and live state synchronization.",
    tech: [
      "TypeScript",
      "Phaser.js",
      "Node.js",
      "Colyseus",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
  {
    name: "ProGrid",
    period: "Fall 2025",
    current: false,
    description:
      "A professional grid-based project management tool designed for team collaboration and task tracking with real-time updates and intuitive UI.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  {
    name: "My LMS",
    period: "Fall 2025",
    current: false,
    description:
      "A custom learning management system enabling course creation, content delivery, and student progress tracking with a clean, modern interface.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className={styles.header}>
        <GradientText as="h1" className={styles.heading}>
          Projects
        </GradientText>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <span
                className={`${styles.badge} ${project.current ? styles.badgeCurrent : ""}`}
              >
                {project.period}
              </span>
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech.map((t) => (
                <span key={t} className={styles.tech}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
