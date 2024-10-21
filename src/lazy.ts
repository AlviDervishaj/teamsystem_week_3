import { lazy } from "react";

export const Home = lazy(() => import("./routes/home").then((mod) => ({ default: mod["Home"] })));
export const Test = lazy(() => import("./routes/test").then((mod) => ({ default: mod["Test"] })));
