// Looping animated clip, bundled locally (originally Tenor stickers) so the page
// stays self-contained and works offline. MP4 for weight; the GIF only downloads
// on browsers too old to play the video.

export default function Clip({ mp4, gif, alt, className = "clip" }) {
  return (
    <video className={className} autoPlay loop muted playsInline>
      <source src={mp4} type="video/mp4" />
      <img src={gif} alt={alt} />
    </video>
  );
}
