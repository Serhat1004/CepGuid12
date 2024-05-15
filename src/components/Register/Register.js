import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password:'',
        age: '',
        address: '',
        nationality: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add form submission logic here
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="nationality">Nationality</label>
                    <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required />
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default Register;
