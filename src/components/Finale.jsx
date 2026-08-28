import { useState } from "react";
import "./Finale.css";

const NO_LABELS = ["No", "No?", "really??", "you sure??"];
const DODGES = 3;

export default function Finale() {
  const [answer, setAnswer] = useState(null); // "yes" | "no" | null
  const [dodges, setDodges] = useState(0);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });

  const dodge = () => {
    setNoOffset({
      x: (Math.random() * 2 - 1) * 130,
      y: (Math.random() * 2 - 1) * 90 - 8,
    });
    setDodges((d) => d + 1);
  };

  const onNoPointerDown = (e) => {
    if (dodges < DODGES) {
      e.preventDefault();
      dodge();
    }
  };

  const onNoClick = () => {
    if (dodges >= DODGES) setAnswer("no");
  };

  if (answer === "yes") {
    return (
      <div className="finale finale--glow">
        <p className="finale__big">YAY!! 🥳💗</p>
        <p className="finale__sub">
          you just made me the happiest bear alive 🐻💕
        </p>
      </div>
    );
  }

  if (answer === "no") {
    return (
      <div className="finale">
        <p className="finale__big">aw… 🥺</p>
        <p className="finale__sub">
          ok ok — but the offer stays open forever 💗
        </p>
        <p className="finale__hint">(psst… hit Restart and think it over)</p>
      </div>
    );
  }

  return (
    <div className="finale finale--glow">
      <h1 className="finale__title">Will you be my girlfriend?</h1>
      <div className="finale__buttons">
        <button className="finale__yes" onClick={() => setAnswer("yes")}>
          Yes
        </button>
        <button
          className="finale__no"
          style={{ transform: `translate(${noOffset.x}px, ${noOffset.y}px)` }}
          onMouseEnter={() => dodges < DODGES && dodge()}
          onPointerDown={onNoPointerDown}
          onClick={onNoClick}
        >
          {NO_LABELS[Math.min(dodges, DODGES)]}
        </button>
      </div>
    </div>
  );
}
