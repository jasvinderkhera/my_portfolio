import React, { useState } from "react";
import cv from '../images/cv.pdf'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

function Contact() {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
// const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
// const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

console.log(serviceId); // Use these variables

const validationSchema = Yup.object({
  user_name: Yup.string().required('Name is required'),
  user_email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  user_phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});

const sendEmail = (values, actions) => {
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, // Replace with your service ID
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Replace with your template ID
      values,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Replace with your public key
    )
    .then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent!');
        actions.resetForm(); // Reset form after successful submission
      },
      (error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send the message, please try again.');
      }
    )
    .finally(() => {
      actions.setSubmitting(false); // Stop the loading spinner
    });
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
      onSubmit={sendEmail}
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
