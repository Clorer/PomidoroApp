/* eslint-disable react/prop-types */
import dots from "./content/ph_dots-three-outline-fill.svg";
import play from "./content/ph_play-fill.svg";
import next from "./content/ph_fast-forward-fill.svg";
import pausePict from "./content/ph_pause-fill.svg";

function Buttons({ isPaused, setIsPaused, currentMode }) {
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
          className={`w-16 h-16 text-white rounded-xl ${currentMode.bgColor} m-auto`}
        >
          <img src={dots} alt="dots" className="m-auto" />
        </button>
        <button
          onClick={pause}
          className={`w-20 h-20 text-white rounded-xl ${currentMode.playBgColor} m-auto`}
        >
          <img
            src={isPaused ? play : pausePict}
            alt="play"
            className="m-auto"
          />
        </button>
        <button
          className={`w-16 h-16 text-white rounded-xl ${currentMode.bgColor} m-auto`}
        >
          <img src={next} alt="next" className="m-auto" />
        </button>
      </div>
    </>
  );
}

export default Buttons;
