import React from 'react'
import ReactDOM from 'react-dom/client'
import { Providers } from './providers';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>,
)
