import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className="min-h-screen c-space mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, porro amet in accusamus debitis deleniti maxime maiores libero quod molestiae quis sapiente, quibusdam illum. Ut optio tenetur consequuntur non voluptate.</div>
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