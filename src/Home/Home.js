import React from "react";
import profileImage from "../assets/profileImage.jpeg";
import "./home.css";
import resume from "../assets/resume.pdf";
import ghLogo from "../assets/ghLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";

function Home(props) {
  function openResume() {
    window.open(resume);
  }

  return (
    <>
      <div className="home-content-row">
        <img src={profileImage} className="profile-image"></img>
        <div className="content-column">
          <h1>Hi, I'm Dan!</h1>
          <p>I'm a Software Engineer based in Shropshire, UK. </p>
          <div className="home-buttons">
            <button className="resume-button" onClick={() => openResume()}>
              RESUME
            </button>
            <div className="logos">
              <img src={ghLogo} className="ghlogo"></img>
              <img src={linkedinLogo} className="linkedinlogo"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
