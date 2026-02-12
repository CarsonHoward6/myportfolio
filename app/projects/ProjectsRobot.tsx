"use client";

import { useCallback, useRef } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const ROBOT_SCENE_URL =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export default function ProjectsRobot({
  children,
}: {
  children?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const canvas = container.querySelector("canvas");
    if (!canvas || e.target === canvas) return;

    canvas.dispatchEvent(
      new PointerEvent("pointermove", {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: false,
        pointerId: 1,
        pointerType: "mouse",
      })
    );
    canvas.dispatchEvent(
      new MouseEvent("mousemove", {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: false,
      })
    );
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "rgba(0, 0, 0, 0.96)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-color)",
      }}
    >
      <Spotlight
        fill="rgba(82, 183, 136, 0.4)"
        style={{ top: "-10rem", left: "0", width: "138%", height: "169%" }}
      />

      {/* Spline scene — shifted right, behind cards */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "30%",
          right: "-15%",
          zIndex: 0,
        }}
      >
        <SplineScene
          scene={ROBOT_SCENE_URL}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Cards — on top with hover effects */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "2rem",
          width: "55%",
          minHeight: 550,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
