// Company.js
import React from "react";
import Globe from "../assets/images/globe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/images/artificial-intelligence.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Company = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img className="img-logo pull-left" src={Logo} />
          <span className="logo font-title">VIRTUAL LEARNING</span>
        </div>
      </div>
      <div className="opening">
        <div className="flex-container">
          <div className="flex-item-left">
            <h1 className="font-mono">Virtual Learn</h1>
            <p>
              Virtual Learn adalah platform pendidikan digital yang memberikan
              akses mudah dan fleksibel kepada pelajar untuk meningkatkan
              pengetahuan, keterampilan, dan kemampuan mereka. Melalui
              kursus-kursus interaktif dan berkualitas tinggi, kami
              menghubungkan instruktur ahli dengan para siswa dari berbagai
              latar belakang di seluruh Indonesia.
            </p>
            <Link to="/login">
              <div className="mt-4 mb-4">
                <button className="button btn-primary p24">Masuk/Daftar</button>
              </div>
            </Link>
          </div>

          <div className="flex-item-right">
            <div className="pull-right">
              <img className="img-globe" src={Globe} alt="Globe" />
            </div>
          </div>
        </div>
      </div>

      <div className="product-company">
        <h2 className="">What we can do</h2>
        <div className="grid-company">
          <div className="grid-card text-center">
            <h3>
              <strong>Materi</strong>
            </h3>
            <p className="grid-detail">Materi pembelajaran yang lengkap dan terpercaya</p>
          </div>
          <div className="grid-card text-center">
            <h3>
              <strong>Latihan Soal</strong>
            </h3>
            <p className="grid-detail">Tersedia banyak latihan soal yang mampu membantu kamu mengasah kemampuan</p>
          </div>
          <div className="grid-card text-center">
            <h3>
              <strong>Vidio Pembelajaran</strong>
            </h3>
            <p className="grid-detail">Vidio pembelajaran yang menarik</p>
          </div>
          <div className="grid-card text-center">
            <h3>
              <strong>Paket Belajar</strong>
            </h3>
            <p className="grid-detail">Paket belajar yang terjangkau untuk membuka konten premium</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Company;
