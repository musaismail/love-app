import React, { useRef } from "react";
import sample from "./../assets/asset1/dummy.png";
import { exportComponentAsJPEG } from "react-component-export-image";
import { Link } from "react-router-dom";

const ComponentToPrint = React.forwardRef(
  (
    {
      myheadimages,
      myeyeimages,
      mymouthimages,
      myshirtimages,
      myshoeimages,
      myskirtimages,
    },
    ref
  ) => (
    <div
      ref={ref}
      sample={sample}
      myheadimages={myheadimages}
      myeyeimages={myeyeimages}
    >
      <div className=" flex  justify-center items-center pt-16 w-full ">
        <div className="bg-white mx-auto flex items-center rounded-md justify-center">
          <div className="  flex justify-center  relative max-w-full">
            <div className=" h-[300px] w-[130px]   ">
              <img
                src={sample}
                alt="dull"
                className=" absolute w-full h-full  mt-4 pb-10 "
              />
            </div>
            <div className="">
              <div className=" flex justify-between  items-center absolute top-[3px] w-[155px] left-[8px] ">
                <img
                  className="h-[98px] w-[100px] "
                  src={myheadimages}
                  alt="i am"
                />
              </div>
              <div className=" flex justify-between  items-center absolute top-[57px] w-[155px] left-[46px]">
                <img
                  className="h-[7px] w-[23px]"
                  src={myeyeimages}
                  alt="i am"
                />
              </div>
              <div className="mouth  flex justify-between w-[131px] items-center absolute top-[72px] left-[49px]">
                <img className=" h-[10px]" src={mymouthimages} alt="i am" />
              </div>
              <div className="shirt flex justify-between w-[131px] items-center absolute top-[79px] left-[13px]">
                <img
                  className="w-[83px] h-[104px]"
                  src={myshirtimages}
                  alt="i am"
                />
              </div>
              <div className="skirt flex justify-between w-[131px] items-center absolute top-[138px] left-[26px]">
                <img
                  className="h-[110px] w-[63px]"
                  src={myskirtimages}
                  alt="i am"
                />
              </div>
              <div className=" shoe flex justify-between w-[133px] items-center absolute top-[235px] left-[41px]">
                <img
                  className=" h-[58px] w-[52px]"
                  src={myshoeimages}
                  alt="i am"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
);

const SavedImage = () => {
  const componentRef = useRef();
  const myheadimages = JSON.parse(localStorage.getItem("my_headimage")) || [];
  const myeyeimages = JSON.parse(localStorage.getItem("my_eyeimage")) || [];
  const mymouthimages = JSON.parse(localStorage.getItem("my_mouthimage")) || [];
  const myshirtimages = JSON.parse(localStorage.getItem("my_shirtimage")) || [];
  const myskirtimages = JSON.parse(localStorage.getItem("my_skirtimage")) || [];
  const myshoeimages = JSON.parse(localStorage.getItem("my_shoeimage")) || [];

  return (
    <div className="saveimage w-full h-screen flex-col justify-center items-center">
      <React.Fragment>
        <ComponentToPrint
          ref={componentRef}
          myheadimages={myheadimages}
          myeyeimages={myeyeimages}
          mymouthimages={mymouthimages}
          myshirtimages={myshirtimages}
          myskirtimages={myskirtimages}
          myshoeimages={myshoeimages}
        />
        <div className="text-center m-1 ">
          {" "}
          <button
            className=" bg-red-500 mt-5  px-10 py-1 rounded-md  hover:text-red-500
        hover:bg-white hover:border-[1px] hover:border-red-500"
            onClick={() => exportComponentAsJPEG(componentRef)}
          >
            Save
          </button>
        </div>
      </React.Fragment>
      <Link to="/pdffile">
        <div className="text-center m-1">
          <button
            className="bg-red-500 mt-5  px-10 py-1 rounded-md  hover:text-red-500
        hover:bg-white hover:border-[1px] hover:border-red-500"
          >
            Continue
          </button>
        </div>
      </Link>
    </div>
  );
};

export default SavedImage;
