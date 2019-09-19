import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import UserForm from "./Form";
import "./App.css";

const formApi = "https://reqres.in/api/users";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [serverError, setServerError] = useState("");

  const fetchUsers = () => {
    // get those friends from the api
    // and set them into the right slice of state!
    // don't forget about the sad path: put something in `serverError`
    axios
      .get(formApi)
      .then(res => {
        setUsersList(res.data);
      })
      .catch(err => {
        setServerError(err.message);
      });
  };

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
      password: formValues.password
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
        debugger;
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>User Onboarding</h1>
      <UserForm onSubmit={addUser} />

      {usersList.length
        ? usersList.map(fr => <div key={fr}>{fr.name} is Saved.</div>)
        : "No Users. Sad!"}
    </div>
  );
}

const validationSchema = yup.object().shape({
  name: yup.string().required("GAGAHHH WE NEED NAME"),
  email: yup.email().required(),
  password: yup.password().required()
});

export default App;
