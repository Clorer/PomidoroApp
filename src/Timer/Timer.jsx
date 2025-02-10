/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react'
import sound from"./timer_end.mp3"

function Timer({isPaused, currentMode, setIsPaused, currentModeIndex, setCurrentModeIndex}) {
  const [seconds, setSeconds] = useState(currentMode.time);
  const [counter, setCounter] = useState(0);

  const audio = new Audio(sound);
  const secRef = useRef();
  const minRef = useRef();

  useEffect(() => {
    setSeconds(currentMode.time);
  }, [currentMode.time]);

  useEffect(() => {
    if (seconds === 0) {
      setSeconds(currentMode.time);
      audio.play();
      setCounter((prevCounter) => {
        if (prevCounter === 0 || prevCounter === 2) {
          setCurrentModeIndex(1);
          return prevCounter + 1;
        } else if (prevCounter === 4) {
          setCurrentModeIndex(2);
          return prevCounter + 1;
        } else if (prevCounter === 5) {
          setCurrentModeIndex(0);
          return 0;
        } else {
          setCurrentModeIndex(0);
          return prevCounter + 1;
        }
      });
    }
  }, [seconds, currentMode.time]);
  

  useEffect(() => {
    let interval;
    console.log(currentMode.time);
    if (!isPaused) {
      if (secRef.current){
        minRef.current.classList.add("font-extrabold");
        secRef.current.classList.add("font-extrabold");
      }
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      minRef.current.classList.remove("font-extrabold");
      secRef.current.classList.remove("font-extrabold");
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const formatTimeMins = (sec) => {
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    return `${mins}`;
  };

  const formatTimeSecs = (sec) => {
    const secs = String(sec % 60).padStart(2, "0");
    return `${secs}`;
  };

  return (
    <>
      <h1 ref={minRef} className={`block text-[256px] leading-[200px] ${currentMode.textColor}`}>{formatTimeMins(seconds)}</h1>
      <h1 ref={secRef} className={`mb-10 block text-[256px] leading-[200px] ${currentMode.textColor}`}>{formatTimeSecs(seconds)}</h1>
    </>
  )
}

export default Timer
