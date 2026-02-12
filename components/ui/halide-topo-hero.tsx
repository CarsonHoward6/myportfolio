"use client";

import React, { useEffect, useRef } from "react";

interface HalideTopoHeroProps {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  detail?: string;
}

export default function HalideTopoHero({
  imageUrl,
  title = "SVU",
  subtitle = "SOUTHERN VIRGINIA UNIVERSITY",
  detail = "BS COMPUTER SCIENCE — 2026",
}: HalideTopoHeroProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const currentRef = useRef({ rx: 0, ry: 0 });
  const targetRef = useRef({ rx: 0, ry: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      const c = currentRef.current;
      const t = targetRef.current;
      c.rx = lerp(c.rx, t.rx, 0.12);
      c.ry = lerp(c.ry, t.ry, 0.12);
      card.style.transform = `perspective(1200px) rotateX(${c.rx}deg) rotateY(${c.ry}deg)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      targetRef.current = { rx: -dy * 8, ry: dx * 8 };
    };

    const handleMouseLeave = () => {
      targetRef.current = { rx: 0, ry: 0 };
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        .topo-card {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 20px;
          overflow: hidden;
          cursor: default;
          will-change: transform;
          transform-style: preserve-3d;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .topo-image {
          position: absolute;
          inset: 0;
          background-image: url('${imageUrl}');
          background-size: cover;
          background-position: center;
          filter: brightness(0.75) contrast(1.05) saturate(1.1);
        }

        .topo-contours {
          position: absolute;
          inset: 0;
          background-image: repeating-radial-gradient(
            circle at 50% 50%,
            transparent 0,
            transparent 40px,
            rgba(82, 183, 136, 0.05) 41px,
            transparent 42px
          );
          pointer-events: none;
          z-index: 2;
        }

        .topo-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.55) 0%,
            transparent 40%,
            transparent 55%,
            rgba(0, 0, 0, 0.6) 100%
          );
          z-index: 3;
          pointer-events: none;
        }

        .topo-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 4;
          opacity: 0.1;
        }

        .topo-content {
          position: absolute;
          inset: 0;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem 2.5rem;
          pointer-events: none;
        }

        .topo-title {
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.03em;
          color: #fff;
          margin: 0;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
        }

        .topo-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .topo-subtitle {
          font-family: monospace;
          font-size: 0.75rem;
          letter-spacing: 2px;
          color: rgba(116, 198, 157, 0.9);
          margin: 0;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
        }

        .topo-detail {
          font-family: monospace;
          font-size: 0.75rem;
          letter-spacing: 1px;
          color: rgba(116, 198, 157, 0.7);
          text-align: right;
          margin: 0;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
        }

        .topo-border {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          border: 1px solid rgba(82, 183, 136, 0.15);
          z-index: 6;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .topo-content {
            padding: 1.5rem;
          }
          .topo-subtitle {
            font-size: 0.6rem;
          }
          .topo-detail {
            font-size: 0.6rem;
          }
        }
      `}</style>

      <div ref={cardRef} className="topo-card">
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="topo-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="topo-image" />
        <div className="topo-contours" />
        <div className="topo-gradient" />
        <div className="topo-grain" style={{ filter: "url(#topo-grain)" }} />
        <div className="topo-border" />

        <div className="topo-content">
          <h2 className="topo-title">{title}</h2>
          <div className="topo-meta">
            <p className="topo-subtitle">{subtitle}</p>
            <p className="topo-detail">{detail}</p>
          </div>
        </div>
      </div>
    </>
  );
}
