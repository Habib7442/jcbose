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
import Achievements from './pages/achievements/Achievements';
import AllReviews from './pages/allReviews/AllReviews';
import CustomLoader from './components/customLoader/CustomLoader';



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
      {
        path: "/achievements",
        element: <Achievements />,
      },
      {
        path: "/allreviews",
        element: <AllReviews />,
      },
      
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div>
      <Suspense
        fallback={<CustomLoader />}
      >
        <RouterProvider router={router} />
      </Suspense>
    </div>
    </div>
  );
}

export default App
