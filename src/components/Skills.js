import React, { useEffect } from "react";
import "../style/Skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaCode, FaDatabase, FaLaptopCode } from "react-icons/fa";
import { SiJavascript, SiSpringboot, SiMysql } from "react-icons/si";

const Skills = () => {
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

  const skills = [
    { icon: <FaReact color="#61DBFB" />, name: "React" },
    { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaHtml5 color="#E44D26" />, name: "HTML5" },
    { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
    { icon: <FaJava color="#f89820" />, name: "Java" },
    { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
    { icon: <SiMysql color="#00758F" />, name: "MySQL" },
    { icon: <FaPhp color="#8993be" />, name: "PHP" },
  ];

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Building responsive and dynamic web applications using React, Spring Boot, and MySQL.",
    },
    {
      icon: <FaDatabase />,
      title: "Backend Development",
      description:
        "Developing secure and scalable server-side applications and REST APIs with Java and PHP.",
    },
    {
      icon: <FaCode />,
      title: "UI/UX Implementation",
      description:
        "Designing user-friendly interfaces and ensuring seamless user experiences across all devices.",
    },
  ];

  return (
    <div className="skills-container">
      {/* Skills Section */}
      <h2 className="skills-title">Skills <i className="fa-solid fa-arrow-trend-up"></i></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card animate-on-scroll" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <h2 className="services-title">Services <i className="fa-solid fa-handshake-angle"></i></h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card animate-on-scroll" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
