import "../styles.css";
function Header() {
  return (
    <header>
      <nav>
        {/* <ul className="navBar">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Add Drinks</a>
          </li>
          <li>
            <a href="#">Add Stores</a>
          </li>
        </ul> */}
      </nav>

      <div className="music-player">
        <audio controls>
          <source src="src/assets/Cha.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <hr />
    </header>
  );
}

export default Header;
