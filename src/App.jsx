import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Technologies from "./components/sections/Technologies";
import Footer from "./components/ui/Footer"; 
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact"; 

function App() {
  return (
    <div className="bg-primary min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
