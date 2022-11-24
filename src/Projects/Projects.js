import React from "react";
import "./projects.css";
import Card from "../components/Card";

function Projects() {
  return (
    <div id="cards">
      <Card title={"Cookr"} subtitle={"Random recipe finder"} />
      <Card
        title={"Band Website"}
        subtitle={"A Band showcasing site, where bookings can be made"}
      />
      <Card title={"Last Minute Band"} subtitle={"Find and book local bands"} />
      <Card title={"Play it"} subtitle={"Make song requests"} />
    </div>
  );
}

export default Projects;
