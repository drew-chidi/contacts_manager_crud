import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AddContactForm from "./components/AddContactForm";
import EditContactForm from "./components/EditContactForm";
import ContactList from "./components/ContactList";
import { URL } from "./api/Api";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const contactFormHandler = () => {
    setVisible(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.request({
        method: "GET",
        url: URL,
      });
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdate = async (id, name, email, phone) => {
    try {
      const response = await axios.request(
        {
          method: "PUT",
          url: `${URL}/${id}`,
        },
        {
          name,
          email,
        }
      );
      let updateArr = users.map((item) => {
        if (item.id === id) {
          return { ...item, name, email, phone };
        }
        return item;
      });

      setUsers(updateArr);
    } catch (error) {
      console.log(error);
    }
  };

  const onAdd = async (id, name, email, phone) => {
    try {
      const response = await axios.request(
        {
          method: "POST",
          url: URL,
        },
        {
          name,
          email,
          phone,
        }
      );
      setUsers((users) => [...users, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (id) => {
    let deleteData = users.filter((item) => item.id !== id);
    setUsers(deleteData);
  };

  return (
    <Card>
      <div className='flex justify-between border-b-[1.5px] border-gray-400 px-2 sm:w-4/5 mx-auto'>
        <Link to='/' className='text-lg font-bold '>
          Contacts
        </Link>
        <Link to='/add' className='bg-blue-700 text-white w-10 text-center'>
          Add
        </Link>
      </div>
      {visible ? (
        <AddContactForm onAdd={onAdd} onClick={contactFormHandler} />
      ) : null}

      <div>
        <Routes>
          <Route
            path='/'
            element={users.map((user) => (
              <ContactList
                id={user.id}
                key={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                onDelete={onDelete}
              />
            ))}
          />

          {/* <p>Nothing to see here</p> */}
          <Route path='/add' element={<AddContactForm onAdd={onAdd} />} />
          <Route
            path='/edit'
            element={<EditContactForm onUpdate={onUpdate} />}
          />
        </Routes>
      </div>
    </Card>
  );
};

export default App;
