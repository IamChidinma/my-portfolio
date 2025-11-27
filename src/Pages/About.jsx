import React from "react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
} from "react-icons/si";
import "./AboutSection.css";

export default function AboutPage() {
  const skills = [
    { name: "HTML", color: "#E34F26", icon: <SiHtml5 /> },
    { name: "CSS", color: "#1572B6", icon: <SiCss3 /> },
    { name: "JavaScript", color: "#F7DF1E", icon: <SiJavascript /> },
    { name: "React", color: "#61DAFB", icon: <SiReact /> },

    { name: "Git & GitHub", color: "#171515", icon: <SiGithub /> },
  ];

  return (
    <>
      <section className="about-section">
        <div className="about-image">
          <img src="/me.jpeg" alt="Profile" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a frontend developer passionate about crafting clean, intuitive,
            and delightful user experiences. Every website I build aims to be
            visually appealing, responsive, and easy to navigate.
          </p>
          <p>
            I combine creativity with structure: writing maintainable, efficient
            code while exploring innovative layouts and designs. My goal is to
            transform ideas into functional and memorable web experiences.
          </p>
          <p>
            Outside coding, I enjoy learning new design patterns, accessibility
            best practices, and experimenting with UI aesthetics. Each project
            strengthens my skills and sparks my curiosity to create even better
            interfaces.
          </p>
          <button>RESUME →</button>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-intro">
          <h2>⚡ Skills & Toolbox</h2>
          <p>
            These are the tools and technologies I use to bring ideas to life.
            Each one helps me create user-friendly and visually engaging
            experiences.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div style={{ color: skill.color }} className="skill-icon">
                {skill.icon}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <p>
          Here’s a look at the learning journey that has shaped my skills and
          mindset as a frontend developer.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <h3>Frontend Engineering Bootcamp</h3>
            <p>The Curve Africa</p>
            <p>2025</p>
            <p>
              Immersive training in modern frontend technologies including
              React, JavaScript, responsive design, and user-centered UI.
              Learned best practices for creating fast, maintainable, and
              visually appealing web apps.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
