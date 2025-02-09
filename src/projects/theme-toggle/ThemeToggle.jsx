import system from './icons/system.svg';
import sun from './icons/sun.svg';
import moon from './icons/moon.svg';

export default function ThemeToggle() {
  return (
    <div id="background-card" 
      className="flex flex-col items-center justify-center h-[50%] w-[50%] space-y-8
      bg-white
      border-1 border-slate-300
      rounded-lg shadow-lg">
      <h2 className="text-2xl">Theme Toggle Buttons</h2>

      <div id="buttons-container"
        className="flex items-center justify-center space-x-1
        bg-gray-100
        p-1 rounded-xl shadow-lg w-1/2">

        <button id="system-button"
          className="p-2 border-1 border-transparent rounded-lg  
            cursor-pointer">
          <img src={system} alt="System theme" />
        </button>

        <button id="light-button"
          className="p-2 border-1 border-transparent rounded-lg  
            cursor-pointer">
          <img src={sun} alt="Light theme" />
        </button>

        <button id="dark-button"
          className="p-2 border-1 border-transparent rounded-lg  
            cursor-pointer">
          <img src={moon} alt="Dark theme" />
        </button>

      </div>
    </div>
  );
}