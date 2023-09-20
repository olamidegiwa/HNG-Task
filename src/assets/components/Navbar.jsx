import React from "react";
import unilever from ".././images/Unilever 1.png";
import ubalogo from "../images/UBA-logo-4 1.png";
import nigeriaolympic from "../images/nigerian olympic commission.png";
import nhislogo from "../images/NHIS-logo 1.png";
import nestle1 from "../images/nestle 1.png";
import Dangotegroup from "../images/Dangote_Group_Logo 1.png";

const Navbar = () => {
  return (
    <div className="p-4">
      <p className="fs-5 fw-bold m-0">Trusted by teams at</p>
      <div className="navimg  justify-content-between container py-3 align-items-center">
        <img src={unilever} alt="" />
        <img src={ubalogo} alt="" />
        <img src={nigeriaolympic} alt="" />
        <img src={nhislogo} alt="" />
        <img src={nestle1} alt="" />
        <img src={Dangotegroup} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
