import React from "react";
import "./projects.css";
const projects = [
  {
    title: "Splita – Digital Ajo Savings Platform",
    description:
      "A digital Ajo savings platform that allows users to join thrift groups, automate savings, and track contributions securely.",
    image: "/splita.jpeg",
    stack: ["React", "CSS"],
    github: "https://github.com/Raphael877/Splita.git",
    live: "https://splita.vercel.app/",
  },
  {
    title: "RiseBite",
    description:
      "A sleek breakfast app offering personalized recipes and quick, easy-to-follow meal ideas. Built to showcase clean design, responsive layout, and smooth user experience.",
    image: "/risebite.png",
    stack: ["React", "CSS"],
    github: "https://github.com/coderchris1234/RiseBite.git",
    live: "#",
  },
  {
    title: "Instagram clone",
    description:
      "A sleek Instagram clone that replicates the classic feed, profile pages, and post layout. Built to showcase clean design, responsive layout, and polished visual styling",
    image: "/inst.png",
    stack: ["React", "CSS"],
    github: "https://github.com/IamChidinma/instagram-clone.git",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div className="project-card" key={idx}>
            <img src={p.image} alt={p.title} className="project-image" />

            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>

              <p className="project-description">{p.description}</p>

              <div className="tech-stack">
                {p.stack.map((skill, index) => (
                  <span className="tech-badge" key={index}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={p.github} target="_blank">
                  Code
                </a>
                <a href={p.live} target="_blank">
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
