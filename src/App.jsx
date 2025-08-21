import { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Trusted from "./sections/Trusted";
import Services from "./sections/Services";
import OurWork from "./sections/OurWork";
import Team from "./sections/Team";
import Contacts from "./sections/Contacts";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <div className="container mx-auto max-w-7xl w-full">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Trusted />
      <Services />
      <OurWork />
      <Team />
      <Contacts />
      <div className="min-h-screen"></div>
      {/* Footer */}
    </div>
  );
};

export default App;
