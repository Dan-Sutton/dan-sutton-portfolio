import React from "react";
import { motion } from "framer-motion";
import "./backdrop.css";
import Modal from "../Modal/Modal";
import WebsiteModal from "../Modal/website/WebsiteModal";

function Backdrop({ content, handleclose, mobileView = true }) {
  return (
    <motion.div
      onClick={() => handleclose()}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {mobileView ? (
        <Modal content={content} />
      ) : (
        <WebsiteModal content={content} />
      )}
    </motion.div>
  );
}

export default Backdrop;
