import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CircularText({ text = "ROSSELLA • ", radius = 22, speed = 12 }) {
  const letters = text.split("");
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(darkMode.matches);

    const handler = (e) => setIsDark(e.matches);
    darkMode.addEventListener("change", handler);

    return () => darkMode.removeEventListener("change", handler);
  }, []);

  const gradient = isDark
    ? "linear-gradient(45deg, #ff4ecd, #ff9adf)"
    : "linear-gradient(45deg, #e754ff, #ff8fd8)";

  const centerTextColor = isDark ? "#ffffff" : "#1a1a1a";

  return (
    <div style={{ position: "relative", width: radius * 2, height: radius * 2 }}>
      
      {/* Glow halo in dark mode */}
      {isDark && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,78,205,0.25) 0%, rgba(255,78,205,0.08) 40%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      )}

      {/* Rotating text */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        {letters.map((letter, i) => {
          const angle = (360 / letters.length) * i;
          return (
            <span
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `rotate(${angle}deg) translate(${radius}px)`,
                transformOrigin: "0 0",
                fontSize: "8px",
                fontWeight: "900",
                letterSpacing: "1px",
                whiteSpace: "pre",
                background: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>

      {/* Glass badge RM */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          backdropFilter: "blur(10px)",
          background: isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.6)",
          border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isDark
            ? "0 0 15px rgba(255,78,205,0.3)"
            : "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: "900",
            color: centerTextColor,
            letterSpacing: "1px",
          }}
        >
          RM
        </span>
      </div>
    </div>
  );
}