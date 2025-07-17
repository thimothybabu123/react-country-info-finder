import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand  py-2 px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link
          to="/search"
          className="d-flex align-items-center text-decoration-none text-white fw-bold"
        >
          <img
            src="/logogl.jpg"
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className=" d-md-inline fs-2 fw-semibold text-white ">
            Country Info App
          </span>
        </Link>

        <div className="d-flex align-items-center gap-3">
          <Link to="/about" className="btn btn-sm btn-danger fw-semibold">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
