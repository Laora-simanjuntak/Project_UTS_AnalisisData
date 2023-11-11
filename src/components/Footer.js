// Footer.js
import React from "react";
import Whatsapp from "../assets/images/whatsapp.png";
import Instagram from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";
import Facebook from "../assets/images/facebook.png";
import Youtube from "../assets/images/youtube.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="sosmed">
                <p className="font-mono title">Virtual Learn</p>
                <a href="whatsapp://send?abid=+6281264227597&text=Hello!" target="_blank"><img className="icon" src={Whatsapp} alt="Whatsapp" /></a>
                <a href="https://www.instagram.com/laora_oya" target="_blank"><img className="icon" src={Instagram} alt="Instagram" /></a>
                <a href="https://twitter.com/Laorasimanjunt1" target="_blank"><img className="icon" src={Twitter} alt="Twitter" /></a>
                <a href="https://www.facebook.com/laora.simanjuntak" target="_blank"><img className="icon" src={Facebook} alt="Facebook" /></a>
                <a href="https://www.youtube.com/@Laorasimanjuntak" target="_blank"><img className="icon" src={Youtube} alt="Youtube" /></a>
            </div>
            <div className="pull-left copyright">
                <small>Copyright © 2023 Virtual Learn - Laora Simanjuntak</small>
            </div>
        </div>
    );
};

export default Footer;