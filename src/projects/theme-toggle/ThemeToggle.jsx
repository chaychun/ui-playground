import system from "./icons/system.svg";
import sun from "./icons/sun.svg";
import moon from "./icons/moon.svg";
import { useState, useEffect } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system");
  const [themeButton, setThemeButton] = useState("system");

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to update theme based on system preference
    const handleSystemThemeChange = (event) => {
      if (theme === "system") {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    // Initial theme check
    if (theme === "system") {
      setTheme(mediaQuery.matches ? "dark" : "light");
    }

    // Add event listener to detect theme changes
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup event listener when component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  return (
    <div id="background-card" 
      className="flex flex-col items-center justify-center h-auto w-[50%] space-y-6
        bg-white dark:bg-slate-800
        border-1 border-slate-300
        rounded-lg shadow-lg"
      data-theme={theme}
    >
      <h2 className="text-2xl text-black dark:text-slate-50 mt-6">Theme Toggle Buttons</h2>

      <div id="buttons-container"
        className="flex items-center justify-center space-x-1
        bg-gray-100 dark:bg-slate-500
        p-1 mb-6 rounded-xl shadow-lg dark:shadow-slate-700 w-1/2">

        <button id="system-button"
          className="p-2 border-1 border-transparent rounded-lg  
            dark:data-[theme='system']:bg-slate-400 data-[theme='system']:bg-white
            cursor-pointer"
          onClick={() => {
            setTheme("system");
            setThemeButton("system");
          }}
          data-theme={themeButton}
        >
          <img src={system} alt="System theme" />
        </button>

        <button id="light-button"
          className="p-2 border-1 border-transparent rounded-lg 
           data-[theme='light']:bg-white 
            cursor-pointer"
          onClick={() => {
            setTheme("light");
            setThemeButton("light");
          }}
          data-theme={themeButton}
        >
          <img src={sun} alt="Light theme"/>
        </button>

        <button id="dark-button"
          className="p-2 border-1 border-transparent rounded-lg 
            data-[theme='dark']:bg-slate-400
            cursor-pointer"
          onClick={() => {
            setTheme("dark");
            setThemeButton("dark");
          }}
          data-theme={themeButton}
        >
          <img src={moon} alt="Dark theme" />
        </button>

      </div>
    </div>
  );
}