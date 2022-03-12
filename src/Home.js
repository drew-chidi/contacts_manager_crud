import React from "react";
import ContactList from "./components/ContactList";

const Home = ({ users, onDelete }) => {
  return (
    <div>
      {users.map((user) => (
        <ContactList
          id={user.id}
          key={user.email}
          name={user.name}
          email={user.email}
          phone={user.phone}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Home;
