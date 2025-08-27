
import React from "react";
import "../index.css"; // अपनी main CSS

export default function About() {
  // Static data for UI (Person B replace कर सकती है)
  const teamMembers = [
    {
      name: "Person A",
      role: "Frontend Developer",
      photo: "https://via.placeholder.com/150",
      github: "https://github.com/personA",
      linkedin: "https://linkedin.com/in/personA",
    },
    {
      name: "Person B",
      role: "Backend Developer",
      photo: "https://via.placeholder.com/150",
      github: "https://github.com/personB",
      linkedin: "https://linkedin.com/in/personB",
    },
  ];

  return (
    <div className="about-container">
      <h2>About Project</h2>
      <p>
        This project is a full-stack Apartment Management app. Users can
        browse, bookmark, create, and edit apartments.
      </p>

      <h3>Team Members</h3>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
            <div className="social-links">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
