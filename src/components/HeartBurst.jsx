import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import "./HeartBurst.css";

const COLORS = ["#ff2d70", "#ff5c9e", "#e0417f", "#ff3d8b", "#d6336c", "#ff7aa8"];
const COUNT = 40;
const LIFETIME_MS = 9000;

export default function HeartBurst() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), LIFETIME_MS);
    return () => clearTimeout(t);
  }, []);

  const hearts = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        key: i,
        left: Math.random() * 100,
        drift: (Math.random() * 2 - 1) * 40,
        rise: 58 + Math.random() * 34,
        rot: (Math.random() * 2 - 1) * 900,
        size: 22 + Math.random() * 30,
        dur: 3.8 + Math.random() * 3,
        delay: Math.random() * 2,
        color: COLORS[i % COLORS.length],
      })),
    []
  );

  if (gone) return null;

  return createPortal(
    <div className="heartburst" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.key}
          className="heartburst__h"
          style={{
            left: `${h.left}vw`,
            color: h.color,
            width: h.size,
            height: h.size,
            "--drift": `${h.drift}vw`,
            "--rise": `${h.rise}vh`,
            "--rot": `${h.rot}deg`,
            animationDuration: `${h.dur}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          <svg viewBox="0 0 32 29">
            <path
              d="M16 28.8C6 21 1.6 15 1.6 8.9 1.6 3.7 5.6 1 9.8 1c2.8 0 5.1 1.6 6.2 3.9C17.1 2.6 19.4 1 22.2 1c4.2 0 8.2 2.7 8.2 7.9 0 6.1-4.4 12.1-14.4 19.9z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </div>,
    document.body
  );
}
