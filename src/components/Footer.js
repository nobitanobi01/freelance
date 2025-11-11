import React from "react";
import "../style/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <hr className="footer-line" />

            <div className="footer-content">
                <div className="footer-section">
                    <h3>Phone</h3>
                    <p>+91 932-5962-944</p>
                </div>

                <div className="footer-section">
                    <h3>Email</h3>
                    <p>ajaykumbhar826@gmail.com</p>
                </div>

                <div className="footer-section">
                    <h3>Follow Me</h3>
                    <div className="footer-icons">
                        <a
                            href="/"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/nobitanobi01"
                            target="/"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href="https://instagram.com/_ajay.kumbhar"
                            target="/"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom" style={{marginTop:"10px"}}>
                    <p><strong style={{color:"black"}}>©</strong> 2025 By Ajay Kumbhar.</p>
                    <p>
                        Powered and secured by <strong>React</strong>
                    </p>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
