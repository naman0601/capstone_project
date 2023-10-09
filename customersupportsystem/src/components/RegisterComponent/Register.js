import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    address: "",
    dob: "",
    employmentStatus: "",
    employerDetails: "",
    panCard: "",
    password: "",
    ConfirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      errors.contactNumber = "Invalid Contact Number";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    if (!formData.dob.trim()) {
      errors.dob = "Date of Birth is required";
    } else {
      const today = new Date();
      const dobDate = new Date(formData.dob);

      if (dobDate >= today) {
        errors.dob = "Date of Birth should be before today";
      }
    }

    if (!formData.employerDetails.trim()) {
      errors.employerDetails = "Employer Details is required";
    }

    if (!formData.panCard.trim()) {
      errors.panCard = "PANCard is required";
    } else if (!/^\d{10}$/.test(formData.panCard)) {
      errors.panCard = "Invalid PanCard";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    if (!formData.ConfirmPassword.trim()) {
      errors.ConfirmPassword = "ConfirmPassword is required";
    } else if (formData.password !== formData.ConfirmPassword) {
      errors.ConfirmPassword = "Confirm Password does not match Password";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      const { ConfirmPassword, ...user } = formData;
      try {
        await axios.post("http://localhost:9090/users", user);
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          address: "",
          dob: "",
          employmentStatus: "employed",
          employerDetails: "",
          panCard: "",
          password: "",
          ConfirmPassword: "",
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center" style={{ color: "purple" }}>
            Register
          </h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label text-left">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="enter your full name"
                name="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange(e)}
                className={`form-control ${
                  errors.fullName ? "is-invalid" : ""
                }`}
              />
              {errors.fullName && (
                <span className="error" style={{ color: "red" }}>
                  {errors.fullName}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="enter your email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <span className="error" style={{ color: "red" }}>
                  {errors.email}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label text-left">
                Contact Number
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.contactNumber ? "is-invalid" : ""
                }`}
                id="contactNumber"
                placeholder="enter your contact number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.contactNumber && (
                <span className="error" style={{ color: "red" }}>
                  {errors.contactNumber}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label text-left">
                Address
              </label>
              <input
                type="text"
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                id="address"
                placeholder="enter your address"
                name="address"
                value={formData.address}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.address && (
                <span className="error" style={{ color: "red" }}>
                  {errors.address}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label text-left">
                Date of Birth
              </label>
              <input
                type="date"
                className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                id="dob"
                placeholder="enter your date of birth"
                name="dob"
                value={formData.dob}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.dob && (
                <span className="error" style={{ color: "red" }}>
                  {errors.dob}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="employmentStatus"
                className="form-label text-left"
              >
                Employment Status
              </label>
              <select
                id="employmentStatus"
                placeholder="select your Employment Status"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={(e) => handleInputChange(e)}
                className="form-select"
              >
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
              </select>
              {errors.employmentStatus && (
                <span className="error" style={{ color: "red" }}>
                  {errors.employmentStatus}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="employerDetails" className="form-label text-left">
                Employer Details
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.employerDetails ? "is-invalid" : ""
                }`}
                id="employerDetails"
                placeholder="enter your Employer Details"
                name="employerDetails"
                value={formData.employerDetails}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.employerDetails && (
                <span className="error" style={{ color: "red" }}>
                  {errors.employerDetails}
                </span>
              )}
            </div>
            <div className="mb3">
              <label htmlFor="panCard" className="form-label text-left">
                PANCard
              </label>
              <input
                type="text"
                className={`form-control ${errors.panCard ? "is-invalid" : ""}`}
                id="panCard"
                placeholder="enter your PANCard"
                name="panCard"
                value={formData.panCard}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.panCard && (
                <span className="error" style={{ color: "red" }}>
                  {errors.panCard}
                </span>
              )}
            </div>
            <div className="mb3">
              <label htmlFor="password" className="form-label text-left">
                Password
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                placeholder="enter your Password"
                name="password"
                value={formData.password}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.password && (
                <span className="error" style={{ color: "red" }}>
                  {errors.password}
                </span>
              )}
            </div>
            <div className="mb3">
              <label htmlFor="ConfirmPassword" className="form-label text-left">
                ConfirmPassword
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.ConfirmPassword ? "is-invalid" : ""
                }`}
                id="ConfirmPassword"
                placeholder="enter your ConfirmPassword"
                name="ConfirmPassword"
                value={formData.ConfirmPassword}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.ConfirmPassword && (
                <span className="error" style={{ color: "red" }}>
                  {errors.ConfirmPassword}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "purple" }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
       
    </div>
  );
}
