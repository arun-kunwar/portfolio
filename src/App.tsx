import Nav from "./componets/Nav"
import Home from "./componets/Home"
import About from "./componets/About"
import Portfolio from "./componets/Portfolio"
import Contact from "./componets/Contact"


function App() {
  return (
    <div className="overflow-hidden">
      <Nav/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App