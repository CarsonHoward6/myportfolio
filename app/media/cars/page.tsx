import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Car Photography" };

const carPhotos = [
  { src: "/images/cars/mikebug1.jpg", alt: "VW Bug - Front" },
  { src: "/images/cars/mikebug2.jpg", alt: "VW Bug - Side" },
  { src: "/images/cars/mikebug3.jpg", alt: "VW Bug - Detail" },
  { src: "/images/cars/mikebelair1.jpg", alt: "Bel Air" },
  { src: "/images/cars/volkswagen.jpg", alt: "Volkswagen" },
  { src: "/images/cars/mikebus2.jpg", alt: "VW Bus - Angle" },
  { src: "/images/cars/mikebus3.jpg", alt: "VW Bus - Rear" },
  { src: "/images/cars/beldash.jpg", alt: "Bel Air Dashboard" },
  { src: "/images/cars/bugwheel.jpg", alt: "Bug Wheel Detail" },
  { src: "/images/cars/clementsautorepair.jpg", alt: "Clements Auto Repair" },
  { src: "/images/cars/garage1.jpg", alt: "Garage - Shot 1" },
  { src: "/images/cars/garage2.jpg", alt: "Garage - Shot 2" },
  { src: "/images/cars/garage3.jpg", alt: "Garage - Shot 3" },
  { src: "/images/cars/garage4.jpg", alt: "Garage - Shot 4" },
  { src: "/images/cars/wvbuswallpaper.jpg", alt: "VW Bus Wallpaper" },
  { src: "/images/cars/phoneshot.jpg", alt: "Behind the Scenes" },
];

export default function CarsPage() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/videos/vwbus.mp4"
      bgImageSrc="/images/cars/mikebusedit1.jpg"
      title="Car Photography"
      scrollToExpand="Scroll to explore"
      textBlend
    >
      <Link href="/media" className={styles.backLink}>
        &larr; Back to Media
      </Link>

      <p className={styles.intro}>
        Automotive photography capturing the character and craftsmanship of
        classic vehicles — from vintage Volkswagens to American classics.
      </p>

      <h3 className={styles.subheading}>Gallery</h3>
      <div className={styles.photoGrid}>
        {carPhotos.map((photo) => (
          <div key={photo.src} className={styles.photoCard}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={400}
              className={styles.photo}
            />
          </div>
        ))}
      </div>
    </ScrollExpandMedia>
  );
}
