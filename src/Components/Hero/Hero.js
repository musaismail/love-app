import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="row herosection">
      <div className="col-lg-5 toInform">
        <h2 className="informThem">Kirjuta enda Armastuse Raamat</h2>
        <Link to="/createlovebook">
          <button type="button" className="btnBanner" name="">
            Sinu armastuse raamat
          </button>
        </Link>
      </div>
      <div className="col-lg-7"></div>
    </div>
  );
};

export default Hero;
