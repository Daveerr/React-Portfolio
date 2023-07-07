import { Navbar } from "./components/Navbar";
import { Homepage } from "./components/Homepage";
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/About";

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
