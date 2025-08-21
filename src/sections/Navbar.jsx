import { useState } from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";
import ThemeToggleBtn from "../components/ThemeToggleBtn";

const NavItem = ["Home", "Services", "Our Work", "Contact US"];

const Navigation = () => {
  return (
    <motion.ul className="nav-ul">
      {NavItem.map((item, index) => (
        <motion.li key={index} whileTap={{ scale: 0.95 }}>
          <a href="#" className="nav-link">
            {item}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="fixed inset-x-0 top-0 backdrop-blur-xs font-medium bg-white/50 z-20 dark:bg-dark/80 w-full">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex justify-between items-center py-4">
          <img
            src={theme == "dark" ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-32 sm:w-40 cursor-pointer"
          />
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
          <div className="flex justify-center items-center gap-5">
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />
            <motion.button
              className="hidden btn justify-center gap-2 sm:flex cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect <img src={assets.arrow_icon} alt="arrow right" />
            </motion.button>
            {/* Mobile */}
            <motion.button
              className="w-8 sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={isOpen ? assets.close_icon : theme == "dark" ? assets.menu_icon_dark : assets.menu_icon}
                alt="menu icon"
                className={isOpen && theme == "light" ? "invert size-7" : "size-7"}
              />
            </motion.button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block text-center sm:hidden md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-10">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </section>
  );
};

export default Navbar;
