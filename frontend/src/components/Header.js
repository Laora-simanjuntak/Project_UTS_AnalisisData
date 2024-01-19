// Header.js
import React from "react";
import ProfileUser from "../assets/images/user.png";
import Logo from "../assets/images/artificial-intelligence.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo center">
                <img className="img-logo pull-left" src={ Logo } />
                <span className="logo font-title">VIRTUAL LEARNING</span>
            </div>
            <div className="pull-right center pt-4">
                <button className="button btn-primary">Berlangganan</button>
                <Link to="/profile">
                    <img className="img-rounded" src={ ProfileUser } alt="Profile"/>
                </Link>
            </div>
        </div>
    );
};

export default Header;