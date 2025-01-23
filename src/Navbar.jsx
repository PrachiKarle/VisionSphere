import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-5 py-2">
        <a
          href="#"
          className="text-decoration-none display-4 text-dark fw-bold"
        >
          <img src="images/logo.png" className="img-fluid" alt="" />
          <span className="fw-bold px-2" style={{ fontSize: "medium" }}>
            VisionSphere
          </span>
        </a>

        <button
          className="navbar-toggler bg-light text-dark"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse m-auto" id="nav">
          <ul className="navbar-nav ms-md-auto ms-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/eye" className="nav-link">
                Eyeglasses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/screen" className="nav-link">
                Screenglasses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/kids" className="nav-link">
                Kidsglasses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sun" className="nav-link">
                 Sunglasses
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Customer Support
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink to="/account" className="nav-link">
                <i class="bi bi-person"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
              <i class="bi bi-bag"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
