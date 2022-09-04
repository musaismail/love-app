import React from "react";
import image from "../../assets/asset1/dummy.png";
import "./createreceiver.css";
import "reactjs-popup/dist/index.css";

const Createreciever = ({ title, setModalOpen }) => {
  return (
    <div className="mt-[40px]">
      <img className=" receiver  h-[300px]" src={image} alt="create giver" />

      <h2 className="px-2">THE RECEIVER </h2>
      <button
        className=" bg-red-500 px-[3px] inline  py-[2px] ml-1 mr-1 border-[1px] border-red-500
        rounded-lg hover:bg-[#fff] hover:border-[1px] hover:border-red-500 hover:text-red-500"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default Createreciever;
