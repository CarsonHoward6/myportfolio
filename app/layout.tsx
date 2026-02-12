import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StaggeredMenu from "@/components/StaggeredMenu/StaggeredMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Carson Howard | Portfolio",
    template: "%s | Carson Howard",
  },
  description:
    "Full Stack Developer portfolio — Carson Howard. Projects, experience, education, and media.",
};

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about Carson", link: "/about" },
  {
    label: "Education",
    ariaLabel: "View education and skills",
    link: "/education",
  },
  { label: "Projects", ariaLabel: "View projects", link: "/projects" },
  {
    label: "Experience",
    ariaLabel: "View work experience",
    link: "/experience",
  },
  {
    label: "Media",
    ariaLabel: "View photography and videography",
    link: "/media",
  },
];

const socialItems = [
  { label: "LinkedIn", link: "https://linkedin.com/in/carsonhoward6" },
  { label: "GitHub", link: "https://github.com/CarsonHoward6" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen
          colors={["#74c69d", "#2d6a4f"]}
          accentColor="#52b788"
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
