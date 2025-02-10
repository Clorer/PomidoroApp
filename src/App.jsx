import { useEffect, useState } from "react";
import Timer from "./Timer/Timer";
import Buttons from "./Buttons/Buttons";
import Focus from "./Headers/Header";
import focusLogo from "./Headers/content/ph_brain-fill.svg";
import BreakLogo from "./Headers/content/ph_coffee.svg";
import Settings from "./Settings/Settings";




function App() {
  const [isPaused, setIsPaused] = useState(true);
  const [focusTime, setFocusTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreak, setLongBreakTime] = useState(15);
  const [isDark, setIsDark] = useState(true);

const mode = [
  {
      title: 'Focus',
      bgColor: 'bg-red-950/70',
      bgLightColor: 'bg-red-200/70',
      playBgColor: 'bg-red-500',
      textColor: 'text-red-100',
      time: focusTime*60,
      image: focusLogo
  },
  {
      title: 'Short Break',
      bgColor: 'bg-green-950',
      bgLightColor: 'bg-green-200/70',
      playBgColor: 'bg-green-600',
      textColor: 'text-green-100',
      time: shortBreakTime * 60,
      image: BreakLogo
  },
  {
    title: 'Long Break',
    bgColor: 'bg-blue-950/70',
    bgLightColor: 'bg-blue-200/70',
    playBgColor: 'bg-blue-900',
    textColor: 'text-blue-100',
    time: longBreak * 60,
    image: BreakLogo
},
]
  
const currentMode = mode[1];
const [bgColor, setBgColor] = useState(currentMode.bgColor)

useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark');
    console.log(document.documentElement.classList);
  } else {
    document.documentElement.classList.remove('dark');
    console.log(document.documentElement.classList);
  }
}, [isDark]);

  return (
    <>
      <div className={`bg-white dark:bg-black w-screen h-screen flex flex-col items-center pt-[5%]`}>
        <Focus currentMode={currentMode}/>
        <Timer isPaused={isPaused} setIsPaused={setIsPaused} currentMode={currentMode} />
        <Buttons isPaused={isPaused} setIsPaused={setIsPaused} currentMode={currentMode} />
        <Settings isDark={isDark} setIsDark={setIsDark} focusTime={focusTime} setFocusTime={setFocusTime} shortBreakTime={shortBreakTime} setShortBreakTime={setShortBreakTime} longBreak={longBreak} setLongBreakTime={setLongBreakTime}/>
      </div>
    </>
  );
}

export default App;
