import React from "react";

function Modal({ setOpenModal, setStart }) {
  return (
    <div className=" bg-gray-600 opacity-70 flex justify-center rounded-md items-center">
      <div className="">
        <div className="border-[2px] border-white shadow-lg text-center text-gray-100 rounded-md h-[200px] w-[200px]">
          <div className="text-right font-bold text-2xl pr-4">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="hover:text-red-500"
            >
              X
            </button>
          </div>
          <div className="pt-5">
            <button
              onClick={() => {
                setStart(true);
                setOpenModal(false);
              }}
              className="border-black border-[1px] px-[4px] py-[2px] 
              rounded-sm hover:text-black hover:border-red-900 font-bold "
            >
              Start New
            </button>
          </div>
          <div className="pt-2">
            <button
              className="border-black border-[1px] px-[4px] py-[2px] 
            rounded-sm hover:text-black hover:border-red-900 font-bold "
            >
              Add from Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
