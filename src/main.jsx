import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'; // Importa el componente App que contiene la lógica principal
import NoFound from './components/NoFound.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />, // Usa el componente App como la raíz de las rutas
    errorElement: <NoFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
