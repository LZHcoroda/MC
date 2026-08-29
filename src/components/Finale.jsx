import { useEffect, useState } from "react";
import Clip from "./Clip.jsx";
import HeartBurst from "./HeartBurst.jsx";
import yesMp4 from "../assets/finale-yes.mp4";
import yesGif from "../assets/finale-yes.gif";
import noMp4 from "../assets/finale-no.mp4";
import noGif from "../assets/finale-no.gif";
import "./Finale.css";

const NO_LABELS = ["No", "No?", "really??", "you sure??"];
const DODGES = 3;

export default function Finale() {
  const [phase, setPhase] = useState("intro"); // "intro" | "ask"
  const [introLeaving, setIntroLeaving] = useState(false);
  const [answer, setAnswer] = useState(null); // "yes" | "no" | null
  const [dodges, setDodges] = useState(0);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const leave = setTimeout(() => setIntroLeaving(true), 2400);
    const done = setTimeout(() => setPhase("ask"), 2850);
    return () => {
      clearTimeout(leave);
      clearTimeout(done);
    };
  }, []);

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

  if (phase === "intro") {
    return (
      <div
        key="intro"
        className={`finale__intro ${introLeaving ? "is-leaving" : ""}`}
      >
        <p className="finale__intro-a">And so…</p>
        <p className="finale__intro-b">Mindy!</p>
      </div>
    );
  }

  if (answer === "yes") {
    return (
      <>
        <HeartBurst />
        <div className="finale finale--glow">
          <Clip
            mp4={yesMp4}
            gif={yesGif}
            alt="Dudu and Bubu hugging with hearts"
            className="finale__clip"
          />
          <p className="finale__big">YAY!! 🥳💗</p>
          <p className="finale__sub">HAPPY HAPPY HAPPY</p>
        </div>
      </>
    );
  }

  if (answer === "no") {
    return (
      <div className="finale">
        <Clip
          mp4={noMp4}
          gif={noGif}
          alt="Dudu crying, holding a broken heart"
          className="finale__clip"
        />
        <p className="finale__big">aw… 🥺</p>
        <p className="finale__sub">
          👉🏼👈🏼  
        </p>
      </div>
    );
  }

  return (
    <div key="ask" className="finale finale--glow">
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
