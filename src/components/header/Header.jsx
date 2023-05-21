import React from "react";
import { NavLink } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          Shopping Cart
        </NavLink>
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/contact"
              >
                Categories
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <TbSearch className="mx-2 cp" />
            <AiOutlineHeart className="mx-2 cp" />

            <span class="position-relative">
              <CgShoppingCart className="mx-2 cp" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
              </span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
