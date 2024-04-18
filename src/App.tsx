// Components
import { TracingBeam, LampEffect, About, Projects, Navigation, Contact } from "./components/ui";
import { ReactLenis } from '@studio-freight/react-lenis';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { useWindowSize } from "usehooks-ts";
import "./output.css";

function App() {
  const { width = 0 } = useWindowSize();
  return (
    <ReactLenis root>
      <TracingBeam>
        {width >= 600 ? <Navigation /> : null}

        <LampEffect title={"Alvi Dervishaj"} description={"Front End Developer"} />
        <div className="h-40 w-full md:relative hidden" />
        <About />
        <Projects />
        <Contact />
      </TracingBeam>
      <SpeedInsights />
      <Analytics />
    </ReactLenis>
  );
}

export default App;
