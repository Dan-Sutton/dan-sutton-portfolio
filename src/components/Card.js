import React from "react";
import "./card.css";

function Card({ title, subtitle, icon }) {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <h4 className="card-subtitle">{subtitle}</h4>
        </div>
        <img className="card-icon" src={icon} alt={"box-icon"}></img>
      </div>
    </div>
  );
}

export default Card;
