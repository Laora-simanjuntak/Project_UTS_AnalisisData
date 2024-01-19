// Home.js
import React from "react";
import Globe from "../assets/images/globe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div>
            <div className="opening">
                <div className="flex-container">
                    <div className="flex-item-left">
                            <h1 className="font-mono">Virtual Learn</h1>
                            <p>Virtual Learn adalah platform pendidikan digital yang memberikan akses 
                            mudah dan fleksibel kepada pelajar untuk meningkatkan pengetahuan, keterampilan, 
                            dan kemampuan mereka. Melalui kursus-kursus interaktif dan berkualitas tinggi, 
                            kami menghubungkan instruktur ahli dengan para siswa dari berbagai latar belakang 
                            di seluruh Indonesia.</p>
                    </div>
                    <div className="flex-item-right">
                        <div className="pull-right">
                            <img className="img-globe" src={ Globe } alt="Globe"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search">
                <input type="text" class="searchTerm" placeholder="Cari.." />
                <button class="searchButton">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="products">
                <div className="flex-container">
                    <div className="flex-item-left">
                        <div className="card-product">
                            <button className="button btn-danger">Diskon 20%</button>
                            <h6 className="card-title">Paket Belajar 6 Bulan</h6>
                            <span className="card-subtitle">SD dan SMP</span>
                            <ul className="card-detail">
                                <li>Rangkuman materi premium</li>
                                <li>Vidio Pelajaran</li>
                                <li>Latihan soal dan kuis</li>
                            </ul>
                            <h4 className="text-center strong">Rp 700.000</h4>
                            <div className="content-center">
                                <button className="button btn-primary">Langganan Sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-item-right">
                        <div className="card-product">
                        <button className="button btn-danger">Diskon 20%</button>
                            <h6 className="card-title">Paket Belajar 6 Bulan</h6>
                            <span className="card-subtitle">SMA / SMK dan Gap Year</span>
                            <ul className="card-detail">
                                <li>Rangkuman materi premium</li>
                                <li>Vidio Pelajaran</li>
                                <li>Latihan soal dan kuis</li>
                            </ul>
                            <h4 className="text-center strong">Rp 850.000</h4>
                            <div className="content-center">
                                <button className="button btn-primary">Langganan Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;