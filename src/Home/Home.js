import React from "react";
import profileImage from "../assets/profileImage.jpeg";
import "./home.css";
import resume from "../assets/resume.pdf";
import ghLogo from "../assets/ghLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import Typewriter from "typewriter-effect";

function Home(props) {
  function openResume() {
    window.open(resume);
  }

  return (
    <>
      <div className="home-content-row">
        <img src={profileImage} className="profile-image"></img>
        <div className="content-column">
          <div className="home-title">
            <Typewriter
              options={{
                strings: ["Hi, I'm Dan!"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p>I'm a Software Engineer based in Shropshire, UK. </p>
          <div className="home-buttons">
            <button className="resume-button" onClick={() => openResume()}>
              RESUME
            </button>
            <div className="logos">
              <img
                src={ghLogo}
                className="ghlogo"
                onClick={() =>
                  window.open(
                    "https://github.com/Dan-Sutton",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              ></img>
              <img
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/dewa-sutton/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                src={linkedinLogo}
                className="linkedinlogo"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
