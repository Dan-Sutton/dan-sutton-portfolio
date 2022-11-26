import React from "react";
import { motion } from "framer-motion";

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
      <h1>{content}</h1>
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
    </motion.div>
  );
}

export default Modal;
