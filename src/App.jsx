import { useState } from "react";
import Timer from "./Timer/Timer";
import Buttons from "./Buttons/Buttons";
import Focus from "./Headers/Header";
import focusLogo from "./Headers/content/ph_brain-fill.svg";
import BreakLogo from "./Headers/content/ph_coffee.svg";
import Settings from "./Settings/Settings";




function App() {
  const [isPaused, setIsPaused] = useState(true);
  const [focusTime, setFocusTime] = useState(30);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreak, setLongBreakTime] = useState(15);

const mode = [
  {
      title: 'Focus',
      bgColor: 'bg-red-950/70',
      playBgColor: 'bg-red-500',
      time: focusTime*60,
      image: focusLogo
  },
  {
      title: 'Short Break',
      bgColor: 'bg-green-900/70',
      playBgColor: 'bg-green-600',
      time: shortBreakTime * 60,
      image: BreakLogo
  },
  {
    title: 'Long Break',
    bgColor: 'bg-blue-950/70',
    playBgColor: 'bg-blue-900',
    time: longBreak * 60,
    image: BreakLogo
},
]
  const currentMode = mode[1];
  return (
    <>
      <div className="bg-black w-screen h-screen flex flex-col items-center pt-[8rem]">
        <Focus currentMode={currentMode}/>
        <Timer isPaused={isPaused} setIsPaused={setIsPaused} currentMode={currentMode} />
        <Buttons isPaused={isPaused} setIsPaused={setIsPaused} currentMode={currentMode} />
        <Settings focusTime={focusTime} setFocusTime={setFocusTime} shortBreakTime={shortBreakTime} setShortBreakTime={setShortBreakTime} longBreak={longBreak} setLongBreakTime={setLongBreakTime}/>
      </div>
    </>
  );
}

export default App;
