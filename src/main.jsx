import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '/src/App.jsx'
import '/src/index.css'
import { createBrowserRouter } from "react-router-dom";
import Home from '/src/pages/Home.jsx'
import Tips from '/src/pages/Tips.jsx'
import { RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/hoho/",
    element: <App />,
    children: [
      {
        path: "/hoho/",
        element: <Home />,
      },
      {
        path: "/hoho/tips",
        element: <Tips />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);