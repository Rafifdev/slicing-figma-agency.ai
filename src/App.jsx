import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <div className="container relative mx-auto max-w-7xl dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme}/>
      {/* Hero */}
      {/* Trusted */}
      {/* Services */}
      {/* Our Work */}
      {/* Team */}
      {/* Contacs */}
      {/* Footer */}
    </div>
  )
}

export default App