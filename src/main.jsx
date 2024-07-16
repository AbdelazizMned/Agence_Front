import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FilterPage from './FilterPage.jsx';
import Result from './Result.jsx';
import Country from './Country.jsx';
import Contact from './Contact.jsx';
import Reserve from './Reserve.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "filter",
    element: <FilterPage />,
  },
  {
    path: "result",
    element: <Result />,
  },
  {
    path: "Country",
    element: <Country />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "reserve",
    element: <Reserve />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
