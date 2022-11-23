import React from "react";
import "./projects.css";

function Projects(props) {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  for (const card of document.querySelectorAll(".card")) {
    card.onmousemove = (e) => handleOnMouseMove(e);
  }

  return (
    <div className="project-card-grid">
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  );
}

export default Projects;
