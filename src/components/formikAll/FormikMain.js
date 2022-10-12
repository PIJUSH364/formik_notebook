import React from "react";
import BodyContent from "../../BodyContent";
import Nav from "../../Nav";
import YoutubeForm from "./YoutubeForm";

function Formik() {
  return (
    <div className="formik--container">
      <Nav />
      <BodyContent content="learn Formik" />
      <YoutubeForm />
    </div>
  );
}

export default Formik;
