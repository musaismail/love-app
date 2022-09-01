import React, { useState } from "react";
import Modal from "../Modal";
import Start from "../Start/Start";

const Startcreation = ({ type }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [start, setStart] = useState(false);
  return (
    <div>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {type}
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} setStart={setStart} />}
      {start && <Start setStart={setStart} setOpenModal={setModalOpen} />}
    </div>
  );
};

export default Startcreation;
