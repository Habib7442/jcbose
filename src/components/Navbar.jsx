import { React } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar__div">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            <img
              style={{ width: "3rem", height: "3rem" }}
              src="./logo.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admission"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Admission
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/gallery"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/faculty"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Faculty
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
