import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className= "w-100">
        <footer className="py-3 bg-dark" style={{color: "white"}}>
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admission" className="nav-link px-2 text-body-secondary">
                Admission
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link px-2 text-body-secondary">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link px-2 text-body-secondary">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faculty" className="nav-link px-2 text-body-secondary">
                Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2 text-body-secondary">
                Contact Us
              </Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© J.C BOSE SENIOR SECONDARY SCHOOL</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
