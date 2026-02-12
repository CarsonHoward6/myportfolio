import type { Metadata } from "next";
import Link from "next/link";
import GradientText from "@/components/GradientText/GradientText";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { MediaShowcase } from "../MediaShowcase";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Portfolio" };

export default function OtherPage() {
  return (
    <PageWrapper>
      <Link href="/media" className={styles.backLink}>
        &larr; Back to Media
      </Link>

      <div className={styles.header}>
        <GradientText as="h1" className={styles.heading}>
          Portfolio
        </GradientText>
      </div>

      <p className={styles.intro}>
        A curated selection of work across sports, events, and visual
        storytelling.
      </p>

      <MediaShowcase />
    </PageWrapper>
  );
}
