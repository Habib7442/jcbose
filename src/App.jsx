import { Suspense, lazy } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Gallery from './pages/gallery/Gallery'
import Admission from './pages/admission/Admission'
const Home = lazy(() => import('./pages/home/Home'))
const Footer = lazy(() => import('./components/Footer'))
const About = lazy(() => import('./pages/about/About'))
const Faculty = lazy(() => import('./pages/faculty/Faculty'))
const Contact = lazy(() => import('./pages/contact/Contact'))
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { v4 } from "uuid";



const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faculty",
        element: <Faculty />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div>
        <Suspense
          fallback={
            <div className="loading">
              <CircularProgress /> <span>Loading...</span>
            </div>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </div>
  );
}

export default App
