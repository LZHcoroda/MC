import Clip from "./Clip.jsx";
import consMp4 from "../assets/cons-huh.mp4";
import consGif from "../assets/cons-huh.gif";

// The one and only con — 没有!! ("there are none") — listed six times, same
// frosted-card layout as the PROs page.
const CONS = Array.from({ length: 6 }, () => ({
  mp4: consMp4,
  gif: consGif,
  text: "没有!!",
}));

export default function Cons() {
  return (
    <div className="pros">
      <h1 className="pros__title">CONS</h1>
      <ul className="pros__list">
        {CONS.map((c, i) => (
          <li className="pros__item" key={i}>
            <Clip
              mp4={c.mp4}
              gif={c.gif}
              alt="Dudu the bear shrugging"
              className="pros__clip"
            />
            <p className="pros__text">{c.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
