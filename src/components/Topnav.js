// Topbar.js

import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        <div>
            <nav className="topbar">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/materi">Materi</Link>
                    </li>
                    <li>
                        <Link to="/video">Video</Link>
                    </li>
                    <li>
                        <Link to="/soal">Soal</Link>
                    </li>
                    <li>
                        <Link to="/favorit">Favorite</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                    <li>
                        <Link to="/paket-belajar">Paket Belajar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Topbar;