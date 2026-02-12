"use client";

import FeaturesCards from "@/components/ui/feature-shader-cards";

const skills = [
  {
    title: "Languages",
    description:
      "Core programming languages spanning front-end, back-end, and systems development.",
    icon: (
      <svg
        width="40"
        height="40"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ color: "#74c69d" }}
      >
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    ),
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML", "CSS"],
  },
  {
    title: "Backend",
    description:
      "Server-side frameworks, databases, and API development for scalable applications.",
    icon: (
      <svg
        width="40"
        height="40"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ color: "#74c69d" }}
      >
        <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </svg>
    ),
    items: [
      "Node.js",
      "Next.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Supabase",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud platforms, containerization, and CI/CD pipelines for modern deployment workflows.",
    icon: (
      <svg
        width="40"
        height="40"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ color: "#74c69d" }}
      >
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
    items: ["AWS", "Docker", "Vercel", "CI/CD", "Git", "GitHub"],
  },
  {
    title: "Design & Media",
    description:
      "Creative tools for UI/UX design, video production, and visual storytelling.",
    icon: (
      <svg
        width="40"
        height="40"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ color: "#74c69d" }}
      >
        <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" />
        <circle cx="6.5" cy="11.5" r="1.5" />
        <circle cx="9.5" cy="7.5" r="1.5" />
        <circle cx="14.5" cy="7.5" r="1.5" />
        <circle cx="17.5" cy="11.5" r="1.5" />
      </svg>
    ),
    items: [
      "Figma",
      "Adobe Premiere Pro",
      "Lightroom",
      "Responsive Design",
      "UI/UX",
    ],
  },
];

export function EducationShaderCards() {
  return <FeaturesCards features={skills} />;
}
