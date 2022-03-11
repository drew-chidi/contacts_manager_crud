import React from "react";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";

const AddContactForm = ({ onAdd, onClick }) => {
  const contactStyle = "w-[400px] border-2";
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value, e.target.phone.value);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    navigate("/");
  };

  return (
    <div className='relative '>
      <Card contactStyle={contactStyle}>
        <form onSubmit={submitHandler} className='max-w-xs px-1 mx-auto'>
          <div className='flex flex-col my-2'>
            {/* <label for='name'>Name</label> */}
            <input
              placeholder='Name'
              name='name'
              id='name'
              className='bg-transparent border-[1.5px] border-gray-400 rounded-md px-1 focus:border-blue-700 outline-none placeholder:text-xs'
            />
          </div>
          <div className='flex flex-col'>
            {/* <label for='email'>Email</label> */}
            <input
              placeholder='Email'
              name='email'
              id='email'
              className='bg-transparent border-[1.5px] border-gray-400 rounded-md px-1 focus:border-blue-700 outline-none placeholder:text-xs'
            />
          </div>
          <div className='flex flex-col my-2'>
            <input
              placeholder='Phone Number'
              name='phone'
              id='phone'
              className='bg-transparent border-[1.5px] border-gray-400 rounded-md px-1 focus:border-blue-700 outline-none placeholder:text-xs'
            />
          </div>

          <button
            onSubmit={submitHandler}
            className='bg-blue-700 text-white w-12 my-2 rounded-md'
          >
            Add
          </button>
        </form>
      </Card>
    </div>
  );
};

export default AddContactForm;
