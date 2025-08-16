import { useState } from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Navigation = () => {
  return (
    <ul className="nav-ul">
      <li className="nav-link">
        <a href="#">Home</a>
      </li>
      <li className="nav-link">
        <a href="#">Services</a>
      </li>
      <li className="nav-link">
        <a href="#">Our Work</a>
      </li>
      <li className="nav-link">
        <a href="#">Testimonial</a>
      </li>
    </ul>
  );
};

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 top-0 backdrop-blur-xl font-medium bg-white/50 z-20 dark:bg-gray-900/70 w-full">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex justify-between items-center py-5">
          <img
            src={theme == "dark" ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-32 sm:w-40"
          />

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>

          <div className="flex justify-center items-center gap-3">
            <button className="flex items-center justify-center p-1.5 size-8 border border-black/50 rounded-full">
              <img src={assets.moon_icon} alt="moon icon" />
            </button>
            <button className="hidden justify-center gap-2 text-white bg-primary rounded-full font-medium py-2 px-5 sm:flex">
              Connect <img src={assets.arrow_icon} alt="arrow right" />
            </button>
            {/* Mobile */}
            <button
              className="w-8 sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={isOpen ? (assets.close_icon) : (assets.menu_icon) } alt="menu icon" className={isOpen && "invert size-5 ml-2"}/>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div className="block text-center sm:hidden" initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
          <nav className="pb-10">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
