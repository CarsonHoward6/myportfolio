"use client";

import ProfileCard from "@/components/ui/ProfileCard";

export function AboutProfileCard() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            background: "linear-gradient(135deg, #74c69d, #2d6a4f)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "0.25rem",
          }}
        >
          Carson Howard
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--text-secondary)",
            fontWeight: 300,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Full Stack Developer
        </p>
      </div>

      <ProfileCard
        name=""
        title=""
        handle=""
        status=""
        contactText="Contact Me"
        avatarUrl="/images/carson-profile.jpg"
        showUserInfo={false}
        enableTilt
        enableMobileTilt={false}
        onContactClick={() => {
          window.location.href = "mailto:carsonhoward6@gmail.com";
        }}
        behindGlowColor="rgba(82, 183, 136, 0.67)"
        innerGradient="linear-gradient(145deg, #1b4332cc 0%, #52b78844 100%)"
      />
    </div>
  );
}
