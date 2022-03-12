import React from "react";
import ContactList from "../components/ContactList";

const Home = ({ users, onDelete }) => {
  return (
    <main>
      {users.length > 0 ? (
        users.map((user) => (
          <ContactList
            id={user.id}
            key={user.email}
            name={user.name}
            email={user.email}
            phone={user.phone}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className='text-center mt-10 pb-3'>Loading...</p>
      )}
    </main>
  );
};

export default Home;
