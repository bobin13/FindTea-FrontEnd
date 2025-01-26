import { useEffect, useState } from "react";

function Header() {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [audioPlayer, setAudioPlayer] = useState<HTMLDivElement>();

  useEffect(() => {}, []);

  return (
    <header className="font-custom tracking-tighter">
      <div className="d-flex mt-3">
        <p className="text-3xl text-center">Find Your Tea!</p>
      </div>
    </header>
  );
}

export default Header;
