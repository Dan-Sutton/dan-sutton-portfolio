import React from "react";
import "./card.css";

function Card({ title, subtitle, icon, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <h4 className="card-subtitle">{subtitle}</h4>
      </div>
      <img className="card-icon" src={icon} alt={"box-icon"}></img>
    </div>
  );
}

export default Card;
