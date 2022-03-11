import React from "react";
import { GrFormEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "./Card";

const ContactList = ({ id, email, name, onDelete, phone }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  let data = [id, name, email, phone];
  return (
    <Card>
      <div className='flex gap-6 items-center justify-between'>
        <div className='flex gap-6 items-center'>
          <div className='rounded-full bg-slate-500 w-10 h-10'>
            <BsFillPersonFill className='w-10 h-10 text-white' />
          </div>
          <div className='min-w-[33%]'>
            <p className='font-bold'>{name}</p>
            <p className='text-xs italic'>{email}</p>
            <p className='text-xs italic underline'>{phone}</p>
          </div>
        </div>
        <div className='flex'>
          <Link to='/edit' state={{ from: data }}>
            <button className='mx-1'>
              <GrFormEdit className='text-gray-400' />
            </button>
          </Link>
          <button className='mx-1 text-red-700' onClick={deleteHandler}>
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ContactList;
