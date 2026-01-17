import { useState } from "react";
import { CustomCursor, IntroAnimations, Navbar } from "./components";
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
  const [introDone, setIntroDone] = useState(false);
  if (!introDone) {
    return <IntroAnimations onFinish={() => setIntroDone(true)} />;
  }
  return (
    <>
      <div className="relative gradient text-white">
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
    </>
  );
}

export default App;
