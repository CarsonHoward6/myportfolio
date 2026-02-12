import styles from "./GradientText.module.css";

interface GradientTextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
}

export default function GradientText({
  children,
  as: Tag = "h1",
  className,
}: GradientTextProps) {
  return (
    <Tag className={`${styles.gradient} ${className ?? ""}`}>{children}</Tag>
  );
}
