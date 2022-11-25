import React from "react";
import "./projects.css";
import Card from "../components/Card";
import cookr from "../assets/cookr.png";
import fire from "../assets/fire.png";
import lastminband from "../assets/lastminband.png";
import playme from "../assets/playme.png";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import Backdrop from "../components/Backdrop/backdrop";

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const cards = {
    cookr: "Cookr",
    bandSite: "Band Site",
  };

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  function handleModal(cardDetails) {
    setSelectedCard(cards[cardDetails]);
    modalOpen ? close() : open();
  }
  return (
    <div id="cards">
      <Card
        title={"Cookr"}
        subtitle={"Random recipe finder"}
        icon={cookr}
        onClick={() => handleModal("cookr")}
      />
      {modalOpen && (
        <Backdrop modalOpen={open} handleClose={close} content={selectedCard} />
      )}
      <Card
        title={"Band Website"}
        subtitle={"A Band showcasing site, where bookings can be made"}
        icon={fire}
        onClick={() => handleModal()}
      />
      <Card
        title={"Last Minute Band"}
        subtitle={"Find and book local bands"}
        icon={lastminband}
        onClick={() => handleModal()}
      />
      <Card
        title={"Play it"}
        subtitle={"Make song requests"}
        icon={playme}
        onClick={() => handleModal()}
      />
    </div>
  );
}

export default Projects;
