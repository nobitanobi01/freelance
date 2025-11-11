import React, { useEffect, useState, useMemo } from "react";
import Lottie from "lottie-react";
import "../style/Home.css";
import pic from "../assets/welcome.json";


const Home = () => {
    const words = useMemo(() => ["Software Developer", "ReactJs Developer", "Java Developer", "UI/UX Developer"], []);


    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        const typingSpeed = isDeleting ? 80 : 150; // Typing vs deleting speed

        const timeout = setTimeout(() => {
            if (!isDeleting && displayText.length < currentWord.length) {
                // Typing forward
                setDisplayText(currentWord.slice(0, displayText.length + 1));
            } else if (isDeleting && displayText.length > 0) {
                // Erasing backward
                setDisplayText(currentWord.slice(0, displayText.length - 1));
            } else if (!isDeleting && displayText.length === currentWord.length) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && displayText.length === 0) {
                // Move to next word
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentWordIndex, words]);

    return (
        <div className="home-container">
            <div className="home-left">
                <Lottie animationData={pic} loop={true} />
            </div>

            <div className="home-right">
                <h1 className="home-heading">
                    {displayText}
                    <span className="cursor">|</span>
                </h1>

                <h3 className="home-subheading">
                    A Bit About Me <i className="fa-solid fa-arrow-down"></i>
                </h3>

                <p className="home-text">
                    Hi! I’m <strong style={{ fontSize: "22px", color: "#007BFF", fontFamily: "Elms Sans, sans-serif" }}>Ajay Kumbhar</strong>, a software developer who loves creating web applications
                    that are both functional and user-friendly.
                </p>
                <p className="home-text">
                    I work with technologies like ReactJS, Spring Boot, PHP, and MySQL, and I’ve
                    built everything from responsive frontends to secure REST APIs.
                </p>
                <p className="home-text">
                    My journey started with a curiosity about how websites work, which turned
                    into a full-time passion for software development.
                    When I’m not coding, I enjoy exploring new tech tools,
                    contributing to projects, and constantly learning to become a better developer.
                </p>
                <div className="button-group">
                    <a href="#contact" className="resume-btn hire">Hire Me</a>
                    <a
                        href={process.env.PUBLIC_URL + "/resume.pdf"}
                        download="Ajay_Kumbhar.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                    >
                        Download Resume
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Home;
