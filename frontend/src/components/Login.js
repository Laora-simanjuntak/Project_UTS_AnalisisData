import React, { useState } from 'react';
import '../styles/login-style.css';
import { Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('Laora');
    const [password, setPassword] = useState('laora123');

    const handleLogin = () => {
        // Di sini Anda dapat menambahkan logika autentikasi, seperti memeriksa kecocokan username dan password.
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className='input'>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className='pass'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='Button'>
                <Link to="/home">
                    <button type="button" class="btn btn-primary">Login</button>
                </Link>
            </div>
            <div className='buatakun'>
                <p>Belum Punya Akun?</p>
                <button type="button" class="btn btn-primary">Buat Akun</button>
            </div>
        </div>
    );
}

export default Login;
