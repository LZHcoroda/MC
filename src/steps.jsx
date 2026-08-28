import Clip from "./components/Clip.jsx";
import helloMp4 from "./assets/hi-waving.mp4";
import helloGif from "./assets/hi-waving.gif";
import questionMp4 from "./assets/important-question.mp4";
import questionGif from "./assets/important-question.gif";
import waterMp4 from "./assets/drink-water.mp4";
import waterGif from "./assets/drink-water.gif";

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
];
