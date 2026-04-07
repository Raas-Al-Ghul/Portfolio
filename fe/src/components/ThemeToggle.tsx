import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { toggleTheme } = context;

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-lg border border-gray-400 hover:scale-105 transition"
    >
      🌗
    </button>
  );
};

export default ThemeToggle;