// Components
import { TracingBeam, LampEffect, About, Projects } from "./components/ui";
import { ReactLenis } from '@studio-freight/react-lenis';
import "./output.css";

function App() {
  return (
    <ReactLenis root>
      <TracingBeam>
        <LampEffect title={"Alvi Dervishaj"} description={"Front End Developer"} />
        <div className="h-40 w-full md:relative hidden" />
        <About />
        <Projects />
      </TracingBeam>
    </ReactLenis>
  );
}

export default App;
