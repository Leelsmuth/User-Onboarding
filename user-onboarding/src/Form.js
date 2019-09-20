import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const InitialOnboardingForm = {
  name: "",
  email: "",
  password: "",
  terms: false
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email("E-mail is not valid!")
    .required("E-mail is required!"),
  password: yup
    .string()
    .min(6, "Password has to be longer than 6 characters!")
    .required("Password is required!"),
  terms: yup
    .bool()
    .test(
      "terms",
      "You have to agree with our Terms and Conditions!",
      value => value === true
    )
    .required("You have to agree with our Terms and Conditions!")
});

function UserForm(props) {
  return (
    <Formik
      validationSchema={validationSchema}
      // validate={validate}
      initialValues={InitialOnboardingForm}
      onSubmit={props.onSubmit}
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
                <Field
                  name="terms"
                  type="checkbox"
                  checked={props.values.terms}
                  placeholder="Age"
                />
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
