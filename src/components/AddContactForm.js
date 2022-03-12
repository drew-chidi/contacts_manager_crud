import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const AddContactForm = ({ onAdd, onClick }) => {
  let navigate = useNavigate();

  // Add specific style to Card UI component
  const contactStyle = "border-2";

  return (
    <Formik
      initialValues={{ email: "", name: "", phone: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        } else if (!values.name) {
          errors.name = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onAdd(values.name, values.email, values.phone);
        }, 400);
        navigate("/");
      }}
    >
      {({ isSubmitting }) => (
        <Card contactStyle={contactStyle}>
          <Form className='max-w-xs px-1 mx-auto'>
            <div className='flex flex-col my-2'>
              <Field
                placeholder='Name'
                type='text'
                name='name'
                className='bg-transparent border-[1.5px] border-gray-400 rounded-md px-1 focus:border-blue-700 outline-none placeholder:text-xs'
              />
              <ErrorMessage name='name' component='div' />
            </div>
            <div className='flex flex-col'>
              <Field
                type='email'
                placeholder='Email'
                name='email'
                id='email'
                className='bg-transparent border-[1.5px] border-gray-400 rounded-md px-1 focus:border-blue-700 outline-none placeholder:text-xs'
              />
              <ErrorMessage
                name='email'
                component='div'
                className='text-xs text-red-500'
              />
            </div>
            <div className='flex flex-col my-2'>
              <Field
                type='text'
                placeholder='Phone'
                name='phone'
                id='phone'
                className='bg-transparent border-[1.5px] border-gray-400 rounded-md px-1 focus:border-blue-700 outline-none placeholder:text-xs'
              />
              <ErrorMessage name='phone' component='div' />
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='bg-blue-700 text-white w-12 my-2 rounded-md'
            >
              Add
            </button>
          </Form>
        </Card>
      )}
    </Formik>
  );
};

export default AddContactForm;
