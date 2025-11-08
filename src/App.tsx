import { CustomCursor, Navbar, ParticlesBackground } from "./components";
import {
  About,
  Contact,
  Experience,
  Footer,
  Home,
  Projects,
  Skills,
  Testimonials,
} from "./sections";

function App() {
  return (
    <div className="relative gradient text-white">
      <ParticlesBackground />
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
