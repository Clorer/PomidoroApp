/* eslint-disable react/prop-types */
import dotsRed from "./content/red/dots.svg";
import dotsRedDark from "./content/redDark/dots.svg";
import playRed from "./content/red/play.svg";
import playRedDark from "./content/redDark/play.svg";
import nextRed from "./content/red/next.svg";
import nextRedDark from "./content/redDark/next.svg";
import pausePictRed from "./content/red/pause.svg";
import pausePictRedDark from "./content/redDark/pause.svg";

function Buttons({isDark, isPaused, setIsPaused, currentMode }) {
  const pause = () => {
    isPaused ? setIsPaused(false) : setIsPaused(true);
  };

  const unhide = () => {
    document.getElementById("settingsModal").classList.remove("hidden");
  };

  return (
    <>
      <div className="flex gap-5">
        <button
          onClick={unhide}
          className={`w-16 h-16 text-white rounded-xl ${currentMode.buttonsColor} m-auto`}
        >
          <img src={isDark ? dotsRedDark : dotsRed} alt="dots" className="m-auto" />
        </button>
        <button
          onClick={pause}
          className={`w-20 h-20 text-white rounded-xl ${currentMode.playBgColor} m-auto`}
        >
          <img
            src={isPaused ? (isDark? playRedDark : playRed) : (isDark ? pausePictRedDark : pausePictRed)}
            alt="play"
            className="m-auto"
          />
        </button>
        <button
          className={`w-16 h-16 text-white rounded-xl ${currentMode.buttonsColor} m-auto`}
        >
          <img src={isDark ? nextRedDark : nextRed} alt="next" className="m-auto" />
        </button>
      </div>
    </>
  );
}

export default Buttons;
