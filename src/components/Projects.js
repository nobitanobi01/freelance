import React, { useEffect } from "react";
import "../style/Projects.css";
import organic from "../assets/organic.png";
import notes from "../assets/notes.png";
import claims from "../assets/claims.png";
import bingo from "../assets/bingo.jfif";
import todo from "../assets/todo.png";
import otp from "../assets/otp.jfif";

const projects = [
  {
    id: 1,
    title: "Organic ReactVista",
    description:
      "Built a responsive and interactive web app using ReactJS with reusable components, dynamic routing, form handling, and API integration for a smooth user experience across all devices.",
    image: organic,
    github: "https://github.com/nobitanobi01/Organic-Webpage-",
    demo: "https://organicmarts.netlify.app/",
  },
  {
    id: 2,
    title: "Notes_App",
    description:
      "A responsive and user-friendly Notes App developed using HTML, CSS, JavaScript, and PHP. This project allows users to create, view, edit, and update their personal notes seamlessly.",
    image: notes,
    github: "https://github.com/nobitanobi01/Notes_App",
    demo: "http://notesapp.xo.je/",
  },
  {
    id: 3,
    title: "Claim Settler",
    description:
      "A responsive React web app with dynamic content, smooth navigation, and interactive features for a seamless user experience. Used EmailJS for contact form functionality.",
    image: claims,
    github: "https://github.com/nobitanobi01/The_Claim_Settlers",
    demo: "http://claimsettlers.netlify.app/",
  },
  {
    id: 4,
    title: "Bingo E-Commerce",
    description:
      "Developed a fully functional e-commerce website using HTML, CSS, JavaScript, and PHP with dynamic products, user authentication, and cart management for a smooth, responsive shopping experience.",
    image: bingo,
    github: "https://github.com/nobitanobi01/E-Commerce-Bingo-",
  },
  {
    id: 5,
    title: "TO-DO ",
    description:
      "A fast, lightweight front-end project built with Vite and fetching data from a JSON API - demonstrating modern tooling, async data handling, and clean UI integration.",
    image: todo,
    github: "https://github.com/nobitanobi01/Vite-JSON_API",
  },
  {
    id: 6,
    title: "OTP Verification System",
    description:
      "Built a full-stack OTP verification system using ReactS, Java (Spring Boot), and MySQL. Enables secure user registration and login with real-time OTP authentication, ensuring data safety and smooth user experience.",
    image: otp,
    github: "https://github.com/nobitanobi01/OTP_Verification",
  },
];

const Projects = () => {
  // Scroll animation logic
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">
        Projects{" "}
        <i
          className="fa-solid fa-diagram-project"
          style={{ fontSize: "30px" }}
        ></i>
      </h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card animate-on-scroll" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn github-btn"
              >
                GitHub
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn demo-btn"
                >
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
