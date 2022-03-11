import React, { useState } from "react";
import { useLocation, useHistory, useNavigate } from "react-router-dom";
import Card from "./Card";

const EditContactForm = ({ id, onUpdate, onClick, ...props }) => {
  const location = useLocation();
  const { from } = location.state;

  const [name, setName] = useState(from[1]);
  const [email, setEmail] = useState(from[2]);
  const [phone, setPhone] = useState(from[3]);

  let navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneHandler = (e) => {
    setEmail(e.target.value);
  };
  const contactStyle = "w-[400px] border-2";

  const updateHandler = (e) => {
    e.preventDefault();
    onUpdate(
      from[0],
      e.target.name.value,
      e.target.email.value,
      e.target.phone.value
    );
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    navigate("/");
  };

  return (
    <div className=''>
      <Card contactStyle={contactStyle}>
        <form onSubmit={updateHandler} className='max-w-xs px-1 mx-auto'>
          <div className='flex flex-col my-2'>
            {/* <label for='name'>Name</label> */}
            <input
              placeholder='Name'
              name='name'
              id='name'
              value={name}
              onChange={(txt) => handleName(txt)}
              className='bg-transparent border-[1.5px] border-gray-400 rounded-md px-1 focus:border-blue-700 outline-none placeholder:text-xs'
            />
          </div>
          <div className='flex flex-col'>
            {/* <label for='email'>Email</label> */}
            <input
              placeholder='Email'
              name='email'
              id='email'
              onChange={emailHandler}
              className='bg-transparent border-[1.5px] border-gray-400 rounded-md px-1 focus:border-blue-700 outline-none placeholder:text-xs'
              value={email}
            />
          </div>
          <div className='flex flex-col'>
            <input
              placeholder='Phone Number'
              name='phone'
              id='phone'
              onChange={phoneHandler}
              className='bg-transparent border-[1.5px] border-gray-400 rounded-md px-1 focus:border-blue-700 outline-none placeholder:text-xs'
              value={phone}
            />
          </div>
          <button
            onSubmit={updateHandler}
            className='bg-blue-700 text-white w-20 my-2 rounded-md'
          >
            Update
          </button>
        </form>
      </Card>
    </div>
  );
};

export default EditContactForm;
