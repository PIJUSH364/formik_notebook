import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="formik">
          <li>Formik</li>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
