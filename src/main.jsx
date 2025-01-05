import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Review from './components/Review/Review';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about-me",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/review",
        element: <Review></Review>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      
    ]
  },
   
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
