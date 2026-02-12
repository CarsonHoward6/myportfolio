"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        <div>
          <div style={styles.imageContainer}>
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  style={styles.imageWrapper}
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    style={styles.image}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div style={styles.textColumn}>
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 style={styles.name}>{testimonials[active].name}</h3>
            <p style={styles.designation}>
              {testimonials[active].designation}
            </p>
            <motion.p style={styles.quote}>
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  style={{ display: "inline-block" }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div style={styles.buttons}>
            <button onClick={handlePrev} style={styles.button}>
              <IconArrowLeft
                style={{ width: 20, height: 20, color: "var(--text-primary)" }}
              />
            </button>
            <button onClick={handleNext} style={styles.button}>
              <IconArrowRight
                style={{ width: 20, height: 20, color: "var(--text-primary)" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "56rem",
    margin: "0 auto",
    padding: "3rem 2rem",
  },
  grid: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    height: "20rem",
    width: "100%",
  },
  imageWrapper: {
    position: "absolute",
    inset: 0,
    transformOrigin: "bottom center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: "1.5rem",
    objectFit: "cover",
    objectPosition: "center",
  },
  textColumn: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "1rem 0",
    minHeight: "20rem",
  },
  name: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "var(--text-primary)",
    marginBottom: "0.25rem",
  },
  designation: {
    fontSize: "0.9rem",
    color: "var(--text-muted)",
  },
  quote: {
    fontSize: "1.05rem",
    color: "var(--text-secondary)",
    marginTop: "2rem",
    lineHeight: 1.7,
  },
  buttons: {
    display: "flex",
    gap: "1rem",
    paddingTop: "2rem",
  },
  button: {
    height: 36,
    width: 36,
    borderRadius: "50%",
    background: "var(--bg-tertiary)",
    border: "1px solid var(--border-color)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
};
