import React from "react";
import { motion } from "framer-motion";
import "./modal.css";

function MobileProjectModal({ content }) {


  return (
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
            onClick={() => console.log("ohofhewofhewh")}
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
  );
}

export default MobileProjectModal;
