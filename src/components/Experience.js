import React, { useEffect, useRef } from "react";
import "../style/Experience.css";

const experiences = [
    {
        company: "Freelancing",
        role: "Software Developer",
        duration: "Jan 2024 – Present",
        description: "Developed and delivered 6+ freelance projects for clients in e-commerce, portfolio websites, and dashboards. Built secure REST APIs in Spring Boot for authentication and order management. Achieved 100% client satisfaction by focusing on responsive design and performance optimization.",
    },
    {
        company: "NanoTech Software",
        role: "Web Developer Intern",
        duration: "June 2023 – Dec 2023",
        description: "Built a fully responsive web app with HTML, CSS, JavaScript, and Bootstrap, featuring dynamic UI, interactive forms, and client-side validation for enhanced user experience.",
    },
    {
        company: "Bachelor of Computer Engineering",
        role: "Trinity Academy Of Engineering",
        duration: "2019 – 2023",
        description: "Graduated with strong skills in software development and data structures.",
    },
    {
        company: "Higher Secondary School (12th)",
        role: "Kendriya Vidyalaya Army Area",
        duration: "2018 – 2019",
        description: "Completed with focus on science and mathematics.",
    },

];


const Experience = () => {
    const ref = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("show");
                        }, i * 400); // 👈 stagger delay (200ms between items)
                    }
                });
            },
            { threshold: 0.2 }
        );

        ref.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="experience-section" id="experience">
            <h2 className="experience-heading">Experience / Education  <i className="fa-solid fa-award"></i></h2>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        ref={(el) => (ref.current[index] = el)}
                        className={`timeline-item ${index % 2 === 0 ? "left" : "right"} hidden`}
                    >
                        <div className="content">
                            <h3>{exp.role}</h3>
                            <h4>{exp.company}</h4>
                            <span className="duration">{exp.duration}</span>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
