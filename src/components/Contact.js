import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import emailjs from "emailjs-com";
import connectAnimation from "../assets/Connect.json";
import "../style/Contact.css";

const Contact = () => {
    const form = useRef();
    const [submitStatus, setSubmitStatus] = useState(false);
    const [popup, setPopup] = useState({ show: false, success: false, message: "" });

    const sendEmail = (e) => {
        e.preventDefault();
        setSubmitStatus(true);

        emailjs
            .sendForm( //EmailJs serviceID, templateID, formRef, publicKey 
                "Enter your Service ID here",
                "Enter your Template ID here",
                form.current,
                "Enter your Public Key here"
            )
            .then(
                (result) => {
                    e.target.reset();
                    setSubmitStatus(false);
                    showPopup(true, "Message sent successfully!");
                },
                (error) => {
                    setSubmitStatus(false);
                    showPopup(false, "Something went wrong. Please try again.");
                    e.target.reset();
                }
            );
    };

    const showPopup = (success, message) => {
        setPopup({ show: true, success, message });
        setTimeout(() => {
            setPopup({ show: false, success: false, message: "" });
        }, 1500);
    };

    return (
        <div className="contact-container">
            {/* Left Side */}
            <div className="contact-left">
                <h2>Contact Me! <i className="fa-solid fa-address-card"></i></h2>
                <p>
                    Have a project idea, question, or collaboration in mind?
                    I’d love to hear from you. Drop your details and I’ll get
                    back to you as soon as possible.
                </p>

                {/* Animation */}
                <div className="contact-animation">
                    <Lottie animationData={connectAnimation} loop={true} />
                </div>
            </div>

            {/* Right Side */}
            <div className="contact-right">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-row">
                        <input type="text" name="firstName" placeholder="First Name" required />
                        <input type="text" name="lastName" placeholder="Last Name" required />
                    </div>

                    <input type="email" name="email" placeholder="Email ID" required />
                    <input type="tel" name="phone" placeholder="Phone Number" />

                    <textarea name="message" placeholder="Message" rows="5" required></textarea>

                    <button type="submit" className="contact-btn" disabled={submitStatus}>
                        {submitStatus ? "Sending..." : "Connect"}
                    </button>
                </form>
            </div>

            {/* Popup Modal */}
            {popup.show && (
                <div className="popup-overlay">
                    <div className={`popup-box ${popup.success ? "success" : "error"}`}>
                        <p>{popup.message}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
