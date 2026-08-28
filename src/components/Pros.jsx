import Clip from "./Clip.jsx";
import feedMp4 from "../assets/pro-feed.mp4";
import feedGif from "../assets/pro-feed.gif";
import laughMp4 from "../assets/pro-laugh.mp4";
import laughGif from "../assets/pro-laugh.gif";
import yapMp4 from "../assets/pro-yap.mp4";
import yapGif from "../assets/pro-yap.gif";
import exploreMp4 from "../assets/pro-explore.mp4";
import exploreGif from "../assets/pro-explore.gif";

const PROS = [
  { mp4: feedMp4, gif: feedGif, text: "will feed you food (snacks included 🍜)" },
  { mp4: laughMp4, gif: laughGif, text: "guaranteed giggles, daily 😹" },
  { mp4: yapMp4, gif: yapGif, text: "listen to ALL your yapping 🗣️" },
  { mp4: exploreMp4, gif: exploreGif, text: "drag you to fun new places 🛵" },
];

export default function Pros() {
  return (
    <div className="pros">
      <h1 className="pros__title">PROs ✨</h1>
      <ul className="pros__list">
        {PROS.map((p) => (
          <li className="pros__item" key={p.text}>
            <Clip mp4={p.mp4} gif={p.gif} alt={p.text} className="pros__clip" />
            <p className="pros__text">{p.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
