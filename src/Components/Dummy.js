import React, { useState } from "react";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import head1 from "../assets/dummy/juuksed 1.png";
import head2 from "../assets/dummy/juuksed 2.png";
import head3 from "../assets/dummy/juuksed 3.png";
import head4 from "../assets/dummy/juuksed 4.png";
import head5 from "../assets/dummy/juuksed 5.png";
import head6 from "../assets/dummy/juuksed 6.png";
import eye1 from "../assets/dummy/Silmad 1.png";
import eye2 from "../assets/dummy/Silmad 2.png";
import eye3 from "../assets/dummy/Silmad 3.png";
import eye4 from "../assets/dummy/Silmad 4.png";
import mouth1 from "../assets/dummy/suu 1.png";
import mouth2 from "../assets/dummy/suu 2.png";
import mouth3 from "../assets/dummy/suu 3.png";
import shirt1 from "../assets/dummy/Keha 1.png";
import shirt2 from "../assets/dummy/Keha 2.png";
import shirt3 from "../assets/dummy/Keha 3.png";
import shirt4 from "../assets/dummy/Keha 4.png";
import skirt1 from "../assets/dummy/Püksid 1.png";
import skirt2 from "../assets/dummy/Püksid 2.png";
import skirt3 from "../assets/dummy/Püksid 3.png";
import shoe1 from "../assets/dummy/jalanõud 1.png";
import shoe2 from "../assets/dummy/jalanõud 2.png";
import shoe3 from "../assets/dummy/jalanõud 3.png";
import sample from "./../assets/asset1/dummy.png";
import { Link } from "react-router-dom";

