import React from "react";
import image from "../../assets/asset1/dummy.png";
import "./creategiver.css";
import "reactjs-popup/dist/index.css";

const Creategiver = ({ setModalOpen, title }) => {
  return (
    <div className="mt-[40px]  ">
      <img src={image} alt="create giver" className="h-[300px]" />

      <h2 className="px-3">THE GIVER </h2>
      <button
        className=" bg-red-500 px-[4px] inline  py-[2px] ml-3 mr-1 border-[1px] border-red-500
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

export default Creategiver;
