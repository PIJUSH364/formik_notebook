import React from "react";
import BodyContent from "../../BodyContent";
import { Link } from "react-router-dom";
import YoutubeForm from "./YoutubeForm";

function Formik() {
  return (
    <div className="formik--container">
      <div className="navigaton--link">
        {" "}
        <Link to="/">
          <li>Home</li>
        </Link>
      </div>

      <BodyContent content="learn Formik" />
      <YoutubeForm />
    </div>
  );
}

export default Formik;
