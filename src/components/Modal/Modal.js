import React from "react";
import { motion } from "framer-motion";
import "./modal.css";

function Modal({ content }) {
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
      <h1>{content.title}</h1>

      <div className="tags">
        <motion.p
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="react-tag"
        >
          REACT
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="html-tag"
        >
          HTML
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="css-tag"
        >
          CSS
        </motion.p>
      </div>
      <div className="modal-content-body">
        <div className="modal-text-content">
          <p>{content.description}</p>

          <div className="modal-button-row">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="modal-button"
            >
              Live Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="modal-button"
            >
              GitHub Repo
            </motion.button>
          </div>
        </div>
        <motion.div
          className="mobile-video-div"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.video
            src={content.video}
            type="video/mov"
            className="modal-video"
            autoPlay="true"
            loop="true"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Modal;
