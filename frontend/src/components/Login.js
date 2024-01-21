import React, { useState } from 'react';
import Axios from "axios";
import '../styles/login-style.css';
import { Link } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/web/auth/login", {
            email: email,
            password: password
        }).then((response) => {
            if(response.data.message) {
                setLoginStatus(response.data.message);
            }else{
                setLoginStatus(response.data[0].email);
            }
        });
    };

    return (
        <div className="login-container">
            <h1>LOGIN</h1>
            <p>
                <h1 style={{ color: 'red', fontSize: "15px", textAlign: 'center', marginTop: '20px' }}>{loginStatus}</h1>
            </p>
            <div className='input'>
                <input
                    type="text"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className='pass'
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <Link to="/home">
                    <button type="button" class="button btn-primary" onClick={handleLogin}>Login</button>
                </Link>
            </div>
            <div>
                <p style={{ fontSize: "10px" }}>
                    Belum Punya Akun?
                    <Link to="/register"> Buat Akun</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
