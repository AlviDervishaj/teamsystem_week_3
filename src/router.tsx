import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, Projects, Contact } from "./lazy";
import { Layout } from "./components/Layout";
import { Loading } from "./components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      },
      {
        path: "projects",
        element: <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
      },
      {
        path: "contact",
        element: <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      },
    ]
  },
])
