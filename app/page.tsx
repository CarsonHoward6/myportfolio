import GradientText from "@/components/GradientText/GradientText";
import { HomeBackground } from "./HomeBackground";
import { HomeMorphingText } from "./HomeMorphingText";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.shaderBg}>
        <HomeBackground />
      </div>
      <div className={styles.content}>
        <GradientText as="h1" className={styles.name}>
          Carson Howard
        </GradientText>
        <HomeMorphingText />
        <p className={styles.tagline}>
          Building modern web experiences with a passion for clean code,
          creative design, and scalable solutions. Currently pursuing a BS in
          Computer Science at Southern Virginia University.
        </p>
      </div>
    </div>
  );
}
