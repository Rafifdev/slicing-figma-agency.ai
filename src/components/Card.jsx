import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export function Card({
  children,
  className,
  gradientSize = 200,
  gradientFrom = "#9E7AFF",
  gradientTo = "#5044e5",
}) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={cardRef}
      className={twMerge(
        "group relative rounded-xl border border-gray-200 shadow-md transition hover:shadow-lg bg-white dark:bg-dark-2 dark:border-gray-600",
        className
      )}
    >
      {/* Border gradient (muncul saat hover) */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientFrom}, 
              ${gradientTo}, 
              transparent 100%
            )
          `,
        }}
      />

      {/* Background putih */}
      <div className="absolute inset-0.5 rounded-xl bg-white dark:bg-dark-2" />

      {/* Isi card */}
      <div className="relative p-8">{children}</div>
    </div>
  );
}
