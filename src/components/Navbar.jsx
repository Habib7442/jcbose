import { React } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-white body-font shadow-sm bg-gray-800">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center">
        <Link to="/" className="flex p-2 md:mb-0">
          <img className="w-20 h-20" src="./logo.png" alt="" />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/admission" className="mr-5 hover:text-gray-900">
            Admission
          </Link>
          <Link to="/gallery" className="mr-5 hover:text-gray-900">
            Gallery
          </Link>
          <Link to="/faculty" className="mr-5 hover:text-gray-900">
            Faculty
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About Us
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
          <Link to="/achievements" className="mr-5 hover:text-gray-900">
            Achievements
          </Link>
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
      </div>
    </header>
    // <div classNameNameName="navbar__div">
    //   <nav classNameNameName="navbar navbar-expand-lg bg-body-tertiary">
    //     <div classNameNameName="container-fluid">
    //       <Link to="/" classNameNameName="navbar-brand" href="#">
    //         <img
    //           style={{ width: "3rem", height: "3rem" }}
    //           src="./logo.png"
    //           alt=""
    //         />
    //       </Link>
    //       <button
    //         classNameNameName="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span classNameNameName="navbar-toggler-icon"></span>
    //       </button>
    //       <div classNameNameName="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul classNameNameName="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li classNameNameName="nav-item">
    //             <Link
    //               to="/"
    //               classNameNameName="nav-link active"
    //               aria-current="page"
    //               href="#"
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li classNameNameName="nav-item">
    //             <Link
    //               to="/admission"
    //               classNameNameName="nav-link active"
    //               aria-current="page"
    //               href="#"
    //             >
    //               Admission
    //             </Link>
    //           </li>
    //           <li classNameNameName="nav-item">
    //             <Link
    //               to="/gallery"
    //               classNameNameName="nav-link active"
    //               aria-current="page"
    //               href="#"
    //             >
    //               Gallery
    //             </Link>
    //           </li>
    //           <li classNameNameName="nav-item">
    //             <Link
    //               to="/about"
    //               classNameNameName="nav-link active"
    //               aria-current="page"
    //               href="#"
    //             >
    //               About Us
    //             </Link>
    //           </li>
    //           <li classNameNameName="nav-item">
    //             <Link
    //               to="/faculty"
    //               classNameNameName="nav-link active"
    //               aria-current="page"
    //               href="#"
    //             >
    //               Faculty
    //             </Link>
    //           </li>
    //           <li classNameNameName="nav-item">
    //             <Link
    //               to="/contact"
    //               classNameNameName="nav-link active"
    //               aria-current="page"
    //               href="#"
    //             >
    //               Contact Us
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;
