import React from 'react'
import './ProfilePage.css'
import { Formik, Form, Field } from 'formik';


export const PetProfile = ({ petDetails }) => {
  return (
     <Formik
      initialValues={{
        petImage: '',
        averageSteps: petDetails?.averageSteps || '',
        averageCalories: petDetails?.averageCalories || '',
        ...petDetails,
      }}
      onSubmit={(values) => {
        console.log('Updated Pet Profile:', values);
      }}>
      {({ values }) => (
        <Form className="pet-profile-form">
          <div className="form-group">
            <label>Pet Image:</label>
            <Field type="file" name="petImage" />
          </div>
          <div className="form-group">
            <label>Average Daily Steps:</label>
            <Field name="averageSteps" type="number" placeholder="Enter steps" />
          </div>
          <div className="form-group">
            <label>Average Daily Calories:</label>
            <Field name="averageCalories" type="number" placeholder="Enter calories" />
          </div>
          {/* Other pet details as read-only */}
          <div>
            <strong>Name:</strong> {values.petName}
          </div>
          <div>
            <strong>Breed:</strong> {values.petBreed}
          </div>
          <div>
            <strong>Type:</strong> {values.petType}
          </div>
          {/* Edit Button */}
          <button type="submit">Save Changes</button>
        </Form>
      )}
    </Formik>
  )
}

