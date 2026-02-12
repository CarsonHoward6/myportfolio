"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const mediaItems = [
  {
    quote:
      "Capturing the raw energy and emotion of live sports — from rugby scrums to track meets. Every frame tells the story of dedication and grit.",
    name: "Sports Photography",
    designation: "Action & Athletic Events",
    src: "https://images.unsplash.com/photo-1461896836934-bd45ba48d052?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Preserving the beauty and authenticity of cultural performances. Dance, music, and tradition brought to life through the lens.",
    name: "Cultural Performances",
    designation: "Dance & Traditional Events",
    src: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Telling love stories through cinematic videography and candid moments. Every wedding is unique and deserves to be remembered beautifully.",
    name: "Wedding Coverage",
    designation: "Ceremony & Reception",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Professional event documentation that captures the atmosphere, the people, and the moments that matter most.",
    name: "Event Coverage",
    designation: "Conferences & Gatherings",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Cinematic videography combining creative storytelling with technical precision. From short films to promotional content.",
    name: "Videography",
    designation: "Film & Motion",
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=3540&auto=format&fit=crop",
  },
];

export function MediaShowcase() {
  return <AnimatedTestimonials testimonials={mediaItems} autoplay />;
}
