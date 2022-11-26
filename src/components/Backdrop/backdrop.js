import React from "react";
import { motion } from "framer-motion";
import "./backdrop.css";
import Modal from "../Modal/Modal";

function Backdrop({ content, handleClose }) {
  return (
    <motion.div
      onClick={handleClose}
      className="backdrop"
      handleClose={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Modal content={content} />
    </motion.div>
  );
}

export default Backdrop;
