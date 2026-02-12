"use client";

import { SparklesCore } from "@/components/ui/sparkles";

export function AboutSparkles() {
  return (
    <SparklesCore
      id="about-sparkles"
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={100}
      particleColor="#FFFFFF"
      speed={1}
      className="sparkles-fill"
    />
  );
}
