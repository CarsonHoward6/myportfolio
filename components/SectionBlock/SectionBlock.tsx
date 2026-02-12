import styles from "./SectionBlock.module.css";

interface SectionBlockProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionBlock({
  title,
  children,
  className,
}: SectionBlockProps) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
