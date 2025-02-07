/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react'

function Timer({isPaused, currentMode, setIsPaused}) {
  const [seconds, setSeconds] = useState(currentMode.time);
  const secRef = useRef();
  const minRef = useRef();

  useEffect(() => {
    setSeconds(currentMode.time);
  }, [currentMode.time]);

  useEffect(() => {
    if (seconds === 0) {
      setIsPaused(true);
      setSeconds(currentMode.time)
    }
  }, [seconds]);

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
      <h1 ref={minRef} className="block text-[256px] leading-[200px] text-white">{formatTimeMins(seconds)}</h1>
      <h1 ref={secRef} className="mb-10 block text-[256px] leading-[200px] text-white">{formatTimeSecs(seconds)}</h1>
    </>
  )
}

export default Timer
