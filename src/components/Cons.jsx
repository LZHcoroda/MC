import Clip from "./Clip.jsx";
import huhMp4 from "../assets/cons-huh.mp4";
import huhGif from "../assets/cons-huh.gif";
import angryMp4 from "../assets/cons-angry.mp4";
import angryGif from "../assets/cons-angry.gif";

// The one and only con — 没有!! ("there are none") — listed six times, same
// frosted-card layout as the PROs page. The text grows card by card, and the
// last two double down: 真的没有!! ("there REALLY are none"), with an angry Dudu.
const CONS = [
  { text: "没有!!", mp4: huhMp4, gif: huhGif, alt: "Dudu the bear shrugging" },
  { text: "没有!!", mp4: huhMp4, gif: huhGif, alt: "Dudu the bear shrugging" },
  { text: "没有!!", mp4: huhMp4, gif: huhGif, alt: "Dudu the bear shrugging" },
  { text: "没有!!", mp4: huhMp4, gif: huhGif, alt: "Dudu the bear shrugging" },
  { text: "真的没有!!", mp4: angryMp4, gif: angryGif, alt: "Dudu the bear stomping angrily" },
  { text: "真的没有!!", mp4: angryMp4, gif: angryGif, alt: "Dudu the bear stomping angrily" },
];

export default function Cons() {
  return (
    <div className="pros">
      <h1 className="pros__title">CONS</h1>
      <ul className="pros__list">
        {CONS.map((con, i) => (
          <li className="pros__item" key={i}>
            <Clip
              mp4={con.mp4}
              gif={con.gif}
              alt={con.alt}
              className="pros__clip"
            />
            <p
              className="pros__text"
              style={{ fontSize: `${0.95 + i * 0.5}rem` }}
            >
              {con.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
