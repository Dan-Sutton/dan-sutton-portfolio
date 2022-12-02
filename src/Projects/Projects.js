import React from "react";
import "./projects.css";
import Card from "../components/Card";
import cookr from "../assets/cookr.png";
import fire from "../assets/fire.png";
// import lastminband from "../assets/lastminband.png";
import playme from "../assets/playme.png";
import { useState } from "react";
import Backdrop from "../components/Backdrop/backdrop";
import { modalInfo } from "../assets/SeedData/modalInfo";
import { motion } from "framer-motion";

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  function handleModal(cardDetails) {
    setSelectedCard(modalInfo[cardDetails]);
    modalOpen ? close() : open();
  }
  return (
    <motion.div
      id="cards"
      initial={{ opacity: 0.5, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, yChannelSelector: -1000 }}
    >
      <Card
        title={"Play Me!"}
        subtitle={"Make song requests"}
        icon={playme}
        onClick={() => handleModal("playme")}
      />
      <Card
        title={"Cookr"}
        subtitle={"Random recipe finder"}
        icon={cookr}
        onClick={() => handleModal("cookr")}
      />

      <Card
        title={"Band Website"}
        subtitle={"A Band showcasing site, where bookings can be made"}
        icon={fire}
        onClick={() => handleModal("bandSite")}
      />

      {modalOpen && (
        <Backdrop modalOpen={open} handleClose={close} content={selectedCard} />
      )}
    </motion.div>
  );
}

export default Projects;
