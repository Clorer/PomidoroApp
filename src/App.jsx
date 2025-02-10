import { useEffect, useState } from "react";
import Timer from "./Timer/Timer";
import Buttons from "./Buttons/Buttons";
import focusLogo from "./Headers/content/ph_brain-fill.svg";
import focusDarkLogo from "./Headers/content/ph_brain-fill-dark.svg";
import BreakLogo from "./Headers/content/ph_coffee.svg";
import BreakLogoDark from "./Headers/content/ph_coffeeDark.svg";
import BreakLogoBlue from "./Headers/content/ph_coffeeBlue.svg";
import BreakLogoBlueDark from "./Headers/content/ph_coffeeBlueDark.svg";
import Settings from "./Settings/Settings";
import Header from "./Headers/Header";




function App() {
  const [isPaused, setIsPaused] = useState(true);
  const [focusTime, setFocusTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreak, setLongBreakTime] = useState(15);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme !== null ? JSON.parse(savedTheme) : false;
  });

  
  useEffect(() => {
    console.log("Saving theme to storage:", isDark);
    localStorage.setItem('theme', JSON.stringify(isDark));
  }, [isDark]);


  const mode = [
    {
      title: 'Focus',
      bgColor: isDark ? 'bg-red-950' : 'bg-red-50',
      buttonsColor: isDark ? 'bg-red-alpha-100' : 'bg-red-alpha-100',
      playBgColor: isDark ? 'bg-red-500' : 'bg-red-alpha-700',
      textColor: isDark ? 'text-red-50' : 'text-red-900',
      borderColor: isDark ? 'border-red-50' : 'border-red-900',
      time: focusTime * 60,
      image: isDark ? focusLogo : focusDarkLogo
    },
    {
      title: 'Short Break',
      bgColor: isDark ? 'bg-green-950' : 'bg-green-50',
      buttonsColor: isDark ? 'bg-green-alpha-100' : 'bg-green-alpha-100',
      playBgColor: isDark ? 'bg-green-500' : 'bg-green-alpha-700',
      textColor: isDark ? 'text-green-50' : 'text-green-900',
      borderColor: isDark ? 'border-green-50' : 'border-green-900',
      time: shortBreakTime * 60,
      image: isDark ? BreakLogoDark : BreakLogo
    },
    {
      title: 'Long Break',
      bgColor: isDark ? 'bg-blue-950' : 'bg-blue-50',
      buttonsColor: isDark ? 'bg-blue-alpha-100' : 'bg-blue-alpha-100',
      playBgColor: isDark ? 'bg-blue-500' : 'bg-blue-alpha-700',
      textColor: isDark ? 'text-blue-50' : 'text-blue-900',
      borderColor: isDark ? 'border-blue-50' : 'border-blue-900',
      time: longBreak * 60,
      image: isDark ? BreakLogoBlue : BreakLogoBlueDark
    },
  ]

  const currentMode = mode[0];
  return (
    <>
      <div className={`${currentMode.bgColor} w-screen h-screen flex flex-col items-center pt-[5%]`}>
        <Header currentMode={currentMode} />
        <Timer isDark={isDark} isPaused={isPaused} setIsPaused={setIsPaused} currentMode={currentMode} />
        <Buttons isDark={isDark} isPaused={isPaused} setIsPaused={setIsPaused} currentMode={currentMode} />
        <Settings isDark={isDark} setIsDark={setIsDark} focusTime={focusTime} setFocusTime={setFocusTime} shortBreakTime={shortBreakTime} setShortBreakTime={setShortBreakTime} longBreak={longBreak} setLongBreakTime={setLongBreakTime} />
      </div>
    </>
  );
}

export default App;
