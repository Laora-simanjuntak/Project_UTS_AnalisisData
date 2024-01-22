import React, { useState } from 'react';
import Axios from "axios";
import '../styles/login-style.css';
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/web/auth/login", {
            email: email,
            password: password
        }).then((response) => {
            if(response.data.token) {
                navigate("/home");
            }else{
                setLoginStatus(response.data.message);
            }
        });
    };

    return (
        <div className="login-container">
            <h2 style={{ margin: "40px 0px 70px 0px" }}>LOGIN</h2>
            <p style={{ color: 'red', fontSize: "15px", textAlign: 'center', marginTop: '20px' }}>{loginStatus}</p>
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
            <button type="button" class="button btn-primary" onClick={handleLogin}>Login</button>
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
