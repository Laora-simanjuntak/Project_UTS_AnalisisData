import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/dashborad-style.css";
import Header from "./Header";
import Topnav from "./Topnav";
import Footer from "./Footer";

const DashboardLayout = () => {
    return (
        <div className="dashbaord-container">
            <Header />
            <Topnav />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;