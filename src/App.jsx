import { useState } from "react";
import "./App.css";
import Timer from "./Timer/Timer";
import Buttons from "./Buttons/Buttons";
import Focus from "./Headers/Header";
import focusLogo from "./content/ph_brain-fill.svg";
import BreakLogo from "./content/ph_coffee.svg";

const mode = [
  {
      title: 'Focus',
      bgColor: 'bg-red-950/70',
      playBgColor: 'bg-red-500',
      time: 1500,
      image: focusLogo
  },
  {
      title: 'Short Break',
      bgColor: 'bg-green-900/70',
      playBgColor: 'bg-green-600',
      time: 300,
      image: BreakLogo
  },
  {
    title: 'Long Break',
    bgColor: 'bg-blue-950/70',
    playBgColor: 'bg-blue-900',
    time: 900,
    image: BreakLogo
},
]

function App() {
  const [isPaused, setIsPaused] = useState(true);
  const currentMode = mode[0];
  return (
    <>
      <div className="bg-black w-screen h-screen flex flex-col items-center pt-[8rem]">
        <Focus currentMode={currentMode}/>
        <Timer isPaused={isPaused} currentMode={currentMode} />
        <Buttons isPaused={isPaused} setIsPaused={setIsPaused} currentMode={currentMode} />
      </div>
    </>
  );
}

export default App;
