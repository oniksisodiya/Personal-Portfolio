import React, { useState, useEffect } from 'react';

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
// 🌑 moon
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkMode}
        onChange={toggleTheme}
      />
      <div
        className="w-24 h-12 rounded-full bg-gray-200 overflow-hidden ring-0 peer duration-500 outline-none shadow-lg shadow-gray-400 peer-checked:bg-[#383838] peer-checked:shadow-lg peer-checked:shadow-gray-700"
      >
        {/* Sun (Light Mode) */}
        <div
          className={`absolute left-1 top-1/2 transform -translate-y-1/2 bg-white h-10 w-10 rounded-full flex items-center justify-center transition-all duration-700 ${
            darkMode ? "opacity-0 rotate-90 -translate-y-full" : ""
          }`}
        >
          ☀️
        </div>
        {/* Moon (Dark Mode) */}
        <div
          className={`absolute right-1 top-[4px] bg-[#1d1d1d] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-700 ${
            darkMode ? "opacity-100 rotate-180 translate-y-0" : "opacity-0 translate-y-full"
          }`}
        >
          🌙

        </div>
      </div>
    </label>
  );
};

export default DarkModeSwitch;
