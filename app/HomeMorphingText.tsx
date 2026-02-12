"use client";

import { MorphingText } from "@/components/ui/morphing-text";

const roles = ["Full Stack Developer", "Entrepreneur", "Designer"];

export function HomeMorphingText() {
  return <MorphingText texts={roles} />;
}
