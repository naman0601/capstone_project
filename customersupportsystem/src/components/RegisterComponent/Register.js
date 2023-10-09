import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        address: '',

        employmentStatus: '',
        employerDetails: '',
        panCard: '',
        password: '',
        ConfirmPassword: '',
    });

    const [errors, setErrors] = useState({});

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


        if (!formData.employerDetails.trim()) {
            errors.employerDetails = 'Employer Details is required';
        }

        if (!formData.panCard.trim()) {
            errors.panCard = 'PANCard is required';
        }

        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }

        if (!formData.ConfirmPassword.trim()) {
            errors.ConfirmPassword = 'ConfirmPassword is required';
        } else if (formData.password !== formData.ConfirmPassword) {
            errors.ConfirmPassword = 'Confirm Password does not match Password';
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
                await axios.post("http://localhost:9001/users", user);
                setFormData({
                    fullName: '',
                    email: '',
                    contactNumber: '',
                    address: '',
                   
                    employmentStatus: 'employed',
                    employerDetails: '',
                    panCard: '',
                    password: '',
                    ConfirmPassword: '',
                });

            } catch (error) {
                console.error('Error:', error);
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
                        <div className="mb-3">
                            <label htmlFor="employmentStatus" className="form-label">Employment Status</label>
                            <select
                                id="employmentStatus"
                                placeholder='select your Employment Status'
                                name="employmentStatus"
                                value={formData.employmentStatus}
                                onChange={(e) => handleInputChange(e)}
                                className="form-select"
                            >
                                <option value="employed">Employed</option>
                                <option value="unemployed">Unemployed</option>
                            </select>
                            {errors.employmentStatus && <span className="error">{errors.employmentStatus}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employerDetails" className="form-label">Employer Details</label>
                            <input
                                type="text"
                                className='form-control'
                                id="employerDetails"
                                placeholder='enter your Employer Details'
                                name="employerDetails"
                                value={formData.employerDetails}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.employerDetails && <span className="error">{errors.employerDetails}</span>}
                        </div>
                        <div className="mb3">
                            <label htmlFor="panCard" className="form-label">PANCard</label>
                            <input
                                type="text"
                                className='form-control'
                                id="panCard"
                                placeholder='enter your PANCard'
                                name="panCard"
                                value={formData.panCard}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.panCard && <span className="error">{errors.panCard}</span>}
                        </div>
                        <div className="mb3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="text"
                                className='form-control'
                                id="password"
                                placeholder='enter your Password'
                                name="password"
                                value={formData.password}
                                onChange={(e) => handleInputChange(e)} />
                            {errors.password && <span className="error">{errors.password}</span>}
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
                    </form>
                </div>
            </div>
        </div>
    );
}