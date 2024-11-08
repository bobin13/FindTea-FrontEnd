import { useEffect, useState } from "react";
import "../styles.css";
function Header() {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [audioPlayer, setAudioPlayer] = useState<HTMLDivElement>();

  useEffect(() => {}, []);

  return (
    <header>
      <div className="d-flex justify-content-center align-item-center color-black mt-3">
        <p>Find Your Tea!</p>
      </div>
    </header>
  );
}

export default Header;
