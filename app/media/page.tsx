import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GradientText from "@/components/GradientText/GradientText";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Media" };

const categories = [
  {
    title: "Car Photography",
    description: "Classic vehicles captured with character and craftsmanship",
    href: "/media/cars",
    image: "/images/cars/mikebusedit1.jpg",
  },
  {
    title: "Wedding Films",
    description: "Cinematic films capturing your special day",
    href: "/media/weddings",
    image: "/images/wedding-cover.jpeg",
  },
  {
    title: "PHA",
    description: "Polynesian Heritage Association at Southern Virginia University",
    href: "/media/pha",
    video: "/videos/pha-cover.mp4",
  },
  {
    title: "Portfolio",
    description: "A curated selection across sports, events, and storytelling",
    href: "/media/other",
    video: "/videos/profile.mp4",
  },
];

export default function MediaPage() {
  return (
    <PageWrapper>
      <div className={styles.header}>
        <GradientText as="h1" className={styles.heading}>
          Media
        </GradientText>
        <p className={styles.brand}>FilmsByCarson</p>
        <a
          href="https://www.instagram.com/c.howardproductions"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagram}
        >
          @c.howardproductions
        </a>
      </div>

      <p className={styles.intro}>
        Self-employed photographer and videographer specializing in dynamic
        visual storytelling. From high-energy sports to intimate cultural
        performances and weddings, I capture moments that matter.
      </p>

      <div className={styles.services}>
        <span className={styles.service}>Sports Photography</span>
        <span className={styles.service}>Cultural Performances</span>
        <span className={styles.service}>Weddings</span>
        <span className={styles.service}>Videography</span>
        <span className={styles.service}>Event Coverage</span>
      </div>

      <div className={styles.categoryGrid}>
        {categories.map((cat) => (
          <Link key={cat.title} href={cat.href} className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              {cat.image ? (
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={800}
                  height={450}
                  className={styles.categoryImage}
                />
              ) : cat.video ? (
                <video
                  src={cat.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.categoryImage}
                />
              ) : null}
              <div className={styles.categoryOverlay} />
            </div>
            <div className={styles.categoryInfo}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              <p className={styles.categoryDesc}>{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </PageWrapper>
  );
}
