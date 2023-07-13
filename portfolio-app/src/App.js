import { Navbar } from "./components/Navbar";
import { Homepage } from "./components/Homepage";
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/about";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
