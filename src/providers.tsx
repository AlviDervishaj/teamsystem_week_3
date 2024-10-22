import { ReactLenis } from '@studio-freight/react-lenis';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { PrimeReactProvider } from 'primereact/api';
import { Analytics } from "@vercel/analytics/react"
import { ReactNode } from "react";
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // fle
import "./global.css";
import "primereact/resources/themes/viva-light/theme.css";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root>
      <PrimeReactProvider>
        {children}
      </PrimeReactProvider>
      <SpeedInsights />
      <Analytics />
    </ReactLenis>
  )
}
