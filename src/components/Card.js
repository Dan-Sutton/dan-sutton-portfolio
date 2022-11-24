import React from "react";
import "./card.css";

function Card({ title, subtitle }) {
  return (
    <div className="cards">
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">{title}</h3>
          <h4 class="card-subtitle">{subtitle}</h4>
        </div>
        <i class="fa-solid fa-hat-witch card-icon"></i>
      </div>
    </div>
  );
}

export default Card;
