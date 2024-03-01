import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home/Home.jsx'
import Cart from './pages/cart/Cart.jsx'
import Success from './pages/success/Success.jsx'
import { MeuContextoProvider } from './Context.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/success", element: <Success /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MeuContextoProvider>
      <RouterProvider router={router} />
    </MeuContextoProvider>
  </React.StrictMode>,
)
