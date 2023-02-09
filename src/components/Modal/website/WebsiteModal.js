import React from "react";
import { motion } from "framer-motion";
import "./websitemodal.css";

function WebsiteModal({ content }) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="modal"
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className={"modaltitle"}>{content.title}</h1>

      <div className="tags">
        {content.stack.map((i, index) => {
          return (
            <motion.p
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${i}-tag`}
            >
              {i}
            </motion.p>
          );
        })}
      </div>
      <div className="website-modal-content-body">
        <div className="website-modal-text-content">
          <p>{content.description}</p>

          <motion.div
            className="website-video-div"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              loading="eager"
              src={content.video}
              className="website-video"
              alt="Demo Gif"
            ></img>
          </motion.div>

          <div className="website-modal-button-row">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="website-modal-button"
              onClick={() => {
                window.open(content.link, "_blank", "noopener,noreferrer");
              }}
            >
              Live Project
            </motion.button>
            <motion.button
              onClick={() => {
                window.open(content.github, "_blank", "noopener,noreferrer");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="website-modal-button"
            >
              GitHub Repo
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WebsiteModal;
