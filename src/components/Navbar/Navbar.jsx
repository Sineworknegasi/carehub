import React from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";




const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand Brand_Name" href="#">
          CARE<span>HUB</span>
        </a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars/>
        </button>
        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <a class="nav-link mx-2 active" href="#!">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#!">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#!">
                Causes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#!">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#!">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
