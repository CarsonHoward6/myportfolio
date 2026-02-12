"use client";

import type React from "react";
import { Warp } from "@paper-design/shaders-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

interface FeaturesCardsProps {
  features: Feature[];
}

const shaderConfigs = [
  {
    proportion: 0.3,
    softness: 0.8,
    distortion: 0.15,
    swirl: 0.6,
    swirlIterations: 8,
    shape: "checks" as const,
    shapeScale: 0.08,
    colors: [
      "hsl(145, 60%, 22%)",
      "hsl(155, 50%, 45%)",
      "hsl(140, 55%, 30%)",
      "hsl(160, 60%, 50%)",
    ],
  },
  {
    proportion: 0.4,
    softness: 1.2,
    distortion: 0.2,
    swirl: 0.9,
    swirlIterations: 12,
    shape: "stripes" as const,
    shapeScale: 0.12,
    colors: [
      "hsl(160, 55%, 20%)",
      "hsl(150, 60%, 48%)",
      "hsl(170, 45%, 28%)",
      "hsl(145, 55%, 55%)",
    ],
  },
  {
    proportion: 0.35,
    softness: 0.9,
    distortion: 0.18,
    swirl: 0.7,
    swirlIterations: 10,
    shape: "checks" as const,
    shapeScale: 0.1,
    colors: [
      "hsl(130, 50%, 18%)",
      "hsl(140, 55%, 42%)",
      "hsl(150, 50%, 25%)",
      "hsl(135, 60%, 50%)",
    ],
  },
  {
    proportion: 0.45,
    softness: 1.1,
    distortion: 0.22,
    swirl: 0.8,
    swirlIterations: 15,
    shape: "stripes" as const,
    shapeScale: 0.09,
    colors: [
      "hsl(155, 55%, 20%)",
      "hsl(165, 50%, 45%)",
      "hsl(145, 60%, 28%)",
      "hsl(170, 55%, 52%)",
    ],
  },
];

export default function FeaturesCards({ features }: FeaturesCardsProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
      }}
    >
      {features.map((feature, index) => {
        const config = shaderConfigs[index % shaderConfigs.length];
        return (
          <div key={index} style={{ position: "relative", height: "320px" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <Warp
                style={{ height: "100%", width: "100%" }}
                proportion={config.proportion}
                softness={config.softness}
                distortion={config.distortion}
                swirl={config.swirl}
                swirlIterations={config.swirlIterations}
                shape={config.shape}
                shapeScale={config.shapeScale}
                scale={1}
                rotation={0}
                speed={0.8}
                colors={config.colors}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 10,
                padding: "1.75rem",
                borderRadius: "24px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: "rgba(0, 0, 0, 0.8)",
                border: "1px solid rgba(82, 183, 136, 0.2)",
              }}
            >
              <div
                style={{
                  marginBottom: "1rem",
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
                }}
              >
                {feature.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  color: "#fff",
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  lineHeight: 1.6,
                  flexGrow: 1,
                  color: "rgba(200, 200, 200, 0.9)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                {feature.description}
              </p>

              {feature.items.length > 0 && (
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {feature.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "0.25rem 0.6rem",
                        background: "rgba(82, 183, 136, 0.15)",
                        border: "1px solid rgba(82, 183, 136, 0.25)",
                        borderRadius: "100px",
                        fontSize: "0.75rem",
                        color: "rgba(116, 198, 157, 0.9)",
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
