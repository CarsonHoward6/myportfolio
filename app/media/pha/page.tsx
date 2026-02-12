import type { Metadata } from "next";
import Link from "next/link";
import GradientText from "@/components/GradientText/GradientText";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Polynesian Heritage Association" };

const phaIntros = [
  { title: "Aotearoa", src: "https://pub-6bcb27089a4d4273905b2c97828b61df.r2.dev/pha/aotearoa.mp4" },
  { title: "Fiji", src: "https://pub-6bcb27089a4d4273905b2c97828b61df.r2.dev/pha/fiji.mp4" },
  { title: "Hawaii", src: "https://pub-6bcb27089a4d4273905b2c97828b61df.r2.dev/pha/hawaii.mp4" },
  { title: "Samoa", src: "https://pub-6bcb27089a4d4273905b2c97828b61df.r2.dev/pha/samoa.mp4" },
  { title: "Tahiti", src: "https://pub-6bcb27089a4d4273905b2c97828b61df.r2.dev/pha/tahiti.mp4" },
  { title: "Tonga", src: "https://pub-6bcb27089a4d4273905b2c97828b61df.r2.dev/pha/tonga.mp4" },
];

export default function PHAPage() {
  return (
    <PageWrapper>
      <Link href="/media" className={styles.backLink}>
        &larr; Back to Media
      </Link>

      <div className={styles.header}>
        <GradientText as="h1" className={styles.heading}>
          Polynesian Heritage Association
        </GradientText>
      </div>

      <p className={styles.intro}>
        Video production for the Polynesian Heritage Association at Southern
        Virginia University — capturing the energy, culture, and pride of each
        island nation represented in the organization.
      </p>

      <div className={styles.featuredVideo}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            controls
            preload="metadata"
            playsInline
          >
            <source src="https://pub-6bcb27089a4d4273905b2c97828b61df.r2.dev/pha/wide-warriors.mp4" type="video/mp4" />
          </video>
        </div>
        <h3 className={styles.videoTitle}>PHA Wide Warriors</h3>
      </div>

      <h4 className={styles.subheading}>Island Intros</h4>
      <div className={styles.videoGridSmall}>
        {phaIntros.map((vid) => (
          <div key={vid.title} className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <video
                className={styles.video}
                controls
                preload="metadata"
                playsInline
              >
                <source src={vid.src} type="video/mp4" />
              </video>
            </div>
            <h3 className={styles.videoTitle}>{vid.title}</h3>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
