import React, { useState } from "react";
import axios from "axios";
import UserForm from "./Form";
import Users from "./Users";
import "./App.css";

const formApi = "https://reqres.in/api/users";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [serverError, setServerError] = useState("");

  const addUser = (formValues, actions) => {
    // THIS FUNCTION NEEDS TO COMPLY WITH FORMIK
    // REQUIREMENTS FOR ACCEPTABLE `onSubmit` FUNCTIONS!
    // It should take two args:
    //     (values) the form values (object)
    //     (actions) formik actions (object)
    // And perform a POST request to the api
    const UserToPost = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms
    };

    axios
      .post(formApi, UserToPost)
      .then(res => {
        // res.data contains the newly created friend
        const newlyCreatedUser = res.data;
        setUsersList(usersList.concat(newlyCreatedUser));
        actions.resetForm();
      })
      .catch(err => {
        setServerError(err.message);
      });
  };

  return (
    <div className="App">
      {serverError}
      <h1>User Onboarding</h1>
      <UserForm onSubmit={addUser} />
      <Users usersList={usersList} />
    </div>
  );
}

export default App;
