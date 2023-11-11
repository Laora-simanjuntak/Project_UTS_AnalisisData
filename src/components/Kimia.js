// Kimia.js
import React from "react";

const Kimia = () => {
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
                <h3 className="ml-7">Unsur Kimia</h3>
                <div className="choice">
                    <p>Unsur Kimia</p>
                    <span className="badge-left">gratis</span>
                </div>
                <div className="choice">
                    <p>Hidrolisis</p>
                    <span className="badge-left">gratis</span>
                </div>
                <div className="choice">
                    <p>Senyawa</p>
                </div>
                <div className="choice">
                    <p>Laju Reaksi</p>
                </div>
            </div>
        </div>
    );
};

export default Kimia;