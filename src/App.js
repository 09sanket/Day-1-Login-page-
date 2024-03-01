import React, { useState } from 'react';
import './App.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Store login details in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Optionally, you can redirect the user to another page after successful login
    };

    return (
        <div className="box">
            <form onSubmit={handleSubmit} autoComplete="off">
                <h2>Sign in</h2>
                <div className="inputBox">
                    <input 
                        type="text" 
                        required 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <span>Username</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input 
                        type="password" 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <span>Password</span>
                    <i></i>
                </div>
                <div className="links">
                    <a href="#">Forgot Password ?</a>
                    <a href="#">Signup</a>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginForm;
