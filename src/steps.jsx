import Clip from "./components/Clip.jsx";
import Pros from "./components/Pros.jsx";
import Finale from "./components/Finale.jsx";
import helloMp4 from "./assets/hi-waving.mp4";
import helloGif from "./assets/hi-waving.gif";
import questionMp4 from "./assets/important-question.mp4";
import questionGif from "./assets/important-question.gif";
import waterMp4 from "./assets/drink-water.mp4";
import waterGif from "./assets/drink-water.gif";
import convinceMp4 from "./assets/convince-you.mp4";
import convinceGif from "./assets/convince-you.gif";
import consMp4 from "./assets/cons-huh.mp4";
import consGif from "./assets/cons-huh.gif";

// Each entry is one screen of the stepper.
// Add new steps here as the story grows — the Stepper handles the rest.

export const steps = [
  {
    id: "hello",
    content: (
      <>
        <Clip
          mp4={helloMp4}
          gif={helloGif}
          alt="Dudu the bear waving hello with a rose"
        />
        <p className="kicker">hey you zhu 🐷</p>
        <h1 className="headline">Hello Mindy!</h1>
        <p className="subhead">Swipe right (or tap Next) — I made you something!</p>
      </>
    ),
  },
  {
    id: "important-question",
    content: (
      <>
        <Clip
          mp4={questionMp4}
          gif={questionGif}
          alt="Dudu the bear looking curious"
        />
        <p className="quote">“I'm here to ask you an important question”</p>
      </>
    ),
  },
  {
    id: "drink-water",
    gate: {
      seconds: 1,
      messages: ["FINISH!!", "EH!? what you mean!?", "Kiddingggg", "Next"],
    },
    content: (
      <>
        <Clip
          mp4={waterMp4}
          gif={waterGif}
          alt="Bubu the panda chugging a bottle of water"
        />
        <h1 className="headline">Have you drank enough water!?!? 👀 👀</h1>
      </>
    ),
  },
  {
    id: "convince-you",
    content: (
      <>
        <h1 className="headline" style={{ marginBottom: 40 }}>
          But you know what le!!
        </h1>
        <Clip
          mp4={convinceMp4}
          gif={convinceGif}
          alt="Dudu the bear crying dramatically in a puddle of tears"
        />
        <p className="pledge">instead! I will convince you! 💪</p>
      </>
    ),
  },
  {
    id: "pros",
    bare: true,
    content: <Pros />,
  },
  {
    id: "cons",
    content: (
      <>
        <h1 className="headline">CONS</h1>
        <Clip
          mp4={consMp4}
          gif={consGif}
          alt="Dudu the bear shrugging, puzzled"
        />
        <p className="punchline">没有!!</p>
      </>
    ),
  },
  {
    id: "finale",
    bare: true,
    hideControls: true,
    content: <Finale />,
  },
];
