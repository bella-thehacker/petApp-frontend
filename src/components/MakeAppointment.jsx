import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./MakeAppointments.css";
import SuccessMessage from "./SuccessMessage";
import FailedMessage from "./FailedMessage";

export const MakeAppointment = () => {
  const [pets, setPets] = useState([]); // Stores pets fetched from the API
  const [appointmentStatus, setAppointmentStatus] = useState(null); // null, "success", or "failed"
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch pets from the API
  useEffect(() => {
    const fetchPets = async () => {
      const token = localStorage.getItem("access_token"); // Retrieve the access token

      try {
        const response = await fetch("https://petapp-backend-abg7.onrender.com/pets", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPets(data);
        } else {
          console.error("Failed to fetch pets");
        }
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };
    fetchPets();
  }, []);

  // Sample list of vet clinics
  const vetClinics = [
    { id: 1, name: "Happy Paws Clinic", location: "Downtown" },
    { id: 2, name: "VetCare Center", location: "Uptown" },
    { id: 3, name: "Purrfect Health Vet", location: "Midtown" },
    { id: 4, name: "Canine Wellness Hub", location: "Suburb" },
  ];

  // Formik setup
  const formik = useFormik({
    initialValues: {
      pet_id: "",
      vet: "",
      type: "Checkup",
      date: "",
      time: "",
      priority: "Medium",
      notes: "",
    },
    validationSchema: Yup.object({
      pet_id: Yup.string().required("Please select a pet"),
      vet: Yup.string().required("Vet clinic is required"),
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      priority: Yup.string().oneOf(["Low", "Medium", "High"], "Invalid priority"),
      notes: Yup.string().max(500, "Notes must be 500 characters or less"),
    }),
    onSubmit: async (values) => {
      const token = localStorage.getItem("access_token"); // Retrieve the access token
      setIsSubmitting(true);

      try {
        const response = await fetch("https://petapp-backend-abg7.onrender.com/Appointment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setAppointmentStatus("success");
        } else {
          setAppointmentStatus("failed");
        }
      } catch (error) {
        console.error("Error submitting appointment:", error);
        setAppointmentStatus("failed");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const closeMessage = () => {
    setAppointmentStatus(null);
  };

  return (
    <div className="appointment-container">
      <h2>Make an Appointment</h2>

      <form onSubmit={formik.handleSubmit}>
        <label>
          Select Pet:
          <select
            name="pet_id"
            value={formik.values.pet_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">-- Choose a Pet --</option>
            {pets.map((pet) => (
              <option key={pet.id} value={pet.id}>
                {pet.name}
              </option>
            ))}
          </select>
          {formik.touched.pet_id && formik.errors.pet_id ? (
            <div className="error">{formik.errors.pet_id}</div>
          ) : null}
        </label>
        <br />

        <label>
          Select Vet Clinic:
          <select
            name="vet"
            value={formik.values.vet}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">-- Choose a Vet --</option>
            {vetClinics.map((clinic) => (
              <option key={clinic.id} value={clinic.name}>
                {clinic.name} - {clinic.location}
              </option>
            ))}
          </select>
          {formik.touched.vet && formik.errors.vet ? (
            <div className="error">{formik.errors.vet}</div>
          ) : null}
        </label>
        <br />

        <label>
          Appointment Type:
          <input
            type="text"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <br />

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="error">{formik.errors.date}</div>
          ) : null}
        </label>
        <br />

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.time && formik.errors.time ? (
            <div className="error">{formik.errors.time}</div>
          ) : null}
        </label>
        <br />

        <label>
          Priority:
          <select
            name="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <br />

        <label>
          Notes:
          <textarea
            name="notes"
            value={formik.values.notes}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.notes && formik.errors.notes ? (
            <div className="error">{formik.errors.notes}</div>
          ) : null}
        </label>
        <br />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Make Appointment"}
        </button>
      </form>

      {appointmentStatus === "success" && <SuccessMessage onClose={closeMessage} />}
      {appointmentStatus === "failed" && <FailedMessage onClose={closeMessage} />}
    </div>
  );
};