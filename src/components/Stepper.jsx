import { useEffect, useRef, useState } from "react";
import { steps } from "../steps.jsx";
import "./Stepper.css";

const SWIPE_THRESHOLD = 60; // px

export default function Stepper() {
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);
  const stageRef = useRef(null);

  // Every step starts scrolled to the top, even if the previous one was scrolled.
  useEffect(() => {
    stageRef.current?.scrollTo({ top: 0 });
  }, [index]);

  const step = steps[index];
  const isFirst = index === 0;
  const isLast = index === steps.length - 1;

  // Optional timed lock: `gate: { seconds, messages: [...] }` cycles the Next
  // button's copy evenly across `seconds`. The button stays disabled until the
  // final message is reached, then re-enables showing that last label.
  const gate = step.gate;
  const [gateStage, setGateStage] = useState(0);

  useEffect(() => {
    if (!gate) {
      setGateStage(0);
      return;
    }
    setGateStage(0);
    const last = gate.messages.length - 1;
    const stepMs = (gate.seconds * 1000) / last;
    const timers = [];
    for (let i = 1; i <= last; i++) {
      timers.push(setTimeout(() => setGateStage(i), stepMs * i));
    }
    return () => timers.forEach(clearTimeout);
  }, [index, gate]);

  const gateActive = gate && gateStage < gate.messages.length - 1;

  const goNext = () => {
    if (gateActive) return;
    setIndex((i) => Math.min(i + 1, steps.length - 1));
  };
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

      <div className="stepper__stage" ref={stageRef}>
        <div
          className={step.bare ? "stepper__bare" : "stepper__card"}
          key={step.id}
        >
          {step.content}
        </div>
      </div>

      {!step.hideControls && (
        <div className="stepper__controls">
          {/* hide stepper, commented out */}
          {/* <div className="stepper__dots" role="tablist" aria-label="Progress">
          {steps.map((s, i) => (
            <span
              key={s.id}
              className={`stepper__dot ${i === index ? "is-active" : ""}`}
            />
          ))}
        </div> */}

          <button
            className="stepper__btn"
            onClick={goNext}
            disabled={gateActive || (isLast && !gate)}
            aria-label={gateActive ? "Please wait" : "Next"}
          >
            {gate ? gate.messages[gateStage] : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
