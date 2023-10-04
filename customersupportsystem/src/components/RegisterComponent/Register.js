
import React, { useState } from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';

export default function Register() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        address: '',
        dob: '',
        EmployementStatus: '',
        EmployerDetails: '',
        PANCard: '',
        Password: '',
        ConfirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    // const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.fullName.trim()) {
            errors.fullName = 'Full Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formData.contactNumber.trim()) {
            errors.contactNumber = 'Contact Number is required';
        }

        if (!formData.address.trim()) {
            errors.address = 'Address is required';
        }

        if (!formData.dob.trim()) {
            errors.dob = 'Date of Birth is required';
        }

        
        if (!formData.EmployerDetails.trim()) {
            errors.EmployerDetails = 'EmployerDetails is required';
        }
        if (!formData.PANCard.trim()) {
            errors.PANCard = 'PANCard is required';
        }
        if (!formData.Password.trim()) {
            errors.Password = 'Password is required';
        }
        if (!formData.ConfirmPassword.trim()) {
            errors.ConfirmPassword = 'ConfirmPassword is required';
        }
        else if (formData.Password !== formData.ConfirmPassword) {
            errors.ConfirmPassword = 'Confirm Password does not match Password';
        }

        setErrors(errors);

        // Check if there are no errors in the form
        return Object.keys(errors).length === 0;
    };
    
    // const generateCustomerId = () => {
    //     return Math.floor(Math.random() * 1000000000); 
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if (isFormValid) {
            // Generate account number
            // const CustomerId = generateCustomerId();

            // Create a new user object with the form data
            const user = {
                ...formData,
                // CustomerId,
                // balance: 0,
            };

            try {
                await axios.post("http://localhost:3000/users", user);
                setFormData({
                    fullName: '',
                    email: '',
                    contactNumber: '',
                    address: '',
                    dob: '',
                    EmployementStatus: 'employed',
                    EmployerDetails: '',
                    PANCard: '',
                    Password: '',
                    ConfirmPassword: '',
                });
                // setRegistrationSuccess(true);

            } catch (error) {
                console.error('Error:', error);
                // Handle registration failure here
            }
        }
    };

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className="text-center" style={{color:"purple"}}>Register</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder='enter your full name'
                                name="fullName"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange(e)}
                                className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                            />
                            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className='form-control'
                                id='email'
                                placeholder='enter your email'
                                name="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                            <input
                                type="text"
                                className='form-control'
                                id="contactNumber"
                                placeholder='enter your contact number'
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                className='form-control'
                                id="address"
                                placeholder='enter your address'
                                name="address"
                                value={formData.address}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.address && <span className="error">{errors.address}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                            <input
                                type="date"
                                className='form-control'
                                id="dob"
                                placeholder='enter your date of birth'
                                name="dob"
                                value={formData.dob}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.dob && <span className="error">{errors.dob}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="EmployementStatus" className="form-label">EmployementStatus</label>
                            <select
                                id="EmployementStatus"
                                placeholder='select your Employement Status'
                                name="EmployementStatus"
                                value={formData.accountType}
                                onChange={(e) => handleInputChange(e)}
                                className="form-select"
                            >
                                <option value="employed">employed</option>
                                <option value="Unemployed">Unemployed</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="EmployerDetails" className="form-label">EmployerDetails</label>
                            <input
                                type="text"
                                className='form-control'
                                id="EmployerDetails"
                                placeholder='enter your Employer Name'
                                name="EmployerDetails"
                                value={formData.EmployerDetails}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.EmployerDetails && <span className="error">{errors.EmployerDetails}</span>}
                        </div>
                        <div className="mb3">
                        <label htmlFor="PANCard" className="form-label">PANCard</label>
                            <input
                                type="text"
                                className='form-control'
                                id="PANCard"
                                placeholder='enter your PANCard'
                                name="PANCard"
                                value={formData.PANCard}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.PANCard && <span className="error">{errors.PANCard}</span>}
                        </div>
                        <div className="mb3">
                        <label htmlFor="Password" className="form-label">Password</label>
                            <input
                                type="text"
                                className='form-control'
                                id="Password"
                                placeholder='enter your Password'
                                name="Password"
                                value={formData.Password}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.Password && <span className="error">{errors.Password}</span>}
                        </div>
                        <div className="mb3">
                        <label htmlFor="ConfirmPassword" className="form-label">ConfirmPassword</label>
                            <input
                                type="text"
                                className='form-control'
                                id="ConfirmPassword"
                                placeholder='enter your ConfirmPassword'
                                name="ConfirmPassword"
                                value={formData.ConfirmPassword}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.ConfirmPassword && <span className="error">{errors.ConfirmPassword}</span>}
                        </div>

                        <button type="submit" className="btn btn-primary" style={{backgroundColor:"purple"}}>Register</button>
                       {/* <Link className='btn btn-danger mx-2' to="/">Cancel</Link>
                        <Link className='btn btn-success mx-2' to="/login">Login</Link> */}
                    </form>
                </div>
            </div>
        </div>
    );
}
