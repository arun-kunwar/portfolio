import Nav from "./componets/Nav"
import Home from "./componets/Home"
import About from "./componets/About"
import Portfolio from "./componets/Portfolio"


function App() {
  return (
    <div className="overflow-hidden">
      <Nav/>
      <Home/>
      <About/>
      <Portfolio/>
    </div>
  )
}

export default App