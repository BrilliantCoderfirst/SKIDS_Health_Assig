import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h1>Mohit Verma</h1>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
