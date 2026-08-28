import { useRef, useState } from "react";
import { steps } from "../steps.jsx";
import "./Stepper.css";

const SWIPE_THRESHOLD = 60; // px

export default function Stepper() {
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);

  const isFirst = index === 0;
  const isLast = index === steps.length - 1;

  const goNext = () => setIndex((i) => Math.min(i + 1, steps.length - 1));
  const restart = () => setIndex(0);

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (delta >= SWIPE_THRESHOLD) goNext(); // swipe right to advance
    touchStart.current = null;
  };

  const step = steps[index];

  return (
    <div
      className="stepper"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {!isFirst && (
        <button
          className="stepper__restart"
          onClick={restart}
          aria-label="Restart from the beginning"
        >
          ↺ Restart
        </button>
      )}

      <div className="stepper__stage">
        <div className="stepper__card" key={step.id}>
          {step.content}
        </div>
      </div>

      <div className="stepper__controls">
        <div className="stepper__dots" role="tablist" aria-label="Progress">
          {steps.map((s, i) => (
            <span
              key={s.id}
              className={`stepper__dot ${i === index ? "is-active" : ""}`}
            />
          ))}
        </div>

        <button
          className="stepper__btn"
          onClick={goNext}
          disabled={isLast}
          aria-label="Next"
        >
          Next
        </button>
      </div>
    </div>
  );
}
