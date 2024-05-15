import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        // Implement your authentication logic here
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="actions">
                    <button type="submit" className="login-button">Log In</button>
                    {/* Update the link to Forgot Password page */}
                    <Link to="/forgot-password" className="forgot-password">Forgot my password?</Link>
                </div>
                <div className="register-link">
                    <Link to="/register">
                        <button className="item-btn">Register Here</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
