/* eslint-disable react/prop-types */
import { useState } from "react";

function Settings({isDark, setIsDark, focusTime, setFocusTime, shortBreakTime, setShortBreakTime, longBreak, setLongBreakTime}) {
  const hide = () => {
    document.getElementById("settingsModal").classList.add("hidden");
  };
  const [isChecked, setIsChecked] = useState(false);

  const themeChanger = () => {
    setIsDark(false);
  };

  return (
    <>
      <div id="settingsModal" className="pt-[13rem] fixed inset-0 z-50 hidden">
        <div className="relative bg-gray-900 p-8 w-full max-w-sm m-auto rounded-2xl text-white flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-4">Settings</h2>

          <button
            onClick={hide}
            id="closeModal"
            className="absolute top-4 right-4 text-white text-xl font-bold"
          >
            &times;
          </button>

          <div className="flex justify-between items-center">
            <span className="text-white">Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isDark}
                onChange={(el) => {
                  setIsDark(el.target.checked)
                }}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full bg-black peer-checked:bg-stone-800  transition-colors duration-200">
                <div
                  className={`absolute top-[2px] left-[2px] border rounded-full h-5 w-5 transition-all 
            ${isDark ? "translate-x-5 bg-white" : "translate-x-0 bg-stone-800 "}`}
                ></div>
              </div>
            </label>
          </div>

          <div className="flex justify-between items-center">
            <label className="text-base">Focus length</label>
            <input
              id="focus-settings"
              type="number"
              value={focusTime}
              onChange={(e) => setFocusTime(Number(e.target.value))}
              min="1"
              className="bg-black border-stone-800 border w-16 text-white text-center rounded-md"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="text-base">Short break length</label>
            <input
              type="number"
              value={shortBreakTime}
              onChange={(e) => setShortBreakTime(Number(e.target.value))}
              min="1"
              className="bg-black border-stone-800 border w-16 text-white text-center rounded-md"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="text-base">Long break length</label>
            <input
              id="short-break-settings"
              type="number"
              value={longBreak}
              onChange={(e) => setLongBreakTime(Number(e.target.value))}
              min="1"
              className="bg-black border-stone-800 border w-16 text-white text-center rounded-md"
            />
          </div>

          <div className="flex justify-between items-center">
          <label className="text-base">Sound</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked}
                onChange={(el) => setIsChecked(el.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-stone-800  transition-colors duration-200">
                <div
                  className={`absolute top-[2px] left-[2px] bg-white rounded-full h-5 w-5 transition-all 
            ${isChecked ? "translate-x-5 bg-white" : "translate-x-0 bg-stone-800 "}`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
