import React from "react";
import "./projects.css";
import Card from "../components/Card";
import cookr from "../assets/cookr.png";
import fire from "../assets/fire.png";
import lastminband from "../assets/lastminband.png";
import playme from "../assets/playme.png";
import { useState } from "react";
import Backdrop from "../components/Backdrop/backdrop";
import { modalInfo } from "../assets/SeedData/modalInfo";

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
    <div id="cards">
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
      <Card
        title={"Last Minute Band"}
        subtitle={"Find and book local bands"}
        icon={lastminband}
        onClick={() => handleModal()}
      />

      {modalOpen && (
        <Backdrop modalOpen={open} handleClose={close} content={selectedCard} />
      )}
    </div>
  );
}

export default Projects;
