import React from 'react'
import './ProfilePage.css'
import { Formik, Form, Field } from 'formik'


export const UserProfile = () => {
  return (
    <Formik
      initialValues={{
        userName: '',
        phoneNumber: '',
        address: '',
        userImage: '',
      }}
      onSubmit={(values) => {
        console.log('Updated User Profile:', values);
      }}>
      {() => (
        <Form className="user-profile-form">
          <div className="form-group">
            <label>User Name:</label>
            <Field name="userName" type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <Field name="phoneNumber" type="text" placeholder="Enter phone number" />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <Field name="address" type="text" placeholder="Enter address" />
          </div>
          <div className="form-group">
            <label>User Image:</label>
            <Field type="file" name="userImage" />
          </div>
          <button type="submit">Save Changes</button>
        </Form>
      )}
    </Formik>
  )
}

