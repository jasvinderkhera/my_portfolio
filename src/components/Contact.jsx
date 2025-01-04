import React, { useState } from "react";
import cv from '../images/cv.pdf'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

function Contact() {

const validationSchema = Yup.object({
  user_name: Yup.string().required('Name is required'),
  user_email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  user_phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

  // Submit handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        resetForm(); // Clear the form after successful submission
      } else {
        const error = await response.json();
        alert(`Failed to send email: ${error.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="display-6 mb-3 pb-3 text-center">Hire Me</h3>
      <Formik
      initialValues={{
        user_name: '',
        user_email: '',
        user_phone: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="user_name">Name:</label>
            <Field type="text" name="user_name" id="user_name" className="form-control" />
            <ErrorMessage
              name="user_name"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="user_email">Email:</label>
            <Field type="email" name="user_email" id="user_email" className="form-control" />
            <ErrorMessage
              name="user_email"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="user_phone">Phone Number:</label>
            <Field type="text" name="user_phone" id="user_phone" className="form-control" />
            <ErrorMessage
              name="user_phone"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message">Message:</label>
            <Field as="textarea" name="message" id="message" className="form-control" />
            <ErrorMessage
              name="message"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div>
            <button className="btn btn-primary w-100 my-4 py-2" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        </Form>
      )}
    </Formik>


      <div className="container d-flex justify-content-center align-items-center">
      <div className="api_cheatsheet_container">
      <object
              data={cv}
              type="application/pdf"
            >
            </object>
      </div>
        
      
      </div>
    </div>
  );
}

export default Contact;
