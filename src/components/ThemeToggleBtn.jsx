import { useEffect } from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    setTheme(theme || (prefersDarkMode ? "dark" : "light"))
  },[])

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  },[theme])

  return (
    <motion.button
      className={`flex items-center justify-center p-1.5 size-10 border border-black/50 ${theme === "dark" && "border-white"} rounded-full cursor-pointer`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme == "dark" ? (
        <img onClick={() => setTheme("light")} src={assets.sun_icon} alt="dark mode icon" />
      ) : (
      <img onClick={() => setTheme("dark")} src={assets.moon_icon} alt="dark mode icon" />
      )}
    </motion.button>
  );
};

export default ThemeToggleBtn;
