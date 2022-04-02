import React from 'react';
import { useFormik } from 'formik';
import './Form.css';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please provide a valid email address';
  }

  return errors;
};

const onSubmitHandler = (values) => {
  console.log(values);
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      onSubmitHandler(values);
      formik.handleReset();
    },
  });

  return (
    <form className='hero__form' onSubmit={formik.handleSubmit}>
      <div className='hero__form-input-wrapper'>
        <input
          id='email'
          name='email'
          type='email'
          className='hero__form-input'
          placeholder='Your email address…'
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          value={formik.values.email}
        />
        <button type='submit' className='hero__form-submit'>
          Notify Me
        </button>
        {formik.errors.email && (
          <p className='hero__form-input-error'>{formik.errors.email}</p>
        )}
      </div>
    </form>
  );
};

export default Form;
