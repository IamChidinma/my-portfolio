import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-panel">
        <p className="portfolio-title">CREATIVE PORTFOLIO</p>
        <h1 className="name-title">AMAECI CHIDINMA</h1>
        <p className="role-title">Frontend Developer</p>
        <p className="description">
          Crafting elegant, user-friendly digital experiences.
          <br />
          Focused on modern interfaces, purposeful design, and seamless
          interactions.
        </p>
        <a
          href="https://docs.google.com/document/d/1F8wyV33b1mNwkDAVhV_dKm7T7aJ9XBAQ1OdouEyThV0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cta-btn">Resume</button>
        </a>
      </div>

      <div className="image-panel">
        <div className="profile-frame">
          <img src="/me.jpeg" alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
