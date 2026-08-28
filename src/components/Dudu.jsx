import hiWavingMp4 from "../assets/hi-waving.mp4";
import hiWavingGif from "../assets/hi-waving.gif";

// "Dudu" waving hello. Bundled locally (originally from a Tenor clip) so the
// page stays self-contained and works offline. MP4 for weight; the GIF only
// downloads on browsers too old to play the video.

export default function Dudu({ className = "dudu" }) {
  return (
    <video className={className} autoPlay loop muted playsInline>
      <source src={hiWavingMp4} type="video/mp4" />
      <img src={hiWavingGif} alt="Dudu the bear waving hello with a rose" />
    </video>
  );
}
