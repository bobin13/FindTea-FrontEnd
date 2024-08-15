import { useEffect, useState } from "react";
import "../styles.css";
function Header() {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [audioPlayer, setAudioPlayer] = useState<HTMLDivElement>();

  useEffect(() => {
    const audioTag: HTMLAudioElement = document.querySelector(
      "#audioTag"
    ) as HTMLAudioElement;
    setAudio(audioTag);

    const audioPlayerTag: HTMLDivElement = document.querySelector(
      "#music-player"
    ) as HTMLDivElement;

    setAudioPlayer(audioPlayerTag);
  }, []);

  function OnMusicPlayerClick() {
    PlayPause();
  }

  function PlayPause() {
    audio!.volume = 0.3;
    if (audio?.paused) {
      audio.play();
      audioPlayer?.classList.add("music-player-spin");
    } else {
      audio?.pause();
      audioPlayer?.classList.remove("music-player-spin");
    }
  }
  return (
    <header>
      <div className="music-player-container d-flex justify-content-between">
        <div className="pl-4">
          <p>Credit:</p>
          <p>
            <a href="https://open.spotify.com/track/5Gn5uRA5Lm64fGxRf5aaav">
              Cha Pindan Di - Arjan Dhillon
            </a>
          </p>
        </div>
        <div id="music-player" className="music-player">
          <img
            src="../images/cha-album-cover.png"
            alt=""
            onClick={OnMusicPlayerClick}
          ></img>

          <audio id="audioTag" loop>
            <source src="../audio/Cha.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <hr />
    </header>
  );
}

export default Header;