function Dummy({ setDummyModal }) {
  const [index, setIndex] = useState(0);
  const [eye, setEye] = useState(0);
  const [shoe, setShoe] = useState(0);
  const [skirt, setSkirt] = useState(0);
  const [shirt, setShirt] = useState(0);
  const [mouth, setMouth] = useState(0);

  const headImages = [head1, head2, head3, head4, head5, head6];
  const eyeImages = [eye1, eye2, eye3, eye4];
  const shoeImages = [shoe1, shoe2, shoe3];
  const skirtImages = [skirt1, skirt2, skirt3];
  const shirtImages = [shirt1, shirt2, shirt3, shirt4];
  const mouthImages = [mouth1, mouth2, mouth3];

  const addFavourite = () => {
    localStorage.setItem("my_headimage", JSON.stringify(headImages[index]));
    localStorage.setItem("my_eyeimage", JSON.stringify(eyeImages[eye]));
    localStorage.setItem("my_mouthimage", JSON.stringify(mouthImages[mouth]));
    localStorage.setItem("my_shirtimage", JSON.stringify(shirtImages[shirt]));
    localStorage.setItem("my_skirtimage", JSON.stringify(skirtImages[skirt]));
    localStorage.setItem("my_shoeimage", JSON.stringify(shoeImages[shoe]));
  };
  function changeheadForwards() {
    let i = index;
    if (i === headImages.length - 1) {
      i = 0;
    } else {
      i = i + 1;
    }
    setIndex(i);
  }
  function changeheadBackwards() {
    let i = index;
    if (i === 0) {
      i = headImages.length - 1;
    } else {
      i = i - 1;
    }
    setIndex(i);
  }
  function changeeyeForwards() {
    let e = eye;
    if (e === eyeImages.length - 1) {
      e = 0;
    } else {
      e = e + 1;
    }
    setEye(e);
  }
  function changeeyeBackwards() {
    let e = eye;
    if (e === 0) {
      e = eyeImages.length - 1;
    } else {
      e = e - 1;
    }
    setEye(e);
  }
  function changemouthForwards() {
    let m = mouth;
    if (m === mouthImages.length - 1) {
      m = 0;
    } else {
      m = m + 1;
    }
    setMouth(m);
  }
  function changemouthBackwards() {
    let m = mouth;
    if (m === 0) {
      m = mouthImages.length - 1;
    } else {
      m = m - 1;
    }
    setMouth(m);
  }
  function changeshirtForwards() {
    let h = shirt;
    if (h === shirtImages.length - 1) {
      h = 0;
    } else {
      h = h + 1;
    }
    setShirt(h);
  }
  function changeshirtBackwards() {
    let h = shirt;
    if (h === 0) {
      h = shirtImages.length - 1;
    } else {
      h = h - 1;
    }
    setShirt(h);
  }

  function changeskirtForwards() {
    let k = skirt;
    if (k === skirtImages.length - 1) {
      k = 0;
    } else {
      k = k + 1;
    }
    setSkirt(k);
  }
  function changeskirtBackwards() {
    let k = skirt;
    if (k === 0) {
      k = skirtImages.length - 1;
    } else {
      k = k - 1;
    }
    setSkirt(k);
  }
  function changeshoeForwards() {
    let q = shoe;
    if (q === shoeImages.length - 1) {
      q = 0;
    } else {
      q = q + 1;
    }
    setShoe(q);
  }
  function changeshoeBackwards() {
    let q = shoe;
    if (q === 0) {
      q = shoeImages.length - 1;
    } else {
      q = q - 1;
    }
    setShoe(q);
  }

  let head = headImages[index];
  let eyes = eyeImages[eye];
  let mouths = mouthImages[mouth];
  let skirts = skirtImages[skirt];
  let shirts = shirtImages[shirt];
  let shoes = shoeImages[shoe];
  return (
    <div className="bg-white mt-[30px]  w-[600px] h-[450px] rounded-md  ">
      <div>
        <div className="flex justify-center relative ">
          <img src={sample} alt="sample" className="h-[300px] mt-4" />
        </div>
        <div className="flex justify-center pt-4">
          <Link to="/saveimage">
            <button
              className="bg-red-500 px-10 py-1 rounded-md  hover:text-red-500
            hover:bg-white hover:border-[1px] hover:border-red-500"
              onClick={addFavourite}
            >
              Continue
            </button>
          </Link>
        </div>
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setDummyModal(false)}
            className="hover:border-b-[1px] hover:border-red-500 text-lg "
          >
            cancel
          </button>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <div className=" ">
          <div className="">
            <div className=" head flex justify-center w-[131px] items-center absolute top-[34px] left-[227px] ">
              <div className="">
                <CaretLeftOutlined onClick={(e) => changeheadBackwards(e)} />
              </div>
              <div className="">
                <img
                  className="h-[105px] w-[110px]"
                  src={head}
                  alt="dummy head"
                />
              </div>
              <div className="">
                <CaretRightOutlined onClick={(e) => changeheadForwards(e)} />
              </div>
            </div>
            <div className=" flex justify-between w-[131px] items-center absolute top-[86px] left-[226px]">
              <div className="">
                <CaretLeftOutlined
                  className=""
                  onClick={(e) => changeeyeBackwards(e)}
                />
              </div>

              <div className="eye">
                <img className="h-[8px] w-[20px]" src={eyes} alt="dummy eye" />
              </div>
              <div className="">
                <CaretRightOutlined onClick={(e) => changeeyeForwards(e)} />
              </div>
            </div>
            <div className="mouth  flex justify-between w-[131px] items-center absolute top-[100px] left-[226px]">
              <div className="">
                <CaretLeftOutlined onClick={(e) => changemouthBackwards(e)} />
              </div>
              <div className="mouth">
                <img className=" h-[10px]" src={mouths} alt="dummy mouth" />
              </div>
              <div className="">
                <CaretRightOutlined onClick={(e) => changemouthForwards(e)} />
              </div>
            </div>
          </div>
          <div className="shirt flex justify-between w-[131px] items-center absolute top-[116px] left-[223px]">
            <div className="">
              <CaretLeftOutlined onClick={(e) => changeshirtBackwards(e)} />
            </div>
            <div className="">
              <img
                className="w-[116px] h-[124px]"
                src={shirts}
                alt="dummy shirt"
              />
            </div>
            <div className="">
              <CaretRightOutlined onClick={(e) => changeshirtForwards(e)} />
            </div>
          </div>

          <div className="skirt flex justify-between w-[131px] items-center absolute top-[190px] left-[225px]">
            <div className="">
              <CaretLeftOutlined onClick={(e) => changeskirtBackwards(e)} />
            </div>
            <div className="">
              <img
                className="h-[120px] w-[71px]"
                src={skirts}
                alt="dummy skirt"
              />
            </div>
            <div className="">
              <CaretRightOutlined onClick={(e) => changeskirtForwards(e)} />
            </div>
          </div>

          <div className=" shoe flex justify-between w-[131px] items-center absolute top-[296px] left-[236px]">
            <div className="">
              <CaretLeftOutlined onClick={(e) => changeshoeBackwards(e)} />
            </div>
            <div className="">
              <img
                className=" h-[63px] w-[51px]"
                src={shoes}
                alt="dummy shoe"
              />
            </div>
            <div className="">
              <CaretRightOutlined onClick={(e) => changeshoeForwards(e)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dummy;
