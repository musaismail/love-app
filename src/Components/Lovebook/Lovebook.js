import React, { useState } from "react";
import Creategiver from "../Creategiver/Creategiver";
import Createreceiver from "../Createreceiver/Createreceiver";
import Start from "../Start/Start";
import Modal from "../Modal";
import Dummy from "../Dummy";
import "./lovebook.css";
import SavedImage from "../SavedImage";

function Lovebook() {
  const [modalOpen, setModalOpen] = useState(false);
  const [start, setStart] = useState(false);
  const [DummyModal, setDummyModal] = useState(false);
  const [saveimg, setSaveimg] = useState(false);

  return (
    <div className="entirebook w-full h-full">
      <h1 className="create font-semibold  text-center">Create Characters</h1>
      <div className="my-[40px] mx-[40px] ml-[50px] flex w-[100%] justify-center items-center  ">
        <div>
          <Creategiver title="Create Giver" setModalOpen={setModalOpen} />
        </div>
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
          {DummyModal && (
            <Dummy
              setDummyModal={setDummyModal}
              setSaveimg={setSaveimg}
              saveimg={saveimg}
            />
          )}
          {saveimg && (
            <SavedImage setSaveimg={setSaveimg} setDummyModal={setDummyModal} />
          )}
        </div>
        <div>
          {" "}
          <Createreceiver title="Create Reciever" setModalOpen={setModalOpen} />
        </div>
      </div>
    </div>
  );
}

export default Lovebook;
