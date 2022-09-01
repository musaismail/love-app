import React, { useState } from "react";

const Start = ({ setStart, setOpenModal, setDummyModal }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [template, setTemplate] = useState("");

  return (
    <div className=" bg-white mt-[30px]  flex justify-center w-[600px] h-[450px] rounded-md items-center">
      <div className="">
        <div className="pt-4 ">
          <input
            type="text"
            placeholder="Name Your Lovemoji"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-gray-500 p-2 rounded-lg border-[1px] border-red-500 w-[200px]"
          />
        </div>
        <div>
          <h1 className="text-xl pt-3 font-semibold text-center ">
            Select Age <br />
          </h1>

          <div className="flex gap-x-4 justify-center items-center pt-1">
            <input
              type="button"
              value="adult"
              onClick={() => {
                setAge("adult");
              }}
              className={`${
                age === "adult" ? "border-red-500 text-black" : "text-black"
              } border-[1px] px-2 hover:bg-gray-300 rounded-sm border-black py-1`}
            />
            <input
              type="button"
              value="Child"
              onClick={() => {
                setAge("Child");
              }}
              className={`${
                age === "Child" ? "border-red-500 text-black" : "text-black"
              } border-[1px] px-2 hover:bg-gray-300 rounded-sm border-black py-1`}
            />
          </div>
        </div>

        <div>
          <h1 className="text-xl pt-3 font-semibold text-center ">
            Select Template <br />
          </h1>

          <div className="flex gap-x-4 justify-center items-center pt-1">
            <input
              type="button"
              value="feminine"
              onClick={() => {
                setTemplate("feminine");
              }}
              className={`${
                template === "feminine"
                  ? "border-red-500 text-black"
                  : "text-black"
              } border-[1px] px-2 hover:bg-gray-300 rounded-sm border-black py-1`}
            />
            <input
              type="button"
              value="masculine"
              onClick={() => {
                setTemplate("masculine");
              }}
              className={`${
                template === "masculine"
                  ? "border-red-500 text-black"
                  : "text-black"
              } border-[1px] px-2 hover:bg-gray-300 rounded-sm border-black py-1`}
            />
          </div>
        </div>
        <div className="flex justify-center pt-4 ">
          <button
            onClick={() => {
              setStart(false);
              setDummyModal(true);
            }}
            className="bg-red-500 px-10 py-1 rounded-md  hover:text-red-500
            hover:bg-white hover:border-[1px] hover:border-red-500"
          >
            Continue
          </button>
        </div>
        <div className="flex justify-center pt-2">
          <button
            onClick={() => {
              setStart(false);
              setOpenModal(false);
            }}
            className="hover:border-b-[1px] hover:border-red-500 text-lg "
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
