import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "Pijjush ray",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("form data", values);
};

// yup use
const validationSchema = yup.object({
  name: yup.string().required("requried!"),
  email: yup.string().email("Invalid format").required("requried!"),
  channel: yup.string().required("requried!"),
});
function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="form-container">
        <Form>
          <div className="form--control">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" />
          </div>

          <div className="form--control">
            <label htmlFor="email">E-mail</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" />
          </div>
          
          <div className="form--control">
            <label htmlFor="channel">Channel</label>
            <Field type="text" name="channel" id="channel" />
            <ErrorMessage name="channel" />
          </div>

          <button className="submit--form--button" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </Formik>
  );
}

export default YoutubeForm;
