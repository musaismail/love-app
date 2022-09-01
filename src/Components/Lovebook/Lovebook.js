import React, { useState } from "react";
import Creategiver from "../Creategiver/Creategiver";
import Createreceiver from "../Createreceiver/Createreceiver";
import Start from "../Start/Start";
import Modal from "../Modal";
import Dummy from "../Dummy";
import "./lovebook.css";

function Lovebook() {
  const [modalOpen, setModalOpen] = useState(false);
  const [start, setStart] = useState(false);
  const [DummyModal, setDummyModal] = useState(false);

  return (
    <div className="entirebook w-[100%] h-screen">
      <h1 className="create font-semibold  text-center">
        Create Characters For Your Books
      </h1>
      <div className="my-[20px] mx-[20px] flex justify-center items-center ">
        <Creategiver title="Create Giver" setModalOpen={setModalOpen} />
        <div className=" absolute  ">
          {modalOpen && (
            <Modal setOpenModal={setModalOpen} setStart={setStart} />
          )}
          {start && (
            <Start
              setStart={setStart}
              setOpenModal={setModalOpen}
              setDummyModal={setDummyModal}
            />
          )}
          {DummyModal && <Dummy setDummyModal={setDummyModal} />}
        </div>
        <Createreceiver title="Create Reciever" setModalOpen={setModalOpen} />
      </div>
    </div>
  );
}

export default Lovebook;
