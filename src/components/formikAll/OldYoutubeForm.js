
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "Pijjush ray",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("form data", values);
};
const validate = (values) => {
  // values.name values.email values.channel
  // error.name error.email error.channel
  let errors = {};

  if (!values.name) {
    errors.name = "Requried";
  }
  if (!values.channel) {
    errors.channel = "Requried";
  }
  if (!values.email) {
    errors.email = "Requried";
  } else if (
    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid email format";
  }
  return errors;
};

// yup use
const validationSchema = yup.object({
  name: yup.string().required("requried!"),
  email: yup.string().email("Invalid format").required("requried!"),
  channel: yup.string().required("requried!"),
});
function OldYoutubeForm() {
  // useformik -->
  // 1) managing the form state
  // 2) handaling form submission
  // 3) validation and error message
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  // console.log("formik values", formik.values);
  // console.log("formik errors", formik.errors);
  console.log("formik touched", formik.touched);
  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {/* if formik error present then shwon either nothing shown */}
        {formik.touched.name && formik.errors.name ? (
          <div className="error--formik">{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {/* if formik error present then shwon either nothing shown */}
        {formik.touched.email && formik.errors.email ? (
          <div className="error--formik">{formik.errors.email}</div>
        ) : null}
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.channel}
        />{" "}
        {/* if formik error present then shwon either nothing shown */}
        {formik.touched.channel && formik.errors.channel ? (
          <div className="error--formik">{formik.errors.channel}</div>
        ) : null}
        <button className="submit--form--button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default OldYoutubeForm;
