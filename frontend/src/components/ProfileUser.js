// ProfileUser.js
import React, { useEffect, useState } from "react";
import ProfileIcon from "../assets/images/user.png";
import Axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

const ProfileUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const currentId = localStorage.getItem('user');
  const authenticated = localStorage.getItem('jwt');

  useEffect(() => {
    Axios.get(`http://localhost:3001/web/users/${currentId}`).then((result) => {
      setUser(result.data.user[0]);
    }).catch((error) => console.log(error));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    Axios.patch(`http://localhost:3001/web/users/${currentId}`, {
        name: name,
        email: email,
        password: password,
        address: address
    }).then((response) => {
        alert('Data berhasil diubah')
    }).catch((error) => {
      console.log(error.message);
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  }

  if(authenticated == null) {
    return <Navigate replace to="/login"></Navigate>
  } else {
    return (
      <div className="profile-container">
        <h2>
          <strong>Profil</strong>
          <button className="button btn-secondary pull-right" onClick={handleLogout}>Log Out</button>
        </h2>
        <div className="img-center">
          <img className="img-profile" src={ProfileIcon} />
        </div>
        <div className="card-profile">
          <div>
            <div className="form-group">
              <label className="mb-2" for="name">Nama Lengkap</label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  defaultValue={user.name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  defaultValue={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label for="address">Alamat</label>
              <div className="mt-1">
                <input
                  type="address"
                  id="address"
                  className="form-control"
                  defaultValue={user.address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                />
              </div>
            </div>

            <div className="form-group">
              <label for="password">Password</label>
              <div className="mt-1">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  defaultValue=""
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  required
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="center">
            <button className="button btn-secondary content-center" onClick={handleUpdate}>Save Edited</button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileUser;
