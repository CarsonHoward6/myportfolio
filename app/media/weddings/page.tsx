import type { Metadata } from "next";
import Link from "next/link";
import GradientText from "@/components/GradientText/GradientText";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Wedding Films" };

const weddingFilms = [
  {
    title: "Brydges Wedding",
    src: "https://pub-6bcb27089a4d4273905b2c97828b61df.r2.dev/brydges-wedding.mp4",
  },
  {
    title: "Goodbars Wedding",
    src: "https://pub-6bcb27089a4d4273905b2c97828b61df.r2.dev/goodbars-wedding.mp4",
  },
];

export default function WeddingsPage() {
  return (
    <PageWrapper>
      <Link href="/media" className={styles.backLink}>
        &larr; Back to Media
      </Link>

      <div className={styles.header}>
        <GradientText as="h1" className={styles.heading}>
          Wedding Films
        </GradientText>
      </div>

      <p className={styles.intro}>
        Cinematic wedding films that capture the emotion, beauty, and joy of
        your special day.
      </p>

      <div className={styles.videoGrid}>
        {weddingFilms.map((film) => (
          <div key={film.title} className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <video
                className={styles.video}
                controls
                preload="metadata"
                playsInline
              >
                <source src={film.src} type="video/mp4" />
              </video>
            </div>
            <h3 className={styles.videoTitle}>{film.title}</h3>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
