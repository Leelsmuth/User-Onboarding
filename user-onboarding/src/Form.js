import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const InitialOnboardingForm = {
  name: "",
  email: "",
  password: ""
};

function UserForm({ onSubmit }) {
  return (
    <Formik
      // validationSchema={validationSchema}
      // validate={validate}
      initialValues={InitialOnboardingForm}
      onSubmit={onSubmit}
      render={props => {
        return (
          // we will use pre-baked components
          // supplied by formik lib (like Formik)
          <Form>
            <div>
              <label>
                Name
                <Field name="name" type="text" placeholder="Name" />
                <ErrorMessage name="name" component="div" />
              </label>
            </div>
            <div>
              <label>
                Email
                <Field name="email" type="email" placeholder="Enter Email" />
                <ErrorMessage name="email" component="div" />
              </label>
            </div>
            <div>
              <label>
                password
                <Field name="password" type="password" placeholder="password" />
                <ErrorMessage name="password" component="div" />
              </label>
            </div>
            <div>
              <label>
                Terms of Service
                <Field name="terms" type="checkbox" placeholder="Age" />
                <ErrorMessage name="terms" component="div" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    />
  );
}

export default UserForm;
