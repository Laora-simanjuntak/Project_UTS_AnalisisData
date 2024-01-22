import React, { useState } from 'react';
import Axios from "axios";
import '../styles/login-style.css';
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/web/auth/signup", {
            name: name,
            email: email,
            password: password,
            address: address
        }).then((response) => {
            if(response.data.email) {
                navigate("/login");
            }else{
                setRegisterStatus(response.data.message);
            }
        });
    };

    return (
        <div className="register-container">
            <h2 style={{ margin: "40px 0px" }}>DAFTAR AKUN</h2>
            <p style={{ color: 'red', fontSize: "15px", textAlign: 'center', marginTop: '20px' }}>{registerStatus}</p>
            <div className='input'>
                <div className='form-control'>
                    <label className='pull-left label-login'>Nama <span style={{ color: "red" }}>*</span></label>
                    <input
                        type="text"
                        placeholder="masukkan nama anda"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='form-control'>
                    <label className='pull-left label-login'>Email <span style={{ color: "red" }}>*</span></label>
                    <input
                        type="email"
                        placeholder="masukkan email anda"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='form-control'>
                    <label className='pull-left label-login'>Password <span style={{ color: "red" }}>*</span></label>
                    <input
                        type="password"
                        placeholder="masukkan password anda"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='form-control'>
                    <label className='pull-left label-login'>Address</label>
                    <input
                        type="text"
                        placeholder="masukkan alamat anda"
                        value={address}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>
            <button type="button" class="button btn-primary" onClick={handleRegister}>Daftar</button>
            <div>
                <p style={{ fontSize: "10px" }}>
                    Sudah Punya Akun?
                    <Link to="/login"> Login!</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
