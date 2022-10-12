import React from "react";
import { useFormik } from "formik";
function YoutubeForm() {
  // useformik -->
  // 1) managing the form state
  // 2) handaling form submission
  // 3) validation and error message
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });

  return (
    <div className="form-container">
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        <button className="submit--form--button">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
