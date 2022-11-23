import React from "react";
import profileImage from "../assets/profileImage.jpeg";
import "./home.css";

function Home(props) {
  return (
    <>
      <div className="home-content-row">
        <img src={profileImage} className="profile-image"></img>
        <div className="content-column">
          <h1>Hi, I'm Dan!</h1>
          <p>I'm a Software Engineer based in Shropshire, UK. </p>
          <div className="home-buttons">
            <button className="resume-button">RESUME</button>
            <button className="projects-button">PROJECTS</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
