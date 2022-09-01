import React from "react";
import sample from "./../assets/asset1/dummy.png";

function SavedImage() {
  const myheadimages = JSON.parse(localStorage.getItem("my_headimage")) || [];
  const myeyeimages = JSON.parse(localStorage.getItem("my_eyeimage")) || [];
  const mymouthimages = JSON.parse(localStorage.getItem("my_mouthimage")) || [];
  const myshirtimages = JSON.parse(localStorage.getItem("my_shirtimage")) || [];
  const myskirtimages = JSON.parse(localStorage.getItem("my_skirtimage")) || [];
  const myshoeimages = JSON.parse(localStorage.getItem("my_shoeimage")) || [];
  return (
    <div className="my-[20px] mx-[20px] flex items-center ">
      <div className="bg-white mt-[30px]  w-[400px] h-[350px] justify-center flex rounded-md items-center ">
        <div className="flex justify-center items-center relative ">
          <img src={sample} alt="dull" className="h-[300px] mt-4" />
        </div>
        <div className=" head flex justify-center  items-center absolute top-[70px] left-[162px] ">
          <img className="h-[100px] w-[100px]" src={myheadimages} alt="i am" />
        </div>
        <div className=" flex justify-between  items-center absolute top-[126px] w-[155px] left-[201px]">
          <img className="h-[7px] w-[23px]" src={myeyeimages} alt="i am" />
        </div>
        <div className="mouth  flex justify-between w-[131px] items-center absolute top-[143px] left-[203px]">
          <img className=" h-[10px]" src={mymouthimages} alt="i am" />
        </div>
        <div className="shirt flex justify-between w-[131px] items-center absolute top-[152px] left-[158px]">
          <img className="w-[98px] h-[120px]" src={myshirtimages} alt="i am" />
        </div>
        <div className="skirt flex justify-between w-[131px] items-center absolute top-[223px] left-[173px]">
          <img className="h-[120px] w-[74px]" src={myskirtimages} alt="i am" />
        </div>
        <div className=" shoe flex justify-between w-[131px] items-center absolute top-[330px] left-[195px]">
          <img className=" h-[63px] w-[51px]" src={myshoeimages} alt="i am" />
        </div>
      </div>
    </div>
  );
}

export default SavedImage;
