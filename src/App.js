import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AddContactForm from "./components/AddContactForm";
import EditContactForm from "./components/EditContactForm";
import { URL } from "./api/Api";
import Card from "./components/Card";
import axios from "axios";
import Home from "./pages/Home";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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
      await axios.request(
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

  const onAdd = async (name, email, phone) => {
    try {
      const response = await axios.post(URL, {
        name,
        email,
        phone,
      });
      console.log("ww", response);
      setUsers((users) => [...users, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (email) => {
    let deleteData = users.filter((item) => item.email !== email);
    setUsers(deleteData);
  };

  return (
    <Card>
      <div className='flex justify-between border-b-[1.5px] border-gray-400 px-2 sm:w-4/5 mx-auto py-2'>
        <Link to='/' className='text-lg font-bold '>
          Contacts
        </Link>
        <Link
          to='/add'
          className='bg-blue-700 text-white w-10 text-center rounded-md'
        >
          Add
        </Link>
      </div>
      <div>
        <Routes>
          <Route
            path='/'
            element={<Home users={users} onDelete={onDelete} />}
          />
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
