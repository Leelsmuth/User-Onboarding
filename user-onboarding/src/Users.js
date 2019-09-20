import React from "react";

export default function Users(props) {
  const { usersList } = props;
  return (
    <div className="users">
      <h4>List of Onboarded Users</h4>
      {usersList.length
        ? usersList.map(user => (
            <div key={user.id}>
              <p>
                Congrats {user.name}, you have successfully registered. Your
                email:({user.email}), will serve as your username...
              </p>
            </div>
          ))
        : "No Users. Sad!"}
    </div>
  );
}
