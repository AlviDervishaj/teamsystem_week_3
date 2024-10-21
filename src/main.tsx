import { createRoot } from 'react-dom/client'
import "./global.css";
import { Providers } from './components/Providers.tsx';
import { Route } from 'react-router';
import { Home, Test } from "./lazy";
createRoot(document.getElementById('root')!).render(
  <Providers>
    <Route path="/" element={<Home />} />
    <Route path="/test" element={<Test />} />
  </Providers>
)
