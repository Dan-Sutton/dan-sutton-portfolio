import React from "react";
import "./projects.css";
import Card from "../components/Card";
import { useState } from "react";
import Backdrop from "../components/Backdrop/backdrop";
import { modalInfo } from "../assets/SeedData/modalInfo";
import { motion } from "framer-motion";

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [mobileView, setMobileView] = useState(true);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  function handleModal(index) {
    setSelectedCard(modalInfo[index]);
    modalOpen ? close() : open();
  }

  return (
    <motion.div
      id="cards"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, yChannelSelector: -100 }}
    >
      {modalInfo.map((item, index) => {
        return (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            onClick={() => {
              handleModal(index);
              setMobileView(false);
            }}
          />
        );
      })}

      {modalOpen && (
        <Backdrop
          modalOpen={open}
          handleclose={close}
          content={selectedCard}
          mobileView={mobileView}
        />
      )}
    </motion.div>
  );
}

export default Projects;
