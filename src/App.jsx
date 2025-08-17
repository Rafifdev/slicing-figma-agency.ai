import { useState } from "react";
import Navbar from "./sections/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import Trusted from "./sections/Trusted";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <div className="container mx-auto max-w-7xl w-full">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Trusted />
      <div className="min-h-screen"></div>
      {/* Services */}
      {/* Our Work */}
      {/* Team */}
      {/* Contacs */}
      {/* Footer */}
      <CustomCursor />
    </div>
  );
};

export default App;
