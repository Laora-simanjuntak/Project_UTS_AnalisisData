// Materi.js
import React from "react";
import { Link } from "react-router-dom";

const Materi = () => {
    return (
        <div>
            <div className="subject">
                <p>Mata Pelajaran</p>
                <div className="grid-container">
                    <div className="grid-item">Matematika</div>
                    <div className="grid-item">Fisika</div>
                    <div className="grid-item active">Kimia</div>
                    <div className="grid-item">Biologi</div>
                    <div className="grid-item">Sejarah</div>
                    <div className="grid-item">PKn</div>
                    <div className="grid-item">Bahasa Inggris</div>
                    <div className="grid-item">Bahasa Indonesia</div>
                </div>
            </div>
            <hr></hr>
            <div className="material">
                <Link to="/kimia">
                    <div className="choice">
                        <p>Unsur Kimia</p>
                        <span className="badge-right">5 sub bab gratis</span>
                    </div>
                </Link>
                <div className="choice">
                    <p>Hidrolisis</p>
                    <span className="badge-right">3 sub bab gratis</span>
                </div>
                <div className="choice">
                    <p>Senyawa</p>
                    <span className="badge-right">3 sub bab gratis</span>
                </div>
                <div className="choice">
                    <p>Laju Reaksi</p>
                    <span className="badge-right">3 sub bab gratis</span>
                </div>
            </div>
        </div>
    );
};

export default Materi;