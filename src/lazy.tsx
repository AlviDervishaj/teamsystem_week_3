import { lazy } from "react";

export const Home = lazy(() => import("./routes/Home"));
export const Projects = lazy(() => import("./routes/Projects"));
export const Contact = lazy(() => import("./routes/Contact"));
